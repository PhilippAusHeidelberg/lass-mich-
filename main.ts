input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            # . # # #
            # . # . #
            # . # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("du bist ")
    basic.showString("ein")
    basic.showString("furzer")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("las mich")
    basic.showString("du schwein")
})
