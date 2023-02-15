//% weight=100 color=#5DADE2 icon=X

namespace AdvancedSprites {
    /**
     * changes the x and y sprite
     */
    //% block
    export function ChangeXY(spriteChoosen:Sprite, x: number, y: number): void {
        // block function
        spriteChoosen.x += (x) // changes the sprite x pos
        spriteChoosen.y += (y) // changes the sprite y pos 
    }
}
