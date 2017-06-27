module Marmot {
    import ComboBox = Laya.ComboBox;
    import Sprite = Laya.Sprite;
    import Event = Laya.Event;

    export interface ComboBoxSlotSetting{
        skin:string;
        name:string;
        sizeGrid:string;
        labelSize:number;
        itemSize:number;
        x:number;
        y:number;
        labels:string;
        width:number;
        height:number;
    }

    export class ComboBoxSlot extends Argument {
        public comboBox: ComboBox;
        public comboBoxSlotSetting:ComboBoxSlotSetting;

        constructor(comboBoxSlotSetting: ComboBoxSlotSetting) {
            super();
            this.comboBox = new ComboBox();
            this.comboBoxSlotSetting = comboBoxSlotSetting;
            this.comboBox.skin = comboBoxSlotSetting.skin;
            this.comboBox.sizeGrid = comboBoxSlotSetting.sizeGrid;
            this.comboBox.labelSize = comboBoxSlotSetting.labelSize;
            this.comboBox.itemSize = comboBoxSlotSetting.itemSize;
            this.pos(comboBoxSlotSetting.x * Block.blockSetting.blockScale, comboBoxSlotSetting.y * Block.blockSetting.blockScale);
            this.comboBox.labels = comboBoxSlotSetting.labels;
            this.comboBox.width = comboBoxSlotSetting.width * Block.blockSetting.blockScale;
            this.comboBox.height = comboBoxSlotSetting.height * Block.blockSetting.blockScale;
            this.comboBox.labelPadding = "5, 10, 5, 10";
            this.comboBox.labelBold = true;
            this.name = comboBoxSlotSetting.name;
            this.addChild(this.comboBox);
        }

        public evaluate(): string {
            if(this.comboBox.selectedIndex == 1){
                return "all";
            }
            else if(this.comboBox.selectedIndex == 2){
                return "this sprite";
            }
            else if(this.comboBox.selectedIndex == 3){
                return "this thread";
            }
            else{
                return "";
            }
        }

    }
}