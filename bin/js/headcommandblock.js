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
        HeadCommandBlock.prototype.attachTarget = function (block, attachPoint) {
            var target = block;
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
                target.removeSelf();
                this.addChild(target);
                target.x = this.actualWidth + 1;
                target.y = 0;
            }
        };
        HeadCommandBlock.prototype.onDragStart = function (e) {
        };
        HeadCommandBlock.prototype.drawHook = function (attachPoint) {
            if (this.attachPoints[0].attachCoordinate.x == attachPoint.x && this.attachPoints[0].attachCoordinate.y == attachPoint.y) {
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
        HeadCommandBlock.prototype.getAttachPoints = function () {
            return [
                {
                    attachCoordinate: new Point(this.actualWidth + 7 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale),
                    isHook: true
                }
            ];
        };
        return HeadCommandBlock;
    }(Marmot.CommandBlock));
    Marmot.HeadCommandBlock = HeadCommandBlock;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=headcommandblock.js.map