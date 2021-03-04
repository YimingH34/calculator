// This is the first input, when you press the A button it will increase the A button 
input.onButtonPressed(Button.A, function () {
    number_2 += 1
    basic.showNumber(number_2)
})
// This is the third input. When you tilt left, the second number will increase by 1.
input.onGesture(Gesture.TiltLeft, function () {
    number_1 += 1
    basic.showNumber(number_1)
})
// This is an input to reset everything to 0, that is why you need to give it 6g of force and it will set all of the variables to 0 as well as the screen.
input.onGesture(Gesture.SixG, function () {
    basic.clearScreen()
    number_1 = 0
    number_2 = 0
    subtrace = 0
    sum = 0
})
// When you are pressing A and B button it does number 2-number 1 and i set up the code so that it shows the number of value 2 and then the minus sign and then shows the value of number 1 and the last thing is that it shows equal sign and then it shows the sum.
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
// This is the second input, when you press the B button, it will decrease the number by 1.
input.onButtonPressed(Button.B, function () {
    number_2 += -1
    basic.showNumber(number_2)
})
// This is the code that execute when you shake it., it will do the equation. First you will have to input the numbers, then you shake so what happens is that you will first show the first number, then it will display the minus sign then the second number and then an equal sign and it will show the sum.
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
// This is the fourth input. When you tilt left, the second number will decrease by 1.
input.onGesture(Gesture.TiltRight, function () {
    number_1 += -1
    basic.showNumber(number_1)
})
// When the application starts, you will want to set all the variables to 0.
let sum = 0
let subtrace = 0
let number_1 = 0
let number_2 = 0
number_2 = 0
number_1 = 0
number_2 = 0
