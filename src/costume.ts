module Marmot{
    import Texture = Laya.Texture;

    export class Costume{
        public url:string;
        public texture:Texture;
        constructor(url:string){
            this.url = url;
            let t: Texture = Laya.loader.getRes(url);
            this.texture = t;
        }
    }
}