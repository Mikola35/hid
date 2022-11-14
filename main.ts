keyboard.startKeyboardService()
basic.forever(function () {
    keyboard.sendString("HID")
})
