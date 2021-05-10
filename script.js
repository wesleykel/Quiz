let i = 0;

function askQuestion() {
  question = document.querySelector(".question").innerText = question1[i].ques;

  answer1 = document.querySelector(".answer1").innerText = question1[i].answer1;

  answer2 = document.querySelector(".answer2").innerText = question1[i].answer2;

  answer3 = document.querySelector(".answer3").innerText = question1[i].answer3;

  answer4 = document.querySelector(".answer4").innerText = question1[i].answer4;

  i++;
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
];

const answers = [
  {
    answer1: "Pacific, Mountain, Central, Eastern",
  },

  {
    answer2: "1914",
  },

  {
    answer3: "32",
  },
];

const correctAnswer1 =
  JSON.stringify(question1[0].answer1) === JSON.stringify(answers[0].answer1);

const correctAnswer2 =
  JSON.stringify(question1[1].answer3) === JSON.stringify(answers[1].answer2);

const correctAnswer3 =
  JSON.stringify(question1[2].answer2) === JSON.stringify(answers[2].answer3);
console.log(correctAnswer1);

//Check answer need to be worked out

function checkAnswerA() {
  let a = document.querySelector(".answer1").value;

  if (a === answers[0].answer1 || answers[1].answer2 || answers[2].answer3) {
    console.log("your correct");
  } else {
    console.log("your incorrect");
  }
  console.log(a);
  console.log(JSON.stringify(question1[0].answer1));
}

//console.log(JSON.stringify(question1[0].answer1));
//console.log(correctAnswer2);
//console.log(correctAnswer3);

const buttonSub = document.querySelector(".button");
buttonSub.addEventListener("click", askQuestion, false);

const buttonA = document.querySelector(".answer1");
buttonA.addEventListener("click", checkAnswerA, false);

//let b = document.querySelector(".answer2").innerText;
//let c = document.querySelector(".answer3").innerText;
//let d = document.querySelector(".answer4").innerText;
