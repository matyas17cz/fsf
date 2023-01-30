radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("x", receivedNumber)
    if (receivedNumber == 3) {
        x += 1
    }
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    afa = 180 - value
    if (name == "zatoc") {
        serial.writeValue("g", value)
        serial.writeValue("ssf", afa)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, afa)
    }
})
let otoceni = 0
let afa = 0
let x = 0
radio.setGroup(16)
let uhel = 185
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
basic.forever(function () {
    if (x == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    }
})
basic.forever(function () {
    if (x == 0) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    }
})
basic.forever(function () {
    if (x > 1) {
        x = 0
    }
})
basic.forever(function () {
    otoceni = 0
})
