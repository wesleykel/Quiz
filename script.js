let i = 0;

function askQuestion() {
  question = document.querySelector(".question").innerText = question1[i].ques;

  answer1 = document.querySelector(".answer1").innerText = question1[i].answer1;

  answer2 = document.querySelector(".answer2").innerText = question1[i].answer2;

  answer3 = document.querySelector(".answer3").innerText = question1[i].answer3;

  answer4 = document.querySelector(".answer4").innerText = question1[i].answer4;

  i++;

  buttonA.style.backgroundColor = " #f6f5f5";
  buttonB.style.backgroundColor = " #f6f5f5";
  buttonC.style.backgroundColor = " #f6f5f5";
  buttonD.style.backgroundColor = " #f6f5f5";
}

const question1 = [
  {
    ques: "Continental United States has 4 time zones, can you name them?",
    answer1: "Pacific, Mountain, Central, Eastern",
    answer2: "Pacific, Western, Central, Eastern",
    answer3: "Northern, Western, Mountain, Eastern",
    answer4: "Pacific, Western, Central, Atlantic",
  },

  {
    ques: "What year did World War I begin?",

    answer1: "1918",
    answer2: "1066",
    answer3: "1914",
    answer4: "1919",
  },

  {
    ques: "How many letters in the Russian Alphabet",

    answer1: "19",
    answer2: "32",
    answer3: "14",
    answer4: "26",
  },

  {
    ques: "What colour is a giraffe's tongue?",

    answer1: "Pink",
    answer2: "Green",
    answer3: "Blue",
    answer4: "Black",
  },

  {
    ques: "What is the Captial of Iceland?",

    answer1: "Reykjavík",
    answer2: "Zurich",
    answer3: "New Dehli",
    answer4: "Manhattan",
  },

  {
    ques:
      "Which is the eighth and furthest-known planet from the sun in the solar system?",

    answer1: "Earth",
    answer2: "Pluto",
    answer3: "Mars",
    answer4: "Neptune",
  },
];

const answers = [
  {
    answer: "Pacific, Mountain, Central, Eastern",
  },

  {
    answer: "1914",
  },

  {
    answer: "32",
  },
  {
    answer: "Blue",
  },
  {
    answer: "Reykjavík",
  },

  {
    answer: "Neptune",
  },
];

//Check answer need to be worked out
/*
function checkAnswerA() {
  if (buttonA.innerText === answers[0].answer1) {
    buttonA.style.backgroundColor = "green";
  } else {
    buttonA.style.backgroundColor = "red";
  }
}

function checkAnswerB() {
  console.log(buttonB);
  if (buttonB.innerText === answers[2].answer3) {
    buttonB.style.backgroundColor = "green";
  } else {
    buttonB.style.backgroundColor = "red";
  }
}

function checkAnswerC() {
  if (buttonC.innerText === buttonC.style.backgroundColor = "green";
  } else {
    buttonC.style.backgroundColor = "red";) {
    buttonC.style.backgroundColor = "green";
  } else {
    buttonC.style.backgroundColor = "red";
  }
  if (buttonC.innerText === answers[3].answer4) {
    buttonC.style.backgroundColor = "green";
  } else {
    buttonC.style.backgroundColor = "red";
  }
}

function checkAnswerD() {
  if (buttonD.innerText !== answers[0].answer1) {
    buttonD.style.backgroundColor = "red";
  }
}
*/
//console.log(JSON.stringify(question1[0].answer1));
//console.log(correctAnswer2);
//console.log(correctAnswer3);

//let b = document.querySelector(".answer2").innerText;
//let c = document.querySelector(".answer3").innerText;
//let d = document.querySelector(".answer4").innerText;

const buttonSub = document.querySelector(".button");
buttonSub.addEventListener("click", askQuestion, false);

const buttonA = document.querySelector(".answer1");
buttonA.addEventListener("click", checkAnswer, false);
buttonA.addEventListener("click", checkAnswerE, false);

const buttonB = document.querySelector(".answer2");
buttonB.addEventListener("click", checkAnswerB, false);

const buttonC = document.querySelector(".answer3");
buttonC.addEventListener("click", checkAnswerC, false);
buttonC.addEventListener("click", checkAnswerD, false);

const buttonD = document.querySelector(".answer4");
buttonD.addEventListener("click", checkAnswerF, false);

function checkAnswer() {
  switch (answers[0].answer) {
    case buttonA.innerText:
      buttonA.style.backgroundColor = "green";
      break;
  }
}

function checkAnswerC() {
  switch (answers[1].answer) {
    case buttonC.innerText:
      buttonC.style.backgroundColor = "green";
      break;
  }
}

function checkAnswerB() {
  switch (answers[2].answer) {
    case buttonB.innerText:
      buttonB.style.backgroundColor = "green";
      break;
  }
}

function checkAnswerD() {
  switch (answers[3].answer) {
    case buttonC.innerText:
      buttonC.style.backgroundColor = "green";
      break;
  }
}

function checkAnswerE() {
  switch (answers[4].answer) {
    case buttonA.innerText:
      buttonA.style.backgroundColor = "green";
      break;
  }
}

function checkAnswerF() {
  switch (answers[5].answer) {
    case buttonD.innerText:
      buttonD.style.backgroundColor = "green";
      break;
  }
}

//buttonB.style.backgroundColor = "red";
//buttonC.style.backgroundColor = "red";
//buttonD.style.backgroundColor = "red";
