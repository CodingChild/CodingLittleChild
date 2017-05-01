var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Point = Laya.Point;
    var HeadBlock = (function (_super) {
        __extends(HeadBlock, _super);
        function HeadBlock(textureSettings, inputSettings, backgroundSetting, sliderSetting) {
            return _super.call(this, textureSettings, inputSettings, backgroundSetting, sliderSetting) || this;
        }
        HeadBlock.prototype.onDragStart = function (e) {
        };
        HeadBlock.prototype.drawHook = function () {
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
        };
        HeadBlock.prototype.onDragEnd = function (e) {
            if (this.lastAttachTarget != null) {
                this.lastAttachTarget.graphics.clear();
                this.lastAttachTarget.drawBackgroundNormal();
                this.lastAttachTarget.drawTextures();
                this.lastAttachTarget.addChild(this);
                this.x = -this.actualWidth - 1;
                this.y = 0;
                this.lastAttachTarget = null;
            }
        };
        HeadBlock.prototype.closestAttachTarget = function () {
            var targets = [];
            this.parent._childs.forEach(function (child) {
                if (child instanceof Marmot.Block && child != this) {
                    targets.push(child);
                    targets = targets.concat(child.getAllBlockChildren());
                }
            });
            var minDistance = Marmot.Block.minimumHookDistance;
            var optimalTarget = null;
            var tempDistance = 0;
            Point.TEMP.setTo(this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale);
            this.localToGlobal(Point.TEMP);
            targets.forEach(function (child) {
                Point.EMPTY.setTo(7 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale);
                child.localToGlobal(Point.EMPTY);
                tempDistance = Point.TEMP.distance(Point.EMPTY.x, Point.EMPTY.y);
                if (minDistance > tempDistance) {
                    minDistance = tempDistance;
                    optimalTarget = child;
                }
            });
            if (minDistance == Marmot.Block.minimumHookDistance) {
                return null;
            }
            else {
                return optimalTarget;
            }
        };
        HeadBlock.prototype.getAttachPoints = function () {
            return [
                new Point(this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale),
            ];
        };
        return HeadBlock;
    }(Marmot.Block));
    Marmot.HeadBlock = HeadBlock;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=headblock.js.map