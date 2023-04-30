import {renderBudgetPage} from "./budget.js"
import {renderNextPage} from "./finance.js"
import {renderQuizStats} from "./quiz2.js"
import {renderResourcePage } from "./resource.js";

export const firebaseConfig = {
    apiKey: "AIzaSyAcTb0AVwtoOlslV51omp6yZX1Db13s59Q",
    authDomain: "henhacks-1b587.firebaseapp.com",
    databaseURL: "https://henhacks-1b587-default-rtdb.firebaseio.com",
    projectId: "henhacks-1b587",
    storageBucket: "henhacks-1b587.appspot.com",
    messagingSenderId: "287637493438",
    appId: "1:287637493438:web:0b1bcc71969fb912d4f0ef",
    measurementId: "G-X98Z7CYW7D"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let renderQuizPage= ()=>{
    $("body").html(`
        <p>idk</p>
        <button id = "nextpage">NEXT PAGE</button>
        <button id = "budgetpage">BUDGET PAGE</button>
        <button id = "financepage">FINANCE PAGE</button>
        <button id = "resourcepage">RESOURCE PAGE</button>
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

        <form id="assessment-form">
		<label for="income">Income:</label>
		<input type="number" id="income" name="income" required min="0"><br>

		<label for="expenses">Expenses:</label>
		<input type="number" id="expenses" name="expenses" required min="0"><br>

		<label for="debts">Debts:</label>
		<input type="number" id="debts" name="debts" required min="0"><br>

		<label for="savings">Savings:</label>
		<input type="number" id="savings" name="savings" required min="0"><br>

		<button type="submit" id="submit-btn">Submit</button>
	    </form>
      
      `);
    //startQuiz();

    document.getElementById("assessment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var income = parseFloat(document.getElementById("income").value);
        var expenses = parseFloat(document.getElementById("expenses").value);
        var debts = parseFloat(document.getElementById("debts").value);
        var savings = parseFloat(document.getElementById("savings").value);

        // Validate input data
        if (isNaN(income) || isNaN(expenses) || isNaN(debts) || isNaN(savings)) {
            alert("Please enter a valid number for all fields.");
            return;
        }

        if (income < 0 || expenses < 0 || debts < 0 || savings < 0) {
            alert("Please enter positive values for all fields.");
            return;
        }

        // Store input data in a database or data structure for later analysis
        var formData = {
            income: income,
            expenses: expenses,
            debts: debts,
            savings: savings,
        };
        var user = firebase.auth().currentUser;
        var uid = user.uid;


        let usersRef = firebase.database().ref("/users/" + uid);

        console.log(uid);
        usersRef.update(formData)
            .then(() => {
                console.log('Data saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
        
        console.log(formData); // Replace with code to store data in database or data structure

        renderQuizStats(income, expenses, debts, savings);

    });


    $("#budgetpage").on("click",()=>{
        console.log("TESTING!!!");
        renderBudgetPage();
    });
    $("#logout").on("click", ()=>{
        firebase.auth().signOut();
    });
    $("#financepage").on("click", ()=>{
        renderNextPage();
    });
    $("#resourcepage").on("click", ()=>{
      renderResourcePage();
    });
    $("#nextpage").on("click", ()=>{
        renderBudgetPage();
    });
    

};


export {renderQuizPage};


