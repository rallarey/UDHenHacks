let renderResourcePage= ()=>{
    $("body").html(`
    <p></p>
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
      
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resource Page for Underserved Delaware Populations</title>
      <style>
          .collapsible {
              background-color: #f1f1f1;
              color: #444;
              cursor: pointer;
              padding: 18px;
              width: 100%;
              border: none;
              text-align: left;
              outline: none;
              font-size: 15px;
              margin-bottom: 5px;
          }
  
          .active, .collapsible:hover {
              background-color: #ccc;
          }
  
          .content {
              padding: 0 18px;
              display: none;
              overflow: hidden;
              background-color: #f1f1f1;
          }
      </style>
  </head>
  <body>
  
  <h2>Resource Page for Underserved Delaware Populations</h2>
  
  <button class="collapsible">Budgeting</button>
  <div class="content">
    <p>Information and resources about budgeting...</p>
  </div>
  
  <button class="collapsible">Financial Planning</button>
  <div class="content">
    <p>Information and resources about financial planning...</p>
  </div>
  
  <button class="collapsible">Retirement</button>
  <div class="content">
    <p>Information and resources about retirement...</p>
  </div>
  
  <button class="collapsible">Tips</button>
  <div class="content">
    <p>Information and resources about tips...</p>
  </div>
  
  <script>
      const coll = document.getElementsByClassName("collapsible");
      let i;
  
      for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
              this.classList.toggle("active");
              const content = this.nextElementSibling;
              if (content.style.display === "block") {
                  content.style.display = "none";
              } else {
                  content.style.display = "block";
              }
          });
      }
  </script>
  
  </body>`);
      

      $("#logout").on("click", ()=>{
        firebase.auth().signOut();
      });
    };
export {renderResourcePage};