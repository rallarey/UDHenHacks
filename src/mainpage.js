import { renderNextPage } from "./finance.js";

let renderPage = (loggedIn)=>{
    var username = '';
    var pic = '';
    let myuid = loggedIn.uid;
  
    
    $("body").html(`
    <p>hi</p>
    <button id = "nextpage">NEXT PAGE</button>
    <button id = "logout">LOG OUT</button>
    `);
  
  
    $("#logout").on("click", ()=>{
      firebase.auth().signOut();
    });

    $("#nextpage").on("click", ()=>{
        renderNextPage();
    });
  
  };

  export {renderPage};