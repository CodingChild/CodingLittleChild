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
    testUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1920, "height": 1080 }, "child": [{ "type": "Tab", "props": { "y": 563, "x": 762, "width": 154, "stateNum": 2, "skin": "materials/tab_index.png", "labels": "label1,label2", "height": 83 } }] };
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map