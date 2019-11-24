input.onButtonPressed(Button.A, function () {
    setMin = pins.analogReadPin(AnalogPin.P0)
})
input.onButtonPressed(Button.B, function () {
    setMax = pins.analogReadPin(AnalogPin.P0)
})
function barH2OLvls() {

    if (lvl < 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else if (lvl < 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (lvl < 3) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (lvl < 4) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
}
let lvl = 0
let waterLvl = 0
let setMax = 0
let setMin = 0
setMin = 1023
pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    waterLvl = pins.analogReadPin(AnalogPin.P0)
    barH2OLvls()
    lvl = pins.map(
        waterLvl,
        setMin,
        setMax,
        0,
        4
    )

    waterLvl = 0
    basic.pause(250)
})
