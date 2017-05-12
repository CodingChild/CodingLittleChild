module Marmot {

    export interface BlockAttributes {
        name: string;
        path: string;
    }
    export let blockSet: Object = {
        "motion": [
            {
                "name": "move",
                "path": "materials/block_move.png"
            },
            {
                "name": "setHeading",
                "path": "materials/block_setHeading.png"
            },
            {
                "name": "moveUp",
                "path": "materials/block_moveUp.png"
            },
            {
                "name": "moveDown",
                "path": "materials/block_moveDown.png"
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
            }
        ],
        "control": [
            {
                "name": "wait",
                "path": "materials/block_wait.png"
            },
            {
                "name": "foreverLoop",
                "path": "materials/block_foreverLoop.png"
            },      
            {
                "name": "ifelse",
                "path": "materials/block_ifelse.png"                
            },
            {
                "name": "stop",
                "path": "materials/block_stop.png"                      
            } 
        ],
        "event": [
            {
                "name": "play",
                "path": "materials/block_play.png"
            },
            {
                "name": "whenClicked",
                "path": "materials/block_whenClicked.png"
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