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
let widearena =tilemap`level1`
let normalarena = tilemap`level1`
tiles.setCurrentTilemap(normalarena)
