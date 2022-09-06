const switchLangButton = document.getElementById("switch_lg_btn");
const outputTitle = document.getElementById("js-title-output");
const outputSubTitle = document.getElementById('js-subTitle-output');

const outputTextDescription = document.getElementById("js-text-description");
const outputTextComand = document.getElementById("js-text-comand");
const outputTextActors = document.getElementById("js-text-actors");
const outputTextTime = document.getElementById("js-text-time");
const outputTextAge = document.getElementById("js-text-age");

const textOnPage = [
  {
    key: "BY",
    titleTxt: `ВЕРАСОВЫ МЁД`,
    subtitleTxt: `Атмасферны спектакль-паглыбленне`,
    descriptionTxt: `
        …9 стагоддзе. Вёска Піктау захоплена шатландскімі воінамі.
        Выжылыя хаваюцца ў гарах, але вымушаныя пакінуць часовы прытулак,
        каб пахаваць памерлых, а потым пакінуць родныя землі, уцякаючы ад ворагау.
        Сям'я Медаварава змяшчае сакрэтны рэцэпт , якім зацікавіўся шатландскі кароль.
        Бацька і сын Медавары, якія трапілі ў рукі шатландцаў,
        захоўваюць гэтую таямніцу цаной уласнага жыцця.
        Зыходзячы з аднайменнай балады, Р.Л. Стывенсана "Heather Ale" (1880).
        
        * Атмасферны спектакль-паглыбленне - гэта спектакль,
        які ўплывае на пачуцці слыху, паху і дотыку.
        Гледачы ўспрымаюць відовішча з завязанымі вачыма.`,
    comandTxt: `КАМАНДА: 
        Аўтар - Ул'яна Міхальцова /
        Рэжысёр - Андрэй Бардухаеў-Арол /
        Sound designer -   Аляксандр Кашалёў / 
        Гукарэжысёр -  Аляксандр Воўкаў /
        Пераклад на беларускую мову - Усевалад Сцебурака`,
    actorsTxt: ` АКТОРЫ:
        Андрэй Бардухаеў-Арол /
        Алеся Бардухаева-Арол /
        Андрэй Новік /
        Дар'я Новік /
        Марыя Пятровіч /
        Максім Шышко`,
    timeTxt: `Працягласць спектакля 45 хвілін`,
    ageTxt: `Узроставы цэнз - 12+`,
  },
  {
    key: "PL",
    titleTxt: `WRZOSOWY MIÓD`,
    subtitleTxt: `Spektakl sensoryczny`,
    descriptionTxt: `
      IX wiek n.e. Szkoccy wojownicy podbijają wioskę Piktów.
      Ci spośród mieszkańców, którzy przeżyli, ukrywają się w górach,
      zmuszeni są jednak do opuszczenia tymczasowego schronienia,
      aby pochować zmarłych. Następnie muszą opuścić rodzinne strony,
      uciekając przed wrogami. Rodzina miodosytników skrywa sekretny przepis na miód wrzosowy,
      którym interesuje się szkocki król. Ojciec i syn, którzy wpadli w ręce Szkotów,
      chronią tajemnicę za cenę własnego życia.
      
      Na podstawie ballady szkockiego poety Roberta Louisa Stevensona „Heather Ale” (1880).
      
      * spektakl sensoryczny - spektakl oddziałujący na zmysły słuchu,
       powonienia i dotyku. Publiczność odbiera go z zasłoniętymi oczami.`,
    comandTxt: ` ZESPÓŁ: 
      Autor - Ulana Mikhaltsova /
      Reżyser - Andriej Borduchaew-Oryol  /
      Dźwiękowiec - Aleksander Koshelev /
      Realizator dźwięku - Aleksander Wołkow /
      Tłumaczenie na język białoruski - Wsiewołod Steburako`,
    actorsTxt: `AKTORZY:
      Andriej Borduchaew-Oryol /
      Alesia Borduchaewa-Oryol /
      Andriej Nowik /
      Daria Nowik /
      Maria Pietrowicz /
      Maksym Sziszko`,
    timeTxt: `Czas trwania spektaklu: 45 min`,
    ageTxt: `Limit wieku 12+`,
  },
  {
    key: "EN",
    titleTxt: `HEATHER ALE`,
    subtitleTxt: `Atmospheric performance-immersion.`,
    descriptionTxt: `
      9th century. A Picts settlement is overrun by Scottish warriors.
      The survivors hide in the mountains,
      but are forced to leave this temporary shelter as well,
      to bury their dead and then leave their homeland to escape their enemies.
      The family of the mead makers keeps a secret recipe for heather honey,
      which the King of Scotland has taken an interest in. The father and son meaders,
      caught in the hands of the Scots, keep the secret at the cost of their own lives.
      Based on R.L. Stevenson's ballad of the same name, "Heather Ale" (1880).
      
      * an atmospheric immersive performance - a play that appeals to the senses of hearing,
       smell, and touch. The audience perceives the spectacle blindfolded.`,
    comandTxt: ` COMMAND: 
      Author - Ulyana Mikhaltsova / 
      Director - Andrei Bordukhaev-Oryol /
      Sound designer - Alexander Koshelev /
      Sound engineer - Alexander Volkov /
      Translation into Belarussian - Vsevolod Steburako`,
    actorsTxt: `ACTORS:
      Andrei Bordukhaeva-Oryol /
      Alesya Bordukhaeva-Oryol /
      Andrei Novik /
      Daria Novik /
      Maria Petrovich /
      Maxim Shishko`,
    timeTxt: `Play duration 45 minutes`,
    ageTxt: `Age limit - 12+`,
  },
  {
    key: "RU",
    titleTxt: `ВЕРЕСКОВЫЙ МЁД`,
    subtitleTxt: `Атмосферный спектакль-погружение`,
    descriptionTxt: `
        9 век. Селение пиктов захвачено шотландскими воинами.
        Выжившие прячутся в горах, но вынуждены покинуть и это свое временное пристанище,
        чтобы похоронить погибших, а после уйти с родных земель, спасаясь от врагов.
        В семье медоваров хранится тайный рецепт верескового мёда,
        которым заинтересовался шотландский король. Отец и сын медовары,
        попавшие в руки шотландцев, ценой собственной жизни сохраняют эту тайну.
        По мотивам одноименной баллады Р.Л. Стивенсона “Heather Ale” (1880).
        
        * aтмосферный спектакль-погружение - спектакль, воздействующий на чувства слуха,
         обоняния и осязания. Зрители воспринимают зрелище с завязанными глазами.`,
    comandTxt: `  КОМАНДА: 
        Автор -  Ульяна Михальцова /
        Режиссёр - Андрей Бордухаев-Орёл / 
        Sound designer - Александр Кошелев  /
        Звукорежиссёр - Александр Волков /
        Перевод на беларуский язык - Всеволод Стебурако`,
    actorsTxt: `АКТЁРЫ:
        Андрей Бордухаева-Орёл /
        Алеся Бордухаева-Орёл /
        Андрей Новик /
        Дарья Новик /
        Мария Петрович /
        Максим Шишко`,
    timeTxt: `Продолжительность спектакля  45 минут`,
    ageTxt: `Возрастной ценз - 12+`,
  },
];

let count = 0;

const changeTextFunc = (num) => {
  outputTitle.textContent = textOnPage[num].titleTxt;
  outputSubTitle.textContent = textOnPage[num].subtitleTxt;

  outputTextDescription.textContent = textOnPage[num].descriptionTxt;
  outputTextComand.textContent = textOnPage[num].comandTxt;
  outputTextActors.textContent = textOnPage[num].actorsTxt;
  outputTextTime.textContent = textOnPage[num].timeTxt;
  outputTextAge.textContent = textOnPage[num].ageTxt;
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
