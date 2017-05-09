
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1920,"height":1080},"child":[{"type":"Panel","props":{"y":263,"x":272,"width":600,"scaleX":2,"height":400},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":600,"lineWidth":1,"height":400,"fillColor":"#ffffff"}}]},{"type":"Image","props":{"y":536,"x":946,"width":200,"skin":"materials/sp_girl.png","scaleY":1,"scaleX":1,"pivotY":100,"pivotX":100,"height":200}},{"type":"VSlider","props":{"y":525,"x":745,"skin":"comp/vslider.png"}},{"type":"HSlider","props":{"y":430,"x":679,"skin":"materials/hslider_1.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);
        }
    }
}
