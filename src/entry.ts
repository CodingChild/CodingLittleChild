module Main {
    import WebGL = Laya.WebGL;
    import Stage = Laya.Stage;
    import Handler = Laya.Handler;

    export class Entry {
        constructor() {
            //初始化舞台

            Laya.init(0, 0, WebGL);
            Laya.stage.alignV = Stage.ALIGN_CENTER;
            Laya.stage.alignH = Stage.ALIGN_MIDDLE;

            Laya.stage.scaleMode = "full";
            Laya.stage.bgColor = "#FFFFCC";
            //自动竖屏，让游戏的水平方向始终与浏览器显示屏幕的最长边保持垂直。
            Laya.stage.screenMode = "horizontal";
            //预加载资源，回调
            Laya.loader.load([{ url: "res/atlas/comp.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/materials.json", type: Laya.Loader.ATLAS },
            { url: "res/pics/bg_dadishu.jpg", type: Laya.Loader.IMAGE }], Handler.create(this, this.createIDE));
        }
        private createIDE(): void {
            let ideFactory = new IDE.GeneralIDEFactory();
            let ide = ideFactory.getIDE("ide");
            Laya.stage.addChild(ide);
        }
    }
}
new Main.Entry();

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
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