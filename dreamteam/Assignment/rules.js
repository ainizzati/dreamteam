
function submitForm() {

  var eml = document.getElementById("emailInput").value;
  var fdback = document.getElementById("feedbackInput").value;
  

  if (eml === "" || fdback === "") {
    alert("Please fill out all required fields.");
    return;
}
else{


    alert("Successfully submitted!");
}
    
}
