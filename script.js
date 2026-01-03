// Highlight active nav link
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("a.navlink").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();

// Simple quiz checker: put data-answer="A/B/C/D" on each quiz block
function checkQuiz(quizId){
  const quiz = document.getElementById(quizId);
  if(!quiz) return;

  const questions = quiz.querySelectorAll("[data-answer]");
  let correct = 0;

  questions.forEach((q, idx) => {
    const answer = q.getAttribute("data-answer");
    const picked = q.querySelector("input[type=radio]:checked");
    const res = q.querySelector(".result");
    if(!res) return;

    if(picked && picked.value === answer){
      correct++;
      res.textContent = "✅ 正確";
      res.style.color = "var(--good)";
    }else{
      res.textContent = `❌ 正確答案：${answer}`;
      res.style.color = "var(--bad)";
    }
  });

  const total = questions.length;
  const score = quiz.querySelector(".score");
  if(score){
    score.textContent = `本頁小測驗：${correct} / ${total}`;
    score.style.color = correct === total ? "var(--good)" : "var(--warn)";
  }
}
