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
                onChange: function (value) {
                    this.getChildByName("input").textinput.text = value.toString();
                }
            };
            this.blockBackground1 = {
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
                restrict: "0-9"
            };
        }
        BlockFactory.prototype.create = function (type) {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
            backgroundSetting = this.blockBackground1;
            if (type == "Move") {
                textureSettings.push({
                    name: "move",
                    path: "materials/walk.png",
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
            else if (type == "SetHeading") {
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
            else if (type == "Show") {
                textureSettings.push({
                    name: "show",
                    path: "materials/show.png",
                    x: 10,
                    y: 14,
                    width: 39,
                    height: 17
                });
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "Hide") {
                textureSettings.push({
                    name: "hide",
                    path: "materials/hide.png",
                    x: 10,
                    y: 14,
                    width: 39,
                    height: 17
                });
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "Resize") {
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
                    textInputSetting: this.textInputSetting1
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
                    this.visible = false;
                });
                return blockSize;
            }
            else if (type == "wait") {
                textureSettings.push({
                    name: "wait",
                    path: "materials/wait.png",
                    x: 12,
                    y: 3,
                    width: 30,
                    height: 30
                });
                inputSettings.push({
                    resourceSetting: this.inputSetting1,
                    textInputSetting: this.textInputSetting1
                });
                return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
            else if (type == "play") {
                textureSettings.push({
                    name: "play",
                    path: "materials/play.png",
                    x: 5,
                    y: 5,
                    width: 39,
                    height: 39
                });
                backgroundSetting = this.blockBackground2;
                return new Marmot.HeadCommandBlock(textureSettings, inputSettings, backgroundSetting, null);
            }
        };
        return BlockFactory;
    }());
    Marmot.BlockFactory = BlockFactory;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=blockfactory.js.map