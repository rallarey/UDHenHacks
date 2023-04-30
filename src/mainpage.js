
let renderPage = (loggedIn)=>{
    var username = '';
    var pic = '';
    let myuid = loggedIn.uid;

    
    
    $("body").html(`
    <p></p>
    <body> <script>!(function () {
      let e = document.createElement("script"),
        t = document.head || document.getElementsByTagName("head")[0];
      (e.src =
        "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
        // Replace 1.x.x with the version that you want
        (e.async = !0),
        (e.onload = () => {
          window.WebChat.default(
            {
              initPayload: "/greet",
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
    </body>
    <button id = "logout">LOG OUT</button>
    `);
    
  
    $("#logout").on("click", ()=>{
      firebase.auth().signOut();
    });
  
  };

  export {renderPage};