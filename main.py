X = 0

def on_joystick_left_p0_p1():
    basic.show_arrow(ArrowNames.WEST)
grove.on_joystick(GroveJoystickKey.LEFT,
    AnalogPin.P0,
    AnalogPin.P1,
    on_joystick_left_p0_p1)

def readX1():
    global X
    X = Math.round(pins.analog_read_pin(AnalogPin.P0) / 205)

def on_joystick_right_p0_p1():
    basic.show_arrow(ArrowNames.EAST)
grove.on_joystick(GroveJoystickKey.RIGHT,
    AnalogPin.P0,
    AnalogPin.P1,
    on_joystick_right_p0_p1)

def readX3():
    global X
    if pins.analog_read_pin(AnalogPin.P0) < 128:
        X = 0
    elif pins.analog_read_pin(AnalogPin.P0) < 384:
        X = 1
    elif pins.analog_read_pin(AnalogPin.P0) < 640:
        X = 2
    elif pins.analog_read_pin(AnalogPin.P0) < 896:
        X = 3
    else:
        X = 4
def readX2():
    global X
    X = Math.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 4)

def on_joystick_none_p0_p1():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
grove.on_joystick(GroveJoystickKey.NONE,
    AnalogPin.P0,
    AnalogPin.P1,
    on_joystick_none_p0_p1)

def on_forever():
    pass
basic.forever(on_forever)
