controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pellet = sprites.createProjectileFromSide(assets.image`friendlypellet`, 50, 50)
    pellet.setPosition(10, 10)
    pellet.setFlag(SpriteFlag.AutoDestroy, false)
    pellet.setFlag(SpriteFlag.GhostThroughWalls, true)
    pellet.setFlag(SpriteFlag.ShowPhysics, false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 100)
    hp += 0 - 1
})
let pellet: Sprite = null
let hp = 20
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
tiles.setCurrentTilemap(tilemap`normalarena`)
