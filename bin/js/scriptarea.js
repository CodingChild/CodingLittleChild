var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Panel = Laya.Panel;
    var ScriptArea = (function (_super) {
        __extends(ScriptArea, _super);
        function ScriptArea(blockFactory) {
            var _this = _super.call(this) || this;
            _this.blockFactory = blockFactory;
            return _this;
        }
        ScriptArea.prototype.createBlockSet = function () {
            var blockMove1 = this.blockFactory.create("Move");
            blockMove1.pos(100, 100);
            blockMove1.pivot(0, 0);
            this.addChild(blockMove1);
            blockMove1.name = "blockMove1";
            var blockMove2 = this.blockFactory.create("Move");
            blockMove2.pos(150, 100);
            blockMove2.pivot(0, 0);
            this.addChild(blockMove2);
            blockMove2.name = "blockMove2";
            var blockSetHeading1 = this.blockFactory.create("SetHeading");
            blockSetHeading1.pos(200, 100);
            blockSetHeading1.pivot(0, 0);
            this.addChild(blockSetHeading1);
            blockSetHeading1.name = "blockSetHeading1";
            var blockSetHeading2 = this.blockFactory.create("SetHeading");
            blockSetHeading2.pos(250, 100);
            blockSetHeading2.pivot(0, 0);
            this.addChild(blockSetHeading2);
            blockSetHeading2.name = "blockSetHeading2";
            var blockShow = this.blockFactory.create("Show");
            blockShow.pos(300, 100);
            blockShow.pivot(0, 0);
            this.addChild(blockShow);
            blockShow.name = "blockShow";
            var blockHide1 = this.blockFactory.create("Hide");
            blockHide1.pos(350, 200);
            blockHide1.pivot(0, 0);
            this.addChild(blockHide1);
            blockHide1.name = "blockHide1";
            var blockResize = this.blockFactory.create("Resize");
            blockResize.pos(400, 200);
            blockResize.pivot(0, 0);
            this.addChild(blockResize);
            blockResize.name = "blockResize";
            var blockWait1 = this.blockFactory.create("wait");
            blockWait1.pos(450, 200);
            blockWait1.pivot(0, 0);
            this.addChild(blockWait1);
            blockWait1.name = "blockWait1";
            var blockWait2 = this.blockFactory.create("wait");
            blockWait2.pos(500, 200);
            blockWait2.pivot(0, 0);
            this.addChild(blockWait2);
            blockWait2.name = "blockWait2";
            var blockHide2 = this.blockFactory.create("Hide");
            blockHide2.pos(550, 200);
            blockHide2.pivot(0, 0);
            this.addChild(blockHide2);
            blockHide2.name = "blockHide2";
            var blockPlay = this.blockFactory.create("play");
            blockPlay.pos(600, 200);
            blockPlay.pivot(0, 0);
            this.addChild(blockPlay);
            blockPlay.name = "blockPlay";
        };
        return ScriptArea;
    }(Panel));
    Marmot.ScriptArea = ScriptArea;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=scriptarea.js.map