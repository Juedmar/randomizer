
// INITIAL TRIVIA CHECKS!
// INITIAL TRIVIA CHECKS!
// INITIAL TRIVIA CHECKS!


// GENERAL TRIVIA 1 / CHECK FUNCTION!
function triviaGeneral1() {
if (confirm('¿Reemplazar preguntas con Trivia General N°1 (15)?')) {
 resetTrivia();
 triviaGen1();
 }
}

// GENERAL TRIVIA 2 / CHECK FUNCTION!
function triviaGeneral2() {
if (confirm('¿Reemplazar preguntas con Trivia General N°2 (15)?')) {
 resetTrivia();
 triviaGen2();
 }
}

// HISTORICAL TRIVIA 1 / CHECK FUNCTION!
function triviaHistorica1() {
if (confirm('¿Reemplazar preguntas con Trivia Histórica N°1 (15)?')) {
 resetTrivia();
 triviaHistory1();
 }
}

// HISTORICAL TRIVIA 2 / CHECK FUNCTION!
function triviaHistorica2() {
if (confirm('¿Reemplazar preguntas con Trivia Histórica N°2 (15)?')) {
 resetTrivia();
 triviaHistory2();
 }
}

// SCIENTIFIC TRIVIA 1 / CHECK FUNCTION!
function triviaCiencias1() {
if (confirm('¿Reemplazar preguntas con Trivia Científica 1 (15)?')) {
 resetTrivia();
 triviaScience1();
 }
}

// SCIENTIFIC TRIVIA 2 / CHECK FUNCTION!
function triviaCiencias2() {
if (confirm('¿Reemplazar preguntas con Trivia Científica 2 (15)?')) {
 resetTrivia();
 triviaScience2();
 }
}


// RESET / CLEAR TRIVIA FUNCTION!
// RESET / CLEAR TRIVIA FUNCTION!
// RESET / CLEAR TRIVIA FUNCTION!

function resetTrivia() {
// SETTING UP & CLEARING QUESTIONS!
 const allQuestions = document.getElementsByClassName('studyQs');
 for(let eachQuestion of allQuestions) { eachQuestion.value = ""; }

// SETTING UP & CLEARING ANSWERS!
 const allAnswers = document.getElementsByClassName('answers');
 for(let eachAnswer of allAnswers) { eachAnswer.value = ""; }

// RESETTING ANSWER BUTTON!
 document.getElementById("answerButton").style.display = "none";
}


// START OF ACTUAL TRIVIA QUESTIONS!
// START OF ACTUAL TRIVIA QUESTIONS!
// START OF ACTUAL TRIVIA QUESTIONS!

// GENERAL TRIVIA 1!
function triviaGen1() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Trivia General (1) lista.<br>Puede iniciar las preguntas!";

document.getElementById("q1").value = "¿Cuáles son los cinco tipos de sabores primarios?";
document.getElementById("a1").value = "Los sabores primarios son ácido, amargo, dulce, salado y umami";

document.getElementById("q2").value = "¿Cuál es el lugar más frío de la tierra?";
document.getElementById("a2").value = "La Antártida, que está cubierta de capas con un espesor de entre dos mil y tres mil metros";

document.getElementById("q3").value = "¿Dónde originaron los juegos olímpicos?";
document.getElementById("a3").value = "Se originaron en Grecia. Se llaman así porque se celebraban en la ciudad de Olimpia";

document.getElementById("q4").value = "¿Qué tipo de animal es la ballena?";
document.getElementById("a4").value = "La ballena es un mamífero marino de hasta 30 metros de longitud";

document.getElementById("q5").value = "¿Qué cantidad de huesos en el cuerpo humano?";
document.getElementById("a5").value = "Un adulto tiene 206, mientras que los recién nacidos tienen alrededor de 300 huesos";

document.getElementById("q6").value = "¿Cuándo acabó la II Guerra Mundial?";
document.getElementById("a6").value = "La II Guerra Mundial finalizó en 1945";

document.getElementById("q7").value = "¿Quién pintó “la última cena”?";
document.getElementById("a7").value = "El autor de esta magnífica pintura fue Leonardo da Vinci";

document.getElementById("q8").value = "¿Cuándo empezó la Primera Guerra Mundial?";
document.getElementById("a8").value = "El año de inicio de la Primera Guerra mundial es en 1914";

document.getElementById("q9").value = "¿Cómo se denomina el resultado de la multiplicación?";
document.getElementById("a9").value = "El resultado de la multiplicación se llama producto";

document.getElementById("q10").value = "¿Cuál es el océano más grande?";
document.getElementById("a10").value = "El Océano Pacífico, con una superficie total de 165.700.000 km²";

document.getElementById("q11").value = "¿Qué año llegó Cristóbal Colón a América?";
document.getElementById("a11").value = "La fecha en la Cristóbal Colón llegó a América es en 1492";

document.getElementById("q12").value = "¿En qué año comenzó la II Guerra Mundial?";
document.getElementById("a12").value = "Este famoso conflicto bélico se inició en 1939";

document.getElementById("q13").value = "¿Cuál es tercer planeta en el sistema solar?";
document.getElementById("a13").value = "El planeta que ocupa el tercer puesto en cuanto a la distancia del sol es la Tierra";

document.getElementById("q14").value = "¿En qué lugar del cuerpo se produce la insulina?";
document.getElementById("a14").value = "En el páncreas es donde se produce la insulina";

document.getElementById("q15").value = "¿Cómo se le llama a una colección de revistas, diarios y publicaciones periódicas?";
document.getElementById("a15").value = "El nombre de las publicaciones periódicas o diarias es la hemeroteca";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// GENERAL TRIVIA 2!
function triviaGen2() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Trivia General (2) lista.<br>Puede iniciar las preguntas!";

document.getElementById("q1").value = "El triángulo que tiene sus tres lados iguales ¿Cómo se llama?";
document.getElementById("a1").value = "Éste recibe el nombre de triángulo equilátero";

document.getElementById("q2").value = "¿Cuántos corazones tienen los pulpos?";
document.getElementById("a2").value = "Estos animales se caracterizan por tener 3 corazones";

document.getElementById("q3").value = "¿En qué año se produce la Revolución Francesa?";
document.getElementById("a3").value = "Esta revolución estalló en el año 1789";

document.getElementById("q4").value = "¿De qué país es originario el café?";
document.getElementById("a4").value = "El café es originario de Etiopía, país perteneciente al continente africano";

document.getElementById("q5").value = "¿Cuántas naciones conforman el Reino Unido?";
document.getElementById("a5").value = "4 - El Reino Unido está formado Inglaterra, Escocia, Gales e Irlanda del Norte";

document.getElementById("q6").value = "¿En qué año llegó el ser humano a la Luna?";
document.getElementById("a6").value = "El ser humano llegó a la Luna en 1969";

document.getElementById("q7").value = "¿En qué año se produjeron los atentados sobre las Torres Gemelas de Nueva York?";
document.getElementById("a7").value = "Los atentados tuvieron lugar en el año 2001";

document.getElementById("q8").value = "¿Cómo se llama el satélite más grande de Saturno?";
document.getElementById("a8").value = "Su nombre es Titán, un satélite tan grande que tiene su propia atmósfera";

document.getElementById("q9").value = "¿En qué año cayó el muro de Berlín?";
document.getElementById("a9").value = "El muro de Berlín cayó en 1989";

document.getElementById("q10").value = "¿Aproximadamente, qué porcentaje del peso de un individuo pertenece a sus huesos?";
document.getElementById("a10").value = "Es un 12%, aproximadamente";

document.getElementById("q11").value = "¿Cuántas franjas tiene la bandera de Estados Unidos?";
document.getElementById("a11").value = "“The Star-Spangled Banner” o “Old Glory” cuenta con 13 franjas horizontales (7 rojas y 6 blancas), y un rectángulo azul con cincuenta estrellas blancas";

document.getElementById("q12").value = "¿Quién inventó la imprenta?";
document.getElementById("a12").value = "Johannes Gutenberg desarrolló esta tecnología en el año 1400 en Mainz (Alemania de hoy)";

document.getElementById("q13").value = "¿Cómo se llama la parte del ojo que es sensible a la luz?";
document.getElementById("a13").value = "Es la retina, ubicada en la parte interna del globo ocular";

document.getElementById("q14").value = "¿Cuándo se celebra el famoso carnaval de Brasil?";
document.getElementById("a14").value = "Este carnaval se celebra a finales de febrero o principios de marzo";

document.getElementById("q15").value = "¿Cuál de los siguientes imperios no tenía un idioma escrito: Inca, Aztecas, Egipcios, Romanos?";
document.getElementById("a15").value = "Los Incas no tuvieron un sistema de escritura alfabético, sino un sistema de cuerdas llamado “Quipu”";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// HISTORICAL TRIVIA 1!
function triviaHistory1() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Trivia Histórica N°1 lista.<br>Puede iniciar las preguntas!";

document.getElementById("q1").value = "¿Qué criatura representa la gran estatua que se encuentra junto a las pirámides de Guiza en Egipto?";
document.getElementById("a1").value = "‍Esfinge";

document.getElementById("q2").value = "¿En qué ciudad, en la que había una inmensa biblioteca, vivió la reina Cleopatra?";
document.getElementById("a2").value = "‍En Alejandría";

document.getElementById("q3").value = "¿Qué antiguos guerreros navegaban en unos barcos llamados drakkar?";
document.getElementById("a3").value = "Los vikingos";

document.getElementById("q4").value = "¿Qué planta usaban los romanos para hacer coronas que honraban las victorias de los grandes generales?";
document.getElementById("a4").value = "Laurel";

document.getElementById("q5").value = "¿Qué es más antiguo, las piedras de Stonehenge en Inglaterra o la ciudad inca de Machupichu?";
document.getElementById("a5").value = "Stonehenge";

document.getElementById("q6").value = "Stonehenge";
document.getElementById("a6").value = "La Guerra Civil";

document.getElementById("q7").value = "¿Cómo se llaman las pinturas que hacían los hombres prehistóricos en las paredes de las cuevas?";
document.getElementById("a7").value = "Rupestres";

document.getElementById("q8").value = "¿Qué antiguo pueblo se inventó la democracia: los griegos o los romanos?";
document.getElementById("a8").value = "Los griegos";

document.getElementById("q9").value = "¿Qué transatlántico naufragó el 15 de abril de 1912 en su primera travesía por el océano?";
document.getElementById("a9").value = "Titanic";

document.getElementById("q10").value = "¿Quién fue el primer presidente de los Estados Unidos?";
document.getElementById("a10").value = "George Washington";

document.getElementById("q11").value = "¿Cuál fue la primera nave especial de la NASA que llevó humanos a la superficie de la luna: ¿Apolo 8, Apolo 11 o Apolo 15?";
document.getElementById("a11").value = "Apolo 11";

document.getElementById("q12").value = "¿Cómo llamamos al sistema de escritura basado en signos pictográficos que usaban los antiguos egipcios?";
document.getElementById("a12").value = "Jeroglíficos";

document.getElementById("q13").value = "¿Qué premio Nobel recibió el científico Albert Einstein?";
document.getElementById("a13").value = "Física";

document.getElementById("q14").value = "¿Qué guerra tuvo lugar entre 1939 y 1945?";
document.getElementById("a14").value = "La Segunda Guerra Mundial";

document.getElementById("q15").value = "¿Cuál de estos dinosaurios no era herbívoro: ¿el estegosaurio, el tricerátops o el giganotosaurio?";
document.getElementById("a15").value = "Giganotosaurio";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// HISTORICAL TRIVIA 2!
function triviaHistory2() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Trivia Histórica N°2 lista.<br>Puede iniciar las preguntas!";

document.getElementById("q1").value = "Si vas en coche, bici o autobús se lo debes a un invento de hace 5.000 millones de años. ¿Cuál?    ";
document.getElementById("a1").value = "La rueda";

document.getElementById("q2").value = "¿Qué ciudad moderna se levantó sobre el centro del imperio azteca: ¿Ciudad de México, Madrid o Washington?";
document.getElementById("a2").value = "Ciudad de México";

document.getElementById("q3").value = "¿De qué país eran los samuráis?";
document.getElementById("a3").value = "De Japón";

document.getElementById("q4").value = "¿Cómo se llama el que fue el primer presidente afroamericano de Estados Unidos?";
document.getElementById("a4").value = "Barack Obama";

document.getElementById("q5").value = "¿Qué letra usaban los romanos para dar un diez?";
document.getElementById("a5").value = "La letra “X”";

document.getElementById("q6").value = "¿Cuál fue la primera mujer presidente de Alemania en 2005?";
document.getElementById("a6").value = "Angela Merkel";

document.getElementById("q7").value = "¿Qué protagonista de la guerra de Troya tiene el mismo nombre que una capital de Europa?";
document.getElementById("a7").value = "París";

document.getElementById("q8").value = "¿Qué es el jefe del Estado en Japón?";
document.getElementById("a8").value = "El Emperador";

document.getElementById("q9").value = "¿Quién bajó de montaña con los Diez Mandamientos?  ";
document.getElementById("a9").value = "Moisés";

document.getElementById("q10").value = "¿En qué país, el más grande del mundo, reinaban los zares?";
document.getElementById("a10").value = "En Rusia";

document.getElementById("q11").value = "¿Cómo se llama el aparato que consiste en cuentas que se deslizan por barras y que antiguamente se usaba para sumar?";
document.getElementById("a11").value = "Ábaco";

document.getElementById("q12").value = "¿Qué animal tiraba de las cuádrigas en la época de los romanos?";
document.getElementById("a12").value = "‍Caballos";

document.getElementById("q13").value = "¿Qué raza de perro con manchas negras toma su nombre una histórica región de la costa este del mar Adriático?  ";
document.getElementById("a13").value = "Dálmata";

document.getElementById("q14").value = "¿Los romanos de clase alta se llamaban patricios o isabelos?";
document.getElementById("a14").value = "Patricios";

document.getElementById("q15").value = "¿En qué parte del cuerpo está el único ojo de un cíclope?";
document.getElementById("a15").value = "En medio de su frente";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// SCINTIFIC TRIVIA 1!
function triviaScience1() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Trivia Científica N°1 lista.<br>Puede iniciar las preguntas!";

document.getElementById("q1").value = "¿Cuál es el gas más abundante en la atmósfera de la Tierra?";
document.getElementById("a1").value = "Nitrógeno";

document.getElementById("q2").value = "¿Cuántas vertebras posee el cuerpo humano?";
document.getElementById("a2").value = "33 vértebras";

document.getElementById("q3").value = "¿Cuál es el material natural más duro del planeta?";
document.getElementById("a3").value = "El diamante";

document.getElementById("q4").value = "¿Cuál es el hueso más grande en el cuerpo humano?";
document.getElementById("a4").value = "El fémur";

document.getElementById("q5").value = "¿Cuántos años tiene el universo?";
document.getElementById("a5").value = "13,800 millones de años";

document.getElementById("q6").value = "¿Cuál es la partícula más pequeña que existe en el universo?";
document.getElementById("a6").value = "Los quarks";

document.getElementById("q7").value = "¿Cuál es el metal que se encuentra en el centro de la tierra?";
document.getElementById("a7").value = "El hierro";

document.getElementById("q8").value = "¿Cuántos elementos químicos existen en la tabla periódica?";
document.getElementById("a8").value = "118 elementos";

document.getElementById("q9").value = "¿Los electrones son más pequeños que los átomos?";
document.getElementById("a9").value = "Sí, lo son";

document.getElementById("q10").value = "¿Qué significa ADN?";
document.getElementById("a10").value = "Ácido desoxirribonucleico";

document.getElementById("q11").value = "¿Quién escribió el libro “Breve historia del tiempo”?";
document.getElementById("a11").value = "Stephen Hawking";

document.getElementById("q12").value = "¿Cuál es el punto de ebullición del agua?";
document.getElementById("a12").value = "100° Celcius";

document.getElementById("q13").value = "¿La luz es una partícula o una onda?";
document.getElementById("a13").value = "La luz es energía que se propagarse como radiación electromagnética, y se comporta como onda o como partícula según las condiciones de interacción con la materia";

document.getElementById("q14").value = "¿Cuál es la galaxia espiral más cercana a la Vía Láctea?";
document.getElementById("a14").value = "La galaxia Andrómeda";

document.getElementById("q15").value = "¿Cada cuántos años pasa por la tierra el cometa Halley?";
document.getElementById("a15").value = "Cada 75 años";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// SCINTIFIC TRIVIA 2!
function triviaScience2() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Trivia Científica N°2 lista.<br>Puede iniciar las preguntas!";

document.getElementById("q1").value = "¿Qué misión lunar Apolo fue la primera en llevar un vehículo lunar?";
document.getElementById("a1").value = "La misión del Apolo 15";

document.getElementById("q2").value = "¿Cómo se llamó el primer satélite artificial lanzado por la Unión Soviética en 1957?";
document.getElementById("a2").value = "Sputnik 1";

document.getElementById("q3").value = "¿Cuál es el tipo de sangre más raro?";
document.getElementById("a3").value = "AB negativo";

document.getElementById("q4").value = "La tierra tiene tres capas que son diferentes debido a las diferentes temperaturas. ¿Cuáles son sus tres capas?";
document.getElementById("a4").value = "Corteza, manto y núcleo";

document.getElementById("q5").value = "¿Qién propuso que la Tierra no era el centro del universo y que el Sol estaba en el centro de nuestro sistema solar?";
document.getElementById("a5").value = "Nicolás Copérnico";

document.getElementById("q6").value = "¿Qué planeta gira más rápido, completando una rotación completa en solo 10 horas?";
document.getElementById("a6").value = "Júpiter";

document.getElementById("q7").value = "¿Cuántos dientes tiene un ser humano adulto?";
document.getElementById("a7").value = "32";

document.getElementById("q8").value = "¿En qué parte del cuerpo humano se encuentran la mayoría de las glándulas sudoríparas?";
document.getElementById("a8").value = "Parte inferior de los pies";

document.getElementById("q9").value = "Aproximadamente, ¿cuánto tarda la luz del sol en llegar a la Tierra: 8 minutos, 8 horas u 8 días?";
document.getElementById("a9").value = "8 minutos";

document.getElementById("q10").value = "¿A qué temperatura son iguales Celsius y Fahrenheit?";
document.getElementById("a10").value = "Ambas escalas coinciden a lo -40 grados";

document.getElementById("q11").value = "¿Cuáles son los cuatro metales preciosos primarios?";
document.getElementById("a11").value = "Oro, plata, platino y paladio";

document.getElementById("q12").value = "Esta parte del cerebro se ocupa de la audición y el lenguaje.";
document.getElementById("a12").value = "El lóbulo temporal";

document.getElementById("q13").value = "Este médico griego fue el primero en llevar registros de las historias de sus pacientes.";
document.getElementById("a13").value = "Hipócrates";

document.getElementById("q14").value = "¿Cuál es la velocidad de la luz en el vacío (de forma aproximada, en kilómetros por segundo)?";
document.getElementById("a14").value = "Aproximadamente 299,792,458 metros/segundo (300,000 km/segundo)";

document.getElementById("q15").value = "¿Qué nombre tiene un tipo de reacción química en la que se libera calor?";
document.getElementById("a15").value = "Exotérmica";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// TRIVIA TEMPLATE
function trivia___X___() {
document.getElementById("questAmount").value = "15";
document.getElementById("randomQs").innerHTML = "Trivia ___X___ lista.<br>Puede iniciar las preguntas!";

document.getElementById("q1").value = "";
document.getElementById("a1").value = "";

document.getElementById("q2").value = "";
document.getElementById("a2").value = "";

document.getElementById("q3").value = "";
document.getElementById("a3").value = "";

document.getElementById("q4").value = "";
document.getElementById("a4").value = "";

document.getElementById("q5").value = "";
document.getElementById("a5").value = "";

document.getElementById("q6").value = "";
document.getElementById("a6").value = "";

document.getElementById("q7").value = "";
document.getElementById("a7").value = "";

document.getElementById("q8").value = "";
document.getElementById("a8").value = "";

document.getElementById("q9").value = "";
document.getElementById("a9").value = "";

document.getElementById("q10").value = "";
document.getElementById("a10").value = "";

document.getElementById("q11").value = "";
document.getElementById("a11").value = "";

document.getElementById("q12").value = "";
document.getElementById("a12").value = "";

document.getElementById("q13").value = "";
document.getElementById("a13").value = "";

document.getElementById("q14").value = "";
document.getElementById("a14").value = "";

document.getElementById("q15").value = "";
document.getElementById("a15").value = "";

loadQuestions();
window.scrollTo(0, document.body.scrollHeight);
startCountdown();
}


// TRIVIA START COUNTDOWN FUNCTION!
function startCountdown() {
let goButton = document.getElementById("goButton");
goButton.style.backgroundColor = "red";
goButton.innerHTML = "Comenzando en...!";
setTimeout(function() { goButton.innerHTML = "Comenzando en 3!" }, 1000);
setTimeout(function() { goButton.innerHTML = "Comenzando en 2!" }, 2000);
setTimeout(function() { goButton.innerHTML = "Comenzando en 1!" }, 3000);
setTimeout(function() { slideQuestDown(); showRandomizer() }, 4000);
setTimeout(function() { goButton.innerHTML = "Comenzar!"; goButton.style.backgroundColor = "" }, 4500);
enableAudio();
}

