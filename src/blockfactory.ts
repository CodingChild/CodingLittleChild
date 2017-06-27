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
            path: "materials/hslider_1.png",
            x: 0,
            y: Block.blockSetting.blockScale * 50 + 30,
            width: Block.blockSetting.blockScale * 50,
            height: 0,
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
            blockFillStyle: null,
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
            blockFillStyle: null,
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

        private blockBackgroundForLoop: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", 100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 100 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 107 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 107 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 107 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 105 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 100 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 100 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 75 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 75 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 82 * Block.blockSetting.blockScale, 83 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 80 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 32 * Block.blockSetting.blockScale, 67 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 30 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale],
                ["arcTo", 25 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 21 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 7 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 5 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                100 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                107 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                107 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                100 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                100 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,

                75 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                82 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                82 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,

                25 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,

                7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ]
        }
        private blockBackgroundForForeverLoop: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", 100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 100 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 75 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 75 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 82 * Block.blockSetting.blockScale, 83 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 80 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 32 * Block.blockSetting.blockScale, 67 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 30 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale],
                ["arcTo", 25 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 21 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 7 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 5 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                100 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,

                75 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                82 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                82 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,

                25 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,

                7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ]
        }

        private blockBackgroundForIfelse1: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", 25 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 25 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 32 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 32 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 30 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 25 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 21 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 46 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 7 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 5 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                32 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                7 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                0 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ]
        }

        private blockBackgroundForIfelse2: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 54 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", 75 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 75 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 82 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 80 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 82 * Block.blockSetting.blockScale, 67 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 82 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 80 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 75 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale],
                ["arcTo", 75 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 71 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 50 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 57 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 57 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 55 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 50 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 54 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                82 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                82 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,

                82 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                82 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                75 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,

                50 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                57 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                50 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ]
        }

        private blockBackgroundForIfelse3: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 104 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale],
                ["arcTo", 125 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 125 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 125 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 132 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 132 * Block.blockSetting.blockScale, 17 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 132 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 130 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 125 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 125 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 121 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["arcTo", 100 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale, 96 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["lineTo", 100 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale],
                ["arcTo", 107 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale, 107 * Block.blockSetting.blockScale, 83 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 107 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 105 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 100 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale],
                ["lineTo", 100 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale],
                ["arcTo", 107 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale, 107 * Block.blockSetting.blockScale, 33 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["arcTo", 107 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 105 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale, 2 * Block.blockSetting.blockScale],
                ["lineTo", 100 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale],
                ["arcTo", 100 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 104 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale, 4 * Block.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                200 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                225 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale,
                225 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                232 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                232 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                225 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                225 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                200 * Block.blockSetting.blockScale, 100 * Block.blockSetting.blockScale,
                200 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                207 * Block.blockSetting.blockScale, 85 * Block.blockSetting.blockScale,
                207 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                200 * Block.blockSetting.blockScale, 65 * Block.blockSetting.blockScale,
                200 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                207 * Block.blockSetting.blockScale, 35 * Block.blockSetting.blockScale,
                207 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                200 * Block.blockSetting.blockScale, 15 * Block.blockSetting.blockScale,
                200 * Block.blockSetting.blockScale, 0 * Block.blockSetting.blockScale
            ]
        }
        private textInputSetting1: TextInputSetting = {
            sizeGrid: "0,10,0,10",
            font: "Arial",
            fontSize: 30,
            bold: true,
            color: "#000000",
            restrict: "-0-9"
        }
        private textInputSetting2: TextInputSetting = {
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
            let backgroundSettings: Array<BackgroundSetting> = [];
            let block: Block;

            if (type == "move") {
                textureSettings.push(
                    {
                        name: "move",
                        path: "materials/texture_move.png",
                        x: 8,
                        y: 2,
                        width: 40,
                        height: 35
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting1
                    }
                );
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "setHeading") {
                textureSettings.push(
                    {
                        name: "anglepan",
                        path: "materials/texture_anglepan.png",
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
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "show") {
                textureSettings.push(
                    {
                        name: "show",
                        path: "materials/texture_show.png",
                        x: 10,
                        y: 10,
                        width: 39,
                        height: 30
                    }
                );
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "hide") {
                textureSettings.push(
                    {
                        name: "hide",
                        path: "materials/texture_hide.png",
                        x: 10,
                        y: 10,
                        width: 39,
                        height: 30
                    }
                );
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "setSize") {
                let sliderSetting: SliderSetting;
                textureSettings.push(
                    {
                        name: "setsize",
                        path: "materials/texture_setsize.png",
                        x: 12,
                        y: 2,
                        width: 31,
                        height: 31
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting2
                    }
                )
                sliderSetting = this.sliderSetting1;
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let blockSize = new CommandBlock(textureSettings, inputSettings, backgroundSettings, sliderSetting);
                blockSize.initialize();

                let input: LineInput = blockSize.getChildByName("input") as LineInput;
                let vslider: VSlider = blockSize.getChildByName("vslider") as VSlider;

                input.textinput.editable = false;
                input.textinput.on(Laya.Event.FOCUS, vslider, function () {
                    vslider.visible = true;
                });
                vslider.on(Laya.Event.CHANGED, vslider, function () {
                    vslider.visible = false;
                });
                return blockSize;
            }
            else if (type == "wait") {
                textureSettings.push(
                    {
                        name: "wait",
                        path: "materials/texture_wait.png",
                        x: 12,
                        y: 3,
                        width: 30,
                        height: 30
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting2
                    }
                )
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "play") {
                textureSettings.push(
                    {
                        name: "play",
                        path: "materials/texture_play.png",
                        x: 5,
                        y: 5,
                        width: 39,
                        height: 39
                    }
                );
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground2.hitAreaBackground,
                    pathBackground: this.blockBackground2.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new HeadCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "whenClicked") {
                textureSettings.push(
                    {
                        name: "whenClicked",
                        path: "materials/texture_whenClicked.png",
                        x: 5,
                        y: 5,
                        width: 39,
                        height: 39
                    }
                );
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground2.hitAreaBackground,
                    pathBackground: this.blockBackground2.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new HeadCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "moveUp") {
                textureSettings.push(
                    {
                        name: "up",
                        path: "materials/texture_up.png",
                        x: 10,
                        y: 1,
                        width: 35,
                        height: 35
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting2
                    }
                )
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "moveDown") {
                textureSettings.push(
                    {
                        name: "down",
                        path: "materials/texture_down.png",
                        x: 10,
                        y: 1,
                        width: 35,
                        height: 35
                    }
                );
                inputSettings.push(
                    {
                        resourceSetting: this.inputSetting1,
                        textInputSetting: this.textInputSetting2
                    }
                )
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "foreverLoop") {
                textureSettings.push(
                    {
                        name: "loop",
                        path: "materials/texture_loop.png",
                        x: 30,
                        y: 5,
                        width: 40,
                        height: 40
                    },
                    {
                        name: "turnRight",
                        path: "materials/texture_loop_turnRight.png",
                        x: 9,
                        y: 64,
                        width: 15,
                        height: 15
                    },
                    {
                        name: "turnUp",
                        path: "materials/texture_loop_turnUp.png",
                        x: 82,
                        y: 62,
                        width: 15,
                        height: 15
                    }
                );
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackgroundForForeverLoop.hitAreaBackground,
                    pathBackground: this.blockBackgroundForForeverLoop.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                let block = new LoopCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "ifelse") {
                textureSettings.push(
                    {
                        name: "questionMark",
                        path: "materials/texture_questionMark.png",
                        x: 8,
                        y: 15,
                        width: 15,
                        height: 15
                    },
                    {
                        name: "yes",
                        path: "materials/texture_yes.png",
                        x: 59,
                        y: 15,
                        width: 15,
                        height: 15
                    },
                    {
                        name: "no",
                        path: "materials/texture_no.png",
                        x: 59,
                        y: 66,
                        width: 15,
                        height: 15
                    }
                );
                let fillStyle = this.chooseBlockFillStyle(type);
                let backgroundSetting1: BackgroundSetting = {
                    blockFillStyle: fillStyle,
                    hitAreaBackground: this.blockBackgroundForIfelse1.hitAreaBackground,
                    pathBackground: this.blockBackgroundForIfelse1.pathBackground
                };
                let backgroundSetting2: BackgroundSetting = {
                    blockFillStyle: fillStyle,
                    hitAreaBackground: this.blockBackgroundForIfelse2.hitAreaBackground,
                    pathBackground: this.blockBackgroundForIfelse2.pathBackground
                };
                let backgroundSetting3: BackgroundSetting = {
                    blockFillStyle: fillStyle,
                    hitAreaBackground: this.blockBackgroundForIfelse3.hitAreaBackground,
                    pathBackground: this.blockBackgroundForIfelse3.pathBackground
                };
                backgroundSettings.push(backgroundSetting1);
                backgroundSettings.push(backgroundSetting2);
                backgroundSettings.push(backgroundSetting3);
                let block = new IfelseCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "doStop") {
                let comboBoxSlotSetting: ComboBoxSlotSetting;
                textureSettings.push(
                    {
                        name: "stop",
                        path: "materials/texture_stop.png",
                        x: 12,
                        y: 1,
                        width: 35,
                        height: 35
                    }
                );
                comboBoxSlotSetting =
                    {
                        skin: "comp/combobox.png",
                        name: "comboBox",
                        sizeGrid: "0,51,0,10",
                        labelSize: 15,
                        itemSize: 15,
                        x: 10,
                        y: 37,
                        labels: ", , , ",
                        width:37,
                        height:10
                    };
                let backgroundSetting: BackgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                block = new CommandBlock(textureSettings, inputSettings, backgroundSettings, null, comboBoxSlotSetting);
                block.initialize();
                return block;
            }
        }

        private chooseBlockFillStyle(type: string): string {

            let blockSet: Array<BlockAttributes>;
            blockSet = Marmot.blockSet["motion"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#f46767";
                    }
                }
            }
            blockSet = Marmot.blockSet["look"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#fa800a";
                    }
                }
            }
            blockSet = Marmot.blockSet["control"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#6bcd47";
                    }
                }
            }
            blockSet = Marmot.blockSet["event"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#608fee";
                    }
                }
            }
            blockSet = Marmot.blockSet["pen"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#68cdff";
                    }
                }
            }
            blockSet = Marmot.blockSet["music"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#a073ff";
                    }
                }
            }
            blockSet = Marmot.blockSet["variable"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#d92323";
                    }
                }
            }
            blockSet = Marmot.blockSet["math"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#e76cea";
                    }
                }
            }
            blockSet = Marmot.blockSet["sense"];
            if (blockSet.length != 0) {
                for (let i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#fa800a";
                    }
                }
            }

            return null;
        }
    }
}
