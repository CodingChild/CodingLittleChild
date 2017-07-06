var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Block;
(function (Block) {
    var CommandBlock = (function (_super) {
        __extends(CommandBlock, _super);
        function CommandBlock(textureSettings, inputSettings, backgroundSettings, sliderSetting, targetSettings, generalListSetting, ggeneralListItemSetting) {
            return _super.call(this, textureSettings, inputSettings, backgroundSettings, sliderSetting, targetSettings, generalListSetting, ggeneralListItemSetting) || this;
        }
        CommandBlock.prototype.onDragStart = function (e) {
        };
        CommandBlock.prototype.onDragEnd = function (e) {
        };
        return CommandBlock;
    }(Block.BasicBlock));
    Block.CommandBlock = CommandBlock;
})(Block || (Block = {}));
/*
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

    export class CommandBlock extends BasicBlock {

        constructor(textureSettings: Array<ResourceSetting>,
            inputSettings: Array<InputSettings>,
            backgroundSettings: Array<BackgroundSetting>,
            sliderSetting?: SliderSetting,
            comboBoxSlotSetting?: ComboBoxSlotSetting) {
            super(textureSettings,
                inputSettings,
                backgroundSettings,
                sliderSetting,
                comboBoxSlotSetting);

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

                    let parentBlocks = target.getAllParentBlocks();
                    if (parentBlocks.length > 0) {
                        parentBlocks.forEach((parentBlock) => {
                            parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                        })
                    }
                    target.width = target.width + this.width + Block.blockSetting.distanceBetweenBlocks;

                    let topBlock = target.getTopBlock();
                    if (topBlock.parent instanceof CommandSlot) {
                        let commandSlot = topBlock.parent;
                        let loopCommandBlock = commandSlot.parent as LoopCommandBlock;
                        commandSlot.width = topBlock.width + Block.blockSetting.distanceBetweenBlocks;
                        commandSlot.height = topBlock.height;
                        let oldWidth = loopCommandBlock.myWidth;
                        loopCommandBlock.myWidth = loopCommandBlock.commandSlot.width + 50 * Block.blockSetting.blockScale;
                        loopCommandBlock.width = loopCommandBlock.width - oldWidth + loopCommandBlock.myWidth;
                        loopCommandBlock.updateBackgroundSetting();
                    }


                }
                else if (parent instanceof Box) {
                    let tailBlock = target.getTailBlock();
                    Point.EMPTY.setTo(this.x - target.width - Block.blockSetting.distanceBetweenBlocks, this.y);
                    parent.parent.addChild(target);

                    target.x = Point.EMPTY.x;
                    target.y = Point.EMPTY.y;

                    this.removeSelf();
                    tailBlock.addChild(this);
                    this.x = tailBlock.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;

                    let parentBlocks = target.getAllParentBlocks();
                    if (parentBlocks.length > 0) {
                        parentBlocks.forEach((parentBlock) => {
                            parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                        })
                    }
                    target.width = target.width + this.width + Block.blockSetting.distanceBetweenBlocks;

                }
                else if (parent instanceof CommandSlot) {

                    this.removeSelf();

                    target.removeSelf();
                    parent.addChild(target);
                    target.x = Block.blockSetting.distanceBetweenBlocks;
                    target.y = 0;

                    let tailBlock = target.getTailBlock();

                    tailBlock.addChild(this);
                    this.x = tailBlock.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;
                    target.width = target.width + this.width + Block.blockSetting.distanceBetweenBlocks;
                    target.height = Math.max(target.height, this.height);
                    parent.width = target.width + Block.blockSetting.distanceBetweenBlocks;
                    parent.height = target.height;

                    let loopCommandBlock = parent.parent as LoopCommandBlock;
                    let oldWidth = loopCommandBlock.myWidth;
                    loopCommandBlock.myWidth = loopCommandBlock.commandSlot.width + 50 * Block.blockSetting.blockScale;
                    loopCommandBlock.width = loopCommandBlock.width - oldWidth + loopCommandBlock.myWidth;
                    loopCommandBlock.updateBackgroundSetting();
                }
            }
            else if (this.attachPoints[1].attachCoordinate.x == attachPoint.x && this.attachPoints[1].attachCoordinate.y == attachPoint.y) {
                target.removeSelf();
                this.addChild(target);
                target.x = this.myWidth + Block.blockSetting.distanceBetweenBlocks;
                target.y = 0;
                let parentBlocks = target.getAllParentBlocks();
                parentBlocks.forEach((parentBlock) => {
                    parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                })
                let topBlock = this.getTopBlock();
                if (topBlock.parent instanceof CommandSlot) {
                    let commandSlot = topBlock.parent;
                    let loopCommandBlock = commandSlot.parent as LoopCommandBlock;
                    commandSlot.width = topBlock.width + Block.blockSetting.distanceBetweenBlocks;
                    commandSlot.height = topBlock.height;
                    let oldWidth = loopCommandBlock.myWidth;
                    loopCommandBlock.myWidth = loopCommandBlock.commandSlot.width + 50 * Block.blockSetting.blockScale;
                    loopCommandBlock.width = loopCommandBlock.width - oldWidth + loopCommandBlock.myWidth;
                    loopCommandBlock.updateBackgroundSetting();
                }

            }
        }

        public blockSequence(): Array<Block> {
            let blocks = [];
            blocks.push(this);
            blocks = blocks.concat(this.getAllBlockChildren());
            return blocks;
        }

        protected onDragStart(e: Event): void {

            let ide = IDE.getIDE();
            ide.scriptArea.hScrollBar.stopScroll();
            ide.scriptArea.vScrollBar.stopScroll();

            if (this.parent instanceof Block) {
                let parent = this.parent;

                let parentBlocks = this.getAllParentBlocks();
                if (parentBlocks.length > 0) {
                    parentBlocks.forEach((parentBlock) => {
                        parentBlock.width = parentBlock.width - this.width - Block.blockSetting.distanceBetweenBlocks;
                    })
                }

                let topBlock = this.getTopBlock();
                Point.EMPTY.setTo(this.x, this.y);
                parent.localToGlobal(Point.EMPTY);
                ide.scriptArea.content.globalToLocal(Point.EMPTY);
                this.pos(Point.EMPTY.x, Point.EMPTY.y);
                this.parent.removeChild(this);
                Laya.stage.getChildByName("ide").getChildByName("scriptArea").addChild(this);


                if (topBlock.parent instanceof CommandSlot) {
                    let commandSlot = topBlock.parent;
                    let loopCommandBlock = commandSlot.parent as LoopCommandBlock;
                    commandSlot.width = topBlock.width + Block.blockSetting.distanceBetweenBlocks;
                    commandSlot.height = topBlock.height;
                    let oldWidth = loopCommandBlock.myWidth;
                    loopCommandBlock.myWidth = loopCommandBlock.commandSlot.width + 50 * Block.blockSetting.blockScale;
                    loopCommandBlock.width = loopCommandBlock.width - oldWidth + loopCommandBlock.myWidth;
                    loopCommandBlock.updateBackgroundSetting();
                }

            }
            if ((this.parent instanceof CommandSlot) == true) {
                let commandSlot = this.parent as CommandSlot;
                let scriptArea = Laya.stage.getChildByName("ide").getChildByName("scriptArea") as ScriptArea;
                Point.EMPTY.setTo(this.x, this.y);
                this.localToGlobal(Point.EMPTY);
                scriptArea.globalToLocal(Point.EMPTY);
                commandSlot.myHeight = 0;
                commandSlot.myWidth = 0;
                commandSlot.height = 0;
                commandSlot.width = 0;
                let parent = commandSlot.parent;
                if (parent instanceof LoopCommandBlock) {
                    parent.width = 100 * Block.blockSetting.blockScale;
                    parent.height = 100 * Block.blockSetting.blockScale;
                    parent.myWidth = parent.width;
                    parent.myHeight = parent.height;
                    parent.updateBackgroundSetting();
                }

                this.parent.removeChild(this);
                scriptArea.addChild(this);
                this.pos(Point.EMPTY.x, Point.EMPTY.y);
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
            else {

            }

        }

        protected onDragEnd(e: Event): void {

            let ide = IDE.getIDE();
            ide.scriptArea.refresh();

            this.removeHighlight(this);
            if (this.lastAttachTarget != null) {
                this.removeHighlight(this.lastAttachTarget.attachBlock);

                this.lastAttachTarget.attachBlock.attachTarget(this, this.lastAttachTarget.attachHook.attachCoordinate);

                this.lastAttachTarget = null;
            }
        }

        protected closestAttachTarget(): AttachTarget {
            let targets: Array<Block> = [];
            let headTargets: Array<Block> = [];
            (this.parent._childs as Array<Block>).forEach((child) => {
                if (child instanceof Block && child != this) {
                    targets.push(child);
                    targets = targets.concat(child.getAllNestedBlockChildren());
                    headTargets.push(child);
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

            Point.TEMP.setTo(this.attachPoints[0].attachCoordinate.x, this.attachPoints[0].attachCoordinate.y);
            this.localToGlobal(Point.TEMP);


            targets.forEach((child) => {
                let points = [];
                if (child.getNextBlockChild() != null && ((child.parent instanceof Block) == true || (child.parent instanceof CommandSlot) == true)) {
                    child.attachPoints.forEach((targetAttachPoint) => {
                        if (targetAttachPoint.isHook == false) {
                            points.push(targetAttachPoint);
                        }
                    })
                }
                else if (child.getNextBlockChild() != null && (child.parent instanceof Block) == false) {

                }
                else if (child instanceof LoopCommandBlock) {
                    if (child.commandSlot.width == 0) {
                        points.push(child.attachPoints[1]);
                    }
                }
                else {
                    points = child.attachPoints;
                }
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
            Point.TEMP.setTo(tailBlock.attachPoints[1].attachCoordinate.x, tailBlock.attachPoints[1].attachCoordinate.y);
            tailBlock.localToGlobal(Point.TEMP);

            headTargets.forEach((child) => {
                let points = [];
                if (child.getNextBlockChild() != null) {
                    child.attachPoints.forEach((targetAttachPoint) => {
                        if (targetAttachPoint.isHook == false) {
                            points.push(targetAttachPoint);
                        }
                    })
                }
                else {
                    points = child.attachPoints;
                }
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
                    attachCoordinate: new Point(7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: false
                },
                {
                    attachCoordinate: new Point(this.myWidth + 7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: true
                }
            ]
        }


    }
}
*/ 
//# sourceMappingURL=commandblock.js.map