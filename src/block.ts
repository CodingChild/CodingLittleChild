module Marmot {
    import TextInput = Laya.TextInput;
    import VSlider = Laya.VSlider;
    import HSlider = Laya.HSlider;
    import Sprite = Laya.Sprite;
    import Texture = Laya.Texture;
    import HitArea = Laya.HitArea;
    import Point = Laya.Point;
    import Rectangle = Laya.Rectangle;
    import Event = Laya.Event;

    export abstract class Block extends SyntaxElement {

        public static blockSetting: BlockSetting = {
            blockScale: 3,
            blockStrokeStyleNormal: "#000000",
            blockStrokeStyleHighlight: "#fcff00",
            blockLineWidthHighlight: 8,
            blockLineWidthNormal: 4,
            distanceBetweenBlocks: 1
        }

        /**
         * isHighlight is true after calling drawBackgroundHighlight
         */
        public isHighlight:boolean;

        public attachPoints: Array<AttachHook>;

        public action:string;

        protected static minimumHookDistance: number = 50;

        protected textureSettings: Array<ResourceSetting>;
        protected inputSettings: Array<InputSettings>;
        protected backgroundSetting: BackgroundSetting;
        public sliderSetting: SliderSetting;
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
            this.width = 50 * Block.blockSetting.blockScale;
            this.height = 50 * Block.blockSetting.blockScale;
            this.myWidth = this.width;
            this.myHeight = this.height;
            this.lastAttachTarget = null;
            this.isHighlight = false;

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

        public evaluate(){

        }

        public receiver():Marmot.Sprite|Marmot.StagePanel{
            let headBlock = this.getTopBlock();
            return (headBlock.parent.parent as ScriptArea).owner;
        }


        /**
		*返回所有父块节点。
		*/
        public getAllParentBlocks(): Array<Block> {
            let parentBlocks = [];
            let parentBlock: any = this;
            while (parentBlock.parent instanceof Block) {
                parentBlock = parentBlock.parent;
                parentBlocks.push(parentBlock);
            }
            return parentBlocks;
        }
        /**
		* print width and height of all blocks in scriptArea
		*/

        public print():void{
            let top  = this.getTopBlock();
            Laya.Log.maxCount = 40;
            Laya.Log.clear();
            let blocks  = [];
            let i = 1;
            (top.parent._childs as Block[]).forEach((childtop)=>{
                Laya.Log.print("head");
                Laya.Log.print(i + ":" + childtop.width + " " + childtop.height);
                i ++;
                childtop.getAllBlockChildren().forEach((child)=>{
                    Laya.Log.print(i + ":" + child.width + " " + child.height);
                    i ++;
                })
                Laya.Log.print("---------");
                i = 1;
            });
        }
        /**
		* answer my all block children
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
		* answer my fisrt block child
		*/
        public getNextBlockChild(): Block {
            for (let i = 0; i < this._childs.length; i++) {
                if (this._childs[i] instanceof Block) {
                    return this._childs[i];
                }
            }
            return null;
        }

        /**
		* answer my top block parent
		*/
        public getTopBlock(): Block {
            let topBlock: any = this;
            while (topBlock.parent instanceof Block) {
                topBlock = topBlock.parent;
            }
            return topBlock;
        }

        /**
		* answer my last block child
		*/
        public getTailBlock(): Block {
            let tailBlock: Block = this;
            let tempBlock = tailBlock.getNextBlockChild();
            while (tempBlock != null) {
                tailBlock = tempBlock;
                tempBlock = tempBlock.getNextBlockChild();
            }
            return tailBlock;
        }

        public abstract attachTarget(block: Block, attachPoint: Point): void;

        protected drawBackgroundNormal(): void {
            this.graphics.drawPath(0, 0, this.backgroundSetting.pathBackground,
                {
                    fillStyle: this.backgroundSetting.blockFillStyle
                },
                {
                    "strokeStyle": Block.blockSetting.blockStrokeStyleNormal,
                    "lineWidth": Block.blockSetting.blockLineWidthNormal
                });
        }

        protected drawBackgroundHighlight(): void {
            this.graphics.drawPath(0, 0, this.backgroundSetting.pathBackground,
                {
                    fillStyle: this.backgroundSetting.blockFillStyle
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
                this.addChild(new LineInput(inputSetting));
            })
        }

        protected onMouseDown(e: Event): void {

            this.updateLayer();
            if (this.hitTestPoint(e.stageX, e.stageY)) {
                this.addHighlight(this);
                this.startDrag();

            }
            e.stopPropagation();
        }

        protected updateLayer(): void {
            let topValue = 0;
            let tempValue = 0;
            let ide = IDE.getIDE();
            ide.scriptArea.content._childs.forEach((child) => {
                tempValue = child.zOrder;
                if (tempValue > topValue) {
                    topValue = tempValue;
                }
            });
            this.zOrder = topValue + 1;
            this.updateZOrder();
        }

        protected onMouseOut(e: Event): void {
            //this.removeHighlight(this);
        }

        protected onDragMove(e: Event): void {
            let target: AttachTarget = null;
            target = this.closestAttachTarget();


            if (target == null) {
                if (this.lastAttachTarget != null) {
                    this.lastAttachTarget.attachBlock.removeHighlight(this.lastAttachTarget.attachBlock);
                    this.lastAttachTarget = null;
                }
            }
            else {
                if (this.lastAttachTarget != null) {
                    this.lastAttachTarget.attachBlock.removeHighlight(this.lastAttachTarget.attachBlock);
                }
                target.attachBlock.drawHook(target.attachHook.attachCoordinate);
                this.lastAttachTarget = target;
            }

        }

        protected drawSlider(): void {

            let vs: HSlider = new HSlider();

            vs.skin = this.sliderSetting.path;
            vs.width = this.sliderSetting.width;

            vs.pos(this.sliderSetting.x, this.sliderSetting.y);
            vs.sizeGrid =  "0,10,0,10";
            vs.min = this.sliderSetting.min;
            vs.max = this.sliderSetting.max;
            vs.value = this.sliderSetting.initialValue;
            vs.tick = this.sliderSetting.tick;
            vs.name = this.sliderSetting.name;
            vs.visible = false;
            vs.changeHandler = new Handler(this, this.sliderSetting.onChange);
            this.addChild(vs);
        }

        public addHighlight(block: Block): void {
            block.graphics.clear();
            block.drawBackgroundHighlight();
            block.drawTextures();
            this.isHighlight = true;
        }

        public removeHighlight(block: Block): void {
            block.graphics.clear();
            block.drawBackgroundNormal();
            block.drawTextures();
            this.isHighlight = false;
        }

        protected onMouseUp(e:Event):void{
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
            this.on(Event.MOUSE_OUT, this, this.onMouseOut);
            this.on(Event.MOUSE_UP, this, this.onMouseUp);
        }
    }
}		


