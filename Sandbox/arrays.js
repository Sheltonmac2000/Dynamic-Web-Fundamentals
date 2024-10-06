//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    
  return `<li>${step}</li>`;
};

const stepsHtml = steps.map(listTemplate);




// use map to convert the list from strings to HTML

// set the innerHTML

document.querySelector("#myList").innerHTML = stepsHtml;

