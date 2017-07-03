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
    testUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1920, "height": 1080 }, "child": [{ "type": "Button", "props": { "y": 646, "x": 296, "width": 74, "stateNum": "1", "skin": "materials/btn_blank.png", "height": 74 }, "child": [{ "type": "Texture", "props": { "width": 74, "skin": "materials/sp_girl.png", "height": 74 } }] }, { "type": "TextInput", "props": { "y": 507, "x": 803, "width": 100, "text": "TextInput", "skin": "materials/input.png", "height": 500 } }] };
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map