
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


// CHECKING PAGE NAME!
var pageTitle = document.getElementById("title").innerHTML; // console.log(pageTitle);

// GLOBAL ANSWER VARIABLE
var theAnswer;


function goRandomize() {
var answerButton = document.getElementById("answerButton"); // setting answer button
if (answerButton != null) {answerButton.style.display = "block" }; // check if answer button exists!

var questAmount = document.getElementById('questAmount').value;
var randomQs = document.getElementById("randomQs");

// NUMBERS ARRAY
var thisArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var numbers = thisArray.slice(1,questAmount);

// RANDOMIZING VARIABLE & UPDATING HTM ELEMENT!
let random = "q" + Math.floor( Math.random(numbers) * (questAmount) + 1 );
randomQs.innerHTML = "🎲"; // Initial dice update!

// IDENTIFYING PAGE AND UPDATING RANDOM QUESTIONS (with half second timers)!
if (pageTitle == "Interview Questions Randomizer") {
 setTimeout(function() { randomQs.innerHTML = "<b>Question N°" + random.slice(1) +":</b> " + document.getElementById(random).value }, 500);
}
if (pageTitle == "Randomizador de Preguntas") {
 setTimeout(function() { randomQs.innerHTML = "<b>Pregunta N°" + random.slice(1) +":</b> " + document.getElementById(random).value }, 500);
 theAnswer = "a" + random.slice(1);
}


// AUDIO PLAY CHECK FUNCTION
// PLAY DICE SHUFFLE AUDIO!
if (audioToggle === "On") { document.getElementById("shuffle").play(); }
}


// ANSWER FUNCTION
// ANSWER FUNCTION
// ANSWER FUNCTION

function getAnswer() {
var thisAnswer = theAnswer;
var randomQs = document.getElementById("randomQs");
document.getElementById("randomQs").innerHTML = "📖";
setTimeout(function() { document.getElementById("randomQs").innerHTML = "<b>Respuesta:</b> " + document.getElementById(thisAnswer).value + "!" }, 400)

// AUDIO PLAY CHECK FUNCTION
// PLAY ANSWER EFFECT AUDIO!
if (audioToggle === "On") { document.getElementById("answer").play(); }
}
