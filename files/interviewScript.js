
// INITIAL QUESTIONS CHECKS!
// INITIAL QUESTIONS CHECKS!
// INITIAL QUESTIONS CHECKS!

// PRESENT SIMPLE / CHECK FUNCTION!
function presentSimpleCheck() {
if (confirm('Replace everything with Present Simple questions?')) { blankSlate(); presentSimple(); }
}

// PAST SIMPLE / CHECK FUNCTION!
function pastSimpleCheck() {
if (confirm('Replace everything with Past Simple questions?')) { blankSlate(); pastSimple(); }
}

// FOOD VOCABULARY / CHECK FUNCTION!
function foodMealsCheck() {
if (confirm('Replace everything with Food & Meals questions?')) { blankSlate(); foodMeals(); }
}


// RESET QUESTIONS FUNCTION!
function blankSlate() {
// SETTING UP & CLEARING QUESTIONS!
 const allQuestions = document.getElementsByClassName('theQs');
 for(let eachQuestion of allQuestions) { eachQuestion.value = ""; }
}


// START OF TEMPLATE QUESTIONS!
// START OF TEMPLATE QUESTIONS!
// START OF TEMPLATE QUESTIONS!

// PRESENT SIMPLE FUNCTION!
function presentSimple() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Present Simple questions ready!<br>You may begin the interview!";

document.getElementById("q1").value = "What app do you use the most? Why? Explain.";
document.getElementById("q2").value = "What do you usually do to relax after class?";
document.getElementById("q3").value = "What time do you usually wake up? Why? Explain.";
document.getElementById("q4").value = "What do you do when you are bored and have free time?";
document.getElementById("q5").value = "How often do you go shopping? What do you usually buy?";
document.getElementById("q6").value = "What do you eat or drink when it is really hot outside?";
document.getElementById("q7").value = "What do you usually eat for lunch? Do you eat any dessert?";
document.getElementById("q8").value = "What TV shows/social media channels do you watch regularly?";
document.getElementById("q9").value = "What do you usually do during long weekeneds or on vacation?";
document.getElementById("q10").value = "What are some hobbies or activities you enjoy doing? Explain.";
document.getElementById("q11").value = "What is your favorite day of the week? What do you usually do that day?";
document.getElementById("q12").value = "Talk about your daily routine, including all the things you do & the frequency.";
document.getElementById("q13").value = "Talk about your hobbies/activities you do more often, including the times & frequency, etc.";
document.getElementById("q14").value = "Talk about the chores / housework you do during the day, including the times & frequency, etc.";
document.getElementById("q15").value = "Talk about your hobbies and the activities you like doing, the frequency, why you like them, etc.";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}

// PAST SIMPLE FUNCTION!
function pastSimple() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Past Simple questions ready!<br>You may begin the interview!";

document.getElementById("q1").value = "What did you do yesterday?";
document.getElementById("q2").value = "What did you do last weekend?";
document.getElementById("q3").value = "What did you do this morning?";
document.getElementById("q4").value = "What was the last book you read?";
document.getElementById("q5").value = "What was the last game you played?";
document.getElementById("q6").value = "Were you a well behaved child? Explain.";
document.getElementById("q7").value = "Where did you grow up? What was it like?";
document.getElementById("q8").value = "When was the last time you rode a bicycle?";
document.getElementById("q9").value = "What was a funny movie you watched recently?";
document.getElementById("q10").value = "What was the last movie you saw? How was it?";
document.getElementById("q11").value = "Who did you hang out with last? What did you do together?";
document.getElementById("q12").value = "Talk about <u>the last time you went on holiday</u>, including when / where this was, & who you were with.";
document.getElementById("q13").value = "Talk about <u>what you did last summer / last winter vacation</u>, including the activities, places, people, etc.";
document.getElementById("q14").value = "Talk about the <u>last time you went on holiday</u>, including where you went, what you did and if you enjoyed it.";
document.getElementById("q15").value = "Talk about the <u>last time you went out</u> with a friend or family member, including where you went, what you did and why.";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}

// FOOD MEALS FUNCTION!
function foodMeals() {
document.getElementById("questAmount").value = "14";
document.getElementById("randomQs").innerHTML = "Food & Meals questions ready!<br>You may begin the interview!";

document.getElementById("q1").value = "<u>Describe your kitchen in detail</u>, including all the things you can see, where they are, the colors and sizes, the number of things, etc.";
document.getElementById("q2").value = "<u>Talk about all your favorite food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?";
document.getElementById("q3").value = "<u>Talk about all the delicious snacks you like</u>. Mention what they are, why you like them, how often you eat them, the amounts, etc. In what sizes, formats or containers do they come?";
document.getElementById("q4").value = "<u>Talk about all the vegetables you like or dislike</u>, including their names, why you like or dislike them, how often you eat them, etc. How do they taste? In what format or containers do they come?";
document.getElementById("q5").value = "Talk about <u>your shopping and food preferences</u>, including how often you go shopping, the stores you like and things that you normally buy.";
document.getElementById("q6").value = "Talk about <u>going to the supermarket</u>, including the things you most frequently buy at the store & if you like grocery shopping. Why? Why not?";
document.getElementById("q7").value = "Talk about <u>your favorite food & restaurants</u>, including the things you like eating, how often you prepare them, special recipes & dishes that you like.";
document.getElementById("q8").value = "Talk about <u>your eating habits and guilty pleasures</u>, either things you eat at home or at restaurants. Are restaurants better than eating at home?";
document.getElementById("q9").value = "Talk about <u>the meals you eat during the day</u>, including the different meals, the times or frequency, any ingredients, desserts, drinks, seasonings or condiments, etc.";
document.getElementById("q10").value = "<u>Describe the meals or dishes you eat when you are very hungry</u>, including the names, the types of meal, why you like them, how often you eat them, the main ingredients, etc.";
document.getElementById("q11").value = "<u>Talk about all your favorite healthy food</u>. Mention why you like it, when and where you eat it, how often you eat it, etc. What are the main ingredients? How do you prepare it?";
document.getElementById("q12").value = "<u>Talk about all the delicious snacks you know that are good for you</u>. Mention what they are, why you like it, how often you eat it, etc. What are the main ingredients? In what format or containers do they come?";
document.getElementById("q13").value = "<u>Talk about all the vegetables you know</u>. Mention the names, why you like them, how often you eat them, etc. What are the main ingredients? In what format or containers do they come?";
document.getElementById("q14").value = "Talk about the <u>prepared meals or dishes you eat when you are very hungry</u>. Mention the names, why you like them, what the main ingredients are, if you eat them for breakfast, lunch or dinner, etc.";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// BLANK TEMPLATE
function ___X___() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "__________ questions ready!<br>You may begin the interview!";

document.getElementById("q1").value = "";
document.getElementById("q2").value = "";
document.getElementById("q3").value = "";
document.getElementById("q4").value = "";
document.getElementById("q5").value = "";
document.getElementById("q6").value = "";
document.getElementById("q7").value = "";
document.getElementById("q8").value = "";
document.getElementById("q9").value = "";
document.getElementById("q10").value = "";
document.getElementById("q11").value = "";
document.getElementById("q12").value = "";
document.getElementById("q13").value = "";
document.getElementById("q14").value = "";
document.getElementById("q15").value = "";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// START COUNTDOWN FUNCTION!
function startCountdown() {
let goButton = document.getElementById("goButton");
goButton.style.backgroundColor = "red";
goButton.innerHTML = "Starting in...!";
setTimeout(function() { goButton.innerHTML = "Starting in 3!" }, 1000);
setTimeout(function() { goButton.innerHTML = "Starting in 2!" }, 2000);
setTimeout(function() { goButton.innerHTML = "Starting in 1!" }, 3000);
setTimeout(function() { slideQuestDown(); showRandomizer() }, 4000);
setTimeout(function() { goButton.innerHTML = "Start!"; goButton.style.backgroundColor = "" }, 4500);
enableAudio();
}

