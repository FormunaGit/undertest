let soul = sprites.create(img`
    . 2 . . . . 2 . 
    2 2 2 . . 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 . 
    . . 2 2 2 2 . . 
    . . . 2 2 . . . 
    `, SpriteKind.Player)
controller.moveSprite(soul)
let widearena = tilemap`largearena`
let normalarena = tilemap`normalarena`
tiles.setCurrentTilemap(normalarena)
