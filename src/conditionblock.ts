module Block {
    import Event = Laya.Event;
    import TextInput = Laya.TextInput;
    import VSlider = Laya.VSlider;
    import Sprite = Laya.Sprite;
    import Texture = Laya.Texture;
    import HitArea = Laya.HitArea;
    import Point = Laya.Point;
    import Rectangle = Laya.Rectangle;
    import Box = Laya.Box;

    export class ConditionBlock extends BasicBlock {

        public commandSlot: CommandSlot;

        constructor(textureSettings: Array<ResourceSetting>,
            inputSettings: Array<InputSettings>,
            backgroundSettings: Array<BackgroundSetting>,
            sliderSetting: SliderSetting) {
            super(textureSettings,
                inputSettings,
                backgroundSettings,
                sliderSetting);
            this.commandSlot = new CommandSlot();
            this.commandSlot.pos(25 * Block.blockSetting.blockScale, 50 * Block.blockSetting.blockScale);
            this.addChild(this.commandSlot);
            this.width = 100 * Block.blockSetting.blockScale;
            this.height = 100 * Block.blockSetting.blockScale;
            this.myWidth = this.width;
            this.myHeight = this.height;
        }

        public attachTarget(block: Block, attachPoint: Point): void {
     
        }
        public updateBackgroundSetting(): void {
          
        }

        protected drawHook(attachPoint: Point): void {

        }

        protected getAttachPoints(): Array<AttachHook> {
            return [

            ]
        }


    }
}