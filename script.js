function добавитьКартинку() {
    const img = document.createElement('img');
    img.src = 'oplata.png'; 
    img.classList.add('oplata-img');
    img.style.position = 'absolute';
    img.style.left = Math.random() * window.innerWidth + 'px';
    img.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(img);
    setTimeout(добавитьКартинку, Math.random() * 2000);
  }
  
  const audioFiles = ['vine.mp3', 'oplata.mp3']; 
  let currentAudio = new Audio('g.mp3'); // Аудио g.mp3 по кругу
  currentAudio.loop = true; // Включаем зацикливание
  currentAudio.play(); // Запускаем g.mp3
  
  function playRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudioFile = audioFiles[randomIndex];
    const audio = new Audio(randomAudioFile);
    audio.play();
    setTimeout(playRandomAudio, (Math.random() * 4 + 1) * 500); 
  }
  
  window.onload = () => {
    добавитьКартинку();
    playRandomAudio();
  };

  const gAudio = new Audio('g.mp3'); 
  gAudio.loop = true; 
  gAudio.volume = 0.1;
  
  // Пытаемся запустить звук сразу 
  gAudio.play().catch(error => {
    console.log("Автовоспроизведение звука заблокировано. Нажмите на страницу.");
    document.addEventListener('click', () => {
      gAudio.play();
      document.removeEventListener('click', playGAudio); 
    });
  }); 