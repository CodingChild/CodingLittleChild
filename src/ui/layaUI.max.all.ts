
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class testUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":4,"x":-6,"width":600,"height":400},"child":[{"type":"TextInput","props":{"y":242,"x":95,"text":"TextInput","skin":"materials/input.png","editable":false}},{"type":"TextInput","props":{"y":185,"x":98,"width":100,"text":"1","skin":"comp/textinput.png","align":"center"}},{"type":"Image","props":{"y":176,"x":308,"skin":"materials/setsize.png"}},{"type":"VSlider","props":{"y":141,"x":72,"value":100,"skin":"comp/vslider.png"}},{"type":"TextInput","props":{"y":158,"x":245,"width":303,"skin":"materials/input.png","sizeGrid":"0,44,0,40","height":22,"align":"center"}},{"type":"VSlider","props":{"y":52,"x":179,"skin":"comp/vslider.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.testUI.uiView);
        }
    }
}
