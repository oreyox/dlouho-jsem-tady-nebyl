input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Nonblocking)
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
})
basic.showString("ZMACKNI A-")
basic.forever(function () {
	
})
