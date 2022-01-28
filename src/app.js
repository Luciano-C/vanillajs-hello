/* window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
}; */

// Objeco excuses que contiene arrays para cada una de las partes de las excusas
var excuses = {
  who: ["The dog", "My grandma", "His turtle", "My bird"],
  action: ["ate", "peed", "crushed", "broke"],
  what: ["my homework", "the keys", "the car", "my house"],
  when: [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]
};

// Enlaza función con botón de la página
var button_1 = document.getElementById("button1");
button_1.onclick = generate_excuse;

// Función para generar un elemento aleatorio de una array
function random_from_array(someArray) {
  let random_index = Math.floor(Math.random() * someArray.length);
  let random_element = someArray[random_index];
  return random_element;
}

// Función que genera las excusas generando un elemento aleatorio de cada array en el objeto excuses. Posteriormente los une en un string y reemplaza
// el elemento h1 con id "excuse"
function generate_excuse() {
  let who = random_from_array(excuses.who);
  let action = random_from_array(excuses.action);
  let what = random_from_array(excuses.what);
  let when = random_from_array(excuses.when);

  let new_excuse = document.getElementById("excuse");
  new_excuse.innerHTML = who + " " + action + " " + what + " " + when;
}
