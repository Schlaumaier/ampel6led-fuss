"""

Einfache Ampelsteuerung

Benutzte Pins: P0; P1; P2

"""
"""

Rot Phase

"""
"""

Rot-Gelb Phase

"""
"""

Grün Phase

"""
"""

Gelb Phase

"""

def on_forever():
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.pause(1500)
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
