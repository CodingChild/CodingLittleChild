module Marmot {
    import Event = Laya.Event;
    import TextInput = Laya.TextInput;
    import VSlider = Laya.VSlider;
    import Sprite = Laya.Sprite;
    import Texture = Laya.Texture;
    import HitArea = Laya.HitArea;
    import Point = Laya.Point;
    import Rectangle = Laya.Rectangle;
    import Box = Laya.Box;

    export class LoopCommandBlock extends CommandBlock {

        constructor(textureSettings: Array<ResourceSetting>,
            inputSettings: Array<InputSettings>,
            backgroundSettings: Array<BackgroundSetting>,
            sliderSetting: SliderSetting) {
            super(textureSettings,
                inputSettings,
                backgroundSettings,
                sliderSetting);

            this.width = 100 * Block.blockSetting.blockScale;
            this.height = 100 * Block.blockSetting.blockScale;
            this.myWidth = this.width;
            this.myHeight = this.height;
        }

        public attachTarget(block: Block, attachPoint: Point): void {
   
        }
        public updateBackgroundSetting(): void {

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
                    this.myWidth,
                    15 * Block.blockSetting.blockScale,
                    this.myWidth + 5 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        this.myWidth + 5 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        this.myWidth + 7 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        this.myWidth + 7 * Block.blockSetting.blockScale,
                        17 * Block.blockSetting.blockScale
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    this.myWidth + 7 * Block.blockSetting.blockScale,
                    17 * Block.blockSetting.blockScale,
                    this.myWidth + 7 * Block.blockSetting.blockScale,
                    33 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        this.myWidth + 7 * Block.blockSetting.blockScale,
                        33 * Block.blockSetting.blockScale,
                        this.myWidth + 7 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                        this.myWidth + 5 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    this.myWidth + 5 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                    this.myWidth,
                    35 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

            }
            else if (this.attachPoints[2].attachCoordinate.x == attachPoint.x && this.attachPoints[2].attachCoordinate.y == attachPoint.y) {
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
                    attachCoordinate: new Point(this.myWidth + 7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: true
                },
                {
                    attachCoordinate: new Point(32 * Block.blockSetting.blockScale, 75 * Block.blockSetting.blockScale),
                    isHook: true
                },

            ]
        }


    }
}