const SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;


// if (SpeechRecognition !== undefined) {
    // Do the speech stuff
    const status = document.getElementById('status'),
    output = document.getElementById('result');
    response = document.getElementById('photos')

    async function startRecognition (){
        if (SpeechRecognition !== undefined) {
            let recognition = new SpeechRecognition();
            recognition.onstart = () => {
                status.innerHTML = `Starting listening, speak in the microphone please 🦻`;
                output.classList.add('hide');
            };
            recognition.onspeechend = () => {
                status.innerHTML = `I stopped listening `;
                recognition.stop();
            };
            recognition.onresult = (result) => {
                console.log(result);
            };
            recognition.onresult = async (result) => {
                output.classList.remove('hide');
                output.innerHTML = `I'm ${Math.floor(
                result.results[0][0].confidence * 100
                )}% certain you just said: <b>${result.results[0][0].transcript}</b>`;
                console.log(result.results[0][0].transcript)
                var msg = result.results[0][0].transcript


                var res = await searchPhoto(msg).then(result => result.data.results)
                console.log(res)
                console.log(res.length)
                
                var i  = 0
                response.innerHTML = ""
                for (const element of res){
                    response.innerHTML += `<p> Photo #${++i} <a href="${element.url}"  target="_blank">Link to Photo</a></p><p>Labels: ${element.labels}</p><br><br>`;
                }
            };
            recognition.start();
        } else {
            console.warn('sorry not supported');
        }
    };
// } 
// else {
//     console.warn('sorry not supported');
// }

async function searchPhoto(message) {
    // params, body, additionalParams
    return sdk.searchGet({'q':message}, {}, {});
}