
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1920,"height":1080},"child":[{"type":"Panel","props":{"y":338,"x":210,"width":400,"vScrollBarSkin":"comp/vscroll.png","scaleX":2,"height":414,"hScrollBarSkin":"comp/hscroll.png"},"child":[{"type":"Image","props":{"y":177,"x":594,"width":112,"skin":"materials/sp_girl.png","pivotY":50,"pivotX":50,"height":88}}]},{"type":"Image","props":{"y":524,"x":791,"skin":"materials/up.png"}},{"type":"Image","props":{"y":525,"x":673,"skin":"materials/down.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);
        }
    }
}
