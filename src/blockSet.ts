module Marmot {

    export interface BlockAttributes{
        name:string;
        path:string;
    }
    export let blockSet:Object = {
        "motion": [
            {
                "name": "move",
                "path": "materials/block_move.png"
            },
            {
                "name": "setHeading",
                "path": "materials/block_setHeading.png"
            }
        ],
        "look": [
            {
                "name": "show",
                "path": "materials/block_show.png"
            },
            {
                "name": "hide",
                "path": "materials/block_hide.png"
            },
            {
                "name": "setSize",
                "path": "materials/block_setSize.png"
            },
                        {
                "name": "show",
                "path": "materials/block_show.png"
            },
            {
                "name": "hide",
                "path": "materials/block_hide.png"
            },
            {
                "name": "setSize",
                "path": "materials/block_setSize.png"
            }
        ],
        "control": [
            {
                "name": "wait",
                "path": "materials/block_wait.png"
            }
        ],
        "event": [
            {
                "name": "play",
                "path": "materials/block_play.png"
            }
        ],
        "pen": [
        ],
        "music": [
        ],
        "variable": [
        ],
        "math": [
        ],
        "sense": [
        ]
    }
}