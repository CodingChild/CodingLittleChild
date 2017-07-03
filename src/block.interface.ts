module Block{
    import Point = Laya.Point;
    
     export interface BlockSetting {
        blockScale: number;
        blockStrokeStyleHighlight: string;
        blockLineWidthHighlight: number;
        distanceBetweenBlocks:number;
        roundCorner:number;
    }

    export interface TargetSetting extends ResourceSetting{
        stateNum: number;
    }

    export interface ResourceSetting {
        name: string;
        path: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }

    export interface SliderSetting extends ResourceSetting {
        min: number;
        max: number;
        initialValue: number;
        tick: number;
        onChange:Function;
        inputName:string;
    }

    export interface BackgroundSetting {
        blockFillStyle: string;
        pathBackground: Array<any>;
        hitAreaBackground: Array<any>;
    }

    export interface TextInputSetting {
        sizeGrid: string;
        font: string;
        fontSize: number;
        bold: boolean;
        color: string;
        restrict: string;
    }

    export interface InputSettings {
        inputBoxSetting: ResourceSetting;
        textInputSetting: TextInputSetting;
    }
/*
    export interface AttachTarget {
        attachBlock: Block;
        attachHook: AttachHook;
    }    

    export interface AttachHook {
        attachCoordinate: Point;
        isHook:boolean;
    }   */
}