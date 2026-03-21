controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pellet = sprites.createProjectileFromSide(assets.image`friendlypellet`, 50, 50)
    pellet.setPosition(10, 10)
    pellet.setFlag(SpriteFlag.AutoDestroy, false)
    pellet.setFlag(SpriteFlag.GhostThroughWalls, true)
    pellet.setFlag(SpriteFlag.ShowPhysics, false)
    animation.runImageAnimation(
    pellet,
    assets.animation`spinningfriendlinesspellet`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 100)
    hpbar.value += -1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
	
})
let pellet: Sprite = null
let hpbar: StatusBarSprite = null
let flowey = sprites.create(img`
    fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff11111fffffff11111ffffffffffffff
    fffffffffff11fff111111ff111111ff11fffffffffff
    ffffffffff11111ffffffffffffffff1111ffffffffff
    fffffffff11111fffffffffffffffff11111fffffffff
    ffffffffff11ffffff111111111ffffff11ffffffffff
    fffffffffffffff111111111111111fffffffffffffff
    fffff1111fffff11111111111111111fffff1111fffff
    ffff111111fff111111ff111ff111111fff111111ffff
    fff1111111ff1111111ff111ff1111111ff1111111fff
    ff111fffffff1111111ff111ff1111111fffffff111ff
    ff1111111fff1111111ff111ff1111111fff1111111ff
    ff11111111ff1111111ff111ff1111111ff11111111ff
    ffff111111ff1111f11111111111f1111ff111111ffff
    fffff11111fff1111fffffffffff1111fff11111fffff
    ffffff11111ff11111f1111111f11111ff11111ffffff
    ffffffffffffff11111fffffff11111ffffffffffffff
    fffffffffff1fff111111111111111fff1fffffffffff
    fffffffff111ffff1111111111111ffff111fffffffff
    ffffffff1111ffffff111111111ffffff1111ffffffff
    fffffff1111f11fffffffffffffffff11f1111fffffff
    fffffff111f111111fffffffffff111111f111fffffff
    fffffff111f11111111111f11111111111f111fffffff
    fffffff111111111111fffffff111111111111fffffff
    fffffffff111111fffffffffffffff111111fffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff11fffffffffffffffffffffff
    fffffffffffffffffff1111ffffffffffffffffffffff
    fffffffffffffffffff1111ffffffffffffffffffffff
    ffffffffffffffffff1111fffffffffffffffffffffff
    ffffffffffffffffff111ffffffffffffffffffffffff
    ffffffffffffffffff111ffffffffffffffffffffffff
    fffffffffffffffffff111fffffffffffffffffffffff
    fffffffffffffffffff1111ffffffffffffffffffffff
    ffffffffffffffffffff1111fffffffffffffffffffff
    fffffffffffffffffffff111fffffffffffffffffffff
    ffffffffffffffffffffff111ffffffffffffffffffff
    ffffffffffffffffffffff111ffffffffffffffffffff
    fffffffffffffffffffff11111fffffffffffffffffff
    ffffffffffffffff1fff111111ff1ffffffffffffffff
    ffffffffffffffff1ff1111111ff1ffffffffffffffff
    fffffffffffffffff1ff11111ff1fffffffffffffffff
    ffffffffffffffffff1fffffff1ffffffffffffffffff
    fffffffffffffffffff1111111fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
hpbar = statusbars.create(30, 6, StatusBarKind.Health)
hpbar.setColor(5, 2)
hpbar.positionDirection(CollisionDirection.Bottom)
hpbar.max = 20
hpbar.value = 20
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
soul.setPosition(78, 80)
controller.moveSprite(soul)
tiles.setCurrentTilemap(tilemap`normalarena`)
