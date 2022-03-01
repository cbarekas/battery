input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * 1000 / 340
    basic.showNumber(voltage)
    basic.pause(2000)
    basic.clearScreen()
})
let voltage = 0
let reading = 0
basic.showString("Battery Tester")
