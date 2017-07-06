module Block {
    import Event = Laya.Event;
    import TextInput = Laya.TextInput;
    import VSlider = Laya.VSlider;
    import Sprite = Laya.Sprite;
    import Texture = Laya.Texture;
    import HitArea = Laya.HitArea;
    import Point = Laya.Point;
    import Rectangle = Laya.Rectangle;
    import Box = Laya.Box;
/*
    export class LoopBlock extends BasicBlock {

        public commandSlot: CommandSlot;
        constructor(textureSettings: Array<ResourceSetting>,
            inputSettings: Array<InputSettings>,
            backgroundSettings: Array<BackgroundSetting>,
            sliderSetting: SliderSetting) {
            super(textureSettings,
                inputSettings,
                backgroundSettings,
                sliderSetting);
            this.commandSlot = new CommandSlot();
            this.commandSlot.pos(25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale);
            this.addChild(this.commandSlot);
            this.width = 100 * Block.blockSetting.blockScale;
            this.height = 100 * Block.blockSetting.blockScale;
            this.myWidth = this.width;
            this.myHeight = this.height;
        }

        public attachTarget(block: Block, attachPoint: Point): void {
            let target = block;


            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                let parent = this.parent;

                let childBlocks = target.getAllBlockChildren();
                childBlocks.forEach((childBlock) => {
                    childBlock.width = childBlock.width + this.width + Block.blockSetting.distanceBetweenBlocks;
                })

                if (parent instanceof Block) {
                    this.removeSelf();
                    target.removeSelf();
                    parent.addChild(target);
                    target.x = parent.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    target.y = 0;

                    let tailBlock = target.getTailBlock();

                    tailBlock.addChild(this);
                    this.x = tailBlock.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;
                }
                else if(parent instanceof Box){
                    let tailBlock = target.getTailBlock();
                    Point.EMPTY.setTo(this.x - target.width - Block.blockSetting.distanceBetweenBlocks, this.y);
                    parent.parent.addChild(target);

                    target.x = Point.EMPTY.x;
                    target.y = Point.EMPTY.y;

                    this.removeSelf();
                    tailBlock.addChild(this);
                    this.x = tailBlock.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;

                }
                let parentBlocks = target.getAllParentBlocks();
                if (parentBlocks.length > 0) {
                    parentBlocks.forEach((parentBlock) => {
                        parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                    })
                }
                target.width = target.width + this.width + Block.blockSetting.distanceBetweenBlocks;

            }
            else if (this.attachPoints[1].attachCoordinate.x == attachPoint.x && this.attachPoints[1].attachCoordinate.y == attachPoint.y) {
                target.removeSelf();
                let nextChild = this.commandSlot.getNextBlockChild();
                if (nextChild) {
                    nextChild.removeSelf();
                }
                this.commandSlot.addChild(target);
                target.x = this.commandSlot.myWidth + Block.blockSetting.distanceBetweenBlocks;
                target.y = 0;
                if (nextChild) {
                    target.addChild(nextChild);
                    target.width = target.width + nextChild.width + Block.blockSetting.distanceBetweenBlocks;
                    target.height = Math.max(target.height, nextChild.height);
                }
                this.commandSlot.width = target.width + Block.blockSetting.distanceBetweenBlocks;
                this.commandSlot.height = target.height;
                if (this.commandSlot.width > 50 * Block.blockSetting.blockScale) {
                    this.myWidth = this.commandSlot.width + 50 * Block.blockSetting.blockScale;
                    this.width = this.width - 100 * Block.blockSetting.blockScale + this.myWidth;
                    this.updateBackgroundSetting();
                }

                //this.myHeight = this.height;                    
                //this.height = 100 * Block.blockSetting.blockScale;
            }
        }
        public updateBackgroundSetting(): void {
            this.backgroundSettings[0].pathBackground = [
                ["moveTo", 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", this.myWidth, 0 * Block.blockSetting.blockScale, this.myWidth, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", this.myWidth, 100 * Block.blockSetting.blockScale, (this.myWidth - 4 * Block.blockSetting.blockScale), 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", (this.myWidth - 25 * Block.blockSetting.blockScale), 100 * Block.blockSetting.blockScale, (this.myWidth - 25 * Block.blockSetting.blockScale), 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", (this.myWidth - 25 * Block.blockSetting.blockScale), 85 * Block.blockSetting.blockScale],
                ["arcTo", (this.myWidth - 18 * Block.blockSetting.blockScale), 85 * Block.blockSetting.blockScale, (this.myWidth - 18 * Block.blockSetting.blockScale), 83 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", (this.myWidth - 18 * Block.blockSetting.blockScale), 65 * Block.blockSetting.blockScale, 80 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", (this.myWidth - 25 * Block.blockSetting.blockScale), 65 * Block.blockSetting.blockScale],
                ["lineTo", (this.myWidth - 25 * Block.blockSetting.blockScale), 50 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 32 * Block.blockSetting.blockScale, 67 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 30 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale],
                ["arcTo", 25 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 21 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 7 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 5 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ];
            this.backgroundSettings[0].hitAreaBackground = [
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                this.myWidth, 0 * Block.blockSetting.blockScale,
                this.myWidth, 100 * Block.blockSetting.blockScale,
                (this.myWidth - 25 * Block.blockSetting.blockScale), 100 * Block.blockSetting.blockScale,
                (this.myWidth - 25 * Block.blockSetting.blockScale), 50 * Block.blockSetting.blockScale,
                (this.myWidth - 25 * Block.blockSetting.blockScale), 85 * Block.blockSetting.blockScale,
                (this.myWidth - 18 * Block.blockSetting.blockScale), 85 * Block.blockSetting.blockScale,
                (this.myWidth - 18 * Block.blockSetting.blockScale), 65 * Block.blockSetting.blockScale,
                (this.myWidth - 25 * Block.blockSetting.blockScale), 65 * Block.blockSetting.blockScale,
                (this.myWidth - 25 * Block.blockSetting.blockScale), 50 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ];
            this.textureSettings[0].x = this.myWidth / 2 / Block.blockSetting.blockScale - this.textureSettings[0].width / 2;
            this.textureSettings[2].x = this.myWidth / Block.blockSetting.blockScale - 18;

            this.removeHighlight(this);
            this.drawHitArea();
            this.attachPoints = this.getAttachPoints();
        }

        protected drawHook(attachPoint: Point): void {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(
                    0,
                    15 * Block.blockSetting.blockScale,
                    5 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        5 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        7 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        7 * Block.blockSetting.blockScale,
                        17 * Block.blockSetting.blockScale
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    7 * Block.blockSetting.blockScale,
                    17 * Block.blockSetting.blockScale,
                    7 * Block.blockSetting.blockScale,
                    33 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        7 * Block.blockSetting.blockScale,
                        33 * Block.blockSetting.blockScale,
                        7 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                        5 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    5 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                    0,
                    35 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);
            }
            else if (this.attachPoints[1].attachCoordinate.x == attachPoint.x && this.attachPoints[1].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(
                    25 * Block.blockSetting.blockScale,
                    65 * Block.blockSetting.blockScale,
                    30 * Block.blockSetting.blockScale,
                    65 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        30 * Block.blockSetting.blockScale,
                        65 * Block.blockSetting.blockScale,
                        32 * Block.blockSetting.blockScale,
                        65 * Block.blockSetting.blockScale,
                        32 * Block.blockSetting.blockScale,
                        67 * Block.blockSetting.blockScale
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    32 * Block.blockSetting.blockScale,
                    67 * Block.blockSetting.blockScale,
                    32 * Block.blockSetting.blockScale,
                    83 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        32 * Block.blockSetting.blockScale,
                        83 * Block.blockSetting.blockScale,
                        32 * Block.blockSetting.blockScale,
                        85 * Block.blockSetting.blockScale,
                        30 * Block.blockSetting.blockScale,
                        85 * Block.blockSetting.blockScale,
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    30 * Block.blockSetting.blockScale,
                    85 * Block.blockSetting.blockScale,
                    25 * Block.blockSetting.blockScale,
                    85 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);
            }

        }

        protected getAttachPoints(): Array<AttachHook> {
            return [
                {
                    attachCoordinate: new Point(7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: false
                },
                {
                    attachCoordinate: new Point(32 * Block.blockSetting.blockScale, 75 * Block.blockSetting.blockScale),
                    isHook: true
                },

            ]
        }


    }*/
}