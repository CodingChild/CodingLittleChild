var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Stage = (function (_super) {
        __extends(Stage, _super);
        function Stage(width, height) {
            var _this = _super.call(this) || this;
            _this.width = width;
            _this.height = height;
            return _this;
        }
        Stage.prototype.fireGreenFlagEvent = function () {
        };
        /**
         * fireStopAllEvent
         */
        Stage.prototype.fireStopAllEvent = function () {
        };
        return Stage;
    }(Laya.Panel));
    Marmot.Stage = Stage;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=stage.js.map