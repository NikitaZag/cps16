const swiper = new Swiper('.swiper', {
  slidesPerView: 1.3,
  spaceBetween: 10,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
});

document.getElementById('toggle-button').addEventListener('click', function() {
  const moreText = document.getElementById('more-text');
  const buttonText = document.getElementById('button-text');

  if (moreText.style.display === 'none') {
      moreText.style.display = 'inline'; // Показываем скрытый текст
      buttonText.textContent = 'Скрыть'; // Меняем текст кнопки
  } else {
      moreText.style.display = 'none'; // Скрываем текст
      buttonText.textContent = 'Читать далее'; // Возвращаем текст кнопки
  }
});



