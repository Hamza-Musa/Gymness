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
  constructor(age, height, weight, daysPerWeek, exerciseType, fitnessGoal, healthConditions) {
    this.age= age;
    this.height= height;
    this.weight= weight;
    this.daysPerWeek= daysPerWeek;
    this.exerciseType = exerciseType;
    this.fitnessGoal = fitnessGoal;
    this.healthConditions = healthConditions;

  }
}


const user1 = new User(25, 175, 70, 4, 'cardio' );
const user2 = new User(30, 160, 60, 3, 'strength training');
console.log(user1);
console.log(user2);

function createUser(age, height, weight, daysPerWeek, exerciseType){

  return new User(age, height, weight, daysPerWeek, exerciseType);
}

function processForm(event) {
  // prevents default behavior 
  if (event.preventDefault) event.preventDefault();
  //created a user
  const user = createUser(
    event.srcElement[0].value, 
    event.srcElement[1].value,
    event.srcElement[2].value,
    event.srcElement[3].value,
    event.srcElement[4].value,
    event.srcElement[5].value,
    event.srcElement[6].value);

  console.log(user);
  // You must return false to prevent the default form behavior
  return false;
}

var form = document.getElementById('survey-form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
