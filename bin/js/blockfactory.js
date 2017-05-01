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
                    this.getChildByName("input").text = value.toString();
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
                fontSize: 15,
                bold: true,
                color: "#606368",
                restrict: "0-9"
            };
        }
        BlockFactory.prototype.create = function (type) {
            if (type == "Move") {
                return this.createBlockMove();
            }
            else if (type == "SetHeading") {
                return this.createBlockSetHeading();
            }
            else if (type == "Show") {
                return this.createBlockShow();
            }
            else if (type == "Hide") {
                return this.createBlockHide();
            }
            else if (type == "Resize") {
                return this.createBlockResize();
            }
            else if (type == "wait") {
                return this.createBlockWait();
            }
            else if (type == "play") {
                return this.createBlockPlay();
            }
        };
        BlockFactory.prototype.createBlockMove = function () {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
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
            backgroundSetting = this.blockBackground1;
            return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
        };
        BlockFactory.prototype.createBlockSetHeading = function () {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
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
            backgroundSetting = this.blockBackground1;
            return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
        };
        BlockFactory.prototype.createBlockShow = function () {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
            textureSettings.push({
                name: "show",
                path: "materials/show.png",
                x: 10,
                y: 14,
                width: 39,
                height: 17
            });
            backgroundSetting = this.blockBackground1;
            return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
        };
        BlockFactory.prototype.createBlockHide = function () {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
            textureSettings.push({
                name: "hide",
                path: "materials/hide.png",
                x: 10,
                y: 14,
                width: 39,
                height: 17
            });
            backgroundSetting = this.blockBackground1;
            return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
        };
        BlockFactory.prototype.createBlockResize = function () {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
            var sliderSetting;
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
            backgroundSetting = this.blockBackground1;
            sliderSetting = this.sliderSetting1;
            var blockSize = new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, sliderSetting);
            var input = blockSize.getChildByName("input");
            var vslider = blockSize.getChildByName("vslider");
            input.editable = false;
            input.on(Laya.Event.FOCUS, vslider, function () {
                vslider.visible = true;
            });
            vslider.on(Laya.Event.CHANGED, vslider, function () {
                this.visible = false;
            });
            return blockSize;
        };
        BlockFactory.prototype.createBlockWait = function () {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
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
            backgroundSetting = this.blockBackground1;
            return new Marmot.CommandBlock(textureSettings, inputSettings, backgroundSetting, null);
        };
        BlockFactory.prototype.createBlockPlay = function () {
            var textureSettings = [];
            var inputSettings = [];
            var backgroundSetting;
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
        };
        return BlockFactory;
    }());
    Marmot.BlockFactory = BlockFactory;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=blockfactory.js.map