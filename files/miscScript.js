
// CHECKING PAGE NAME!
var pageTitle = document.getElementById("title").innerHTML;

// CHECK BEFORE DELETING!
function doDelete() {
 if (pageTitle == "Interview Questions Randomizer") {
  if (confirm('Would you like to clear all questions?')) { clearQuestions() }
 }
 if (pageTitle == "Study Questions Randomizer") {
  if (confirm('Would you like to clear all questions?')) { clearQuestions() }
 }
 if (pageTitle == "Randomizador de Preguntas") {
  if (confirm('¿Desea borrar todas las preguntas?')) { clearQuestions() }
 }
}


// DELETING QUESTIONS!
function clearQuestions() {

// CLEAR INTERVIEW QUESTIONS!
const theQs = document.getElementsByClassName('theQs');
if (theQs != null) {
 for(let eachQuestion of theQs) { eachQuestion.value = "" }
};

// CLEAR STUDY QUESTIONS!
const studyQs = document.getElementsByClassName('studyQs');
if (studyQs != null) {
 for(let eachQuestion of studyQs) { eachQuestion.value = "" }
};

// CLEAR STUDY ANSWERS!
const allAnswers = document.getElementsByClassName('answers');
if (allAnswers != null) {
 for(let eachAnswer of allAnswers) { eachAnswer.value = ""; }
};

// RESET AMOUNT OF QUESTIONS BY DEFAULT!
var questAmount = document.getElementById('questAmount');
questAmount.value = 6;

// DISABLE AUDIO
disableAudio();

// RELOAD PAGE
window.location.reload();

}




// ENTER FULL SCREEN
function activate(ele) { if (ele.requestFullscreen) {
  ele.requestFullscreen();
  document.getElementById('fullscreen').style.display = 'none';
  document.getElementById('minimize').style.display = 'inline';
  }
}


// EXIT FULL SCREEN
function deactivate() { if (document.exitFullscreen) {
 document.exitFullscreen();
 document.getElementById('fullscreen').style.display = 'none';
 document.getElementById('fullscreen').style.display = 'inline';
 document.getElementById('minimize').style.display = 'none';
 }
}




function getEmail() {
  var thisEmail = document.getElementById("theEmail");
  navigator.clipboard.writeText("juan.mendez@upla.cl");
  thisEmail.innerHTML = "(Copying the e-mail!) ⏳"; thisEmail.style.color = '#FFE000'; thisEmail.style.cursor = "progress"; thisEmail.setAttribute('title',"Copying e-mail!");
  setTimeout(function() { thisEmail.innerHTML = "(E-mail has been copied!) 👍"; thisEmail.style.color = 'blue'; thisEmail.style.cursor = "grab"; thisEmail.setAttribute('title',"E-mail has been copied!");}, 5000)
  setTimeout(function() { thisEmail.innerHTML = "(juan.mendez@upla.cl) 💡"; thisEmail.style.color = 'lightblue'; thisEmail.style.cursor = "help"; thisEmail.setAttribute('title',"Click to copy again?");}, 9000)
}



const d = new Date();
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString(); d.toDateString();
  const formattedString = dateString.replace(", ", " - ⏰ ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
