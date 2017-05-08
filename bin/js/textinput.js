var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var TextInput = Laya.TextInput;
    var LineInput = (function (_super) {
        __extends(LineInput, _super);
        function LineInput(inputSetting) {
            var _this = _super.call(this) || this;
            _this.textinput = new TextInput();
            _this.textinput.skin = inputSetting.resourceSetting.path;
            _this.textinput.name = inputSetting.resourceSetting.name;
            _this.textinput.sizeGrid = inputSetting.textInputSetting.sizeGrid;
            _this.textinput.font = inputSetting.textInputSetting.font;
            _this.textinput.fontSize = inputSetting.textInputSetting.fontSize;
            _this.textinput.bold = inputSetting.textInputSetting.bold;
            _this.textinput.color = inputSetting.textInputSetting.color;
            _this.textinput.align = "center";
            _this.textinput.restrict = inputSetting.textInputSetting.restrict;
            _this.textinput.valign = "middle";
            _this.pos(inputSetting.resourceSetting.x * Marmot.Block.blockSetting.blockScale, inputSetting.resourceSetting.y * Marmot.Block.blockSetting.blockScale);
            _this.textinput.size(inputSetting.resourceSetting.width * Marmot.Block.blockSetting.blockScale, inputSetting.resourceSetting.height * Marmot.Block.blockSetting.blockScale);
            _this.name = inputSetting.resourceSetting.name;
            _this.addChild(_this.textinput);
            return _this;
        }
        LineInput.prototype.evaluate = function () {
            if (this.textinput.restrict == "0-9") {
                return Number(this.textinput.text);
            }
            else {
                return this.textinput.text;
            }
        };
        return LineInput;
    }(Marmot.Argument));
    Marmot.LineInput = LineInput;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=textinput.js.map