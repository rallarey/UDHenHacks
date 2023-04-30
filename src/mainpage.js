import { renderQuizPage } from "./quiz.js";
import { renderNextPage } from "./finance.js";
import { renderBudgetPage } from "./budget.js";
import { renderResourcePage} from "./resource.js";

let renderPage = (loggedIn)=>{
    var username = '';
    var pic = '';
    let myuid = loggedIn.uid;

    
    
    $("body").html(`

    <nav>
    <ul>
      <li><button id="home">Home</button></li>
      <li><button id="quiz">Financial Assessment</button></li>
      <li><button id="finance">Interest Calculator</button></li>
      <li><button id="budget">Budget Planner</button></li>
      <li><button id="resources">Resources</button></li>
      <li><button id="logout">Log out</button></li>
    </ul>
    </nav>

    <body data-spy="scroll" data-target="#navbar" data-offset="30">

    <!-- home category starts -->
   
    <header class="bg-gradient" id="home">
    
        <div class="container mt-5">
        
            <h1> Welcome to EmpowerU</h1>

     <p class="subtitle">A Financial Empowerment Platform for the Underserved</p>
        <button id = "nextpage" class="btn button">Get Started!</button>
        
    
    <!-- home category ends -->

    <!--feature category starts-->
    <div class="section light-bg" id="features">
        <div class="container">
            <div class="section-title">
                <h3> EmpowerU Features</h3>
            </div>
            <div class="row">
                <div class="col-12 col-lg-4">
                    <div class="card features">
                        <div class="card-body">
                            <div class="media">
                                <span class="ti-face-smile gradient-fill ti-3x mr-3"></span>
                                <div class="media-body">
                                    <h4 class="card-title">Easy to Use</h4>
                                    <p class="card-text">Really easy and simple to get started. All your budgeting and financial planning can be done here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="card features">
                        <div class="card-body">
                            <div class="media">
                                <span class="ti-comments gradient-fill ti-3x mr-3"></span>
                                <div class="media-body">
                                    <h4 class="card-title">Get Customized Help</h4>
                                    <p class="card-text">Specifically designed to help, our specialized chatbot can answer any questions you have.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="card features">
                        <div class="card-body">
                            <div class="media">
                                <span class="ti-check gradient-fill ti-3x mr-3"></span>
                                <div class="media-body">
                                    <h4 class="card-title">Understand Your Finances</h4>
                                    <p class="card-text">Take a financial health assessment to receive personalized advice based on your own situation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--feature category ends-->

    <!--FAQ part starts-->
    <div class="section pt-0">
        <div class="container">
            <div class="section-title">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div class="row pt-4">
                <div class="col-md-6">
                    <h4 class="mb-3">How do I signup? </h4>
                    <p class="light-font mb-5"> You could always sign up with any Google account or with other valid emails in case you need to reset your password when you forget it.</p>
                    <h4 class="mb-3">What type of services does this website offer? </h4>
                    <p class="light-font mb-5">This website gives free financial assessments, has an interest calculator, has a budget calculator, a wide list of resources, and an CHATBOT that uses machine learning and natural language processing to answer different financial questions</p>
                </div>
                <div class="col-md-6">
                    <h4 class="mb-3">Is this website for Profit? </h4>
                    <p class="light-font mb-5">This website is non for profit and solely exists to spread information about the dangers of payday loans and resources for long term financial planning.</p>
                    <h4 class="mb-3">Can I share my planner with others? </h4>
                    <p class="light-font mb-5">Currently, we do not support this service, but we will have this feature in the future.</p>
                </div>
            </div>
        </div>
    </div>

    <!--footer-->
    <footer class="my-5 text-center">
        <p class="mb-2">COPYRIGHT © 2023. ALL RIGHTS RESERVED.</p>
        <a>TERMS</a>
    </footer>
  
    
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
      localStorage.clear();
      </script>  `);
    
  
    $("#logout").on("click", ()=>{
      firebase.auth().signOut();
    });

    $("#quiz").on("click", ()=>{
      renderQuizPage();
    });

    $("#finance").on("click", ()=>{
      renderNextPage();
    });

    $("#budget").on("click", ()=>{
      renderBudgetPage();
    });

    $("#resources").on("click", ()=>{
      renderResourcePage();
    });

    $("#nextpage").on("click", ()=>{
      renderQuizPage();
    });



  
  };

  export {renderPage};