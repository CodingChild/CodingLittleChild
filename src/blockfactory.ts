module Marmot {
    import ResourceSetting = Marmot.ResourceSetting;
    import SliderSetting = Marmot.SliderSetting;
    import BackgroundSetting = Marmot.BackgroundSetting;
    import TextInputSetting = Marmot.TextInputSetting;
    import InputSettings = Marmot.InputSettings;
    import TextInput = Laya.TextInput;
    import VSlider = Laya.VSlider;


    export class BlockFactory {

        // Blocks can be divided into 

        // share attributes
        private inputSetting1: ResourceSetting = {
            name: "input",
            path: "materials/input.png",
            x: 10,
            y: 35,
            width: 35,
            height: 11
        }
        private sliderSetting1: SliderSetting = {
            name: "vslider",
            path: "comp/vslider.png",
            x: 30,
            y: 80,
            width: 30,
            height: 60,
            min: 0,
            max: 100,
            initialValue: 50,
            tick: 1,
            inputName: "input",
            onChange: function (value: number): void {
                (this.getChildByName("input") as LineInput).textinput.text = value.toString();
            }
        }
        private blockBackground1: BackgroundSetting = {
            pathBackground: [
                ["moveTo", 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["lineTo", 46 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", 50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 57 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 57 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 57 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale],
                ["arcTo", 57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 46 * Block.blockSetting.blockScale],
                ["arcTo", 50 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 46 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 4 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 46 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["lineTo", 5 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 7 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 7 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 5 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ]
        }

        private blockBackground2: BackgroundSetting = {
            pathBackground: [
                ["moveTo", 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["lineTo", 46 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", 50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 57 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 57 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 57 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale],
                ["arcTo", 57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 46 * Block.blockSetting.blockScale],
                ["arcTo", 50 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 46 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 4 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 46 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ]
        }
        private textInputSetting1: TextInputSetting = {
            sizeGrid: "0,10,0,10",
            font: "Arial",
            fontSize: 30,
            bold: true,
            color: "#000000",
            restrict: "0-9"
        }

        constructor() {

        }

        public create(type: string): Block {
            let textureSettings: Array<ResourceSetting> = [];
            let inputSettings: Array<InputSettings> = [];
            let backgroundSetting: BackgroundSetting;

            backgroundSetting = this.blockBackground1;
            if (type == "Move") {
                textureSettings.push(
                    {
                        name: "move",
                        path: "materials/walk.png",
                        x: 6,
                        y: 6,
                        width: 45,
                        height: 30
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting1
                    }
                )
                return new CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "SetHeading") {
                textureSettings.push(
                    {
                        name: "anglepan",
                        path: "materials/anglepan.png",
                        x: 13,
                        y: 3,
                        width: 32,
                        height: 32
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting1
                    }
                )
                return new CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "Show") {
                textureSettings.push(
                    {
                        name: "show",
                        path: "materials/show.png",
                        x: 10,
                        y: 14,
                        width: 39,
                        height: 17
                    }
                );
                return new CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "Hide") {
                textureSettings.push(
                    {
                        name: "hide",
                        path: "materials/hide.png",
                        x: 10,
                        y: 14,
                        width: 39,
                        height: 17
                    }
                );
                return new CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "Resize") {
                let sliderSetting: SliderSetting;
                textureSettings.push(
                    {
                        name: "setsize",
                        path: "materials/setsize.png",
                        x: 12,
                        y: 2,
                        width: 31,
                        height: 31
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting1
                    }
                )
                sliderSetting = this.sliderSetting1;
                let blockSize = new CommandBlock(textureSettings, inputSettings, backgroundSetting, sliderSetting);
                let input: LineInput = blockSize.getChildByName("input") as LineInput;
                let vslider: VSlider = blockSize.getChildByName("vslider") as VSlider;

                input.textinput.editable = false;
                input.textinput.on(Laya.Event.FOCUS, vslider, function () {
                    vslider.visible = true;
                });
                vslider.on(Laya.Event.CHANGED, vslider, function () {
                    this.visible = false;
                });
                return blockSize;
            }
            else if (type == "wait") {
                textureSettings.push(
                    {
                        name: "wait",
                        path: "materials/wait.png",
                        x: 12,
                        y: 3,
                        width: 30,
                        height: 30
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting1
                    }
                )
                return new CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "play") {
                textureSettings.push(
                    {
                        name: "play",
                        path: "materials/play.png",
                        x: 5,
                        y: 5,
                        width: 39,
                        height: 39
                    }
                );
                backgroundSetting = this.blockBackground2;
                return new HeadCommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }

        }
    }
}
