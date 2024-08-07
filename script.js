function добавитьКартинку() {
    const img = document.createElement('img');
    img.src = 'oplata.png'; 
  
    img.style.position = 'absolute';
    img.style.left = Math.random() * window.innerWidth + 'px';
    img.style.top = Math.random() * window.innerHeight + 'px';
  
    // Добавляем изображение на страницу
    document.body.appendChild(img);
  

    setTimeout(добавитьКартинку, Math.random() * 2000);
  }
  
  window.onload = добавитьКартинку;
  const audioFiles = ['vine.mp3', 'oplata.mp3']; // Список аудиофайлов

function playRandomAudio() {
  // Выбираем случайный файл из списка
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudioFile = audioFiles[randomIndex];

  // Создаем новый элемент аудио
  const audio = new Audio(randomAudioFile);

  // Проигрываем звук
  audio.play();

  // Запускаем функцию снова через случайный промежуток времени (1-5 секунд)
  setTimeout(playRandomAudio, (Math.random() * 4 + 1) * 1000); 
}

// Запускаем функцию при загрузке страницы
window.onload = playRandomAudio;