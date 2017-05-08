module Marmot {
    import Event = Laya.Event;
    import TextInput = Laya.TextInput;
    import VSlider = Laya.VSlider;
    import Sprite = Laya.Sprite;
    import Texture = Laya.Texture;
    import HitArea = Laya.HitArea;
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

        public blockSequence():Array<Block>{
            return this.getAllBlockChildren();
        }

        public attachTarget(block: Block, attachPoint: Point): void {
            let target = block;

            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                target.removeSelf();
                this.addChild(target);
                target.x = this.width + Block.blockSetting.distanceBetweenBlocks;
                target.y = 0;
            }

        }

        protected onDragStart(e: Event): void {

        }

        protected drawHook(attachPoint: Point): void {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(
                    this.width,
                    15 * Block.blockSetting.blockScale,
                    this.width + 5 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        this.width + 5 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        this.width + 7 * Block.blockSetting.blockScale,
                        15 * Block.blockSetting.blockScale,
                        this.width + 7 * Block.blockSetting.blockScale,
                        17 * Block.blockSetting.blockScale
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    this.width + 7 * Block.blockSetting.blockScale,
                    17 * Block.blockSetting.blockScale,
                    this.width + 7 * Block.blockSetting.blockScale,
                    33 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawCurves(
                    0,
                    0,
                    [
                        this.width + 7 * Block.blockSetting.blockScale,
                        33 * Block.blockSetting.blockScale,
                        this.width + 7 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                        this.width + 5 * Block.blockSetting.blockScale,
                        35 * Block.blockSetting.blockScale,
                    ],
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);

                this.graphics.drawLine(
                    this.width + 5 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                    this.width,
                    35 * Block.blockSetting.blockScale,
                    Block.blockSetting.blockStrokeStyleHighlight,
                    Block.blockSetting.blockLineWidthHighlight);
            }
            else {

            }

        }

        protected closestAttachTarget(): AttachTarget {
            let targets: Array<Block> = [];
            (this.parent._childs as Array<Block>).forEach((child) => {
                if (child instanceof Block && child != this) {
                    targets.push(child);
                }
            });
            let minDistance = Block.minimumHookDistance;
            let optimalTarget: AttachTarget = {
                attachBlock: null,
                attachHook: {
                    attachCoordinate: null,
                    isHook: false
                }
            };
            let tempDistance = 0;
            let tailBlock = this.getTailBlock();

            if (tailBlock.attachPoints.length == 1) {
                Point.TEMP.setTo(tailBlock.attachPoints[0].attachCoordinate.x, tailBlock.attachPoints[0].attachCoordinate.y);
                tailBlock.localToGlobal(Point.TEMP);
            }
            else if (tailBlock.attachPoints.length == 2) {
                Point.TEMP.setTo(tailBlock.attachPoints[1].attachCoordinate.x, tailBlock.attachPoints[1].attachCoordinate.y);
                tailBlock.localToGlobal(Point.TEMP);
            }
            targets.forEach((child) => {
                let points = [];
                
                child.attachPoints.forEach((targetAttachPoint) => {
                    if (targetAttachPoint.isHook == false) {
                        points.push(targetAttachPoint);
                    }
                })

                points.forEach((targetAttachPoint) => {
                    Point.EMPTY.setTo(targetAttachPoint.attachCoordinate.x, targetAttachPoint.attachCoordinate.y);
                    child.localToGlobal(Point.EMPTY);
                    tempDistance = Point.TEMP.distance(Point.EMPTY.x, Point.EMPTY.y);
                    if (minDistance > tempDistance) {
                        minDistance = tempDistance;
                        optimalTarget.attachBlock = child;
                        optimalTarget.attachHook.attachCoordinate = targetAttachPoint.attachCoordinate;
                        optimalTarget.attachHook.isHook = targetAttachPoint.isHook;
                    }
                })
            });


            if (minDistance == Block.minimumHookDistance) {
                return null;
            }
            else {
                return optimalTarget;
            }
        }

        protected getAttachPoints(): Array<AttachHook> {
            return [
                {
                    attachCoordinate: new Point(this.width + 7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: true
                }
            ]
        }


    }
}		