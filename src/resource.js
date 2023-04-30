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
  
  <button class="collapsible">Budgeting and Saving</button>
  <div class="content">
    <p>Tips and tools for creating a budget, tracking expenses, and saving money.</p>
  </div>
  
  <button class="collapsible">Financial Planning</button>
  <div class="content">
    <p>Guidance on setting financial goals, managing debt, and creating a long-term financial plan.</p>
  </div>
  
  <button class="collapsible">Emergency Funds</button>
  <div class="content">
    <p>Strategies for building an emergency fund to handle unexpected expenses and avoid payday loans.</p>
  </div>
  
  <button class="collapsible">Low-Cost Loan Alternatives</button>
  <div class="content">
    <p>Information on credit unions, community banks, and other sources of affordable loans.</p>
  </div>
  
  <button class="collapsible">Government Assistance Programs</button>
  <div class="content">
    <p>Overview of federal, state, and local assistance programs for low-income individuals and families.</p>
  </div>
  
  <button class="collapsible">Future Investing</button>
  <div class="content">
    <p>Introduction to investment options, such as stocks, bonds, and mutual funds, and resources to help people start investing.</p>
  </div>
  
  <button class="collapsible">Retirement Planning</button>
  <div class="content">
    <p>Information on retirement savings accounts, social security, and long-term retirement strategies.</p>
  </div>
  
  <button class="collapsible">Financial Literacy</button>
  <div class="content">
    <p>Educational resources to improve financial knowledge and decision-making.</p>
  </div>
  
  <button class="collapsible">Credit Counseling</button>
  <div class="content">
    <p>Free or low-cost resources for credit counseling, debt management, and financial education.</p>
  </div>
  
  <button class="collapsible">Consumer Protection</button>
  <div class="content">
    <p>Information on consumer rights, how to report predatory lending practices, and resources for legal assistance.</p>
  </div>
  
  <button class="collapsible">Choosing the Right Bank/Credit Union</button>
  <div class="content">
    <p>Factors to consider when selecting a financial institution, such as fees, services, and accessibility.</p>
  </div>
  
  <button class="collapsible">Online Banking</button>
  <div class="content">
    <p>An overview of online banks and their benefits, including lower fees, higher interest rates, and 24/7 access to accounts.</p>
  </div>
  
  <button class="collapsible">Bank Accounts</button>
  <div class="content">
    <p>Information on different types of accounts, such as checking, savings, and money market accounts, and their features.</p>
  </div>
  
  <button class="collapsible">Banking Fees</button>
  <div class="content">
    <p>Tips on how to avoid or minimize common banking fees, such as overdraft charges, ATM fees, and account maintenance fees.</p>
  </div>
  
  <button class="collapsible">Establishing Credit</button>
  <div class="content">
    <p>Guidance on building credit history and improving credit scores, including responsible use of credit cards and loans.</p>
  </div>
  
  <button class="collapsible">Debt Management</button>
  <div class="content">
    <p>Strategies for reducing and managing debt, including debt consolidation and repayment plans.</p>
  </div>
  
  <button class="collapsible">Identity Theft Prevention</button>
  <div class="content">
    <p>Tips on protecting personal and financial information and resources for identity theft victims.</p>
  </div>
  
  <button class="collapsible">Financial Apps and Tools</button>
  <div class="content">
    <p>Overview of useful apps and tools for budgeting, saving, investing, and managing finances.</p>
  </div>
  
  <button class="collapsible">Homeownership and Mortgage Assistance</button>
  <div class="content">
    <p>Information on affordable housing programs and mortgage assistance for first-time homebuyers.</p>
  </div>
  
  <button class="collapsible">College Financing</button>
  <div class="content">
    <p>Resources for financing higher education, including grants, scholarships, work-study programs, and student loans.</p>
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