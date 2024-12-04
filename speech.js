

function speak(text){
    const message = new SpeechSynthesisUtterance();
    message.lang = "ru-RU";
    message.text = text;
    window.speechSynthesis.speak(message);
}

const btnSpeak = document.querySelector("#speak");
const txtMassage = document.querySelector("#message");

btnSpeak.addEventListener("click", () => {
    speak(txtMassage.value);
});