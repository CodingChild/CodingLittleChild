var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Block;
(function (Block) {
    var Point = Laya.Point;
    var HeadBlock = (function (_super) {
        __extends(HeadBlock, _super);
        function HeadBlock(textureSettings, inputSettings, backgroundSettings, sliderSetting, comboBoxSlotSetting) {
            return _super.call(this, textureSettings, inputSettings, backgroundSettings, sliderSetting, comboBoxSlotSetting) || this;
        }
        HeadBlock.prototype.blockSequence = function () {
            return this.getAllBlockChildren();
        };
        HeadBlock.prototype.attachTarget = function (block, attachPoint) {
            var target = block;
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                target.removeSelf();
                this.addChild(target);
                target.x = this.myWidth + Block.blockSetting.distanceBetweenBlocks;
                target.y = 0;
                this.width = this.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                var parentBlocks = this.getAllParentBlocks();
                parentBlocks.forEach(function (parentBlock) {
                    parentBlock.width = parentBlock.width + target.width + Block.blockSetting.distanceBetweenBlocks;
                });
            }
        };
        HeadBlock.prototype.onDragStart = function (e) {
            var ide = IDE.getIDE();
            ide.scriptArea.hScrollBar.stopScroll();
            ide.scriptArea.vScrollBar.stopScroll();
        };
        HeadBlock.prototype.drawHook = function (attachPoint) {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
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
        HeadBlock.prototype.closestAttachTarget = function () {
            var _this = this;
            var targets = [];
            this.parent._childs.forEach(function (child) {
                if (child instanceof Block && child != _this) {
                    targets.push(child);
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
            if (minDistance == Block.minimumHookDistance) {
                return null;
            }
            else {
                return optimalTarget;
            }
        };
        HeadBlock.prototype.getAttachPoints = function () {
            return [
                {
                    attachCoordinate: new Point(this.myWidth + 7 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale),
                    isHook: true
                }
            ];
        };
        return HeadBlock;
    }(Block.BasicBlock));
    Block.HeadBlock = HeadBlock;
})(Block || (Block = {}));
//# sourceMappingURL=headblock.js.map