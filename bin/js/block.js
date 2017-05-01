var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Event = Laya.Event;
    var TextInput = Laya.TextInput;
    var VSlider = Laya.VSlider;
    var Sprite = Laya.Sprite;
    var HitArea = Laya.HitArea;
    var Rectangle = Laya.Rectangle;
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block(textureSettings, inputSettings, backgroundSetting, sliderSetting) {
            var _this = _super.call(this) || this;
            _this.textureSettings = textureSettings;
            _this.inputSettings = inputSettings;
            _this.backgroundSetting = backgroundSetting;
            _this.sliderSetting = sliderSetting;
            _this.actualWidth = 50 * Block.blockSetting.blockScale;
            _this.actualHeight = 50 * Block.blockSetting.blockScale;
            _this.lastAttachTarget = null;
            _this.drawBackgroundNormal();
            _this.drawHitArea();
            if (_this.textureSettings.length != 0) {
                _this.drawTextures();
            }
            if (_this.inputSettings.length != 0) {
                _this.drawInputs();
            }
            if (_this.sliderSetting != null) {
                _this.drawSlider();
            }
            _this.attachPoints = _this.getAttachPoints();
            _this.setEventListening();
            return _this;
        }
        /**
        *返回所有子孙块节点。
        */
        Block.prototype.getAllBlockChildren = function () {
            var children = [];
            this._childs.forEach(function (child) {
                if (child instanceof Block) {
                    children.push(child);
                }
            });
            children.forEach(function (child) {
                children = children.concat(child.getAllBlockChildren());
            });
            return children;
        };
        /**
        *返回第一个子块节点。
        */
        Block.prototype.getNextBlockChild = function () {
            this._childs.forEach(function (child) {
                if (child instanceof Block) {
                    return child;
                }
            });
            return null;
        };
        Block.prototype.drawBackgroundNormal = function () {
            this.graphics.drawPath(0, 0, this.backgroundSetting.pathBackground, {
                fillStyle: Block.blockSetting.blockFillStyle
            }, {
                "strokeStyle": Block.blockSetting.blockStrokeStyleNormal,
                "lineWidth": Block.blockSetting.blockLineWidthNormal
            });
        };
        Block.prototype.drawBackgroundHighlight = function () {
            this.graphics.drawPath(0, 0, this.backgroundSetting.pathBackground, {
                fillStyle: Block.blockSetting.blockFillStyle
            }, {
                "strokeStyle": Block.blockSetting.blockStrokeStyleHighlight,
                "lineWidth": Block.blockSetting.blockLineWidthHighlight
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
            hit.hit.drawPoly(0, 0, this.backgroundSetting.hitAreaBackground, "#ffff00");
            this.hitArea = hit;
        };
        Block.prototype.drawInputs = function () {
            var _this = this;
            this.inputSettings.forEach(function (inputSetting) {
                var ti = new TextInput();
                ti.skin = inputSetting.resourceSetting.path;
                ti.name = inputSetting.resourceSetting.name;
                ti.sizeGrid = inputSetting.textInputSetting.sizeGrid;
                ti.font = inputSetting.textInputSetting.font;
                ti.fontSize = inputSetting.textInputSetting.fontSize;
                ti.bold = inputSetting.textInputSetting.bold;
                ti.color = inputSetting.textInputSetting.color;
                ti.align = "center";
                ti.restrict = inputSetting.textInputSetting.restrict;
                ti.valign = "middle";
                ti.pos(inputSetting.resourceSetting.x * Block.blockSetting.blockScale, inputSetting.resourceSetting.y * Block.blockSetting.blockScale);
                ti.size(inputSetting.resourceSetting.width * Block.blockSetting.blockScale, inputSetting.resourceSetting.height * Block.blockSetting.blockScale);
                _this.addChild(ti);
            });
        };
        Block.prototype.onMouseDown = function (e) {
            this.updateLayer();
            if (this.hitTestPoint(e.stageX, e.stageY)) {
                this.addHighlight(this);
                Rectangle.TEMP.setTo(50, 50, 550, 200);
                this.startDrag(Rectangle.TEMP, true, 100);
            }
        };
        Block.prototype.updateLayer = function () {
            var topValue = 0;
            var num = this.parent.numChildren;
            for (var i = 0; i < num; i++) {
                var tempValue = this.parent.getChildAt(i).zOrder;
                if (tempValue > topValue) {
                    topValue = tempValue;
                }
            }
            this.zOrder = topValue + 1;
            this.updateZOrder();
        };
        Block.prototype.onMouseUp = function (e) {
            if (this.hitTestPoint(e.stageX, e.stageY)) {
                this.removeHighlight(this);
            }
        };
        Block.prototype.onDragMove = function (e) {
            var target = null;
            target = this.closestAttachTarget();
            if (target == null) {
                if (this.lastAttachTarget != null) {
                    this.removeHighlight(this.lastAttachTarget.attachBlock);
                    this.lastAttachTarget = null;
                }
            }
            else {
                if (this.lastAttachTarget != null) {
                    this.removeHighlight(this.lastAttachTarget.attachBlock);
                }
                target.attachBlock.drawHook(target.attachHook.attachCoordinate);
                this.lastAttachTarget = target;
            }
        };
        Block.prototype.drawSlider = function () {
            var vs = new VSlider();
            vs.skin = this.sliderSetting.path;
            vs.height = this.sliderSetting.height;
            vs.pos(this.sliderSetting.x, this.sliderSetting.y);
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
        };
        Block.prototype.removeHighlight = function (block) {
            block.graphics.clear();
            block.drawBackgroundNormal();
            block.drawTextures();
        };
        Block.prototype.setEventListening = function () {
            this.on(Event.DRAG_START, this, this.onDragStart);
            this.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.on(Event.DRAG_END, this, this.onDragEnd);
            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Event.MOUSE_UP, this, this.onMouseUp);
        };
        return Block;
    }(Sprite));
    Block.blockSetting = {
        blockScale: 1.5,
        blockFillStyle: "#1976D2",
        blockStrokeStyleNormal: "#000000",
        blockStrokeStyleHighlight: "#fcff00",
        blockLineWidthHighlight: 8,
        blockLineWidthNormal: 4
    };
    Block.minimumHookDistance = 50;
    Marmot.Block = Block;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=block.js.map