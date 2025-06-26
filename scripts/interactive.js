document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const answers = {
    q1: 'b', // Прозорість
    q2: 'c', // Систематичне спотворення результатів
    q3: 'd'  // Зниження рівня грамотності серед учнів (НЕ є)
  };

  let score = 0;
  let total = Object.keys(answers).length;
  let unanswered = 0;

  for (let q in answers) {
    const selected = document.querySelector(input[name="${q}"]:checked);
    if (!selected) {
      unanswered++;
    } else if (selected.value === answers[q]) {
      score++;
    }
  }

  const resultDiv = document.getElementById('result');
  if (unanswered > 0) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = <p style="color:red;">Будь ласка, відповісти на всі питання! Ви пропустили ${unanswered}.</p>;
    return;
  }

  let message = <p>Ваш результат: <strong>${score} з ${total}</strong>.</p>;

  if(score === total) {
    message += "<p>Відмінно! Ви добре розумієте етичні аспекти ШІ.</p>";
  } else if(score >= total / 2) {
    message += "<p>Непогано, але варто ще раз переглянути матеріал.</p>";
  } else {
    message += "<p>Рекомендуємо повторити тему для кращого розуміння.</p>";
  }

  resultDiv.style.display = 'block';
  resultDiv.innerHTML = message;
});
