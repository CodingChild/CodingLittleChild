module Marmot {
    import TextInput = Laya.TextInput;
    import Sprite = Laya.Sprite;

    export class LineInput extends Sprite{
        public textinput: TextInput;

        constructor(inputSetting: InputSettings) {
            super();
            this.textinput = new TextInput();
            this.textinput.skin = inputSetting.resourceSetting.path;
            this.textinput.name = inputSetting.resourceSetting.name;
            this.textinput.sizeGrid = inputSetting.textInputSetting.sizeGrid;
            this.textinput.font = inputSetting.textInputSetting.font;
            this.textinput.fontSize = inputSetting.textInputSetting.fontSize;
            this.textinput.bold = inputSetting.textInputSetting.bold;
            this.textinput.color = inputSetting.textInputSetting.color;
            this.textinput.align = "center";
            this.textinput.restrict = inputSetting.textInputSetting.restrict;
            this.textinput.valign = "middle";
            this.pos(inputSetting.resourceSetting.x * Block.blockSetting.blockScale,
                inputSetting.resourceSetting.y * Block.blockSetting.blockScale);
            this.textinput.size(inputSetting.resourceSetting.width * Block.blockSetting.blockScale,
                inputSetting.resourceSetting.height * Block.blockSetting.blockScale);
            this.name = inputSetting.resourceSetting.name;
            this.addChild(this.textinput);
            this.on
            
        }

    }
}