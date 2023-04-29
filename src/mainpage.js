
let renderPage = (loggedIn)=>{
    var username = '';
    var pic = '';
    let myuid = loggedIn.uid;
  
    
    $("body").html(`
    <p>hi</p>
    <button id = "logout">LOG OUT</button>
    `);
  
  
    $("#logout").on("click", ()=>{
      firebase.auth().signOut();
    });
  
  };

  export {renderPage};