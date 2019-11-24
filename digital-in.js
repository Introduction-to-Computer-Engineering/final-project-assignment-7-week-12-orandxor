
let waterLvl = 0
pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P8, 0)
basic.forever(function () {
    waterLvl = pins.analogReadPin(AnalogPin.P0)
    if (waterLvl > 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    basic.showNumber(waterLvl)
    basic.pause(250)
})
