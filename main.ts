controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randompick == 1) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randompick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    randompick = randint(0, 1)
    if (randompick == 0) {
        mySprite.sayText("\"Push A")
    }
    if (randompick == 1) {
        mySprite.sayText("\"Push B\"")
    }
}
let randompick = 0
let mySprite: Sprite = null
game.splash("\"Push A or B as directed")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
info.startCountdown(20)
generate()
