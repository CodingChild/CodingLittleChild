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
            var backgroundSetting = {
                blockFillStyle: null,
                hitAreaBackground: null,
                pathBackground: null
            };
            backgroundSetting.hitAreaBackground = this.blockBackground1.hitAreaBackground;
            backgroundSetting.pathBackground = this.blockBackground1.pathBackground;
            var blockFillStyle = this.chooseBlockFillStyle(type);
            backgroundSetting.blockFillStyle = blockFillStyle;
            if (type == "move") {
                textureSettings.push({
                    name: "move",
                    path: "materials/texture_move.png",
                    x: 6,
                    y: 6,
                    width: 45,
                    height: 30
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting1
                });
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "setHeading") {
                textureSettings.push({
                    name: "anglepan",
                    path: "materials/anglepan.png",
                    x: 13,
                    y: 3,
                    width: 32,
                    height: 32
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting1
                });
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
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
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
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
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "setSize") {
                var sliderSetting = void 0;
                textureSettings.push({
                    name: "setsize",
                    path: "materials/setsize.png",
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
                var blockSize = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, sliderSetting);
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
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
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
                backgroundSetting.hitAreaBackground = this.blockBackground2.hitAreaBackground;
                backgroundSetting.pathBackground = this.blockBackground2.pathBackground;
                return new Marmot.HeadCommandBlock(textureSettings, inputSettings, backgroundSetting, null);
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
                backgroundSetting.hitAreaBackground = this.blockBackground2.hitAreaBackground;
                backgroundSetting.pathBackground = this.blockBackground2.pathBackground;
                return new Marmot.HeadCommandBlock(textureSettings, inputSettings, backgroundSetting, null);
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
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
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
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
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
                        return "#eeb35c";
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
                        return "#2bcaa7";
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