const switchLangButton = document.getElementById("switch_lg_btn");
const outputText = document.getElementById('js-text-output');
const outputTitle = document.getElementById('js-title-output');

const textOnPage = [
  {
    key: "BY",
    titleTxt: `Верасовы мёд`,
    mainTxt:
        `Верасовы мёд - спектакль з унікальнай формай
        стварэння амасферы пры дапамозе музыкі, гукаў. Створаны для людзей з абмежаваннямі
        зроку.`,
  },
  {
    key: "PL",
    titleTxt: `Miód wrzosowy`,
    mainTxt:
      `Miód wrzosowy to spektakl o wyjątkowej formie
      tworzenie atmosfery za pomocą muzyki, dźwięków. Przeznaczony dla osób niepełnosprawnych
      widok`,
  },
  {
    key: "EN",
    titleTxt: `Heather honey`,
    mainTxt:
      `Heather honey is a performance with a unique form
      creation of atmosphere with the help of music, sounds. Designed for people with disabilities
      sight`,
  },
  {
    key: "RU",
    titleTxt: `Вересковый мёд`,
    mainTxt:
        `Вересковый мёд – перформанс с уникальной формой
        создание атмосферы с помощью музыки, звуков. Предназначен для людей с ограниченными возможностями
        зрения`,
  },
];

let count = 0;

const changeTextFunc = (num) => {
    outputText.textContent = textOnPage[num].mainTxt;
    outputTitle.textContent = textOnPage[num].titleTxt;
};

const switchLang = (e) => {
  e.stopPropagation();

  if (count < textOnPage.length - 1) {
    count += 1;
    e.target.textContent = textOnPage[count].key;
    changeTextFunc(count);
  } else {
    count = 0;
    e.target.textContent = textOnPage[count].key;
    changeTextFunc(count);
  }
};

switchLangButton.addEventListener("click", switchLang);