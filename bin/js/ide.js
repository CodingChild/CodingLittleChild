var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Handler = Laya.Handler;
var Marmot;
(function (Marmot) {
    var View = Laya.View;
    var ScriptArea = Marmot.ScriptArea;
    var BlockFactory = Marmot.BlockFactory;
    var IDE = (function (_super) {
        __extends(IDE, _super);
        function IDE() {
            var _this = _super.call(this) || this;
            _this.top = 0;
            _this.left = 0;
            _this.right = 0;
            _this.bottom = 0;
            _this.createScriptArea();
            return _this;
        }
        IDE.prototype.createScriptArea = function () {
            var blockFactory = new BlockFactory();
            var scriptArea = new ScriptArea(blockFactory);
            scriptArea.createBlockSet();
            scriptArea.top = 0;
            scriptArea.left = 0;
            scriptArea.right = 0;
            scriptArea.bottom = 50;
            scriptArea.name = "scriptArea";
            this.addChild(scriptArea);
        };
        return IDE;
    }(View));
    Marmot.IDE = IDE;
})(Marmot || (Marmot = {}));
// 不支持WebGL时自动切换至Canvas
Laya.init(700, 400, WebGL);
Laya.stage.alignV = Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Stage.ALIGN_CENTER;
Laya.stage.scaleMode = "showall";
Laya.stage.bgColor = "#90CAF9";
Laya.loader.load([{ url: "res/atlas/comp.json", type: laya.net.Loader.ATLAS }, { url: "res/atlas/materials.json", type: laya.net.Loader.ATLAS }], Handler.create(this, this.createIDE));
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
function createIDE() {
    var ide = new Marmot.IDE();
    ide.name = "ide";
    Laya.stage.addChild(ide);
}
/*
class A{
    a:number;
    eat():void{
        
    }
}
class C{
    b:number;
    walk():void{
        
    }
}
class B implements A, C{
    a:number;
    b:number;
    constructor(){

    }
    eat:()=> void;
    walk:()=>void;
}
applyMixins(B, [A, C]);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
*/ 
//# sourceMappingURL=ide.js.map