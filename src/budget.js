
let renderBudgetPage= ()=>{
    $("body").html(`
        <p>idk</p>
        <button id = "logout">LOG OUT</button>
    `);

$("#logout").on("click", ()=>{
    firebase.auth().signOut();
  });
};


export {renderBudgetPage};