document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let score = 0;
  let answers = {
    q1: 'b',
    q2: 'b',
    q3: 'b'
  };

  for (let q in answers) {
    const selected = document.querySelector(input[name="${q}"]:checked);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  const resultDiv = document.getElementById('result');
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `<h3>Результат:</h3>
    <p>Ви відповіли правильно на ${score} із 3 питань.</p>
    ${score === 3 ? "✅ Відмінно! Ви добре розумієте етичні аспекти ШІ." :
      score === 2 ? "⚠️ Непогано, але варто переглянути матеріал." :
      "❌ Спробуйте ще раз. Прочитайте уважніше розділ з етики ШІ."}`;
});
