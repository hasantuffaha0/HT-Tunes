const synth = new Tone.Synth().toDestination();
const whiteNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5"];
const blackNotes = ["C#4", "D#4", "F#4", "G#4", "A#4", "C#5", "D#5", "F#5", "G#5", "A#5"];
const whiteButtons = document.querySelectorAll('.piano-button');
const blackButtons = document.querySelectorAll('.upper-button');
const keyMap = {
    'q': {button: '.do', note: whiteNotes[0]},
    '1': {button: '.upper-one', note: blackNotes[0]},
    'w': {button: '.re', note: whiteNotes[1]},
    '2': {button: '.upper-two', note: blackNotes[1]},
    'e': {button: '.mi', note: whiteNotes[2]},
    '3': {button: '.upper-three', note: blackNotes[2]},
    'r': {button: '.fa', note: whiteNotes[3]},
    '4': {button: '.upper-four', note: blackNotes[3]},
    't': {button: '.sol', note: whiteNotes[4]},
    '5': {button: '.upper-five', note: blackNotes[4]},
    'y': {button: '.la', note: whiteNotes[5]},
    '6': {button: '.upper-six', note: blackNotes[5]},
    'u': {button: '.si', note: whiteNotes[6]},
    '7': {button: '.upper-seven', note: blackNotes[6]},
    'i': {button: '.do1', note: whiteNotes[7]},
    '8': {button: '.upper-eight', note: blackNotes[7]},
    'o': {button: '.re1', note: whiteNotes[8]},
    '9': {button: '.upper-nine', note: blackNotes[8]},
    'p': {button: '.mi1', note: whiteNotes[9]},
    '0': {button: '.upper-ten', note: blackNotes[9]},
    '[': {button: '.fa1', note: whiteNotes[10]},
    ']': {button: '.sol1', note: whiteNotes[11]},
    '\\': {button: '.la1', note: whiteNotes[12]},
    ' ': {button: '.si1', note: whiteNotes[13]},
};
whiteButtons.forEach((button, index) => {
    button.addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease(whiteNotes[index], "8n");
    });
});
blackButtons.forEach((button, index) => {
    button.addEventListener('click', async () => {
        await Tone.start();
        synth.triggerAttackRelease(blackNotes[index], "8n");
    });
});
document.addEventListener('keydown', async (event) => {
    await Tone.start();
    const mapping = keyMap[event.key];
    if(mapping) {
        const button = document.querySelector(mapping.button);
        button.classList.add(button.classList.contains('upper-button') ? 'upper-active' : 'active');
        synth.triggerAttackRelease(mapping.note, "8n");
        setTimeout(() => {
            button.classList.remove('active')
            button.classList.remove('upper-active')
        }, 200);
    };
});