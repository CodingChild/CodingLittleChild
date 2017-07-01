var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Block;
(function (Block) {
    var Point = Laya.Point;
    var Box = Laya.Box;
    var CommandBlock = (function (_super) {
        __extends(CommandBlock, _super);
        function CommandBlock(textureSettings, inputSettings, backgroundSettings, sliderSetting, comboBoxSlotSetting) {
            return _super.call(this, textureSettings, inputSettings, backgroundSettings, sliderSetting, comboBoxSlotSetting) || this;
        }
        CommandBlock.prototype.attachTarget = function (block, attachPoint) {
            var _this = this;
            var target = block;
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                var parent_1 = this.parent;
                var childBlocks = target.getAllBlockChildren();
                childBlocks.forEach(function (childBlock) {
                    childBlock.width = childBlock.width + _this.width + Block.blockSetting.distanceBetweenBlocks;
                });
                if (parent_1 instanceof Block) {
                    this.removeSelf();
                    target.removeSelf();
                    parent_1.addChild(target);
                    target.x = parent_1.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    target.y = 0;
                    var tailBlock = target.getTailBlock();
                    tailBlock.addChild(this);
                    this.x = tailBlock.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;
                    var parentBlocks = target.getAllParentBlocks();
                    if (parentBlocks.length > 0) {
                        parentBlocks.forEach(function (parentBlock) {
                            parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                        });
                    }
                    target.width = target.width + this.width + Block.blockSetting.distanceBetweenBlocks;
                    var topBlock = target.getTopBlock();
                    if (topBlock.parent instanceof CommandSlot) {
                        var commandSlot = topBlock.parent;
                        var loopCommandBlock = commandSlot.parent;
                        commandSlot.width = topBlock.width + Block.blockSetting.distanceBetweenBlocks;
                        commandSlot.height = topBlock.height;
                        var oldWidth = loopCommandBlock.myWidth;
                        loopCommandBlock.myWidth = loopCommandBlock.commandSlot.width + 50 * Block.blockSetting.blockScale;
                        loopCommandBlock.width = loopCommandBlock.width - oldWidth + loopCommandBlock.myWidth;
                        loopCommandBlock.updateBackgroundSetting();
                    }
                }
                else if (parent_1 instanceof Box) {
                    var tailBlock = target.getTailBlock();
                    Point.EMPTY.setTo(this.x - target.width - Block.blockSetting.distanceBetweenBlocks, this.y);
                    parent_1.parent.addChild(target);
                    target.x = Point.EMPTY.x;
                    target.y = Point.EMPTY.y;
                    this.removeSelf();
                    tailBlock.addChild(this);
                    this.x = tailBlock.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;
                    var parentBlocks = target.getAllParentBlocks();
                    if (parentBlocks.length > 0) {
                        parentBlocks.forEach(function (parentBlock) {
                            parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                        });
                    }
                    target.width = target.width + this.width + Block.blockSetting.distanceBetweenBlocks;
                }
                else if (parent_1 instanceof CommandSlot) {
                    this.removeSelf();
                    target.removeSelf();
                    parent_1.addChild(target);
                    target.x = Block.blockSetting.distanceBetweenBlocks;
                    target.y = 0;
                    var tailBlock = target.getTailBlock();
                    tailBlock.addChild(this);
                    this.x = tailBlock.myWidth + Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;
                    target.width = target.width + this.width + Block.blockSetting.distanceBetweenBlocks;
                    target.height = Math.max(target.height, this.height);
                    parent_1.width = target.width + Block.blockSetting.distanceBetweenBlocks;
                    parent_1.height = target.height;
                    var loopCommandBlock = parent_1.parent;
                    var oldWidth = loopCommandBlock.myWidth;
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
                var parentBlocks = target.getAllParentBlocks();
                parentBlocks.forEach(function (parentBlock) {
                    parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                });
                var topBlock = this.getTopBlock();
                if (topBlock.parent instanceof CommandSlot) {
                    var commandSlot = topBlock.parent;
                    var loopCommandBlock = commandSlot.parent;
                    commandSlot.width = topBlock.width + Block.blockSetting.distanceBetweenBlocks;
                    commandSlot.height = topBlock.height;
                    var oldWidth = loopCommandBlock.myWidth;
                    loopCommandBlock.myWidth = loopCommandBlock.commandSlot.width + 50 * Block.blockSetting.blockScale;
                    loopCommandBlock.width = loopCommandBlock.width - oldWidth + loopCommandBlock.myWidth;
                    loopCommandBlock.updateBackgroundSetting();
                }
            }
        };
        CommandBlock.prototype.blockSequence = function () {
            var blocks = [];
            blocks.push(this);
            blocks = blocks.concat(this.getAllBlockChildren());
            return blocks;
        };
        CommandBlock.prototype.onDragStart = function (e) {
            var _this = this;
            var ide = IDE.getIDE();
            ide.scriptArea.hScrollBar.stopScroll();
            ide.scriptArea.vScrollBar.stopScroll();
            if (this.parent instanceof Block) {
                var parent_2 = this.parent;
                var parentBlocks = this.getAllParentBlocks();
                if (parentBlocks.length > 0) {
                    parentBlocks.forEach(function (parentBlock) {
                        parentBlock.width = parentBlock.width - _this.width - Block.blockSetting.distanceBetweenBlocks;
                    });
                }
                var topBlock = this.getTopBlock();
                Point.EMPTY.setTo(this.x, this.y);
                parent_2.localToGlobal(Point.EMPTY);
                ide.scriptArea.content.globalToLocal(Point.EMPTY);
                this.pos(Point.EMPTY.x, Point.EMPTY.y);
                this.parent.removeChild(this);
                Laya.stage.getChildByName("ide").getChildByName("scriptArea").addChild(this);
                if (topBlock.parent instanceof CommandSlot) {
                    var commandSlot = topBlock.parent;
                    var loopCommandBlock = commandSlot.parent;
                    commandSlot.width = topBlock.width + Block.blockSetting.distanceBetweenBlocks;
                    commandSlot.height = topBlock.height;
                    var oldWidth = loopCommandBlock.myWidth;
                    loopCommandBlock.myWidth = loopCommandBlock.commandSlot.width + 50 * Block.blockSetting.blockScale;
                    loopCommandBlock.width = loopCommandBlock.width - oldWidth + loopCommandBlock.myWidth;
                    loopCommandBlock.updateBackgroundSetting();
                }
            }
            if ((this.parent instanceof CommandSlot) == true) {
                var commandSlot = this.parent;
                var scriptArea = Laya.stage.getChildByName("ide").getChildByName("scriptArea");
                Point.EMPTY.setTo(this.x, this.y);
                this.localToGlobal(Point.EMPTY);
                scriptArea.globalToLocal(Point.EMPTY);
                commandSlot.myHeight = 0;
                commandSlot.myWidth = 0;
                commandSlot.height = 0;
                commandSlot.width = 0;
                var parent_3 = commandSlot.parent;
                if (parent_3 instanceof LoopCommandBlock) {
                    parent_3.width = 100 * Block.blockSetting.blockScale;
                    parent_3.height = 100 * Block.blockSetting.blockScale;
                    parent_3.myWidth = parent_3.width;
                    parent_3.myHeight = parent_3.height;
                    parent_3.updateBackgroundSetting();
                }
                this.parent.removeChild(this);
                scriptArea.addChild(this);
                this.pos(Point.EMPTY.x, Point.EMPTY.y);
            }
        };
        CommandBlock.prototype.drawHook = function (attachPoint) {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(0, 15 * Block.blockSetting.blockScale, 5 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    5 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    7 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    7 * Block.blockSetting.blockScale,
                    17 * Block.blockSetting.blockScale
                ], Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(7 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, 7 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    7 * Block.blockSetting.blockScale,
                    33 * Block.blockSetting.blockScale,
                    7 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                    5 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                ], Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(5 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 0, 35 * Block.blockSetting.blockScale, Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
            }
            else if (this.attachPoints[1].attachCoordinate.x == attachPoint.x && this.attachPoints[1].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(this.myWidth, 15 * Block.blockSetting.blockScale, this.myWidth + 5 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    this.myWidth + 5 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    this.myWidth + 7 * Block.blockSetting.blockScale,
                    15 * Block.blockSetting.blockScale,
                    this.myWidth + 7 * Block.blockSetting.blockScale,
                    17 * Block.blockSetting.blockScale
                ], Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(this.myWidth + 7 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, this.myWidth + 7 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    this.myWidth + 7 * Block.blockSetting.blockScale,
                    33 * Block.blockSetting.blockScale,
                    this.myWidth + 7 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                    this.myWidth + 5 * Block.blockSetting.blockScale,
                    35 * Block.blockSetting.blockScale,
                ], Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(this.myWidth + 5 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, this.myWidth, 35 * Block.blockSetting.blockScale, Block.blockSetting.blockStrokeStyleHighlight, Block.blockSetting.blockLineWidthHighlight);
            }
            else {
            }
        };
        CommandBlock.prototype.onDragEnd = function (e) {
            var ide = IDE.getIDE();
            ide.scriptArea.refresh();
            this.removeHighlight(this);
            if (this.lastAttachTarget != null) {
                this.removeHighlight(this.lastAttachTarget.attachBlock);
                this.lastAttachTarget.attachBlock.attachTarget(this, this.lastAttachTarget.attachHook.attachCoordinate);
                this.lastAttachTarget = null;
            }
        };
        CommandBlock.prototype.closestAttachTarget = function () {
            var _this = this;
            var targets = [];
            var headTargets = [];
            this.parent._childs.forEach(function (child) {
                if (child instanceof Block && child != _this) {
                    targets.push(child);
                    targets = targets.concat(child.getAllNestedBlockChildren());
                    headTargets.push(child);
                }
            });
            var minDistance = Block.minimumHookDistance;
            var optimalTarget = {
                attachBlock: null,
                attachHook: {
                    attachCoordinate: null,
                    isHook: false
                }
            };
            var tempDistance = 0;
            var tailBlock = this.getTailBlock();
            Point.TEMP.setTo(this.attachPoints[0].attachCoordinate.x, this.attachPoints[0].attachCoordinate.y);
            this.localToGlobal(Point.TEMP);
            targets.forEach(function (child) {
                var points = [];
                if (child.getNextBlockChild() != null && ((child.parent instanceof Block) == true || (child.parent instanceof CommandSlot) == true)) {
                    child.attachPoints.forEach(function (targetAttachPoint) {
                        if (targetAttachPoint.isHook == false) {
                            points.push(targetAttachPoint);
                        }
                    });
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
                points.forEach(function (targetAttachPoint) {
                    Point.EMPTY.setTo(targetAttachPoint.attachCoordinate.x, targetAttachPoint.attachCoordinate.y);
                    child.localToGlobal(Point.EMPTY);
                    tempDistance = Point.TEMP.distance(Point.EMPTY.x, Point.EMPTY.y);
                    if (minDistance > tempDistance) {
                        minDistance = tempDistance;
                        optimalTarget.attachBlock = child;
                        optimalTarget.attachHook.attachCoordinate = targetAttachPoint.attachCoordinate;
                        optimalTarget.attachHook.isHook = targetAttachPoint.isHook;
                    }
                });
            });
            Point.TEMP.setTo(tailBlock.attachPoints[1].attachCoordinate.x, tailBlock.attachPoints[1].attachCoordinate.y);
            tailBlock.localToGlobal(Point.TEMP);
            headTargets.forEach(function (child) {
                var points = [];
                if (child.getNextBlockChild() != null) {
                    child.attachPoints.forEach(function (targetAttachPoint) {
                        if (targetAttachPoint.isHook == false) {
                            points.push(targetAttachPoint);
                        }
                    });
                }
                else {
                    points = child.attachPoints;
                }
                points.forEach(function (targetAttachPoint) {
                    Point.EMPTY.setTo(targetAttachPoint.attachCoordinate.x, targetAttachPoint.attachCoordinate.y);
                    child.localToGlobal(Point.EMPTY);
                    tempDistance = Point.TEMP.distance(Point.EMPTY.x, Point.EMPTY.y);
                    if (minDistance > tempDistance) {
                        minDistance = tempDistance;
                        optimalTarget.attachBlock = child;
                        optimalTarget.attachHook.attachCoordinate = targetAttachPoint.attachCoordinate;
                        optimalTarget.attachHook.isHook = targetAttachPoint.isHook;
                    }
                });
            });
            if (minDistance == Block.minimumHookDistance) {
                return null;
            }
            else {
                return optimalTarget;
            }
        };
        CommandBlock.prototype.getAttachPoints = function () {
            return [
                {
                    attachCoordinate: new Point(7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: false
                },
                {
                    attachCoordinate: new Point(this.myWidth + 7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: true
                }
            ];
        };
        return CommandBlock;
    }(Block.BasicBlock));
    Block.CommandBlock = CommandBlock;
})(Block || (Block = {}));
//# sourceMappingURL=commandblock.js.map