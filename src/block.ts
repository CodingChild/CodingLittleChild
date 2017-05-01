module Marmot {
    import Event = Laya.Event;
    import ResourceSetting = Marmot.ResourceSetting;
    import SliderSetting = Marmot.SliderSetting;
    import BackgroundSetting = Marmot.BackgroundSetting;
    import InputSettings = Marmot.InputSettings;
    import TextInput = Laya.TextInput;
    import VSlider = Laya.VSlider;
    import Sprite = Laya.Sprite;
    import Texture = Laya.Texture;
    import HitArea = Laya.HitArea;
    import BlockSetting = Marmot.BlockSetting;
    import Point = Laya.Point;
    import Rectangle = Laya.Rectangle;

    export abstract class Block extends Sprite {

        public static blockSetting: BlockSetting = {
            blockScale: 1.5,
            blockFillStyle: "#1976D2",
            blockStrokeStyleNormal: "#000000",
            blockStrokeStyleHighlight: "#fcff00",
            blockLineWidthHighlight: 8,
            blockLineWidthNormal: 4
        }

        public actualWidth: number;
        public actualHeight: number;
        public attachPoints: Array<AttachHook>;

        protected static minimumHookDistance: number = 50;

        protected textureSettings: Array<ResourceSetting>;
        protected inputSettings: Array<InputSettings>;
        protected backgroundSetting: BackgroundSetting;
        protected sliderSetting: SliderSetting;
        protected lastAttachTarget: AttachTarget;


        constructor(textureSettings: Array<ResourceSetting>,
            inputSettings: Array<InputSettings>,
            backgroundSetting: BackgroundSetting,
            sliderSetting: SliderSetting) {
            super();
            this.textureSettings = textureSettings;
            this.inputSettings = inputSettings;
            this.backgroundSetting = backgroundSetting;
            this.sliderSetting = sliderSetting;
            this.actualWidth = 50 * Block.blockSetting.blockScale;
            this.actualHeight = 50 * Block.blockSetting.blockScale;
            this.lastAttachTarget = null;
            this.drawBackgroundNormal();

            this.drawHitArea();

            if (this.textureSettings.length != 0) {
                this.drawTextures();
            }

            if (this.inputSettings.length != 0) {
                this.drawInputs();
            }
            if (this.sliderSetting != null) {
                this.drawSlider();
            }

            this.attachPoints = this.getAttachPoints();
            this.setEventListening();

        }



        /**
		*返回所有子孙块节点。
		*/
        public getAllBlockChildren(): Array<Block> {
            let children = [];
            this._childs.forEach(function (child) {
                if (child instanceof Block) {
                    children.push(child);
                }
            });

            children.forEach(function (child) {
                children = children.concat(child.getAllBlockChildren());
            });
            return children;
        }

        /**
		*返回第一个子块节点。
		*/
        public getNextBlockChild(): Block {
            this._childs.forEach(function (child) {
                if (child instanceof Block) {
                    return child;
                }
            });
            return null;
        }

        public abstract attachTarget(block: Block, attachPoint: Point): void;

        protected drawBackgroundNormal(): void {
            this.graphics.drawPath(0, 0, this.backgroundSetting.pathBackground,
                {
                    fillStyle: Block.blockSetting.blockFillStyle
                },
                {
                    "strokeStyle": Block.blockSetting.blockStrokeStyleNormal,
                    "lineWidth": Block.blockSetting.blockLineWidthNormal
                });

        }

        protected drawBackgroundHighlight(): void {
            this.graphics.drawPath(0, 0, this.backgroundSetting.pathBackground,
                {
                    fillStyle: Block.blockSetting.blockFillStyle
                },
                {
                    "strokeStyle": Block.blockSetting.blockStrokeStyleHighlight,
                    "lineWidth": Block.blockSetting.blockLineWidthHighlight
                });

        }

        protected drawTextures(): void {
            this.textureSettings.forEach((textureSetting) => {
                let t: Texture = Laya.loader.getRes(textureSetting.path);
                this.graphics.drawTexture(t,
                    textureSetting.x * Block.blockSetting.blockScale,
                    textureSetting.y * Block.blockSetting.blockScale,
                    textureSetting.width * Block.blockSetting.blockScale,
                    textureSetting.height * Block.blockSetting.blockScale);
            })
        }

        protected drawHitArea(): void {
            let hit = new HitArea();
            hit.hit.drawPoly(0, 0, this.backgroundSetting.hitAreaBackground, "#ffff00");
            this.hitArea = hit;
        }

        protected drawInputs(): void {
            this.inputSettings.forEach((inputSetting) => {
                let ti = new TextInput();
                ti.skin = inputSetting.resourceSetting.path;
                ti.name = inputSetting.resourceSetting.name;
                ti.sizeGrid = inputSetting.textInputSetting.sizeGrid;
                ti.font = inputSetting.textInputSetting.font;
                ti.fontSize = inputSetting.textInputSetting.fontSize;
                ti.bold = inputSetting.textInputSetting.bold;
                ti.color = inputSetting.textInputSetting.color;
                ti.align = "center";
                ti.restrict = inputSetting.textInputSetting.restrict;
                ti.valign = "middle";
                ti.pos(inputSetting.resourceSetting.x * Block.blockSetting.blockScale,
                    inputSetting.resourceSetting.y * Block.blockSetting.blockScale);
                ti.size(inputSetting.resourceSetting.width * Block.blockSetting.blockScale,
                    inputSetting.resourceSetting.height * Block.blockSetting.blockScale);
                this.addChild(ti);
            })
        }

        protected onMouseDown(e: Event): void {
            this.updateLayer();
            if (this.hitTestPoint(e.stageX, e.stageY)) {
                this.addHighlight(this);
                Rectangle.TEMP.setTo(50, 50, 550, 200);
                this.startDrag(Rectangle.TEMP, true, 100);

            }
        }

        protected updateLayer(): void {
            let topValue = 0;
            let num = this.parent.numChildren;
            for (let i = 0; i < num; i++) {
                let tempValue = (this.parent.getChildAt(i) as Sprite).zOrder;
                if (tempValue > topValue) {
                    topValue = tempValue;
                }
            }
            this.zOrder = topValue + 1;
            this.updateZOrder();
        }
        protected onMouseUp(e: Event): void {
            if (this.hitTestPoint(e.stageX, e.stageY)) {
                this.removeHighlight(this);
            }
        }

        protected onDragMove(e: Event): void {
            let target: AttachTarget = null;
            target = this.closestAttachTarget();

            if (target == null) {
                if (this.lastAttachTarget != null) {
                    this.removeHighlight(this.lastAttachTarget.attachBlock);
                    this.lastAttachTarget = null;
                }
            }
            else {
                if (this.lastAttachTarget != null) {
                    this.removeHighlight(this.lastAttachTarget.attachBlock);
                }
                target.attachBlock.drawHook(target.attachHook.attachCoordinate);
                this.lastAttachTarget = target;
            }

        }

        protected drawSlider(): void {

            let vs: VSlider = new VSlider();

            vs.skin = this.sliderSetting.path;
            vs.height = this.sliderSetting.height;
            vs.pos(this.sliderSetting.x, this.sliderSetting.y);
            vs.min = this.sliderSetting.min;
            vs.max = this.sliderSetting.max;
            vs.value = this.sliderSetting.initialValue;
            vs.tick = this.sliderSetting.tick;
            vs.name = this.sliderSetting.name;
            vs.visible = false;
            vs.changeHandler = new Handler(this, this.sliderSetting.onChange);
            this.addChild(vs);
        }

        protected addHighlight(block: Block): void {
            block.graphics.clear();
            block.drawBackgroundHighlight();
            block.drawTextures();
        }

        protected removeHighlight(block: Block): void {
            block.graphics.clear();
            block.drawBackgroundNormal();
            block.drawTextures();
        }        

        protected abstract onDragStart(e: Event): void;
        protected abstract drawHook(attachPoint: Point): void;
        protected abstract onDragEnd(e: Event): void;
        protected abstract closestAttachTarget(): AttachTarget;
        protected abstract getAttachPoints(): Array<AttachHook>;


        private setEventListening(): void {
            this.on(Event.DRAG_START, this, this.onDragStart);
            this.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.on(Event.DRAG_END, this, this.onDragEnd);
            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Event.MOUSE_UP, this, this.onMouseUp);
        }
    }
}		