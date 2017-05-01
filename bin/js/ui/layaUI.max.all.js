var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var testUI = (function (_super) {
        __extends(testUI, _super);
        function testUI() {
            return _super.call(this) || this;
        }
        testUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.testUI.uiView);
        };
        return testUI;
    }(View));
    testUI.uiView = { "type": "View", "props": { "y": 4, "x": -6, "width": 600, "height": 400 }, "child": [{ "type": "TextInput", "props": { "y": 242, "x": 95, "text": "TextInput", "skin": "materials/input.png", "editable": false } }, { "type": "TextInput", "props": { "y": 185, "x": 98, "width": 100, "text": "1", "skin": "comp/textinput.png", "align": "center" } }, { "type": "Image", "props": { "y": 176, "x": 308, "skin": "materials/setsize.png" } }, { "type": "VSlider", "props": { "y": 141, "x": 72, "value": 100, "skin": "comp/vslider.png" } }, { "type": "TextInput", "props": { "y": 158, "x": 245, "width": 303, "skin": "materials/input.png", "sizeGrid": "0,44,0,40", "height": 22, "align": "center" } }, { "type": "VSlider", "props": { "y": 52, "x": 179, "skin": "comp/vslider.png" } }] };
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map