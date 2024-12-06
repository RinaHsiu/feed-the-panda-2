controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
})
let mySprite: Sprite = null
let panda = sprites.create(img`
    . f f f . . . . f f f . . . . . 
    f c c c f f f f c c c f . . . . 
    f c a d 1 1 1 1 d a c f . . . . 
    f a d 1 1 1 1 1 1 d f . . . . . 
    . f c c c 1 1 c c c d f . . . . 
    . f c f c 1 1 c f c d f f f . . 
    . f c c 1 c c 1 c c f d c c f . 
    . f d 1 1 f f 1 1 d f 1 1 c c f 
    . . f d d d d d d a c 1 1 1 c f 
    . . f c 1 1 1 1 1 c c 1 1 1 c f 
    . . f c 1 1 1 1 1 c c 1 1 1 c f 
    . . f c f f f f f c c 1 1 c c f 
    . . f c f . . . f c f f f f c f 
    . . f f . . . . f f . . . . f f 
    `, SpriteKind.Player)
panda.setVelocity(randint(20, 50), randint(40, 60))
panda.setBounceOnWall(true)
