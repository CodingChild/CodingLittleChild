var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Point = Laya.Point;
    var CommandBlock = (function (_super) {
        __extends(CommandBlock, _super);
        function CommandBlock(textureSettings, inputSettings, backgroundSetting, sliderSetting) {
            return _super.call(this, textureSettings, inputSettings, backgroundSetting, sliderSetting) || this;
        }
        CommandBlock.prototype.attachTarget = function (block, attachPoint) {
            var target = block;
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                var parent_1 = this.parent;
                if (parent_1 instanceof Marmot.Block) {
                    this.removeSelf();
                    target.removeSelf();
                    parent_1.addChild(target);
                    target.x = target.actualWidth + Marmot.Block.blockSetting.distanceBetweenBlocks;
                    target.y = 0;
                    var tailBlock = target.getTailBlock();
                    tailBlock.addChild(this);
                    this.x = this.actualWidth + Marmot.Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;
                }
                else {
                    var tailBlock = target.getTailBlock();
                    var blockSequence = target.getAllBlockChildren();
                    var totalWidth_1 = target.actualWidth;
                    Point.EMPTY.setTo(this.x, this.y);
                    blockSequence.forEach(function (block) {
                        totalWidth_1 += block.actualWidth;
                    });
                    Point.EMPTY.setTo(Point.EMPTY.x - totalWidth_1 - Marmot.Block.blockSetting.distanceBetweenBlocks * (blockSequence.length + 1), Point.EMPTY.y);
                    parent_1.addChild(target);
                    target.x = Point.EMPTY.x;
                    target.y = Point.EMPTY.y;
                    this.removeSelf();
                    tailBlock.addChild(this);
                    this.x = tailBlock.actualWidth + Marmot.Block.blockSetting.distanceBetweenBlocks;
                    this.y = 0;
                }
            }
            else if (this.attachPoints[1].attachCoordinate.x == attachPoint.x && this.attachPoints[1].attachCoordinate.y == attachPoint.y) {
                var child = this.getNextBlockChild();
                target.removeSelf();
                this.addChild(target);
                target.x = this.actualWidth + Marmot.Block.blockSetting.distanceBetweenBlocks;
                target.y = 0;
                if (child != null) {
                    target.addChild(child);
                }
            }
        };
        CommandBlock.prototype.onDragStart = function (e) {
            if ((this.parent instanceof Marmot.Block) == true) {
                var parent_2 = this.parent;
                while (parent_2 instanceof Marmot.Block) {
                    this.x = this.x + parent_2.x;
                    this.y = this.y + parent_2.y;
                    parent_2 = parent_2.parent;
                }
                this.parent.removeChild(this);
                Laya.stage.getChildByName("ide").getChildByName("scriptArea").addChild(this);
            }
        };
        CommandBlock.prototype.drawHook = function (attachPoint) {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(0, 15 * Marmot.Block.blockSetting.blockScale, 5 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    5 * Marmot.Block.blockSetting.blockScale,
                    15 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale,
                    15 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale,
                    17 * Marmot.Block.blockSetting.blockScale
                ], Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(7 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, 7 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    7 * Marmot.Block.blockSetting.blockScale,
                    33 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale,
                    35 * Marmot.Block.blockSetting.blockScale,
                    5 * Marmot.Block.blockSetting.blockScale,
                    35 * Marmot.Block.blockSetting.blockScale,
                ], Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(5 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 0, 35 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
            }
            else if (this.attachPoints[1].attachCoordinate.x == attachPoint.x && this.attachPoints[1].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(this.actualWidth, 15 * Marmot.Block.blockSetting.blockScale, this.actualWidth + 5 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    this.actualWidth + 5 * Marmot.Block.blockSetting.blockScale,
                    15 * Marmot.Block.blockSetting.blockScale,
                    this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    15 * Marmot.Block.blockSetting.blockScale,
                    this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    17 * Marmot.Block.blockSetting.blockScale
                ], Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    33 * Marmot.Block.blockSetting.blockScale,
                    this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    35 * Marmot.Block.blockSetting.blockScale,
                    this.actualWidth + 5 * Marmot.Block.blockSetting.blockScale,
                    35 * Marmot.Block.blockSetting.blockScale,
                ], Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(this.actualWidth + 5 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, this.actualWidth, 35 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
            }
            else {
            }
        };
        CommandBlock.prototype.onDragEnd = function (e) {
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
                if (child instanceof Marmot.Block && child.name != _this.name) {
                    targets.push(child);
                    targets = targets.concat(child.getAllBlockChildren());
                    headTargets.push(child);
                }
            });
            var minDistance = Marmot.Block.minimumHookDistance;
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
                if (child.getNextBlockChild() != null && (child.parent instanceof Marmot.Block) == true) {
                    child.attachPoints.forEach(function (targetAttachPoint) {
                        if (targetAttachPoint.isHook == false) {
                            points.push(targetAttachPoint);
                        }
                    });
                }
                else if (child.getNextBlockChild() != null && (child.parent instanceof Marmot.Block) == false) {
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
            if (minDistance == Marmot.Block.minimumHookDistance) {
                return null;
            }
            else {
                return optimalTarget;
            }
        };
        CommandBlock.prototype.getAttachPoints = function () {
            return [
                {
                    attachCoordinate: new Point(7 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale),
                    isHook: false
                },
                {
                    attachCoordinate: new Point(this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale),
                    isHook: true
                }
            ];
        };
        return CommandBlock;
    }(Marmot.Block));
    Marmot.CommandBlock = CommandBlock;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=commandblock.js.map