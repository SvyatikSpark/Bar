const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-button');
const randomCaseButton = document.getElementById('random-case-button');
const spacesButton = document.getElementById('spaces-button');

const dotEmojis = ["💥", "🔥", "🔞", "🤖", "💋", "🍓", "✅", "😏", "👄", "📎"];

function modifyText(text) {
  let modifiedText = '';
  let skipFormatting = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === '@') {
      skipFormatting = true;
      modifiedText += char;
    } else if (skipFormatting && (char === ' ' || i === text.length - 1)) {
      skipFormatting = false;
      modifiedText += char;
    } else if (!skipFormatting) {
      if (char === ".") {
        modifiedText += randomChoice(dotEmojis);
      } else if (char === "\n") {
        modifiedText += "\n";
      } else {
        // Добавляем пробелы, только если это не начало текста и не начало строки
        if (modifiedText.length > 0 && modifiedText[modifiedText.length - 1] !== '\n') { 
          const spacesCount = Math.floor(Math.random() * 3) + 1;
          for (let j = 0; j < spacesCount; j++) {
            modifiedText += " ";
          }
        }
        modifiedText += char; 
      }
    } else {
      modifiedText += char;
    }
  }
  return modifiedText;
}
function randomizeUsernameCase(text) {
  return text.replace(/@(\w+)/g, (match, username) => {
    let randomizedUsername = '';
    for (let i = 0; i < username.length; i++) {
      randomizedUsername += Math.random() < 0.5 ? username[i].toUpperCase() : username[i].toLowerCase();
    }
    return `@${randomizedUsername}`;
  });
}

function handleModifyText() {
  const originalText = inputText.value;
  inputText.value = modifyText(originalText); 
}

function handleRandomCase() {
  inputText.value = randomizeUsernameCase(inputText.value);
}

function handleSpaces() {
  const text = inputText.value;
  let result = '';
  const blocksCount = 3; 

  for (let i = 0; i < blocksCount; i++) {
    result += text; 

    // Добавляем энтеры только если это не последний блок
    if (i < blocksCount - 1) {
      // Случайное количество энтеров от 5 до 8
      const enterCount = Math.floor(Math.random() * 4) + 5;
      for (let j = 0; j < enterCount; j++) {
        result += '\n';
      }
    }
  }
  inputText.value = result;
}


function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

submitButton.addEventListener('click', handleModifyText);
randomCaseButton.addEventListener('click', handleRandomCase);
spacesButton.addEventListener('click', handleSpaces);