let X = 0
let Y = 0
let x2 = 0
let y2 = 0
function showDIR () {
    if (X == 0) {
        basic.showArrow(ArrowNames.East)
    } else if (X == 4) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (Y == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (Y == 4) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
function readX1 () {
    X = Math.round(pins.analogReadPin(AnalogPin.P0) / 205)
}
function readX2 () {
    X = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 4)
}
function readX () {
    if (pins.analogReadPin(AnalogPin.P0) < 128) {
        X = 0
    } else if (pins.analogReadPin(AnalogPin.P0) < 384) {
        X = 1
    } else if (pins.analogReadPin(AnalogPin.P0) < 640) {
        X = 2
    } else if (pins.analogReadPin(AnalogPin.P0) < 896) {
        X = 3
    } else {
        X = 4
    }
}
function readY () {
    if (pins.analogReadPin(AnalogPin.P1) < 128) {
        Y = 0
    } else if (pins.analogReadPin(AnalogPin.P1) < 384) {
        Y = 1
    } else if (pins.analogReadPin(AnalogPin.P1) < 640) {
        Y = 2
    } else if (pins.analogReadPin(AnalogPin.P1) < 896) {
        Y = 3
    } else {
        Y = 4
    }
}
basic.forever(function () {
    readX()
    readY()
    if (X == x2 && Y == y2) {
    	
    } else {
        led.unplot(x2, y2)
        led.plot(X, Y)
        x2 = X
        y2 = Y
    }
})
