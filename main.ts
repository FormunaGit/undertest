controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mainFight()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 100)
    hpbar.value += -1
})
function initialize_flowey_fight () {
    floweyframes = [img`
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
        `, img`
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
        ffffff11111ff1111ff1111111ff1111ff11111ffffff
        ffffffffffffff1111fffffffff1111ffffffffffffff
        fffffffffff1fff1111fffffff1111fff1fffffffffff
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
        `]
    flowey = sprites.create(floweyframes[0], SpriteKind.Enemy)
    flowey.setPosition(80, 29)
    animation.runImageAnimation(
    flowey,
    floweyframes,
    500,
    true
    )
    hptext = fancyText.create("20/20")
    hptext.setPosition(90, 113)
    hpbar = statusbars.create(10, 8, StatusBarKind.Health)
    hpbar.attachToSprite(hptext, 0, 0)
    hpbar.setColor(5, 2)
    hpbar.positionDirection(CollisionDirection.Left)
    hpbar.value = 20
    hpbar.setLabel("HP")
    hpbar.setOffsetPadding(0, 1)
    tiles.setCurrentTilemap(tilemap`normalarena`)
    soul = sprites.create(img`
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
    hpbar.max = 20
    fightaction = sprites.create(img`
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffff444fffffffffffff4444444444444444444fff44444444444444444fffff44444444444444444fff4444fffffffffff4444fff44444444444444444444ffffff444
        44ffffffffffffffffffffffffff444fffffffffffff4444444444444444444fff444444444444444444fff444444444444444444fff44444fffffffff44444fff444444444444444444444fffff444
        44ffffffffffffffffffffffff44444fffffffffffff4444444444444444444fff444444444444444444ff4444444444444444444fff444444fffffff444444fff444444444444444444444fffff444
        44ffffffffffffffffffffffff44444fffffffffffff4444444444444444444fff444444444444444444ff4444444444444444444fff444444fffffff444444fff444444444444444444444fffff444
        44ffffffffffffffffffffffff44444fffffffffffff4444444444444444444fff444444444444444444ff4444444444444444444fff444444fffffff444444fff444444444444444444444fffff444
        44fffffffffffffffffffffff444444fffffffffffff4444444444444444444fff444444444444444444ff4444444444444444444fff444444fffffff444444fff444444444444444444444fffff444
        44ffffffffffffffffffffff4444444fffffffffffff4444444444444444444fff444444444444444444ff4444444444444444444fff444444fffffff444444fff444444444444444444444fffff444
        44fffffffffffffffffffff44444444fffffffffffff44444444fffffffff44fff4ffff4444444ffff4fff4444444444444444444fff444444fffffff444444fff4ffffff444444ffffff4ffffff444
        44fffffffffffffffffffff44444444fffffffffffff44444444fffffffffffffffffff4444444ffffffff444444ffffff4444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffffffffffff44444444fffffffffffff44444444fffffffffffffffffff4444444ffffffff444444ffffff4444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffffffffffff4444444ffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffffffffff44444444ffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffffffffff44444444ffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffffffffff44444444ffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffffffffff444444ffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444ffffffffffffffff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffffffffff4444444ffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444ffffffffffffffff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffffffffff4444444ffffffffffffffff4444444444444444444ffffffff4444444ffffffff444444fffff44444444fff4444444444444444444ffffffffff444444fffffffffffff444
        44fffffffffffffffffff4444444ffffffffffffffff4444444444444444444ffffffff4444444ffffffff444444ffff444444444fff4444444444444444444ffffffffff444444fffffffffffff444
        44fffffffffffffffffff444444fffffffffffffffff4444444444444444444ffffffff4444444ffffffff444444ffff444444444fff4444444444444444444ffffffffff444444fffffffffffff444
        44ffffffffffffffffff4444444fffffffffffffffff4444444444444444444ffffffff4444444ffffffff444444ffff444444444fff4444444444444444444ffffffffff444444fffffffffffff444
        44fffffffffffffffff44444444fffffffffffffffff4444444444444444444ffffffff4444444ffffffff444444ffff444444444fff4444444444444444444ffffffffff444444fffffffffffff444
        44fffffffffffffffff4444444ffffffffffffffffff4444444444444444444ffffffff4444444ffffffff444444ffff444444444fff4444444444444444444ffffffffff444444fffffffffffff444
        44ffffffffff444444f444444fffffffffffffffffff4444444444444444444ffffffff4444444ffffffff444444fffff44444444fff4444444444444444444ffffffffff444444fffffffffffff444
        44ffffffffff4444444444444fffffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffff44444444444ffffffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffff4444444444ffffffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffff444444444ffffffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffff444444444fffffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffff44444444444fffffffffffffffff44444444fffffffffffffffffff4444444ffffffff444444fffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffff444444444444ffffffffffffffff44444444fffffffffffffffffff4444444ffffffff4444444ffffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44ffffffffffffff44444ff44444ffffffffffffffff44444444fffffffffffffffffff4444444ffffffff44444444fffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffff444444fffffffffffffffffffffff44444444ffffffffffffff4ffff4444444ffff4fff444444444ffff444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffff444444fffffffffffffffffffffff44444444ffffffffffffff444444444444444444ff4444444444444444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffffff44444ffffffffffffffffffffffff44444444ffffffffffffff444444444444444444ff4444444444444444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffff4444444ffffffffffffffffffffffff44444444ffffffffffffff444444444444444444ff4444444444444444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffff444444fffffffffffffffffffffffff44444444ffffffffffffff444444444444444444ff4444444444444444444fff444444fffffff444444ffffffffff444444fffffffffffff444
        44fffffffffff44444ffffffffffffffffffffffffff44444444ffffffffffffff444444444444444444ff4444444444444444444fff444444fffffff444444ffffffffff4444444ffffffffffff444
        44fffffffffff4444fffffffffffffffffffffffffff44444444ffffffffffffff444444444444444444ff4444444444444444444fff444444fffffff444444fffffffff444444444fffffffffff444
        44ffffffffffff44ffffffffffffffffffffffffffff444444444fffffffffffff444444444444444444ff4444444444444444444fff444444ffffffff44444fffffff444444444444ffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffff444444444fffffffffffff44444444444444444fff4444444444444444444fff44444ffffffffff4444fffffff444444444444ffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `, SpriteKind.Player)
    fightaction.scale = 0.2
    fightaction.setPosition(139, 73)
    mainFight()
}
function mainFight () {
    spawnPellet(30, 30)
    spawnPellet(43, 17)
    spawnPellet(103, 17)
    spawnPellet(131, 31)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    controller.moveSprite(soul, 0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroy(hptext)
    tiles.setCurrentTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    soul,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    for (let index = 0; index < 15; index++) {
        soul.scale += 0.1
        pause(50)
    }
    pause(1000)
    soul.startEffect(effects.disintegrate, 500)
    pause(1000)
    soul.startEffect(effects.disintegrate, 500)
    sprites.destroy(soul)
    pause(1000)
    gameover = sprites.create(img`
        ..111111111111111....1111111111111....1111111111111111111111111......111111111111111
        ..111111111111111....11111111111111...1111111111111111111111111.....1111111111111111
        11111111111111111..11111111111111111..111111111111111111111111111..11111111111111111
        11111111111111111..11111111111111111..111111111111111111111111111..11111111111111111
        11111111...........11111111..1111111..11111111..1111111..11111111..1111111..........
        11111111...........11111111..1111111..11111111..1111111..11111111..1111111..........
        11111111.11111111..11111111111111111..11111111..1111111..11111111..111111111111.....
        11111111.11111111..11111111111111111..11111111..1111111..11111111..111111111111.....
        11111111.11111111..11111111111111111..11111111..1111111..11111111..111111111111.....
        11111111.11111111..11111111111111111..11111111..1111111..11111111..111111111111.....
        11111111.11111111..11111111111111111..11111111..1111111..11111111..111111111111.....
        11111111..1111111..11111111..1111111..11111111..1111111..11111111..1111111..........
        11111111..1111111..11111111..1111111..11111111..1111111..11111111..1111111..........
        11111111111111111..11111111..1111111..11111111..1111111..11111111..11111111111111111
        11111111111111111..11111111..1111111..11111111..1111111..11111111..11111111111111111
        ..111111111111111..11111111..1111111..11111111..1111111..11111111...1111111111111111
        ..111111111111111..1111111...1111111..11111111..1111111...1111111....111111111111111
        ....................................................................................
        ....................................................................................
        .....11111111111111....1111111..11111111....111111111111111..111111111111111........
        .....11111111111111....1111111..11111111...1111111111111111..111111111111111........
        ....11111111111111111..1111111..11111111..11111111111111111..11111111111111111......
        ....11111111111111111..1111111..11111111..11111111111111111..11111111111111111......
        ....1111111..11111111..1111111..11111111..1111111............1111111..11111111......
        ....1111111..11111111..1111111..11111111..1111111............1111111..11111111......
        ....1111111..11111111..1111111..11111111..111111111111.......11111111111111111......
        ....1111111..11111111..1111111..11111111..111111111111.......1111111111111111.......
        ....1111111..11111111..1111111..11111111..111111111111.......111111111111111........
        ....1111111..11111111..1111111..11111111..111111111111.......1111111111111111.......
        ....1111111..11111111..1111111..11111111..111111111111.......11111111111111111......
        ....1111111..11111111..1111111..11111111..1111111............1111111..11111111......
        ....1111111..11111111..1111111..11111111..1111111............1111111..11111111......
        ....11111111111111111..11111111111111111..11111111111111111..1111111..11111111......
        ....11111111111111111..11111111111111111..11111111111111111..1111111..11111111......
        .....11111111111111....111111111111111.....1111111111111111..1111111..11111111......
        .....11111111111111....111111111111111......111111111111111..1111111...1111111......
        `, SpriteKind.Player)
    spriteFx.setOpacity(gameover, 0)
    gameover.setPosition(80, 30)
    for (let transparency of [
    0,
    25,
    50,
    75,
    100
    ]) {
        spriteFx.setOpacity(gameover, transparency)
        pause(200)
    }
    game.splash("imagine dying in 2026")
    game.reset()
})
function spawnPellet (x: number, y: number) {
    pellet = sprites.createProjectileFromSide(assets.image`friendlypellet`, (soul.x - x + Math.floor(Math.random() * 10)) * 0.75, (soul.y - y + Math.floor(Math.random() * 10)) * 0.75)
    pellet.setPosition(x, y)
    pellet.setFlag(SpriteFlag.AutoDestroy, true)
    pellet.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    pellet,
    assets.animation`spinningfriendlinesspellet`,
    200,
    true
    )
}
let pellet: Sprite = null
let gameover: Sprite = null
let fightaction: Sprite = null
let soul: Sprite = null
let hptext: fancyText.TextSprite = null
let flowey: Sprite = null
let floweyframes: Image[] = []
let hpbar: StatusBarSprite = null
initialize_flowey_fight()
game.onUpdateInterval(100, function () {
    fancyText.setText(hptext, "" + convertToText(hpbar.value) + "/" + convertToText(hpbar.max))
})
