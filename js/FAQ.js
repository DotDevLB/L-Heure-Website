const faqQuestions = document.querySelectorAll(".faq-question");

// Add click event listener to each question
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    // Toggle active class on the clicked question
    question.classList.toggle("active");

    // Toggle active class on the answer associated with the clicked question
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  });
});
