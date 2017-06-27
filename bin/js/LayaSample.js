var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Handler = Laya.Handler;
var Block = Marmot.Block;
var TextInput = Laya.TextInput;
var VSlider = Laya.VSlider;
// 不支持WebGL时自动切换至Canvas
Laya.init(740, 400, WebGL);
Laya.stage.alignV = Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Stage.ALIGN_CENTER;
Laya.stage.scaleMode = "showall";
Laya.stage.bgColor = "#90CAF9";
Laya.loader.load([{ url: "res/atlas/comp.json", type: laya.net.Loader.ATLAS }, { url: "res/atlas/materials.json", type: laya.net.Loader.ATLAS }], Handler.create(this, this.createBlockFactory));
function createBlockFactory() {
    var blockFactory = new Marmot.BlockFactory();
    var blockMove = blockFactory.create("Move");
    blockMove.pos(100, 100);
    blockMove.pivot(0, 0);
    Laya.stage.addChild(blockMove);
    var blockSetHeading = blockFactory.create("SetHeading");
    blockSetHeading.pos(400, 100);
    blockSetHeading.pivot(0, 0);
    Laya.stage.addChild(blockSetHeading);
    var blockShow = blockFactory.create("Show");
    blockShow.pos(200, 100);
    blockShow.pivot(0, 0);
    Laya.stage.addChild(blockShow);
    var blockHide = blockFactory.create("Hide");
    blockHide.pos(200, 200);
    blockHide.pivot(0, 0);
    Laya.stage.addChild(blockHide);
    var blockResize = blockFactory.create("Resize");
    blockResize.pos(200, 200);
    blockResize.pivot(0, 0);
    Laya.stage.addChild(blockResize);
}
/*
module Marmot {
    import Block = Laya.Block;
    import Stage = Laya.Stage;
    import WebGL = Laya.WebGL;
    import Handler = Laya.Handler;
    import Texture = Laya.Texture;
    import TextInput = Laya.TextInput;
    import Event = Laya.Event;
    import Browser = Laya.Browser;
    import HitArea = Laya.HitArea;
    import Graphics = Laya.Graphics;
    import VSlider = Laya.VSlider;


    export class Block_DrawShapes {

        // share attributes
        private static scale: number = 1.5;
        private static blockFillStyle: string = "#1976D2";
        private static blockStrokeStyleWhenDragEnd: string = "#000000";
        private static blockStrokeStyleWhenDragStart: string = "#fcff00";
        private static blockLineWidth: number = 8;
        private static PATH_INPUT = "materials/input.png";

        // Block Move
        private sp_move: Block;
        private static PATH_BACKGROUND_MOVE: [any] = [
            ["moveTo", 4 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale],
            ["lineTo", 46 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale],
            ["arcTo", 50 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale, 4 * Block_DrawShapes.scale, 4 * Block_DrawShapes.scale],
            ["lineTo", 50 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale],
            ["arcTo", 57 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale, 57 * Block_DrawShapes.scale, 17 * Block_DrawShapes.scale, 2 * Block_DrawShapes.scale],
            ["lineTo", 57 * Block_DrawShapes.scale, 33 * Block_DrawShapes.scale],
            ["arcTo", 57 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale, 2 * Block_DrawShapes.scale],
            ["lineTo", 50 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale],
            ["lineTo", 50 * Block_DrawShapes.scale, 46 * Block_DrawShapes.scale],
            ["arcTo", 50 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale, 46 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale, 4 * Block_DrawShapes.scale],
            ["lineTo", 4 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale],
            ["arcTo", 0 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale, 46 * Block_DrawShapes.scale, 4 * Block_DrawShapes.scale],
            ["lineTo", 0 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale],
            ["lineTo", 5 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale],
            ["arcTo", 7 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale, 7 * Block_DrawShapes.scale, 33 * Block_DrawShapes.scale, 2 * Block_DrawShapes.scale],
            ["lineTo", 7 * Block_DrawShapes.scale, 17 * Block_DrawShapes.scale],
            ["arcTo", 7 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale, 5 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale, 2 * Block_DrawShapes.scale],
            ["lineTo", 0 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale],
            ["lineTo", 0 * Block_DrawShapes.scale, 4 * Block_DrawShapes.scale],
            ["arcTo", 0 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale, 4 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale, 4 * Block_DrawShapes.scale],
            ["closePath"]
        ];
        private static HITAREA_MOVE = [0 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale,
        50 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale,
        50 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale,
        57 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale,
        57 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale,
        57 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale,
        50 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale,
        0 * Block_DrawShapes.scale, 50 * Block_DrawShapes.scale,
        0 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale,
        7 * Block_DrawShapes.scale, 35 * Block_DrawShapes.scale,
        7 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale,
        0 * Block_DrawShapes.scale, 15 * Block_DrawShapes.scale,
        0 * Block_DrawShapes.scale, 0 * Block_DrawShapes.scale];
        private static TEXTURE_PATH_MOVE = "materials/walk.png";
        private static TEXTURE_X_MOVE = 6;
        private static TEXTURE_Y_MOVE = 6;
        private static TEXTURE_WIDTH_MOVE = 45;
        private static TEXTURE_HEIGHT_MOVE = 30;
        private static INPUT_X_MOVE = 10;
        private static INPUT_Y_MOVE = 35;
        private static INPUT_WIDTH_MOVE = 35;
        private static INPUT_HEIGHT_MOVE = 11;

        // Block SetHeading
        private sp_setHeading: Block;
        private static PATH_BACKGROUND_SETHEADING = Block_DrawShapes.PATH_BACKGROUND_MOVE;
        private static HITAREA_SETHEADING = Block_DrawShapes.HITAREA_MOVE;
        private static TEXTURE_PATH_SETHEADING = "materials/anglepan.png";
        private static TEXTURE_X_SETHEADING = 13;
        private static TEXTURE_Y_SETHEADING = 4;
        private static TEXTURE_WIDTH_SETHEADING = 32;
        private static TEXTURE_HEIGHT_SETHEADING = 32;
        private static INPUT_X_SETHEADING = Block_DrawShapes.INPUT_X_MOVE;
        private static INPUT_Y_SETHEADING = Block_DrawShapes.INPUT_Y_MOVE;
        private static INPUT_WIDTH_SETHEADING = Block_DrawShapes.INPUT_WIDTH_MOVE;
        private static INPUT_HEIGHT_SETHEADING = Block_DrawShapes.INPUT_HEIGHT_MOVE;

        // Block Show
        private sp_Show: Block;
        private static PATH_BACKGROUND_Show = Block_DrawShapes.PATH_BACKGROUND_MOVE;
        private static HITAREA_Show = Block_DrawShapes.HITAREA_MOVE;
        private static TEXTURE_PATH_Show = "materials/show.png";
        private static TEXTURE_X_Show = 10;
        private static TEXTURE_Y_Show = 14;
        private static TEXTURE_WIDTH_Show = 39;
        private static TEXTURE_HEIGHT_Show = 17;

        // Block Hide
        private sp_Hide: Block;
        private static PATH_BACKGROUND_Hide = Block_DrawShapes.PATH_BACKGROUND_MOVE;
        private static HITAREA_Hide = Block_DrawShapes.HITAREA_MOVE;
        private static TEXTURE_PATH_Hide = "materials/hide.png";
        private static TEXTURE_X_Hide = 10;
        private static TEXTURE_Y_Hide = 14;
        private static TEXTURE_WIDTH_Hide = 39;
        private static TEXTURE_HEIGHT_Hide = 17;

        // Block SetSize
        private sp_SetSize: Block;
        private static PATH_BACKGROUND_SetSize = Block_DrawShapes.PATH_BACKGROUND_MOVE;
        private static HITAREA_SetSize = Block_DrawShapes.HITAREA_MOVE;
        private static TEXTURE_PATH_SetSize = "materials/setsize.png";
        private static TEXTURE_X_SetSize = 12;
        private static TEXTURE_Y_SetSize = 2;
        private static TEXTURE_WIDTH_SetSize = 31;
        private static TEXTURE_HEIGHT_SetSize = 31;
        private static INPUT_X_SetSize = Block_DrawShapes.INPUT_X_MOVE;
        private static INPUT_Y_SetSize = Block_DrawShapes.INPUT_Y_MOVE;
        private static INPUT_WIDTH_SetSize = Block_DrawShapes.INPUT_WIDTH_MOVE;
        private static INPUT_HEIGHT_SetSize = Block_DrawShapes.INPUT_HEIGHT_MOVE;
        private static SLIDER_PATH_SetSize = "comp/vslider.png";

        constructor() {
            // 不支持WebGL时自动切换至Canvas
            Laya.init(740, 400, WebGL);

            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;

            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#90CAF9";
            Laya.loader.load([{ url: "res/atlas/comp.json", type: laya.net.Loader.ATLAS }, { url: "res/atlas/materials.json", type: laya.net.Loader.ATLAS }], Handler.create(this, this.createBlocks));
        }

        private createBlocks() {
            this.drawBlockMove();
            this.drawSetHeading();
            this.drawShow();
            this.drawHide();
            this.drawResize();
        }

        private drawBlockMoveBackgroundWhenDragEnd(s: Block): void {
            s.graphics.drawPath(0, 0, Block_DrawShapes.PATH_BACKGROUND_MOVE,
                { fillStyle: Block_DrawShapes.blockFillStyle },
                {
                    "strokeStyle": Block_DrawShapes.blockStrokeStyleWhenDragEnd,
                    "lineWidth": Block_DrawShapes.blockLineWidth
                });
        }

        private drawBlockMoveBackgroundWhenDragStart(s: Block): void {
            s.graphics.drawPath(0, 0, Block_DrawShapes.PATH_BACKGROUND_MOVE,
                { fillStyle: Block_DrawShapes.blockFillStyle },
                {
                    "strokeStyle": Block_DrawShapes.blockStrokeStyleWhenDragStart,
                    "lineWidth": Block_DrawShapes.blockLineWidth
                });
        }

        private drawBlockMoveTexture(s: Block, res: string, x: number, y: number, width: number, height: number): void {
            let t: Texture = Laya.loader.getRes(res);
            s.graphics.drawTexture(t, x * Block_DrawShapes.scale,
                y * Block_DrawShapes.scale,
                width * Block_DrawShapes.scale,
                height * Block_DrawShapes.scale);
        }

        private drawBlockMoveHitArea(): Laya.HitArea {
            let hit: HitArea = new HitArea();
            hit.hit.drawPoly(0, 0, Block_DrawShapes.HITAREA_MOVE, "#ffff00");
            return hit;
        }

        private drawBlockMoveInput(): Laya.TextInput {
            let input: TextInput = this.createInput(Block_DrawShapes.PATH_INPUT);
            input.size(Block_DrawShapes.INPUT_WIDTH_MOVE * Block_DrawShapes.scale,
                Block_DrawShapes.INPUT_HEIGHT_MOVE * Block_DrawShapes.scale);
            input.pos(Block_DrawShapes.INPUT_X_MOVE * Block_DrawShapes.scale,
                Block_DrawShapes.INPUT_Y_MOVE * Block_DrawShapes.scale);
            return input;
        }

        private createInput(skin: string): TextInput {
            var ti = new TextInput();
            ti.skin = skin;
            ti.sizeGrid = "0,10,0,10";
            ti.font = "Arial";
            ti.fontSize = 15;
            ti.bold = true;
            ti.color = "#606368";
            ti.align = "center";
            ti.restrict = "0-9";
            ti.valign = "middle";
            return ti;
        }

        private onMouseDown(isSimilarToMove: boolean, s: Block, res: string, x: number, y: number, width: number, height: number, e: Event): void {
            if(s.hitTestPoint(e.stageX, e.stageY)){
                if (isSimilarToMove == true) {
                    s.graphics.clear();
                    this.drawBlockMoveBackgroundWhenDragStart(s);
                    this.drawBlockMoveTexture(s, res, x, y, width, height);
                    s.startDrag();
                }
            }
            else{

            }
            


        }
        private onMouseUp(isSimilarToMove: boolean, s: Block, res: string, x: number, y: number, width: number, height: number, e: Event): void {
            if (isSimilarToMove == true) {
                s.graphics.clear();
                this.drawBlockMoveBackgroundWhenDragEnd(s);
                this.drawBlockMoveTexture(s, res, x, y, width, height);
            }

        }
        private onDragStart(e: Event): void {
            console.log("onDragStart");
        }

        private onDragMove(e: Event): void {
            console.log("onDragMove");
        }

        private onDragEnd(e: Event): void {
            console.log("onDragEnd");
        }

        private drawBlockMove(): void {
            this.sp_move = new Block();
            Laya.stage.addChild(this.sp_move);

            this.sp_move.pos(100, 100);
            this.sp_move.pivot(0, 0);

            this.drawBlockMoveBackgroundWhenDragEnd(this.sp_move);
            this.drawBlockMoveTexture(this.sp_move,
                Block_DrawShapes.TEXTURE_PATH_MOVE,
                Block_DrawShapes.TEXTURE_X_MOVE,
                Block_DrawShapes.TEXTURE_Y_MOVE,
                Block_DrawShapes.TEXTURE_WIDTH_MOVE,
                Block_DrawShapes.TEXTURE_HEIGHT_MOVE);
            this.sp_move.hitArea = this.drawBlockMoveHitArea();

            let input = this.drawBlockMoveInput();
            this.sp_move.addChild(input);
            this.sp_move.on(Event.DRAG_START, this, this.onDragStart);
            this.sp_move.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.sp_move.on(Event.DRAG_END, this, this.onDragEnd);
            this.sp_move.on(Event.MOUSE_DOWN, this, this.onMouseDown, [true,
                this.sp_move,
                Block_DrawShapes.TEXTURE_PATH_MOVE,
                Block_DrawShapes.TEXTURE_X_MOVE,
                Block_DrawShapes.TEXTURE_Y_MOVE,
                Block_DrawShapes.TEXTURE_WIDTH_MOVE,
                Block_DrawShapes.TEXTURE_HEIGHT_MOVE]);
            this.sp_move.on(Event.MOUSE_UP, this, this.onMouseUp, [true,
                this.sp_move,
                Block_DrawShapes.TEXTURE_PATH_MOVE,
                Block_DrawShapes.TEXTURE_X_MOVE,
                Block_DrawShapes.TEXTURE_Y_MOVE,
                Block_DrawShapes.TEXTURE_WIDTH_MOVE,
                Block_DrawShapes.TEXTURE_HEIGHT_MOVE]);
        }

        private drawSetHeading(): void {
            this.sp_setHeading = new Block();
            Laya.stage.addChild(this.sp_setHeading);

            this.sp_setHeading.pos(400, 100);
            this.sp_setHeading.pivot(0, 0);

            this.drawBlockMoveBackgroundWhenDragEnd(this.sp_setHeading);
            this.drawBlockMoveTexture(this.sp_setHeading,
                Block_DrawShapes.TEXTURE_PATH_SETHEADING,
                Block_DrawShapes.TEXTURE_X_SETHEADING,
                Block_DrawShapes.TEXTURE_Y_SETHEADING,
                Block_DrawShapes.TEXTURE_WIDTH_SETHEADING,
                Block_DrawShapes.TEXTURE_HEIGHT_SETHEADING);

            let hit: HitArea = this.drawBlockMoveHitArea();
            this.sp_setHeading.hitArea = hit;

            let input = this.drawBlockMoveInput();
            this.sp_setHeading.addChild(input);

            this.sp_setHeading.on(Event.DRAG_START, this, this.onDragStart);
            this.sp_setHeading.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.sp_setHeading.on(Event.DRAG_END, this, this.onDragEnd);
            this.sp_setHeading.on(Event.MOUSE_DOWN, this, this.onMouseDown, [true,
                this.sp_setHeading,
                Block_DrawShapes.TEXTURE_PATH_SETHEADING,
                Block_DrawShapes.TEXTURE_X_SETHEADING,
                Block_DrawShapes.TEXTURE_Y_SETHEADING,
                Block_DrawShapes.TEXTURE_WIDTH_SETHEADING,
                Block_DrawShapes.TEXTURE_HEIGHT_SETHEADING]);
            this.sp_setHeading.on(Event.MOUSE_UP, this, this.onMouseUp, [true,
                this.sp_setHeading,
                Block_DrawShapes.TEXTURE_PATH_SETHEADING,
                Block_DrawShapes.TEXTURE_X_SETHEADING,
                Block_DrawShapes.TEXTURE_Y_SETHEADING,
                Block_DrawShapes.TEXTURE_WIDTH_SETHEADING,
                Block_DrawShapes.TEXTURE_HEIGHT_SETHEADING]);
        }

        private drawShow(): void {
            this.sp_Show = new Block();
            Laya.stage.addChild(this.sp_Show);

            this.sp_Show.pos(200, 100);
            this.sp_Show.pivot(0, 0);

            this.drawBlockMoveBackgroundWhenDragEnd(this.sp_Show);
            this.drawBlockMoveTexture(this.sp_Show,
                Block_DrawShapes.TEXTURE_PATH_Show,
                Block_DrawShapes.TEXTURE_X_Show,
                Block_DrawShapes.TEXTURE_Y_Show,
                Block_DrawShapes.TEXTURE_WIDTH_Show,
                Block_DrawShapes.TEXTURE_HEIGHT_Show);

            let hit: HitArea = this.drawBlockMoveHitArea();
            this.sp_Show.hitArea = hit;
            
            this.sp_Show.on(Event.DRAG_START, this, this.onDragStart);
            this.sp_Show.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.sp_Show.on(Event.DRAG_END, this, this.onDragEnd);
            this.sp_Show.on(Event.MOUSE_DOWN, this, this.onMouseDown, [true,
                this.sp_Show,
                Block_DrawShapes.TEXTURE_PATH_Show,
                Block_DrawShapes.TEXTURE_X_Show,
                Block_DrawShapes.TEXTURE_Y_Show,
                Block_DrawShapes.TEXTURE_WIDTH_Show,
                Block_DrawShapes.TEXTURE_HEIGHT_Show]);
            this.sp_Show.on(Event.MOUSE_UP, this, this.onMouseUp, [true,
                this.sp_Show,
                Block_DrawShapes.TEXTURE_PATH_Show,
                Block_DrawShapes.TEXTURE_X_Show,
                Block_DrawShapes.TEXTURE_Y_Show,
                Block_DrawShapes.TEXTURE_WIDTH_Show,
                Block_DrawShapes.TEXTURE_HEIGHT_Show]);
        }

        private drawHide(): void {
            this.sp_Hide = new Block();
            Laya.stage.addChild(this.sp_Hide);

            this.sp_Hide.pos(200, 200);
            this.sp_Hide.pivot(0, 0);

            this.drawBlockMoveBackgroundWhenDragEnd(this.sp_Hide);
            this.drawBlockMoveTexture(this.sp_Hide,
                Block_DrawShapes.TEXTURE_PATH_Hide,
                Block_DrawShapes.TEXTURE_X_Hide,
                Block_DrawShapes.TEXTURE_Y_Hide,
                Block_DrawShapes.TEXTURE_WIDTH_Hide,
                Block_DrawShapes.TEXTURE_HEIGHT_Hide);

            let hit: HitArea = this.drawBlockMoveHitArea();
            this.sp_Hide.hitArea = hit;
            this.sp_Hide.on(Event.DRAG_START, this, this.onDragStart);
            this.sp_Hide.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.sp_Hide.on(Event.DRAG_END, this, this.onDragEnd);
            this.sp_Hide.on(Event.MOUSE_DOWN, this, this.onMouseDown, [true,
                this.sp_Hide,
                Block_DrawShapes.TEXTURE_PATH_Hide,
                Block_DrawShapes.TEXTURE_X_Hide,
                Block_DrawShapes.TEXTURE_Y_Hide,
                Block_DrawShapes.TEXTURE_WIDTH_Hide,
                Block_DrawShapes.TEXTURE_HEIGHT_Hide]);
            this.sp_Hide.on(Event.MOUSE_UP, this, this.onMouseUp, [true,
                this.sp_Hide,
                Block_DrawShapes.TEXTURE_PATH_Hide,
                Block_DrawShapes.TEXTURE_X_Hide,
                Block_DrawShapes.TEXTURE_Y_Hide,
                Block_DrawShapes.TEXTURE_WIDTH_Hide,
                Block_DrawShapes.TEXTURE_HEIGHT_Hide]);

        }

        private drawResize(): void {
            this.sp_SetSize = new Block();
            Laya.stage.addChild(this.sp_SetSize);

            this.sp_SetSize.pos(200, 200);
            this.sp_SetSize.pivot(0, 0);

            this.drawBlockMoveBackgroundWhenDragEnd(this.sp_SetSize);
            this.drawBlockMoveTexture(this.sp_SetSize,
                Block_DrawShapes.TEXTURE_PATH_SetSize,
                Block_DrawShapes.TEXTURE_X_SetSize,
                Block_DrawShapes.TEXTURE_Y_SetSize,
                Block_DrawShapes.TEXTURE_WIDTH_SetSize,
                Block_DrawShapes.TEXTURE_HEIGHT_SetSize);

            let hit: HitArea = this.drawBlockMoveHitArea();
            this.sp_SetSize.hitArea = hit;

            let input = this.drawBlockMoveInput();
            this.sp_SetSize.addChild(input);
            input.name = "input";


            let vs: VSlider = new VSlider();

            vs.skin = Block_DrawShapes.SLIDER_PATH_SetSize;

            vs.height = 60;
            vs.pos(30, 80);
            vs.min = 0;
            vs.max = 100;
            vs.value = 50;
            vs.tick = 1;
            vs.visible = false;
            vs.name = "vs";
            vs.changeHandler = new Handler(this, this.onChange);
            this.sp_SetSize.addChild(vs);
            this.sp_SetSize.on(Event.DRAG_START, this, this.onDragStart);
            this.sp_SetSize.on(Event.DRAG_MOVE, this, this.onDragMove);
            this.sp_SetSize.on(Event.DRAG_END, this, this.onDragEnd);
            this.sp_SetSize.on(Event.MOUSE_DOWN, this, this.onMouseDown, [true,
                this.sp_SetSize,
                Block_DrawShapes.TEXTURE_PATH_SetSize,
                Block_DrawShapes.TEXTURE_X_SetSize,
                Block_DrawShapes.TEXTURE_Y_SetSize,
                Block_DrawShapes.TEXTURE_WIDTH_SetSize,
                Block_DrawShapes.TEXTURE_HEIGHT_SetSize]);
            this.sp_SetSize.on(Event.MOUSE_UP, this, this.onMouseUp, [true,
                this.sp_SetSize,
                Block_DrawShapes.TEXTURE_PATH_SetSize,
                Block_DrawShapes.TEXTURE_X_SetSize,
                Block_DrawShapes.TEXTURE_Y_SetSize,
                Block_DrawShapes.TEXTURE_WIDTH_SetSize,
                Block_DrawShapes.TEXTURE_HEIGHT_SetSize]);

        }

        private setListenEvent(s:Block):void{

        }

        private onChange(value: number): void {
            (this.sp_SetSize.getChildByName("input") as TextInput).text = value.toString();
        }
    }
}*/ 
//# sourceMappingURL=LayaSample.js.map