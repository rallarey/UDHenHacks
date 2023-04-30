import { renderQuizPage } from "./quiz.js";
import { renderNextPage } from "./finance.js";
import { renderBudgetPage } from "./budget.js";
import { renderResourcePage} from "./resource.js";
import { renderPage } from "./mainpage.js";

let renderQuizStats = (income, expenses, debts, savings)=>{
    var user = firebase.auth();
    $("body").html(`]]]==

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
    <center>
        <h3>Summary</h3>
        
        <p>Income: <span id="income"></span></p>
        <p>Expenses: <span id="expenses"></span></p>
        <p>Debts: <span id="debts"></span></p>
        <p>Savings: <span id="savings"></span></p>
        <div class="charts-container">
            <div class="chart2-container">
                <canvas id="myChart"></canvas>
            </div>
            <div class="chart3-container">
                <canvas id="PieChart"></canvas>
        </div>
        </div>
        </center>




        
        <h2>Recommendations</h2>
        <p><span id="recommendations"></span></p>
        <p><span id="recommendations2"></span></p>
        <p><span id="recommendations3"></span></p>

        <p id = "resources">Check out the resources page which provides helpful resources to guide you on your financial journey!</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>



    `)

    const netIncome = income - expenses;

    const incomeRatio = netIncome / income;

    // Calculate the user's debt-to-income ratio
    const debtToIncomeRatio = debts / income;

    // Calculate the user's savings rate
    const savingsRate = savings / income;


    let incomeVariable = income;
    let expensesVariable = expenses;
    let debtsVariable = debts;
    let savingsVariable = savings;


    // Create a new Chart.js chart object
    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Income', 'Expenses', 'Debts', 'Savings'],
        datasets: [{
        label: 'Financial Situation',
        data: [incomeVariable, expensesVariable, debtsVariable, savingsVariable],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        yAxes: [{
            ticks: {
            beginAtZero: true
            }
        }]
        }
    }
    });

        // Get the canvas element and create a new pie chart
    var ctx2 = document.getElementById("PieChart").getContext("2d");
    var pieChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Expenses', 'Income', 'Debt'],
            datasets: [{
                label: 'Income vs Expenses',
                data: [incomeVariable, expensesVariable, debtsVariable],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom'
            }
        }
    });



    document.getElementById("income").innerHTML = incomeVariable;
    document.getElementById("expenses").innerHTML = expensesVariable;
    document.getElementById("debts").innerHTML = debtsVariable;
    document.getElementById("savings").innerHTML = savingsVariable;

    if (debtToIncomeRatio > 0.4) {
        document.getElementById("recommendations").innerHTML = 
        "Your debt-to-income ratio is high. Consider consolidating debt, negotiating with creditors or financial advisors, or creating a debt repayment plan. Creating a realistic budget and sticking to it could be useful to identify where your money may be going and see what areas of expense can be cut down on."
    }
    if (savingsRate < 0.1) {
        document.getElementById("recommendations2").innerHTML = 
        "Your savings rate is low. Consider increasing your emergency fund and contributing more to a retirement account. You can start planning by creating a savings goal and utilizing out budgeting tool to allow for regular contributions to your savings fund!"
    }
    if (incomeRatio < 0.5) { 
        document.getElementById("recommendations3").innerHTML = 
        "Based on our financial assessment, we recommend that you work on budgeting and allocating your expenses more effectively to improve your overall financial situation. This can include setting a budget, tracking your expenses, and finding ways to cut unnecessary costs. Try to allocate 50% of your income towards essential expenses such as housing, utilities, and food. You should take a look at our budgeting tool to help!"
    }

    if (debtToIncomeRatio < 0.4 && savingsRate > 0.1 && incomeRatio > 0.5){
        document.getElementById("recommendations").innerHTML =
        "Based on our analysis of your financial assessment, we are pleased to inform you that you are in a good state in your financial situation. Your income, expenses, debts, and assets are well balanced, and you are managing your finances responsibly. Keep up the good work, and continue to monitor your finances regularly to maintain this positive state. If you have any questions or concerns, please do not hesitate to contact us for further guidance and please continue utilizing the tools and resources available!"
    }


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


export {renderQuizStats};