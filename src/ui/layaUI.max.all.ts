
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1920,"height":1080},"child":[{"type":"Button","props":{"y":646,"x":296,"width":74,"stateNum":"1","skin":"materials/btn_blank.png","height":74},"child":[{"type":"Texture","props":{"width":74,"skin":"materials/sp_girl.png","height":74}}]},{"type":"TextInput","props":{"y":507,"x":803,"width":100,"text":"TextInput","skin":"materials/input.png","height":500}},{"type":"Tab","props":{"y":549,"x":1002,"width":79,"stateNum":2,"skin":"materials/tab_index.png","selectedIndex":1,"scaleX":1,"labels":"label1,label2","height":43}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);
        }
    }
}
