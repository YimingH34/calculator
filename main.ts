input.onButtonPressed(Button.A, function () {
    number_2 += 1
    basic.showNumber(number_2)
})
input.onGesture(Gesture.TiltLeft, function () {
    number_1 += 1
    basic.showNumber(number_1)
})
input.onGesture(Gesture.SixG, function () {
    basic.clearScreen()
    number_1 = 0
    number_2 = 0
    subtrace = 0
    sum = 0
})
input.onButtonPressed(Button.AB, function () {
    sum = number_2 + number_1
    basic.showNumber(number_2)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.showNumber(number_1)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(200)
    basic.showNumber(sum)
})
input.onButtonPressed(Button.B, function () {
    number_2 += -1
    basic.showNumber(number_2)
})
input.onGesture(Gesture.Shake, function () {
    subtrace = number_2 + number_1
    basic.showNumber(number_2)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showNumber(number_1)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(200)
    basic.showNumber(subtrace)
})
input.onGesture(Gesture.TiltRight, function () {
    number_1 += -1
    basic.showNumber(number_1)
})
let sum = 0
let subtrace = 0
let number_1 = 0
let number_2 = 0
number_2 = 0
number_1 = 0
