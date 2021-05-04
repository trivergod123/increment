let increase = 0
let mySprite = sprites.create(assets.image`coach gee`, SpriteKind.Player)
for (let index = 0; index < 10; index++) {
    pause(200)
    mySprite.x += -7 - increase
    pause(200)
    mySprite.y += -8 - increase
    pause(200)
    mySprite.x += 9 - increase
    pause(200)
    mySprite.x += 10 - increase
    increase += 4
}
