module Marmot{
    import Point = Laya.Point;
    
     export interface BlockSetting {
        blockScale: number;
        blockFillStyle: string;
        blockStrokeStyleNormal: string;
        blockStrokeStyleHighlight: string;
        blockLineWidthHighlight: number;
        blockLineWidthNormal: number
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
        resourceSetting: ResourceSetting
        textInputSetting: TextInputSetting
    }

    export interface AttachTarget {
        attachBlock: Block;
        attachHook: AttachHook;
    }    

    export interface AttachHook {
        attachCoordinate: Point;
        isHook:boolean;
    }    
}