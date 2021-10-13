let randomEyeRoll = 0
let roll = 0
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
input.setSoundThreshold(SoundThreshold.Loud, 121)
basic.forever(function () {
    roll = input.rotation(Rotation.Roll)
    if (Math.abs(roll) < 80) {
        pins.servoWritePin(AnalogPin.P0, 120)
        pins.servoWritePin(AnalogPin.P1, 120)
        basic.pause(200)
    } else if (Math.abs(roll) > 100) {
        pins.servoWritePin(AnalogPin.P0, 60)
        pins.servoWritePin(AnalogPin.P1, 60)
        basic.pause(200)
    } else {
        randomEyeRoll = randint(1, 50)
        if (randomEyeRoll == 1) {
            pins.servoWritePin(AnalogPin.P0, 180)
            pins.servoWritePin(AnalogPin.P1, 0)
            basic.pause(1000)
        }
        pins.servoWritePin(AnalogPin.P0, 110)
        pins.servoWritePin(AnalogPin.P1, 70)
        basic.pause(200)
    }
})
