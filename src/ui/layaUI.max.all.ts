
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1920,"height":1080},"child":[{"type":"Tab","props":{"y":563,"x":762,"width":154,"stateNum":2,"skin":"materials/tab_index.png","labels":"label1,label2","height":83}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);
        }
    }
}
