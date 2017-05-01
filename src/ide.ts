import Stage = Laya.Stage;
import WebGL = Laya.WebGL;
import Handler = Laya.Handler;

module Marmot {
    import View = Laya.View;
    import ScriptArea = Marmot.ScriptArea;
    import BlockFactory = Marmot.BlockFactory;

    export class IDE extends View {

        constructor() {
            super();
            this.top = 0;
            this.left = 0;
            this.right = 0;
            this.bottom = 0;
            this.createScriptArea();

        }

        private createScriptArea() {
            let blockFactory = new BlockFactory();
            let scriptArea = new ScriptArea(blockFactory);
            scriptArea.createBlockSet();
            scriptArea.top = 0;
            scriptArea.left = 0;
            scriptArea.right = 0;
            scriptArea.bottom = 50;
            scriptArea.name = "scriptArea";
            this.addChild(scriptArea);

        }
    }
}
// 不支持WebGL时自动切换至Canvas
Laya.init(700, 400, WebGL);

Laya.stage.alignV = Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Stage.ALIGN_CENTER;

Laya.stage.scaleMode = "showall";
Laya.stage.bgColor = "#90CAF9";
Laya.loader.load([{ url: "res/atlas/comp.json", type: laya.net.Loader.ATLAS }, { url: "res/atlas/materials.json", type: laya.net.Loader.ATLAS }], Handler.create(this, this.createIDE));

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
function createIDE() {
    let ide = new Marmot.IDE();
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