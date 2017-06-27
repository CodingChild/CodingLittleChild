var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Box = Laya.Box;
    var Image = Laya.Image;
    var ListItem = (function (_super) {
        __extends(ListItem, _super);
        function ListItem() {
            var _this = _super.call(this) || this;
            _this.img = new Image();
            if (ListItem.WIDTH != undefined && ListItem.HEIGHT != undefined)
                _this.size(ListItem.WIDTH, ListItem.HEIGHT);
            _this.addChild(_this.img);
            return _this;
        }
        ListItem.prototype.setBackground = function (isHighlight, backgroundHighlight, backgroundNormal) {
            if (backgroundNormal === void 0) { backgroundNormal = null; }
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width, this.height, backgroundHighlight);
            }
            else {
                if (backgroundNormal != null) {
                    this.graphics.drawRect(0, 0, this.width, this.height, backgroundNormal);
                }
            }
        };
        ListItem.prototype.setImg = function (src, x, y, width, height) {
            this.img.skin = src;
            this.img.pos(x, y);
            this.img.size(width, height);
        };
        return ListItem;
    }(Box));
    Marmot.ListItem = ListItem;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=listitem.js.map