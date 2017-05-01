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

    export class CommandBlock extends Block {

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
                let parent = this.parent;
                if (parent instanceof Block) {
                    this.removeSelf();
                    target.removeSelf();
                    parent.addChild(target);
                    target.x = target.actualWidth + 1;
                    target.y = 0;
                    target.addChild(this);
                } 
                else {
                    Point.EMPTY.setTo(this.x, this.y);
                    console.log(Point.EMPTY.x.toString());
                    console.log(Point.EMPTY.y.toString());

                    Point.EMPTY.setTo(Point.EMPTY.x - target.actualWidth - 1, Point.EMPTY.y);
                    console.log(Point.EMPTY.x.toString());
                    console.log(Point.EMPTY.y.toString());

                    target.removeSelf();
                    parent.addChild(target);

                    target.x = Point.EMPTY.x;
                    target.y = Point.EMPTY.y;

                    this.removeSelf();
                    target.addChild(this);
                    this.x = target.actualWidth + 1;
                    this.y = 0;

                }
            }
            else if (this.attachPoints[1].attachCoordinate.x == attachPoint.x && this.attachPoints[1].attachCoordinate.y == attachPoint.y) {
                let child = this.getNextBlockChild();
                target.removeSelf();
                this.addChild(target);
                target.x = this.actualWidth + 1;
                target.y = 0;
                if (child != null) {
                    target.addChild(child);
                }
            }
        }

        protected onDragStart(e: Event): void {
            if ((this.parent instanceof Block) == true) {
                let parent = this.parent;
                while (parent instanceof Block) {
                    this.x = this.x + parent.x;
                    this.y = this.y + parent.y;
                    parent = parent.parent;
                }
                this.parent.removeChild(this);
                Laya.stage.getChildByName("ide").getChildByName("scriptArea").addChild(this);
            }
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

        protected onDragEnd(e: Event): void {
            if (this.lastAttachTarget != null) {
                this.removeHighlight(this);
                this.removeHighlight(this.lastAttachTarget.attachBlock);

                this.lastAttachTarget.attachBlock.attachTarget(this, this.lastAttachTarget.attachHook.attachCoordinate);

                this.lastAttachTarget = null;
            }
        }

        protected closestAttachTarget(): AttachTarget {
            let targets: Array<Block> = [];
            (this.parent._childs as Array<Block>).forEach((child) => {
                if (child instanceof Block && child.name != this.name) {
                    targets.push(child);
                    targets = targets.concat(child.getAllBlockChildren());
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

            this.attachPoints.forEach((attachPoint) => {
                Point.TEMP.setTo(attachPoint.attachCoordinate.x, attachPoint.attachCoordinate.y);
                this.localToGlobal(Point.TEMP);

                targets.forEach((child) => {
                    child.attachPoints.forEach((attachPoint) => {
                        Point.EMPTY.setTo(attachPoint.attachCoordinate.x, attachPoint.attachCoordinate.y);
                        child.localToGlobal(Point.EMPTY);
                        tempDistance = Point.TEMP.distance(Point.EMPTY.x, Point.EMPTY.y);
                        if (minDistance > tempDistance) {
                            minDistance = tempDistance;
                            optimalTarget.attachBlock = child;
                            optimalTarget.attachHook.attachCoordinate = attachPoint.attachCoordinate;
                            optimalTarget.attachHook.isHook = attachPoint.isHook;
                        }
                    })
                });
            })


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
                    attachCoordinate: new Point(7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: false
                },
                {
                    attachCoordinate: new Point(this.actualWidth + 7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: true
                }
            ]
        }


    }
}		