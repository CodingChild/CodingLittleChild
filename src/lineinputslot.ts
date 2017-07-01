module Block {
    import TextInput = Laya.TextInput;
    import Sprite = Laya.Sprite;
    import Event = Laya.Event;

    export class LineInput extends Argument {
        public textinput: TextInput;
        public inputSetting:InputSettings;

        constructor(inputSetting: InputSettings) {
            super();
            this.textinput = new TextInput();
            this.inputSetting = inputSetting;
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

        }

        public evaluate(): number | string {
            if (this.inputSetting.textInputSetting.restrict == "-0-9") {
                return Number(this.textinput.text);
            }
            else if(this.inputSetting.textInputSetting.restrict == "0-9"){
                let sliderSetting = (this.parent as Block).sliderSetting;
                if (sliderSetting != null) {
                    if (sliderSetting.inputName == this.name) {
                        return Number(this.textinput.text) / sliderSetting.max * 2;
                    }
                }
                else{
                    return Number(this.textinput.text);
                }
            }
            else{
                return this.textinput.text;
            }
        }

    }
}