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

/*

let fitnessSurvey = new FitnessSurvey();
fitnessSurvey.addQuestion("What is your age?", "int");
fitnessSurvey.addQuestion("What is your height (in inches)?", "int");
fitnessSurvey.addQuestion("What is your weight (in pounds)?", "int");
fitnessSurvey.addQuestion("How many days per week do you exercise?", "int");
fitnessSurvey.addQuestion("What types of exercise do you do?", "string");
fitnessSurvey.addQuestion(
  "Do you have any pre-existing health conditions?",
  "string"
);

console.log(fitnessSurvey.collectResponses());
*/
