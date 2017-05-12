var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var HSlider = Laya.HSlider;
    var HitArea = Laya.HitArea;
    var Event = Laya.Event;
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block(textureSettings, inputSettings, backgroundSettings, sliderSetting, comboBoxSlotSetting) {
            var _this = _super.call(this) || this;
            _this.textureSettings = textureSettings;
            _this.inputSettings = inputSettings;
            _this.backgroundSettings = backgroundSettings;
            _this.sliderSetting = sliderSetting;
            _this.comboBoxSlotSetting = comboBoxSlotSetting;
            _this.width = 50 * Block.blockSetting.blockScale;
            _this.height = 50 * Block.blockSetting.blockScale;
            _this.myWidth = _this.width;
            _this.myHeight = _this.height;
            _this.lastAttachTarget = null;
            _this.isHighlight = false;
            return _this;
        }
        Block.prototype.initialize = function () {
            this.drawBackgroundNormal();
            this.drawHitArea();
            if (this.textureSettings.length != 0) {
                this.drawTextures();
            }
            if (this.inputSettings.length != 0) {
                this.drawInputs();
            }
            if (this.sliderSetting != null) {
                this.drawSlider();
            }
            if (this.comboBoxSlotSetting != null) {
                this.drawComboBox();
            }
            this.attachPoints = this.getAttachPoints();
            this.setEventListening();
        };
        Block.prototype.evaluate = function () {
        };
        Block.prototype.receiver = function () {
            var headBlock = this.getTopBlock();
            return headBlock.parent.parent.owner;
        };
        /**
        *返回所有父块节点。
        */
        Block.prototype.getAllParentBlocks = function () {
            var parentBlocks = [];
            var parentBlock = this;
            while (parentBlock.parent instanceof Block) {
                parentBlock = parentBlock.parent;
                parentBlocks.push(parentBlock);
            }
            return parentBlocks;
        };
        /**
        * print width and height of all blocks in scriptArea
        */
        Block.prototype.print = function () {
            /*
            let top  = this.getTopBlock();
            Laya.Log.maxCount = 40;
            Laya.Log.clear();
            let blocks  = [];
            let i = 1;
            (top.parent._childs as Block[]).forEach((childtop)=>{
                Laya.Log.print("head");
                Laya.Log.print(i + ":" + childtop.width + " " + childtop.height);
                i ++;
                childtop.getAllBlockChildren().forEach((child)=>{
                    Laya.Log.print(i + ":" + child.width + " " + child.height);
                    i ++;
                })
                Laya.Log.print("---------");
                i = 1;
            });
            */
        };
        /**
        * answer my all block children, except blocks in commandslot
        */
        Block.prototype.getAllBlockChildren = function () {
            var children = [];
            var nextBlockChild = this.getNextBlockChild();
            if (nextBlockChild != null) {
                children.push(this.getNextBlockChild());
            }
            else {
                return [];
            }
            children.forEach(function (child) {
                children = children.concat(child.getAllBlockChildren());
            });
            return children;
        };
        /**
        * answer my all block children, including blocks in commandslot
        */
        Block.prototype.getAllNestedBlockChildren = function () {
            var children = [];
            if (this instanceof Marmot.LoopCommandBlock) {
                var nestedFirstChild = this.commandSlot.getNextBlockChild();
                if (nestedFirstChild != null) {
                    children = children.concat(nestedFirstChild.blockSequence());
                }
            }
            var nextBlockChild = this.getNextBlockChild();
            if (nextBlockChild != null) {
                children.push(this.getNextBlockChild());
            }
            children.forEach(function (child) {
                children = children.concat(child.getAllNestedBlockChildren());
            });
            return children;
        };
        /**
        * answer my fisrt block child
        */
        Block.prototype.getNextBlockChild = function () {
            for (var i = 0; i < this._childs.length; i++) {
                if (this._childs[i] instanceof Block) {
                    return this._childs[i];
                }
            }
            return null;
        };
        /**
        * answer my top block parent
        */
        Block.prototype.getTopBlock = function () {
            var topBlock = this;
            while (topBlock.parent instanceof Block) {
                topBlock = topBlock.parent;
            }
            return topBlock;
        };
        /**
        * answer my last block child
        */
        Block.prototype.getTailBlock = function () {
            var tailBlock = this;
            var tempBlock = tailBlock.getNextBlockChild();
            while (tempBlock != null) {
                tailBlock = tempBlock;
                tempBlock = tempBlock.getNextBlockChild();
            }
            return tailBlock;
        };
        Block.prototype.drawBackgroundNormal = function () {
            var _this = this;
            this.backgroundSettings.forEach(function (backgroundSetting) {
                _this.graphics.drawPath(0, 0, backgroundSetting.pathBackground, {
                    fillStyle: backgroundSetting.blockFillStyle
                }, {
                    "strokeStyle": Block.blockSetting.blockStrokeStyleNormal,
                    "lineWidth": Block.blockSetting.blockLineWidthNormal
                });
            });
        };
        Block.prototype.drawBackgroundHighlight = function () {
            var _this = this;
            this.backgroundSettings.forEach(function (backgroundSetting) {
                _this.graphics.drawPath(0, 0, backgroundSetting.pathBackground, {
                    fillStyle: backgroundSetting.blockFillStyle
                }, {
                    "strokeStyle": Block.blockSetting.blockStrokeStyleHighlight,
                    "lineWidth": Block.blockSetting.blockLineWidthHighlight
                });
            });
        };
        Block.prototype.drawTextures = function () {
            var _this = this;
            this.textureSettings.forEach(function (textureSetting) {
                var t = Laya.loader.getRes(textureSetting.path);
                _this.graphics.drawTexture(t, textureSetting.x * Block.blockSetting.blockScale, textureSetting.y * Block.blockSetting.blockScale, textureSetting.width * Block.blockSetting.blockScale, textureSetting.height * Block.blockSetting.blockScale);
            });
        };
        Block.prototype.drawHitArea = function () {
            var hit = new HitArea();
            this.backgroundSettings.forEach(function (backgroundSetting) {
                hit.hit.drawPoly(0, 0, backgroundSetting.hitAreaBackground, "#ffff00");
            });
            this.hitArea = hit;
        };
        Block.prototype.drawInputs = function () {
            var _this = this;
            this.inputSettings.forEach(function (inputSetting) {
                _this.addChild(new Marmot.LineInput(inputSetting));
            });
        };
        Block.prototype.drawComboBox = function () {
            this.addChild(new Marmot.ComboBoxSlot(this.comboBoxSlotSetting));
        };
        Block.prototype.onMouseDown = function (e) {
            this.updateLayer();
            if (this.hitTestPoint(e.stageX, e.stageY)) {
                this.addHighlight(this);
                this.startDrag();
            }
            e.stopPropagation();
        };
        Block.prototype.updateLayer = function () {
            var topValue = 0;
            var tempValue = 0;
            var ide = Marmot.IDE.getIDE();
            ide.scriptArea.content._childs.forEach(function (child) {
                tempValue = child.zOrder;
                if (tempValue > topValue) {
                    topValue = tempValue;
                }
            });
            this.zOrder = topValue + 1;
            this.updateZOrder();
        };
        Block.prototype.onDragMove = function (e) {
            var target = null;
            target = this.closestAttachTarget();
            if (target == null) {
                if (this.lastAttachTarget != null) {
                    this.lastAttachTarget.attachBlock.removeHighlight(this.lastAttachTarget.attachBlock);
                    this.lastAttachTarget = null;
                }
            }
            else {
                if (this.lastAttachTarget != null) {
                    this.lastAttachTarget.attachBlock.removeHighlight(this.lastAttachTarget.attachBlock);
                }
                target.attachBlock.drawHook(target.attachHook.attachCoordinate);
                this.lastAttachTarget = target;
            }
        };
        Block.prototype.drawSlider = function () {
            var vs = new HSlider();
            vs.skin = this.sliderSetting.path;
            vs.width = this.sliderSetting.width;
            vs.pos(this.sliderSetting.x, this.sliderSetting.y);
            vs.sizeGrid = "0,10,0,10";
            vs.min = this.sliderSetting.min;
            vs.max = this.sliderSetting.max;
            vs.value = this.sliderSetting.initialValue;
            vs.tick = this.sliderSetting.tick;
            vs.name = this.sliderSetting.name;
            vs.visible = false;
            vs.changeHandler = new Handler(this, this.sliderSetting.onChange);
            this.addChild(vs);
        };
        Block.prototype.addHighlight = function (block) {
            block.graphics.clear();
            block.drawBackgroundHighlight();
            block.drawTextures();
            this.isHighlight = true;
        };
        Block.prototype.removeHighlight = function (block) {
            block.graphics.clear();
            block.drawBackgroundNormal();
            block.drawTextures();
            this.isHighlight = false;
        };
        Block.prototype.setEventListening = function () {
            this.on(Event.DRAG_START, this, this.onDragStart);
            this.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.on(Event.DRAG_END, this, this.onDragEnd);
            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        return Block;
    }(Marmot.SyntaxElement));
    Block.blockSetting = {
        blockScale: 3,
        blockStrokeStyleNormal: "#000000",
        blockStrokeStyleHighlight: "#fcff00",
        blockLineWidthHighlight: 8,
        blockLineWidthNormal: 4,
        distanceBetweenBlocks: 1
    };
    Block.minimumHookDistance = 50;
    Marmot.Block = Block;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=block.js.map