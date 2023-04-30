import {renderBudgetPage} from "./budget.js"
import {renderNextPage} from "./finance.js"

let renderQuizPage= ()=>{
    $("body").html(`
        <p>idk</p>
        <button id = "budgetpage">BUDGET PAGE</button>
        <button id = "logout">LOG OUT</button>
    `);

    $("#budgetpage").on("click",()=>{
        renderBudgetPage();
    });

    $("#logout").on("click", ()=>{
        firebase.auth().signOut();
    });
};


export {renderQuizPage};