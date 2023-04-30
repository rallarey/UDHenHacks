import { renderQuizPage } from "./quiz.js";
import { renderBudgetPage } from "./budget.js";
import { renderResourcePage} from "./resource.js";
import { renderPage } from "./mainpage.js";

let renderNextPage = ()=>{
    var user = firebase.auth();
    

    function calculate() {
        let principal = parseFloat(document.getElementById("principal").value);
        let interestRate = (parseFloat(document.getElementById("interest-rate").value)/100)/ 12;
        let term = parseFloat(document.getElementById("term").value) * 12;

        let interest = interestRate * principal / ((1-(1+interestRate)**(-term)));
        let total = (interest * term)-principal;
        let totalCost = total + principal;
        document.getElementById("result").innerHTML = "Interest per month: $" + interest.toFixed(2);
        document.getElementById("result2").innerHTML = "Total interest paid: $" + total.toFixed(2);
        document.getElementById("result3").innerHTML = "Total cost: $" + totalCost.toFixed(2);
      };

    
    
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
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <div class="interest-calculator"> <center>
        <h2>Interest Calculator</h2>
        <label for="principal">Principal:</label>
        <input type="number" id="principal" name="Loan Amount" value="100000" required>
        <label for="interest-rate">Interest Rate (%):</label>
        <input type="number" id="interest-rate" name="interest-rate" value="5" required>
        <label for="term">Loan Length (years):</label>
        <input type="number" id="term" name="term" value="20"required>
        <button class="calculate-button" id = "Calculate">Calculate</button>
        <p id="result"></p>
        <p id="result2"></p>
        <p id="result3"></p>
        <\center>
    </div>
    <center>
      <div class = "chart-container">
        <canvas id="loanChart"></canvas>
      </div>
    </center>
    `);
      /*
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2023', '2024', '2025', '2026', '2027', '2028'],
            datasets: 
            [{
                label: 'Payday Loan',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }],
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
    */

    const loanAmountInput = document.getElementById("principal");
    const interestRateInput = document.getElementById("interest-rate");
    const loanLengthInput = document.getElementById("term");
    const ctx = document.getElementById("loanChart").getContext("2d");
    
    function calculateLoanCost(amount, rate, years) {
        const monthlyRate = rate / 100 / 12;
        const numPayments = years * 12;
        const monthlyPayment = monthlyRate * amount / (1-(1+monthlyRate)**(-numPayments));
        const totalCost = monthlyPayment * numPayments;
        return totalCost;
    }

    function createChartData(amount, rate, years) {
        const data = [];
        for (let i = 1; i <= years; i++) {
            const cost = calculateLoanCost(amount, rate, i);
            data.push(cost);
        }
        return data;
    }

    const chart = new Chart(ctx, {

        type: "line",
        data: {
            labels: Array.from({length: loanLengthInput.value},
                (_, i) => i + 1),
            datasets:[{
                label: "Total Cost",
                data: createChartData(loanAmountInput.value, interestRateInput.value, loanLengthInput.value),
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                fill: false,
            }],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Years",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Total Cost",
                    },
                },
            },
        },
    });

    function updateChart() {
        chart.data.labels = Array.from({ length: loanLengthInput.value }, 
            (_, i) => i + 1);
        chart.data.datasets[0].data = createChartData(loanAmountInput.value, 
            interestRateInput.value, loanLengthInput.value);
            chart.update();
    }


    $("#chart").on("click", ()=>{
        createChart();
    });
  
    $("#Calculate").on("click", ()=>{
        calculate();
        updateChart();
    });

    $("#updateChart").on("click",()=>{
        updateChart();
    });

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
      $("#home").on("click", ()=>{
        renderPage(user);
      });

  
  };

export {renderNextPage}