 document
   .getElementById("input-card-number")
   .addEventListener("input", function () {
     let input = this.value.replace(/\D/g, ""); // Only allow digits
     input = input.substring(0, 16); // Limit to 16 digits
     let formattedInput = input.match(/.{1,4}/g)?.join(" ") || input; // Add space every 4 digits
     document.getElementById("card-number").innerText = formattedInput.padEnd(
       19,
       "#"
     );
   });

 document
   .getElementById("input-card-holder")
   .addEventListener("input", function () {
     document.getElementById("card-holder").innerText =
       this.value || "Your Name";
   });

 document
   .getElementById("input-expiration-month")
   .addEventListener("input", function () {
     const month = this.value.substring(0, 2); // Limit to 2 characters
     document.getElementById("card-expiration").innerText = `${month.padStart(
       2,
       "0"
     )}/${document.getElementById("input-expiration-year").value || "YY"}`;
   });

 document
   .getElementById("input-expiration-year")
   .addEventListener("input", function () {
     const year = this.value.substring(0, 2); // Limit to 2 characters
     document.getElementById("card-expiration").innerText = `${document
       .getElementById("input-expiration-month")
       .value.padStart(2, "0")}/${year || "YY"}`;
   });

 // Flip card to show the back (for CVV input)
 document.getElementById("flip-card").addEventListener("click", function () {
   document.querySelector(".card-container").classList.toggle("flipped");
 });