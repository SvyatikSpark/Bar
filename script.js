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