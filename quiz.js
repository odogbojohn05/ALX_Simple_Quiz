function checkAnswer() {
  
  const correctAnswer = "4";

  
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  
  const feedbackDiv = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = "Correct! Well done.";
    feedbackDiv.style.color = "#28a745"; 
  } else {
    feedbackDiv.textContent = "That's incorrect. Try again!";
    feedbackDiv.style.color = "#dc3545"; 
  
}


document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);
});
