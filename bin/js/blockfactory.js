var Marmot;
(function (Marmot) {
    var BlockFactory = (function () {
        function BlockFactory() {
            // Blocks can be divided into 
            // share attributes
            this.inputSetting1 = {
                name: "input",
                path: "materials/input.png",
                x: 10,
                y: 35,
                width: 35,
                height: 11
            };
            this.sliderSetting1 = {
                name: "vslider",
                path: "materials/hslider_1.png",
                x: 0,
                y: Marmot.Block.blockSetting.blockScale * 50 + 30,
                width: Marmot.Block.blockSetting.blockScale * 50,
                height: 0,
                min: 0,
                max: 100,
                initialValue: 50,
                tick: 1,
                inputName: "input",
                onChange: function (value) {
                    this.getChildByName("input").textinput.text = value.toString();
                }
            };
            this.blockBackground1 = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 46 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 57 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 57 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 57 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 46 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 50 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 46 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 4 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 46 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 5 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 7 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 7 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 5 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale
                ]
            };
            this.blockBackground2 = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 46 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 57 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 57 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 57 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 46 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 50 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 46 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 4 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 46 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale
                ]
            };
            this.blockBackgroundForLoop = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 100 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 100 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 107 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 107 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 107 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 105 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 100 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 100 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 75 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 75 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 82 * Marmot.Block.blockSetting.blockScale, 83 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 80 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 32 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 32 * Marmot.Block.blockSetting.blockScale, 67 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 32 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 30 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 25 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 21 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 7 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 5 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    100 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    100 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    107 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    107 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    100 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    100 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    32 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    32 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale
                ]
            };
            this.blockBackgroundForForeverLoop = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 100 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 100 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 75 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 75 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 82 * Marmot.Block.blockSetting.blockScale, 83 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 80 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 32 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 32 * Marmot.Block.blockSetting.blockScale, 67 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 32 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 30 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 25 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 21 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 7 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 5 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    100 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    100 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    32 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    32 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale
                ]
            };
            this.blockBackgroundForIfelse1 = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 25 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 25 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 32 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 32 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 32 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 30 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 25 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 25 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 21 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 46 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 7 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 5 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    32 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    32 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    25 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    7 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    0 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale
                ]
            };
            this.blockBackgroundForIfelse2 = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 54 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 75 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 75 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 82 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 80 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 82 * Marmot.Block.blockSetting.blockScale, 67 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 82 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 80 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 75 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 75 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 71 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 50 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 50 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 57 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 57 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 55 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 50 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 54 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    82 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    75 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    57 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    50 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale
                ]
            };
            this.blockBackgroundForIfelse3 = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 104 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 125 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 125 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 125 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 132 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 132 * Marmot.Block.blockSetting.blockScale, 17 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 132 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 130 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 125 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 125 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 121 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 100 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale, 96 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 100 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 107 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale, 107 * Marmot.Block.blockSetting.blockScale, 83 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 107 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 105 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 100 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 100 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 107 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale, 107 * Marmot.Block.blockSetting.blockScale, 33 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 107 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 105 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale, 2 * Marmot.Block.blockSetting.blockScale],
                    ["lineTo", 100 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale],
                    ["arcTo", 100 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 104 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale, 4 * Marmot.Block.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    200 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    225 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale,
                    225 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    232 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    232 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    225 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    225 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    200 * Marmot.Block.blockSetting.blockScale, 100 * Marmot.Block.blockSetting.blockScale,
                    200 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    207 * Marmot.Block.blockSetting.blockScale, 85 * Marmot.Block.blockSetting.blockScale,
                    207 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    200 * Marmot.Block.blockSetting.blockScale, 65 * Marmot.Block.blockSetting.blockScale,
                    200 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    207 * Marmot.Block.blockSetting.blockScale, 35 * Marmot.Block.blockSetting.blockScale,
                    207 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    200 * Marmot.Block.blockSetting.blockScale, 15 * Marmot.Block.blockSetting.blockScale,
                    200 * Marmot.Block.blockSetting.blockScale, 0 * Marmot.Block.blockSetting.blockScale
                ]
            };
            this.textInputSetting1 = {
                sizeGrid: "0,10,0,10",
                font: "Arial",
                fontSize: 30,
                bold: true,
                color: "#000000",
                restrict: "-0-9"
            };
            this.textInputSetting2 = {
                sizeGrid: "0,10,0,10",
                font: "Arial",
                fontSize: 30,
                bold: true,
                color: "#000000",
                restrict: "0-9"
            };
        }
        BlockFactory.prototype.create = function (type) {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSettings = [];
            var block;
            if (type == "move") {
                textureSettings.push({
                    name: "move",
                    path: "materials/texture_move.png",
                    x: 8,
                    y: 2,
                    width: 40,
                    height: 35
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting1
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                block = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "setHeading") {
                textureSettings.push({
                    name: "anglepan",
                    path: "materials/texture_anglepan.png",
                    x: 13,
                    y: 3,
                    width: 32,
                    height: 32
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting1
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                block = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block.initialize();
                return block;
            }
            else if (type == "show") {
                textureSettings.push({
                    name: "show",
                    path: "materials/texture_show.png",
                    x: 10,
                    y: 10,
                    width: 39,
                    height: 30
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_1 = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_1.initialize();
                return block_1;
            }
            else if (type == "hide") {
                textureSettings.push({
                    name: "hide",
                    path: "materials/texture_hide.png",
                    x: 10,
                    y: 10,
                    width: 39,
                    height: 30
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_2 = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_2.initialize();
                return block_2;
            }
            else if (type == "setSize") {
                var sliderSetting = void 0;
                textureSettings.push({
                    name: "setsize",
                    path: "materials/texture_setsize.png",
                    x: 12,
                    y: 2,
                    width: 31,
                    height: 31
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting2
                });
                sliderSetting = this.sliderSetting1;
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var blockSize = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, sliderSetting);
                blockSize.initialize();
                var input = blockSize.getChildByName("input");
                var vslider_1 = blockSize.getChildByName("vslider");
                input.textinput.editable = false;
                input.textinput.on(Laya.Event.FOCUS, vslider_1, function () {
                    vslider_1.visible = true;
                });
                vslider_1.on(Laya.Event.CHANGED, vslider_1, function () {
                    vslider_1.visible = false;
                });
                return blockSize;
            }
            else if (type == "wait") {
                textureSettings.push({
                    name: "wait",
                    path: "materials/texture_wait.png",
                    x: 12,
                    y: 3,
                    width: 30,
                    height: 30
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting2
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_3 = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_3.initialize();
                return block_3;
            }
            else if (type == "play") {
                textureSettings.push({
                    name: "play",
                    path: "materials/texture_play.png",
                    x: 5,
                    y: 5,
                    width: 39,
                    height: 39
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground2.hitAreaBackground,
                    pathBackground: this.blockBackground2.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_4 = new Marmot.HeadCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_4.initialize();
                return block_4;
            }
            else if (type == "whenClicked") {
                textureSettings.push({
                    name: "whenClicked",
                    path: "materials/texture_whenClicked.png",
                    x: 5,
                    y: 5,
                    width: 39,
                    height: 39
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground2.hitAreaBackground,
                    pathBackground: this.blockBackground2.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_5 = new Marmot.HeadCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_5.initialize();
                return block_5;
            }
            else if (type == "moveUp") {
                textureSettings.push({
                    name: "up",
                    path: "materials/texture_up.png",
                    x: 10,
                    y: 1,
                    width: 35,
                    height: 35
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting2
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_6 = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_6.initialize();
                return block_6;
            }
            else if (type == "moveDown") {
                textureSettings.push({
                    name: "down",
                    path: "materials/texture_down.png",
                    x: 10,
                    y: 1,
                    width: 35,
                    height: 35
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting2
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_7 = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_7.initialize();
                return block_7;
            }
            else if (type == "foreverLoop") {
                textureSettings.push({
                    name: "loop",
                    path: "materials/texture_loop.png",
                    x: 30,
                    y: 5,
                    width: 40,
                    height: 40
                }, {
                    name: "turnRight",
                    path: "materials/texture_loop_turnRight.png",
                    x: 9,
                    y: 64,
                    width: 15,
                    height: 15
                }, {
                    name: "turnUp",
                    path: "materials/texture_loop_turnUp.png",
                    x: 82,
                    y: 62,
                    width: 15,
                    height: 15
                });
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackgroundForForeverLoop.hitAreaBackground,
                    pathBackground: this.blockBackgroundForForeverLoop.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                var block_8 = new Marmot.LoopCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_8.initialize();
                return block_8;
            }
            else if (type == "ifelse") {
                textureSettings.push({
                    name: "questionMark",
                    path: "materials/texture_questionMark.png",
                    x: 8,
                    y: 15,
                    width: 15,
                    height: 15
                }, {
                    name: "yes",
                    path: "materials/texture_yes.png",
                    x: 59,
                    y: 15,
                    width: 15,
                    height: 15
                }, {
                    name: "no",
                    path: "materials/texture_no.png",
                    x: 59,
                    y: 66,
                    width: 15,
                    height: 15
                });
                var fillStyle = this.chooseBlockFillStyle(type);
                var backgroundSetting1 = {
                    blockFillStyle: fillStyle,
                    hitAreaBackground: this.blockBackgroundForIfelse1.hitAreaBackground,
                    pathBackground: this.blockBackgroundForIfelse1.pathBackground
                };
                var backgroundSetting2 = {
                    blockFillStyle: fillStyle,
                    hitAreaBackground: this.blockBackgroundForIfelse2.hitAreaBackground,
                    pathBackground: this.blockBackgroundForIfelse2.pathBackground
                };
                var backgroundSetting3 = {
                    blockFillStyle: fillStyle,
                    hitAreaBackground: this.blockBackgroundForIfelse3.hitAreaBackground,
                    pathBackground: this.blockBackgroundForIfelse3.pathBackground
                };
                backgroundSettings.push(backgroundSetting1);
                backgroundSettings.push(backgroundSetting2);
                backgroundSettings.push(backgroundSetting3);
                var block_9 = new Marmot.IfelseCommandBlock(textureSettings, inputSettings, backgroundSettings, null);
                block_9.initialize();
                return block_9;
            }
            else if (type == "doStop") {
                var comboBoxSlotSetting = void 0;
                textureSettings.push({
                    name: "stop",
                    path: "materials/texture_stop.png",
                    x: 12,
                    y: 1,
                    width: 35,
                    height: 35
                });
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
                        width: 37,
                        height: 10
                    };
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground1.hitAreaBackground,
                    pathBackground: this.blockBackground1.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                block = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSettings, null, comboBoxSlotSetting);
                block.initialize();
                return block;
            }
        };
        BlockFactory.prototype.chooseBlockFillStyle = function (type) {
            var blockSet;
            blockSet = Marmot.blockSet["motion"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#f46767";
                    }
                }
            }
            blockSet = Marmot.blockSet["look"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#fa800a";
                    }
                }
            }
            blockSet = Marmot.blockSet["control"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#6bcd47";
                    }
                }
            }
            blockSet = Marmot.blockSet["event"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#608fee";
                    }
                }
            }
            blockSet = Marmot.blockSet["pen"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#68cdff";
                    }
                }
            }
            blockSet = Marmot.blockSet["music"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#a073ff";
                    }
                }
            }
            blockSet = Marmot.blockSet["variable"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#d92323";
                    }
                }
            }
            blockSet = Marmot.blockSet["math"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#e76cea";
                    }
                }
            }
            blockSet = Marmot.blockSet["sense"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#fa800a";
                    }
                }
            }
            return null;
        };
        return BlockFactory;
    }());
    Marmot.BlockFactory = BlockFactory;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=blockfactory.js.map