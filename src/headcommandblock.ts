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

    export class HeadCommandBlock extends CommandBlock {

        constructor(textureSettings: Array<ResourceSetting>,
            inputSettings: Array<InputSettings>,
            backgroundSetting: BackgroundSetting,
            sliderSetting: SliderSetting) {
            super(textureSettings,
                inputSettings,
                backgroundSetting,
                sliderSetting);

        }

        public attachTarget(block: Block, attachPoint: Point): void {
            let target = block;
            
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                target.removeSelf();
                this.addChild(target);
                target.x = this.actualWidth + 1;
                target.y = 0;
            }

        }

        protected onDragStart(e: Event): void {

        }

        protected drawHook(attachPoint: Point): void {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(
                    this.actualWidth,
                    15 * Block.blockSetting.blockScale,
                    this.actualWidth + 5 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        this.actualWidth + 5 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        this.actualWidth + 7 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        this.actualWidth + 7 * Block.blockSetting.blockScale,
                        17 * Block.blockSetting.blockScale
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    this.actualWidth + 7 * Block.blockSetting.blockScale,
                    17 * Block.blockSetting.blockScale,
                    this.actualWidth + 7 * Block.blockSetting.blockScale,
                    33 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        this.actualWidth + 7 * Block.blockSetting.blockScale,
                        33 * Block.blockSetting.blockScale,
                        this.actualWidth + 7 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                        this.actualWidth + 5 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    this.actualWidth + 5 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                    this.actualWidth,
                    35 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);
            }
            else {

            }

        }

        protected getAttachPoints(): Array<AttachHook> {
            return [
                {
                    attachCoordinate: new Point(this.actualWidth + 7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: true
                }
            ]
        }


    }
}		