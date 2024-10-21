// Ссылка для кнопки
document.getElementById('goToBlockBtn').addEventListener('click', function () {
    const targetElement = document.getElementById('targetBlock');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });



