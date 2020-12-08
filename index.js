var inputText = document.querySelector('#inputText');
var btnTranslate = document.querySelector('#btnTranslate');
var outputText = document.querySelector('#outputText');

var severLink = 'https://api.funtranslations.com/translate/yoda.json';

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function fetchHandler(text){
    fetch(severLink+'?text='+text)
        .then(res=>res.json())
        .then(json=>{
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
}

function handleClick(){
    var text = inputText.value;
    fetchHandler(text);
}
btnTranslate.addEventListener('click',handleClick);