var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Event = Laya.Event;
    var Rectangle = Laya.Rectangle;
    var Utils = Laya.Utils;
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite() {
            var _this = _super.call(this) || this;
            _this.name = 'Sprite';
            _this.scriptArea = new Marmot.ScriptArea(_this);
            _this.costumes = [];
            _this.costume = null;
            _this.sounds = [];
            _this.curScale = 1; //图片原始尺寸是100
            _this.version = Date.now();
            _this.isClone = false;
            _this.isCorpse = false;
            _this.cloneOriginName = '';
            _this.idx = 0;
            _this.graphicsValues = {};
            _this.isDown = false;
            _this.width = Sprite.staticWidth;
            _this.height = Sprite.staticHeight;
            _this.rotation = 90;
            _this.on(Event.MOUSE_DOWN, _this, _this.onStartDrag);
            _this.on(Event.CLICK, _this, _this.showCode);
            _this.pivot(Sprite.staticWidth / 2, Sprite.staticHeight / 2);
            return _this;
        }
        Sprite.prototype.fullCopy = function () {
            var newSprite = new Sprite();
            //newSprite.scripts = this.scripts.fullCopy();
            //newSprite.scripts.owner = newSprite;
        };
        Sprite.prototype.drawNew = function () {
        };
        Sprite.prototype.addCostume = function (url) {
            var costume = new Marmot.Costume(url);
            this.costumes.push(costume);
            if (this.costumes.length == 1) {
                this.wearCostume(0);
            }
        };
        Sprite.prototype.wearCostume = function (index) {
            this.costume = this.costumes[index];
            this.graphics.drawTexture(this.costume.texture, 0, 0, Sprite.staticWidth, Sprite.staticHeight);
        };
        Sprite.prototype.hide = function () {
            this.visible = false;
        };
        Sprite.prototype.show = function () {
            this.visible = true;
        };
        Sprite.prototype.setSize = function (percentage) {
            var t = this.costume.texture;
            this.curScale = percentage;
            this.scale(this.curScale, this.curScale);
        };
        Sprite.prototype.prepareToBeGrabbed = function () {
        };
        Sprite.prototype.move = function (stepNum) {
            var distance = stepNum * Sprite.stepSize;
            var radian = Utils.toRadian(this.rotation);
            var x = distance * Math.sin(radian);
            var y = -distance * Math.cos(radian);
            this.x = this.x + x;
            this.y = this.y + y;
        };
        Sprite.prototype.setHeading = function (degree) {
            this.rotation = 90 - degree;
        };
        Sprite.prototype.getAllMessageNames = function () {
        };
        Sprite.prototype.getAllHeadBlocksFor = function (filter) {
            if (typeof filter == 'number')
                filter.toString();
            return this.scriptArea.content._childs.filter(function (headBlock) {
                if (headBlock.action == filter) {
                    return true;
                }
                return false;
            });
        };
        Sprite.prototype.getAllHeadBlocksForInteraction = function () {
        };
        Sprite.prototype.mouseDownLeft = function () {
        };
        Sprite.prototype.mouseUpLeft = function () {
        };
        Sprite.prototype.receiveUserInteraction = function () {
        };
        Sprite.prototype.onStartDrag = function (e) {
            var stageHeight = this.parent.parent.stagePanelSetting.normalHeight;
            var stageWidth = this.parent.parent.stagePanelSetting.normalWidth;
            Rectangle.TEMP.setTo(Sprite.staticWidth / 4, Sprite.staticHeight / 4, stageWidth - Sprite.staticWidth / 2, stageHeight - Sprite.staticHeight / 2);
            this.startDrag(Rectangle.TEMP, true, 100);
        };
        Sprite.prototype.showCode = function (e) {
        };
        return Sprite;
    }(Laya.Sprite));
    Sprite.stepSize = 15;
    Sprite.staticWidth = 100;
    Sprite.staticHeight = 100;
    Marmot.Sprite = Sprite;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=sprite.js.map