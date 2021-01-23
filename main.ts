let previous_joystick_y = 0
let joystick_y = 0
let previous_joystick_x = 0
let joystick_x = 0
let previous_reading = 0
let reading = 0
led.setBrightness(50)
basic.showIcon(IconNames.Heart)
radio.setGroup(68)
/**
 * No press = 1022
 * 
 * A = 3
 * 
 * B = 150
 * 
 * C = 231
 * 
 * D = 454
 * 
 * E = 730
 */
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P2)
    if (reading != previous_reading) {
        previous_reading = reading
        if (reading > 0 && reading < 6) {
            radio.sendString("Button A")
            basic.showIcon(IconNames.Heart)
        } else if (reading > 147 && reading < 153) {
            radio.sendString("Button B")
            basic.showIcon(IconNames.StickFigure)
        } else if (reading > 228 && reading < 234) {
            radio.sendString("Button C")
            basic.showIcon(IconNames.Pitchfork)
        } else if (reading > 451 && reading < 457) {
            radio.sendString("Button D")
            basic.showIcon(IconNames.Square)
        } else if (reading > 727 && reading < 733) {
            radio.sendString("Button E")
            basic.showIcon(IconNames.Yes)
        }
        basic.clearScreen()
    }
    joystick_x = pins.analogReadPin(AnalogPin.P0)
    if (previous_joystick_x != joystick_x) {
        previous_joystick_x = joystick_x
        radio.sendString("JoystickX " + joystick_x)
    }
    joystick_y = pins.analogReadPin(AnalogPin.P1)
    if (previous_joystick_y != joystick_y) {
        previous_joystick_y = joystick_y
        radio.sendString("JoystickY " + joystick_y)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Microbit Button A")
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Microbit Button B")
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("Microbit Button A+B")
    }
})
