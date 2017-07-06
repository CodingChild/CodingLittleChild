var Block;
(function (Block) {
    var BlockFactory = (function () {
        function BlockFactory() {
            // share attributes
            /*
            private blockBackground1: BackgroundSetting = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 46 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 57 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 57 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 4 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 5 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 7 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
                ]
            }
    
            private blockBackground2: BackgroundSetting = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 46 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 57 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 57 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 4 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
                ]
            }
    
            private blockBackgroundForLoop: BackgroundSetting = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 107 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 105 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 75 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 83 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 32 * BasicBlock.blockSetting.blockScale, 67 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 30 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 21 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    100 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    107 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    107 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    100 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
    
                    75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
    
                    25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
    
                    7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
                ]
            }
            private blockBackgroundForForeverLoop: BackgroundSetting = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 75 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 83 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 32 * BasicBlock.blockSetting.blockScale, 67 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 30 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 21 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
    
                    75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
    
                    25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
    
                    7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
                ]
            }
    
            private blockBackgroundForIfelse1: BackgroundSetting = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 25 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 32 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 30 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 21 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    32 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    32 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
                ]
            }
    
            private blockBackgroundForIfelse2: BackgroundSetting = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 54 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 75 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 67 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 71 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 57 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 55 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 54 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    82 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    82 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
    
                    82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
    
                    50 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
                ]
            }
    
            private blockBackgroundForIfelse3: BackgroundSetting = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", 104 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 125 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 125 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 125 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 132 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 132 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 132 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 130 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 125 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 125 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 121 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 107 * BasicBlock.blockSetting.blockScale, 83 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 105 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 107 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 105 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                    ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                    ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 104 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    200 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    225 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                    225 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    232 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    232 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    225 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    225 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    200 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                    200 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    207 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                    207 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    200 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                    200 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    207 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                    207 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    200 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                    200 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
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
            */
            this.blockBackground = {
                blockFillStyle: null,
                pathBackground: [
                    ["moveTo", Block.BasicBlock.blockSetting.roundCorner * Block.BasicBlock.blockSetting.blockScale, 0],
                    ["arcTo", (240 + IDE.GeneralIDE.ICONSIZE) * Block.BasicBlock.blockSetting.blockScale, 0, (240 + IDE.GeneralIDE.ICONSIZE) * Block.BasicBlock.blockSetting.blockScale, Block.BasicBlock.blockSetting.roundCorner * Block.BasicBlock.blockSetting.blockScale, Block.BasicBlock.blockSetting.roundCorner * Block.BasicBlock.blockSetting.blockScale],
                    ["arcTo", (240 + IDE.GeneralIDE.ICONSIZE) * Block.BasicBlock.blockSetting.blockScale, 100 * Block.BasicBlock.blockSetting.blockScale, ((240 + IDE.GeneralIDE.ICONSIZE) - Block.BasicBlock.blockSetting.roundCorner) * Block.BasicBlock.blockSetting.blockScale, 100 * Block.BasicBlock.blockSetting.blockScale, Block.BasicBlock.blockSetting.roundCorner * Block.BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0, 100 * Block.BasicBlock.blockSetting.blockScale, 0, (100 - Block.BasicBlock.blockSetting.roundCorner) * Block.BasicBlock.blockSetting.blockScale, Block.BasicBlock.blockSetting.roundCorner * Block.BasicBlock.blockSetting.blockScale],
                    ["arcTo", 0, 0, Block.BasicBlock.blockSetting.roundCorner * Block.BasicBlock.blockSetting.blockScale, 0, Block.BasicBlock.blockSetting.roundCorner * Block.BasicBlock.blockSetting.blockScale],
                    ["closePath"]
                ],
                hitAreaBackground: [
                    0 * Block.BasicBlock.blockSetting.blockScale, 0 * Block.BasicBlock.blockSetting.blockScale,
                    Math.round((240 + IDE.GeneralIDE.ICONSIZE) * Block.BasicBlock.blockSetting.blockScale), 0 * Block.BasicBlock.blockSetting.blockScale,
                    Math.round((240 + IDE.GeneralIDE.ICONSIZE) * Block.BasicBlock.blockSetting.blockScale), 100 * Block.BasicBlock.blockSetting.blockScale,
                    0 * Block.BasicBlock.blockSetting.blockScale, 100 * Block.BasicBlock.blockSetting.blockScale,
                    0 * Block.BasicBlock.blockSetting.blockScale, 0 * Block.BasicBlock.blockSetting.blockScale
                ]
            };
            this.textInputSetting = {
                sizeGrid: "0,10,0,10",
                font: "Arial",
                fontSize: 20,
                bold: true,
                color: "#000000",
                restrict: "0-9"
            };
        }
        BlockFactory.prototype.create = function (type) {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSettings = [];
            var targetSettings = [];
            var block;
            if (type == "goUp" ||
                type == "goDown" ||
                type == "goLeft" ||
                type == "goRight" ||
                type == "goForward" ||
                type == "rotate_anticlockwise" ||
                type == "rotate_clockwise" ||
                type == "wait") {
                switch (type) {
                    case "goUp":
                        textureSettings.push({
                            name: "up",
                            path: "materials/texture_up.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    case "goDown":
                        textureSettings.push({
                            name: "down",
                            path: "materials/texture_down.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    case "goLeft":
                        textureSettings.push({
                            name: "left",
                            path: "materials/texture_left.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    case "goRight":
                        textureSettings.push({
                            name: "right",
                            path: "materials/texture_right.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    case "goForward":
                        textureSettings.push({
                            name: "forward",
                            path: "materials/texture_move.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    case "rotate_anticlockwise":
                        textureSettings.push({
                            name: "rotate_anticlockwise",
                            path: "materials/texture_rotate_anticlockwise.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    case "rotate_clockwise":
                        textureSettings.push({
                            name: "rotate_clockwise",
                            path: "materials/texture_rotate_clockwise.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    case "wait":
                        textureSettings.push({
                            name: "wait",
                            path: "materials/texture_wait.png",
                            x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale),
                            y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                            width: IDE.GeneralIDE.ICONSIZE,
                            height: IDE.GeneralIDE.ICONSIZE
                        });
                        break;
                    default:
                        break;
                }
                var backgroundSetting = {
                    blockFillStyle: this.chooseBlockFillStyle(type),
                    hitAreaBackground: this.blockBackground.hitAreaBackground,
                    pathBackground: this.blockBackground.pathBackground
                };
                backgroundSettings.push(backgroundSetting);
                inputSettings.push({
                    inputBoxSetting: {
                        name: "input1",
                        path: "materials/input.png",
                        x: Math.round(100 * Block.BasicBlock.blockSetting.blockScale + IDE.GeneralIDE.ICONSIZE + (100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                        y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE / 2) / 2),
                        width: IDE.GeneralIDE.ICONSIZE,
                        height: Math.round(IDE.GeneralIDE.ICONSIZE / 2)
                    },
                    textInputSetting: this.textInputSetting
                });
                targetSettings.push({
                    name: "target1",
                    path: "materials/btn_blank.png",
                    x: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                    y: Math.round((100 * Block.BasicBlock.blockSetting.blockScale - IDE.GeneralIDE.ICONSIZE) / 2),
                    width: IDE.GeneralIDE.ICONSIZE,
                    height: IDE.GeneralIDE.ICONSIZE,
                    stateNum: 1
                });
                var generalListSetting = {
                    width: (20 + 5 * IDE.GeneralIDE.ICONSIZE) * Block.BasicBlock.blockSetting.blockScale,
                    height: 100 * Block.BasicBlock.blockSetting.blockScale,
                    vScrollBarSkin: null,
                    hScrollBarSkin: "",
                    spaceX: 0,
                    spaceY: 0,
                    repeatX: 3,
                    repeatY: 1,
                    bgColor: "#ffffff"
                };
                var generalListItemSetting = {
                    width: IDE.GeneralIDE.ICONSIZE,
                    height: IDE.GeneralIDE.ICONSIZE,
                    backgroundNormal: null,
                    backgroundHighlight: "#D7D7D7",
                    imageSize: IDE.GeneralIDE.ICONSIZE
                };
                var block_1 = new Block.CommandBlock(textureSettings, inputSettings, backgroundSettings, null, targetSettings, generalListSetting, generalListItemSetting);
                block_1.initialize();
                return block_1;
            }
        };
        BlockFactory.prototype.chooseBlockFillStyle = function (type) {
            var blockSet;
            blockSet = Block.blockSet["motion"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#f46767";
                    }
                }
            }
            blockSet = Block.blockSet["look"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#fa800a";
                    }
                }
            }
            blockSet = Block.blockSet["control"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#6bcd47";
                    }
                }
            }
            blockSet = Block.blockSet["event"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#608fee";
                    }
                }
            }
            blockSet = Block.blockSet["pen"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#68cdff";
                    }
                }
            }
            blockSet = Block.blockSet["music"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#a073ff";
                    }
                }
            }
            blockSet = Block.blockSet["variable"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#d92323";
                    }
                }
            }
            blockSet = Block.blockSet["math"];
            if (blockSet.length != 0) {
                for (var i = 0; i < blockSet.length; i++) {
                    if (blockSet[i].name == type) {
                        return "#e76cea";
                    }
                }
            }
            blockSet = Block.blockSet["sense"];
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
    Block.BlockFactory = BlockFactory;
})(Block || (Block = {}));
/*
module Block {
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
            y: BasicBlock.blockSetting.blockScale * 50 + 30,
            width: BasicBlock.blockSetting.blockScale * 50,
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
                ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 46 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 57 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 57 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 4 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 5 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 7 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
            ]
        }

        private blockBackground2: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 46 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 57 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 57 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 4 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
            ]
        }

        private blockBackgroundForLoop: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 107 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 105 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 75 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 83 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 32 * BasicBlock.blockSetting.blockScale, 67 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 30 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 21 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                100 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                107 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                107 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                100 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,

                75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,

                25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,

                7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
            ]
        }
        private blockBackgroundForForeverLoop: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 75 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 83 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 32 * BasicBlock.blockSetting.blockScale, 67 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 30 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 21 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,

                75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                32 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                32 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,

                25 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,

                7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
            ]
        }

        private blockBackgroundForIfelse1: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 25 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 32 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 32 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 30 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 25 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 21 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 46 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 7 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 5 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                32 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                32 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                25 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                7 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                0 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
            ]
        }

        private blockBackgroundForIfelse2: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 54 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 75 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 82 * BasicBlock.blockSetting.blockScale, 67 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 80 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 71 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 50 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 57 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 55 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 54 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                82 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                82 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,

                82 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                82 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                75 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,

                50 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                57 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                50 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
            ]
        }

        private blockBackgroundForIfelse3: BackgroundSetting = {
            blockFillStyle: null,
            pathBackground: [
                ["moveTo", 104 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 125 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 125 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 125 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 132 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 132 * BasicBlock.blockSetting.blockScale, 17 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 132 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 130 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 125 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 125 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 121 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale, 96 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale, 107 * BasicBlock.blockSetting.blockScale, 83 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 105 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale, 107 * BasicBlock.blockSetting.blockScale, 33 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 107 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 105 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale, 2 * BasicBlock.blockSetting.blockScale],
                ["lineTo", 100 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale],
                ["arcTo", 100 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 104 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale, 4 * BasicBlock.blockSetting.blockScale],
                ["closePath"]
            ],
            hitAreaBackground: [
                200 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                225 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale,
                225 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                232 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                232 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                225 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                225 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                200 * BasicBlock.blockSetting.blockScale, 100 * BasicBlock.blockSetting.blockScale,
                200 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                207 * BasicBlock.blockSetting.blockScale, 85 * BasicBlock.blockSetting.blockScale,
                207 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                200 * BasicBlock.blockSetting.blockScale, 65 * BasicBlock.blockSetting.blockScale,
                200 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                207 * BasicBlock.blockSetting.blockScale, 35 * BasicBlock.blockSetting.blockScale,
                207 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                200 * BasicBlock.blockSetting.blockScale, 15 * BasicBlock.blockSetting.blockScale,
                200 * BasicBlock.blockSetting.blockScale, 0 * BasicBlock.blockSetting.blockScale
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
*/ 
//# sourceMappingURL=blockfactory.js.map