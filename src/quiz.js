import {renderBudgetPage} from "./budget.js"
import {renderNextPage} from "./finance.js"

let renderQuizPage=()=>{

  $("body").html(`
    <p>idk</p>
        <button id = "budgetpage">BUDGET PAGE</button>
        <button id = "logout">LOG OUT</button>
        <script>!(function () {
            let e = document.createElement("script"),
              t = document.head || document.getElementsByTagName("head")[0];
            (e.src =
              "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
              // Replace 1.x.x with the version that you want
              (e.async = !0),
              (e.onload = () => {
                window.WebChat.default(
                  {
                    customData: { language: "en" },
                    socketUrl: "http://0.0.0.0:5005",
                    // add other props here
                  },
                  null
                );
              }),
              t.insertBefore(e, t.firstChild);
          })();
          </script>
      <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Budget Calculator</a></li>
      <li><a href="#">Interest Rate</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">links</a></li> 
      
    </ul>
  </nav>
      <p>hi</p>
      <p>chelseyeatspoop</p>

      <div class = "app">
      <h1> Are you a delaware resident? </h1>
      <div class = "quiz">
      <button class = "btn"> yes</button>
      <button class = "btn"> no </button>
      <button id = "next-btn" > Next </button>
      </div>
      </div>
      
      

      <p>idk</p>
      <button id = "budgetpage">BUDGET PAGE</button>
      <button id = "logout">LOG OUT</button>
      <script>!(function () {
          let e = document.createElement("script"),
            t = document.head || document.getElementsByTagName("head")[0];
          (e.src =
            "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
            // Replace 1.x.x with the version that you want
            (e.async = !0),
            (e.onload = () => {
              window.WebChat.default(
                {
                  customData: { language: "en" },
                  socketUrl: "http://0.0.0.0:5005",
                  // add other props here
                },
                null
              );
            }),
            t.insertBefore(e, t.firstChild);
        })();
        </script>
      `);
      
      //questions
      const questions = [
        {
          question: "How old are you?" ,
          answers: [
            {text: "18-23" },
            {text: "24-30"},
            {text: "65 years and up"},
          ]
        }
      ];

      const questionElement = document.getElementById("question");
      const answerButton  = document.getElementById("answer-buttons");
      const nextButton = document.getElementById("next-btn");

      let currentQuestionIndex = 0;
      let score = 0;

      function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML  = "Next";
        showQuestion();
      }
      function showQuestion(){
        let currenttQuestionIndex= questions[current];
        let questionNO =currentQuestionIndex +1;
        questionElement.innerHTML = questionNo + "." + currentQuestion.question;

	      currentQuestion.answers.forEach(answer => {
		      const button = document.createElement("button");
		      button.innerHTML = answer.text;
		      button.classList.add("btn");
		      answerButton.appendChild(button);
		      button.addEventListener("click", selectAnswer);
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
	    const isCorrect = selectedBtn.dataset.correct == "true";
    }
   startQuiz();

   $("#budgetpage").on("click",()=>{
    renderBudgetPage();
    });

    $("#logout").on("click", ()=>{
        firebase.auth().signOut();
    });
};


export {renderQuizPage};
