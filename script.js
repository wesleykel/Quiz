let i = 0;
let score = 0;

function askQuestion() {
  question = document.querySelector(".question").innerText = question1[i].ques;

  answer1 = document.querySelector(".answer1").innerText = question1[i].answer1;

  answer2 = document.querySelector(".answer2").innerText = question1[i].answer2;

  answer3 = document.querySelector(".answer3").innerText = question1[i].answer3;

  answer4 = document.querySelector(".answer4").innerText = question1[i].answer4;

  i++;

  answerA.style.backgroundColor = " #f6f5f5";
  answerB.style.backgroundColor = " #f6f5f5";
  answerC.style.backgroundColor = " #f6f5f5";
  answerD.style.backgroundColor = " #f6f5f5";
  if (i === 1) {
    buttonSub.innerText = "";
  }
  console.log(score);
  endGame();
}

function endGame() {
  if (i === 11) {
    end = document.querySelector(
      ".question"
    ).innerText = `End of quiz, you scored ${score} out of 10`;
    setTimeout(function () {
      location.reload();
    }, 5000);
  }
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
    ques: "How many letters in the Russian Alphabet?",

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
  {
    ques: " What is the capital of Chile?",

    answer1: "Rio",
    answer2: "Bogada",
    answer3: "Rome",
    answer4: "Santiago",
  },

  {
    ques: " How many sitting US presidents have been assassinated?",

    answer1: "Three",
    answer2: "Four",
    answer3: "Two",
    answer4: "Nine",
  },
  {
    ques: "What is the painting ‘La Gioconda’ more usually known as?",

    answer1: "The Mona Lisa",
    answer2: "The Starry Night",
    answer3: "The Persistance",
    answer4: "The Birth of Venus",
  },

  {
    ques: "How many Olympic gold medals has Mo Farah won?",

    answer1: "6",
    answer2: "5",
    answer3: "4",
    answer4: "3",
  },
  {
    ques: "",

    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
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

  {
    answer: "Santiago",
  },
  {
    answer: "Four",
  },

  {
    answer: "The Mona Lisa",
  },

  {
    answer: "4",
  },
];

const buttonSub = document.querySelector(".button");
buttonSub.addEventListener("click", askQuestion, false);

const answerBox = document.querySelectorAll("#anwer");

const answerA = document.querySelector(".answer1");
answerA.addEventListener("click", loopAnswer1, false);

const answerB = document.querySelector(".answer2");
answerB.addEventListener("click", loopAnswer2, false);

const answerC = document.querySelector(".answer3");
answerC.addEventListener("click", loopAnswer3, false);

const answerD = document.querySelector(".answer4");
answerD.addEventListener("click", loopAnswer4, false);

function loopAnswer1() {
  if (
    answerA.innerText === answers[0].answer ||
    answerA.innerText === answers[4].answer ||
    answerA.innerText === answers[8].answer
  ) {
    answerA.style.backgroundColor = "#c6ebc9";
    score++;
    setTimeout(function () {
      askQuestion();
    }, 1500);
  } else {
    answerA.style.backgroundColor = "#d35d6e";

    setTimeout(function () {
      askQuestion();
    }, 700);
  }
}

function loopAnswer2() {
  if (
    answerB.innerText === answers[2].answer ||
    answerB.innerText === answers[7].answer
  ) {
    answerB.style.backgroundColor = "#c6ebc9";
    score++;
    setTimeout(function () {
      askQuestion();
    }, 1500);
  } else {
    answerB.style.backgroundColor = "#d35d6e";
    setTimeout(function () {
      askQuestion();
    }, 700);
  }
}

function loopAnswer3() {
  if (
    answerC.innerText === answers[1].answer ||
    answerC.innerText === answers[3].answer ||
    answerC.innerText === answers[9].answer
  ) {
    answerC.style.backgroundColor = "#c6ebc9";
    score++;
    setTimeout(function () {
      askQuestion();
    }, 1500);
  } else {
    answerC.style.backgroundColor = "#d35d6e";
    setTimeout(function () {
      askQuestion();
    }, 700);
  }
}

function loopAnswer4() {
  if (
    answerD.innerText === answers[5].answer ||
    answerD.innerText === answers[6].answer
  ) {
    answerD.style.backgroundColor = "#c6ebc9";
    score++;
    setTimeout(function () {
      askQuestion();
    }, 1500);
  } else {
    answerD.style.backgroundColor = "#d35d6e";
    setTimeout(function () {
      askQuestion();
    }, 700);
  }
}
