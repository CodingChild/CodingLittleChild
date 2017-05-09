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
    testUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1920, "height": 1080 }, "child": [{ "type": "Panel", "props": { "y": 263, "x": 272, "width": 600, "scaleX": 2, "height": 400 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 600, "lineWidth": 1, "height": 400, "fillColor": "#ffffff" } }] }, { "type": "Image", "props": { "y": 536, "x": 946, "width": 200, "skin": "materials/sp_girl.png", "scaleY": 1, "scaleX": 1, "pivotY": 100, "pivotX": 100, "height": 200 } }, { "type": "VSlider", "props": { "y": 525, "x": 745, "skin": "comp/vslider.png" } }, { "type": "HSlider", "props": { "y": 430, "x": 679, "skin": "materials/hslider_1.png" } }] };
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map