input.onButtonPressed(Button.A, function () {
    hora = hora + 1
})
input.onButtonPressed(Button.B, function () {
    minuto = minuto + 1
})
let minuto = 0
let hora = 0
hora = 0
minuto = 0
let segundo = 0
basic.forever(function () {
    segundo = segundo + 1
    if (60 == segundo) {
        segundo = 0
        minuto = minuto + 1
    }
    if (60 == minuto) {
        minuto = 0
        hora = hora + 1
    }
    if (24 == hora) {
        hora = 0
    }
    basic.pause(1000)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        let alarma_minuto = 0
        let alarma_hora = 0
        basic.showString("" + (alarma_hora))
        basic.showString("" + (alarma_minuto))
    } else {
        basic.showString("" + (hora))
        basic.showString("" + (minuto))
    }
})
basic.forever(function () {
    basic.showString("" + hora + ":" + minuto)
})
