
// AUDIO SCRIPTS
// AUDIO SCRIPTS
// AUDIO SCRIPTS

// GLOBAL AUDIO VARIABLE!
var audioToggle;


// ENABLE / DISABLE AUDIO FUNCTIONS!
function enableAudio() {
document.getElementById("audioOn").style.display = "none";
document.getElementById("audioOff").style.display = "block";
audioToggle = "On";
}

function disableAudio() {
document.getElementById("audioOn").style.display = "block";
document.getElementById("audioOff").style.display = "none";
audioToggle = "Off";
}



// RANDOMIZE FUNCTION
// RANDOMIZE FUNCTION
// RANDOMIZE FUNCTION


// GLOBAL ANSWER VARIABLE
var theAnswer;


function goRandomize() {
document.getElementById("answerButton").style.display = "block";
var questAmount = document.getElementById('questAmount').value;
var randomQs = document.getElementById("randomQs");

// RANDOMIZING VARIABLE & UPDATING HTM ELEMENT!
let random = "q" + Math.floor(Math.random()*(questAmount-0)+1);
// randomQs.innerHTML = "<b>Pregunta N°" + random.slice(1) +":</b> " + document.getElementById(random).value ; // ORIGINAL CODE, NO TIMEOUT
randomQs.innerHTML = "🎲";
setTimeout(function() { randomQs.innerHTML = "<b>Pregunta N°" + random.slice(1) +":</b> " + document.getElementById(random).value }, 500)
theAnswer = "a" + random.slice(1);

// PLAY DICE SHUFFLE AUDIO!
if (audioToggle === "On") { 
 document.getElementById("shuffle").play();
 }
}


function getAnswer() {
var thisAnswer = theAnswer;
var randomQs = document.getElementById("randomQs");
// document.getElementById("randomQs").innerHTML = "<b>Respuesta:</b> " + document.getElementById(thisAnswer).value + "!"; // ORIGNAL ANSWER, NO TIMEOUT!
document.getElementById("randomQs").innerHTML = "📖";
setTimeout(function() { document.getElementById("randomQs").innerHTML = "<b>Respuesta:</b> " + document.getElementById(thisAnswer).value + "!" }, 400)

// PLAY ANSWER EFFECT AUDIO!
if (audioToggle === "On") { 
 document.getElementById("answer").play();
 }
}
