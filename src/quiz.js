import {renderBudgetPage} from "./budget.js"
import {renderNextPage} from "./finance.js"

let renderQuizPage= ()=>{
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
          </script> `);

    $("#budgetpage").on("click",()=>{
        renderBudgetPage();
    });

    $("#logout").on("click", ()=>{
        firebase.auth().signOut();
    });
};


export {renderQuizPage};