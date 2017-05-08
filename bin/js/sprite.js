var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite() {
            var _this = _super.call(this) || this;
            _this.scriptArea = new Marmot.ScriptArea(_this);
            _this.width = 100;
            _this.height = 100;
            var texture = Laya.loader.getRes("materials/sp_girl.png");
            _this.graphics.drawTexture(texture, 0, 0, _this.width, _this.height);
            return _this;
        }
        Sprite.prototype.addCostume = function (costume) {
        };
        return Sprite;
    }(Laya.Sprite));
    Marmot.Sprite = Sprite;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=sprite.js.map