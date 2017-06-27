
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1920,"height":1080},"child":[{"type":"Panel","props":{"y":338,"x":210,"width":400,"vScrollBarSkin":"comp/vscroll.png","scaleX":2,"height":414,"hScrollBarSkin":"comp/hscroll.png"},"child":[{"type":"Image","props":{"y":177,"x":594,"width":112,"skin":"materials/sp_girl.png","pivotY":50,"pivotX":50,"height":88}}]},{"type":"Button","props":{"y":488,"x":1484,"width":312,"stateNum":"1","skin":"materials/btn_music.png","label":"label","height":348}},{"type":"ComboBox","props":{"y":443,"x":872,"width":200,"skin":"comp/combobox.png","sizeGrid":"0,51,0,10","labels":"label1,label2","labelPadding":"2"}},{"type":"HBox","props":{"y":172,"x":304,"width":400,"space":50,"height":200,"align":"middle"},"child":[{"type":"Image","props":{"y":371,"x":831,"skin":"materials/up.png"}},{"type":"Image","props":{"y":371,"x":831,"skin":"materials/down.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);
        }
    }
}
