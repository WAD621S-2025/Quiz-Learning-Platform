const questions = [
  {
    question: "When did Namibia gain independence?",
    answers: [
      {text: "1988", correct: false},
      {text: "1990", correct: true},
      {text: "1992", correct: false},
      {text: "1994", correct: false},
    ]
  },
  {
    question: "What is the capital city of Namibia?",
    answers: [
      {text: "Walvis Bay", correct: false},
      {text: "Swakopmund", correct: false},
      {text: "Windhoek", correct: true},
      {text: "Oshakati", correct: false},
    ]
  },
  {
    question: "Which desert covers much of Namibia's western coast?",
    answers: [
      {text: "Sahara Desert", correct: false},
      {text: "Kalahari Desert", correct: false},
      {text: "Namib Desert", correct: true},
      {text: "Gobi Desert", correct: false},
    ]
  },
  {
    question: "What is the official language of Namibia?",
    answers: [
      {text: "Afrikaans", correct: false},
      {text: "German", correct: false},
      {text: "English", correct: true},
      {text: "Oshiwambo", correct: false},
    ]
  },
  {
    question: "Who was Namibia's first president after independence?",
    answers: [
      {text: "Hifikepunye Pohamba", correct: false},
      {text: "Sam Nujoma", correct: true},
      {text: "Hage Geingob", correct: false},
      {text: "Toivo ya Toivo", correct: false},
    ]
  },
  {
    question: "Which country colonized Namibia before independence?",
    answers: [
      {text: "Britain", correct: false},
      {text: "Portugal", correct: false},
      {text: "South Africa", correct: true},
      {text: "Belgium", correct: false},
    ]
  },
  {
    question: "What is the name of Namibia's famous red sand dunes?",
    answers: [
      {text: "Skeleton Coast", correct: false},
      {text: "Sossusvlei", correct: true},
      {text: "Etosha Pan", correct: false},
      {text: "Fish River Canyon", correct: false},
    ]
  },
  {
    question: "Which ethnic group is the largest in Namibia?",
    answers: [
      {text: "Herero", correct: false},
      {text: "Ovambo", correct: true},
      {text: "Damara", correct: false},
      {text: "Nama", correct: false},
    ]
  },
  {
    question: "What is Namibia's currency?",
    answers: [
      {text: "Rand", correct: false},
      {text: "Shilling", correct: false},
      {text: "Namibian Dollar", correct: true},
      {text: "Pula", correct: false},
    ]
  },
  {
    question: "Which famous national park is known for wildlife viewing in Namibia?",
    answers: [
      {text: "Kruger National Park", correct: false},
      {text: "Etosha National Park", correct: true},
      {text: "Serengeti National Park", correct: false},
      {text: "Chobe National Park", correct: false},
    ]
  },
  {
    question: "What was the former name of Namibia during colonization?",
    answers: [
      {text: "Rhodesia", correct: false},
      {text: "South West Africa", correct: true},
      {text: "German East Africa", correct: false},
      {text: "Bechuanaland", correct: false},
    ]
  },
  {
    question: "Which programming paradigm emphasizes immutability and pure functions?",
    answers: [
      {text: "Object-Oriented Programming", correct: false},
      {text: "Procedural Programming", correct: false},
      {text: "Functional Programming", correct: true},
      {text: "Logic Programming", correct: false},
    ]
  },
  {
    question: "What does CPU stand for in computer science?",
    answers: [
      {text: "Computer Processing Unit", correct: false},
      {text: "Central Processing Unit", correct: true},
      {text: "Core Processing Unit", correct: false},
      {text: "Central Program Unit", correct: false},
    ]
  },
  {
    question: "Which ancient rock art site is a UNESCO World Heritage Site in Namibia?",
    answers: [
      {text: "Twyfelfontein", correct: true},
      {text: "Spitzkoppe", correct: false},
      {text: "Brandberg", correct: false},
      {text: "Waterberg", correct: false},
    ]
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      {text: "O(n)", correct: false},
      {text: "O(log n)", correct: true},
      {text: "O(n²)", correct: false},
      {text: "O(1)", correct: false},
    ]
  },
  {
    question: "Which indigenous group is known for their traditional clicking languages?",
    answers: [
      {text: "Ovambo", correct: false},
      {text: "San (Bushmen)", correct: true},
      {text: "Herero", correct: false},
      {text: "Kavango", correct: false},
    ]
  },
  {
    question: "What does HTTP stand for?",
    answers: [
      {text: "HyperText Transfer Protocol", correct: true},
      {text: "HighText Transfer Protocol", correct: false},
      {text: "HyperText Transmission Protocol", correct: false},
      {text: "HyperTech Transfer Protocol", correct: false},
    ]
  },
  {
    question: "Which German colonial leader is associated with the Herero genocide?",
    answers: [
      {text: "Otto von Bismarck", correct: false},
      {text: "Lothar von Trotha", correct: true},
      {text: "Paul von Lettow-Vorbeck", correct: false},
      {text: "Carl Peters", correct: false},
    ]
  },
  {
    question: "In computer science, what is an algorithm?",
    answers: [
      {text: "A programming language", correct: false},
      {text: "A step-by-step procedure to solve a problem", correct: true},
      {text: "A type of computer hardware", correct: false},
      {text: "A software application", correct: false},
    ]
  },
  {
    question: "What traditional fermented milk drink is popular among Namibian pastoralist communities?",
    answers: [
      {text: "Oshikundu", correct: false},
      {text: "Omaere", correct: true},
      {text: "Kapana", correct: false},
      {text: "Mahango", correct: false},
    ]
  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let selectedQuestions = [];

let currentQuestionIndex = 0;
let score = 0;


function getRandomQuestions() {
    let randomQuestions = [];
    let usedIndexes = []; // Keep track of which questions we already picked
    
    // Pick 10 random questions
    while (randomQuestions.length < 10) {
        // Get a random number between 0 and 19 (because we have 20 questions)
        let randomIndex = Math.floor(Math.random() * questions.length);
        
        // Check if we haven't used this question yet
        if (!usedIndexes.includes(randomIndex)) {
            randomQuestions.push(questions[randomIndex]); // Add the question
            usedIndexes.push(randomIndex); // Remember we used this one
        }
    }
    
    return randomQuestions;
}

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
 
  selectedQuestions = getRandomQuestions();
  nextButton.innerHTML="Next";
  showQestion();
}

function showQestion(){
    resetState();
 
  let currentQuestion= selectedQuestions[currentQuestionIndex];
  let quetionNo = currentQuestionIndex + 1;
  questionElement.innerHTML= quetionNo +". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer=> {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct; 
    }
    button.addEventListener("click", selectAnswer)
  });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct=== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if( button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        });
        nextButton.style.display= "block";
}

function showScore() {
    resetState();
    
    questionElement.innerHTML = `🎉 You scored ${score} out of ${selectedQuestions.length}!`;

    // Create a "Play Again" button
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    // Create a "Go Home" button
    const homeButton = document.createElement("button");
   
    homeButton.classList.add("btn");
    homeButton.id = "home-btn";
    homeButton.innerHTML="Home";
    homeButton.style.display= "block";
    // When clicked, go back to welcome page
    homeButton.addEventListener("click", () => {
        window.location.href = "welcome_page.html"; 
    });

    
    answerButtons.appendChild(homeButton);
}

function handleNextButton(){
    currentQuestionIndex++;
    
    if(currentQuestionIndex < selectedQuestions.length){
        showQestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
   
    if(currentQuestionIndex < selectedQuestions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()