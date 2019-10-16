var en = ["orange", "banana", "apple", "tomato", "grape", "pear", "strawberry", "peach"];
var es = ["naranja", "plátano", "manzana", "tomate", "uva", "pera", "fresa", "melocotón"];
var fr = ["orange", "banane", "pomme", "tomate", "raisin", "poire", "fraise", "pêche"];
var kr = ["오렌지", "바나나", "사과", "토마토", "포도", "배", "딸기", "복숭아"];

var all = [en, es, fr, kr];

console.log("All languages in database: \n" + all);

function a(language) {
  var languages = ["English", "Spanish", "French", "Korean"];
  var word = document.getElementById('word').value;
  var output = document.getElementById('output');
  var indexWord = -1;
  var indexDetectLanguage;

  for (var i = 0; i < all.length; i++) {
    for (var j = 0; j < all[i].length; j++) {
      if (all[i][j] == word) {
        indexWord = j;
        indexDetectLanguage = i;
      }
    }
  }

  if (indexWord == -1) {
    output.innerHTML = "The given word: " + word + " is not in our database";
  } else {
    output.innerHTML = "The " + languages[language] + " translation of the " + languages[indexDetectLanguage] + " word: " + word + " is " + all[language][indexWord] + "";
  }
  document.getElementById("translateButton").setAttribute("onclick", "a(" + language + ")");
}

function changeLanguage() {
  var selectedOptionNumber = document.myForm.choice.selectedIndex;
  var value = document.myForm.choice.options[selectedOptionNumber].value;
  console.log("Selected language (English by default!) " + value);
  var button = document.getElementById("translateButton");
  button.setAttribute("onclick", "a(" + value + ")");

}