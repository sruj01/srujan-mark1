var readlineSync = require("readline-sync")
var chalk = require("chalk")
var username = readlineSync.question(chalk.cyan.bgBlack(" Hey, my "+chalk.magenta("\"Supposed Friend\"")+ " ! Let's see how well you know me. ")+"\n\nEnter your name and we can get started: ")
var score=0
function play(question,answer,fact)
{
  var userAnswer= readlineSync.question("\n"+question+"\t")
  if  (userAnswer.toLowerCase()==answer.toLowerCase())
  {
    console.log(chalk.green.bold("Right\n"))
    score+=1
  }
  else
  {
    console.log(chalk.red.bold("Wrong\n"))
  }
  console.log(fact,chalk.yellow("\nScore: "),score)
  console.log("------------\n\n")
}

var questions=[{
  question: 'What\'s my sport? ',
  answer: 'football',
  fact: 'It\'s the world\'s greatest sport: FOOTBALL⚽'},

  {question: 'I\'ve always wanted to be an.. (Hint: Not an Engineer!)',
  answer: 'Astrophysicist',
  fact:  'The most exiting, intriguing, overwhelming and bewitching profession of them all! My dream was to be an Astrophysicist🪐👽'},

  {question: 'My most prized possession would be.. (Hint: I keep them stacked) :' ,
  answer: 'Books',
  fact: 'My collection of Books is such that it would put any school library to shame '},

  {question: 'Who\'s my favourite footballer? (Hint: He\'s the GOAT)',
  answer: 'messi',
  fact: 'Lionel Andres\' Messi.\nAnd screw you if you typed Ronaldo'},

  {question: 'Complete this quote for me: "When the going gets tough, the tough get.."',
  answer: 'going',
  fact: 'Shame on you if you couldn\'t get it right'
  }
]

for (var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i]
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.fact)
}

var highscore= {
  name: 'druv',
  score: '5'
}

if(score==5){
  console.log("Congratulations ",chalk.cyan(username)+"! You've answered all five..I guess you "+chalk.magenta("ARE MY FRIEND"))
}

else{
  console.log("Well "+chalk.cyan(username)+", you scored "+chalk.cyan(score)+". Since you didn\'t get all five, I guess we\'re now "+chalk.magenta("ACQUAINTANCES")+" and not "+chalk.magenta("FRIENDS"))
}
