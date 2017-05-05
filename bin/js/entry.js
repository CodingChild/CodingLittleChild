var Handler = Laya.Handler;
var Marmot;
(function (Marmot) {
    var WebGL = Laya.WebGL;
    var Stage = Laya.Stage;
    var Entry = (function () {
        function Entry() {
            //初始化舞台
            Laya.init(1920, 1080, WebGL, Laya.Log);
            Laya.stage.alignV = Stage.ALIGN_CENTER;
            Laya.stage.alignH = Stage.ALIGN_MIDDLE;
            Laya.stage.scaleMode = "full";
            Laya.stage.bgColor = "#90CAF9";
            //自动竖屏，让游戏的水平方向始终与浏览器显示屏幕的最长边保持垂直。
            Laya.stage.screenMode = "horizontal";
            //预加载资源，回调
            Laya.loader.load([{ url: "res/atlas/comp.json", type: laya.net.Loader.ATLAS },
                { url: "res/atlas/materials.json", type: laya.net.Loader.ATLAS }], Handler.create(this, this.createIDE));
        }
        Entry.prototype.createIDE = function () {
            var ideFactory = new Marmot.IDEFactory();
            var ide = ideFactory.getIDE("ide");
            Laya.stage.addChild(ide);
        };
        return Entry;
    }());
    Marmot.Entry = Entry;
})(Marmot || (Marmot = {}));
new Marmot.Entry();
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
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
//# sourceMappingURL=entry.js.map