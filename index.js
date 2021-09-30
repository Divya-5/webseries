var readlineSync = require("readline-sync");
var score=0;

var highestScores = [
  {
    name: "Divya",
    score: 5,
  },

  {
    name: "Akshay",
    score: 4,
  },
]

function welcomeToGame() {
var userName=readlineSync.question("What's your name? ");
  console.log("Welcome "+ userName + " let see how much you know about webSeries");
}

var questions=[{
question: `
The Man of Steel is another name for which superhero?
	a: Iron Man
	b:Superman
	c: Batman\n`,
answer:"b"
},
{
question: "What is the real name of Batman? ",
answer:"Bruce Wayne"
},
{
question:`
Batman protects which city?
	a: Chicago
	b: Gotham City\n`,
answer:"b",
},
{
  question: "The “Scarlett Speedster” is the nickname of which superhero? ",
  answer: "The Flash",
},
{
question: `
	Which of the following superheroes says that “Don’t make me angry; you wouldn’t like me when I’m angry”?
	a: Hulk
	b: Batman
	c: Flash
	d: Speedball\n`,
answer:"a",
},
{
  question: "Which superhero has super tools such as the magic lasso and bullet-proof bracelets?",
  answer: "Wonder Woman",
},
{
		question: `
	In addition to Hal Jordan and Alan Scott, The Green Lantern also uses which name as a secret identity? 
	a: Barry Allen
	b: Kyle Rayner
	c: Britt Reid\n`,
		answer: "b"
	}];

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right!");
    score++;
  }
  else{
        console.log("wrong!");
  }
      console.log("score "+ score);
      console.log("----------------");
}
function game() {
for(var i=0;i<questions.length;i++){
  var chosenQuestion=questions[i];
  play(chosenQuestion.question,chosenQuestion.answer);
}
}

function displayScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if there should be your name let me know and I'll update it");

  highestScores.map(score => console.log(score.name, " : ", score.score))
}
welcomeToGame();
game();
displayScores();