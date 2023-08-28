class FitnessSurvey {
  constructor() {
    this.questions = [];
  }

  addQuestion(question, type) {
    this.questions.push({ question: question, type: type });
  }

  collectResponses() {
    let responses = {};
    for (let i = 0; i < this.questions.length; i++) {
      let question = this.questions[i];
      let response = prompt(question.question);
      switch (question.type) {
        case "int":
          response = parseInt(response);
          break;
        case "float":
          response = parseFloat(response);
          break;
      }
      responses[question.question] = response;
    }
    return responses;
  }
}

class User {
  constructor(age, height, weight, daysPerWeek, exerciseType) {
    this.age= age;
    this.height= height;
    this.weight= weight;
    this.age= age;
    this.daysPerWeek= daysPerWeek;
    this.exerciseType = exerciseType;
  }
}


const user1 = new User(25, 175, 70, 4, 'cardio' );
const user2 = new User(30, 160, 60, 3, 'strength training');
console.log(user1);
console.log(user2);

function createUser( user){
  console.log(user);
}

function processForm(event) {
  // prevents default behavior 
  if (event.preventDefault) event.preventDefault();
  //createUser
  console.log(event.srcElement[5]);
  const userChoice = event.srcElement[5].value;
  switch(userChoice) {
    // case ""
    // break;

  }
  // You must return false to prevent the default form behavior
  return false;
}

var form = document.getElementById('survey-form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}