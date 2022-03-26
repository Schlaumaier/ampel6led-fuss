let LEDFuss1 = 0
/**
 * Ampelsteuerung 2 x  Ampel
 * 
 *                                     Rot  Gelb  Grün
 * 
 * Benutzte Pins Ampel1: P8;   P12  P16
 * 
 * Benutzte Pins Ampel2: P13, P14,P15
 * 
 * Fussgaenger  Rot P0,  Grün  P1
 * 
 * Fussgängertaste low aktiv P2
 */
/**
 * Alle möglichen Pins benutzt ohne Doppelbelegung
 */
/**
 * Vorbereitung Abfrage Fussgängerampel.
 * 
 * Tastendruck sich merken
 * 
 * P2 Fussgänger Anforderung low aktiver Taster
 */
input.onPinPressed(TouchPin.P2, function () {
    LEDFuss1 = 1
    basic.showIcon(IconNames.StickFigure)
})
/**
 * Ampel1: Rot   
 * 
 * Ampel2: Rot
 * 
 * fus rot
 */
/**
 * Ampel1:
 * 
 * Rot-Gelb
 */
/**
 * Ampel1:
 * 
 * Grün
 */
/**
 * Ampel1:
 * 
 * Gelb
 */
/**
 * Ampel1: Rot
 * 
 * Ampel2: Rot
 */
/**
 * Fuss wird aktiv wenn Anforderung Fuss-Taster gedrueckt
 */
/**
 * Anforderung LED Fus auf0  Merker LEDFuss1 gelöscht
 */
/**
 * Fusgänger Grün
 */
/**
 * Fussgänger wieder Rot
 */
/**
 * Ampel2: Rot-Gelb
 */
/**
 * Ampel2: Grün
 */
/**
 * Ampel2: Gelb
 */
/**
 * Ampel2: Rot
 */
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (LEDFuss1) {
        basic.pause(500)
        LEDFuss1 = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(2000)
})
