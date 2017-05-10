var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Point = Laya.Point;
    var HeadCommandBlock = (function (_super) {
        __extends(HeadCommandBlock, _super);
        function HeadCommandBlock(textureSettings, inputSettings, backgroundSetting, sliderSetting) {
            return _super.call(this, textureSettings, inputSettings, backgroundSetting, sliderSetting) || this;
        }
        HeadCommandBlock.prototype.blockSequence = function () {
            return this.getAllBlockChildren();
        };
        HeadCommandBlock.prototype.attachTarget = function (block, attachPoint) {
            var target = block;
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                target.removeSelf();
                this.addChild(target);
                target.x = this.myWidth + Marmot.Block.blockSetting.distanceBetweenBlocks;
                target.y = 0;
                this.width = this.width + target.width + Marmot.Block.blockSetting.distanceBetweenBlocks;
                var parentBlocks = this.getAllParentBlocks();
                parentBlocks.forEach(function (parentBlock) {
                    parentBlock.width = parentBlock.width + target.width + Marmot.Block.blockSetting.distanceBetweenBlocks;
                });
            }
        };
        HeadCommandBlock.prototype.onDragStart = function (e) {
            var ide = Marmot.IDE.getIDE();
            ide.scriptArea.hScrollBar.stopScroll();
            ide.scriptArea.vScrollBar.stopScroll();
        };
        HeadCommandBlock.prototype.drawHook = function (attachPoint) {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                this.graphics.drawLine(this.myWidth, 15 * Marmot.Block.blockSetting.blockScale, this.myWidth + 5 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    this.myWidth + 5 * Marmot.Block.blockSetting.blockScale,
                    15 * Marmot.Block.blockSetting.blockScale,
                    this.myWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    15 * Marmot.Block.blockSetting.blockScale,
                    this.myWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    17 * Marmot.Block.blockSetting.blockScale
                ], Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(this.myWidth + 7 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, this.myWidth + 7 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawCurves(0, 0, [
                    this.myWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    33 * Marmot.Block.blockSetting.blockScale,
                    this.myWidth + 7 * Marmot.Block.blockSetting.blockScale,
                    35 * Marmot.Block.blockSetting.blockScale,
                    this.myWidth + 5 * Marmot.Block.blockSetting.blockScale,
                    35 * Marmot.Block.blockSetting.blockScale,
                ], Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
                this.graphics.drawLine(this.myWidth + 5 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, this.myWidth, 35 * Marmot.Block.blockSetting.blockScale, Marmot.Block.blockSetting.blockStrokeStyleHighlight, Marmot.Block.blockSetting.blockLineWidthHighlight);
            }
            else {
            }
        };
        HeadCommandBlock.prototype.closestAttachTarget = function () {
            var _this = this;
            var targets = [];
            this.parent._childs.forEach(function (child) {
                if (child instanceof Marmot.Block && child != _this) {
                    targets.push(child);
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
            if (tailBlock.attachPoints.length == 1) {
                Point.TEMP.setTo(tailBlock.attachPoints[0].attachCoordinate.x, tailBlock.attachPoints[0].attachCoordinate.y);
                tailBlock.localToGlobal(Point.TEMP);
            }
            else if (tailBlock.attachPoints.length == 2) {
                Point.TEMP.setTo(tailBlock.attachPoints[1].attachCoordinate.x, tailBlock.attachPoints[1].attachCoordinate.y);
                tailBlock.localToGlobal(Point.TEMP);
            }
            targets.forEach(function (child) {
                var points = [];
                child.attachPoints.forEach(function (targetAttachPoint) {
                    if (targetAttachPoint.isHook == false) {
                        points.push(targetAttachPoint);
                    }
                });
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
        HeadCommandBlock.prototype.getAttachPoints = function () {
            return [
                {
                    attachCoordinate: new Point(this.myWidth + 7 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale),
                    isHook: true
                }
            ];
        };
        return HeadCommandBlock;
    }(Marmot.CommandBlock));
    Marmot.HeadCommandBlock = HeadCommandBlock;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=headcommandblock.js.map