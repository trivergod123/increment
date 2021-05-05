let increase = 0
let mySprite = sprites.create(assets.image`coach gee`, SpriteKind.Player)
for (let index = 0; index <= 10; index++) {
    pause(200)
    mySprite.x += 1 + index
    pause(200)
    mySprite.y += -2 - index
    pause(200)
    mySprite.x += -3 - index
    pause(200)
    mySprite.x += 4 + index
    increase += 4
}
