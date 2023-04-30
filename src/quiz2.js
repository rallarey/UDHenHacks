import { renderQuizPage } from "./quiz.js";
import { renderNextPage } from "./finance.js";
import { renderBudgetPage } from "./budget.js";
import { renderResourcePage} from "./resource.js";
import { renderPage } from "./mainpage.js";

let renderQuizStats = (income, expenses, debts, savings)=>{
    var user = firebase.auth();
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

        <h3>Summary</h3>

        <p>income: <span id="income"></span></p>
        <p>expenses: <span id="expenses"></span></p>
        <p>debts: <span id="debts"></span></p>
        <p>savings: <span id="savings"></span></p>
        
        <h2>Recommendations</h2>
        <p><span id="recommendations"></span></p>
        <p><span id="recommendations2"></span></p>
        <p><span id="recommendations3"></span></p>

        <p id = "resources">Check out the resources page which provides helpful resources to guide you on your financial journey!</p>

        <button id = "nextpage">NEXT PAGE</button>
        <button id = "budgetpage">BUDGET PAGE</button>
        <button id = "financepage">FINANCE PAGE</button>
        <button id = "logout">LOG OUT</button>


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