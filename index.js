// Find Elements
const buttonInput = document.querySelector('button');
const inputTag = document.querySelector('input');
const wordBlock = document.getElementById('wordBookRus');
const wordBlockEng = document.getElementById('wordBookTranslit');
const bodyMain = document.querySelector('body');

// Add Object Symbol's
const wordTranslit = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'j',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'kh',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'shch',
  ъ: '"',
  ы: 'y',
  ь: "'",
  э: 'e',
  ю: 'yu',
  я: 'ya',
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Е: 'E',
  Ё: 'YO',
  Ж: 'ZH',
  З: 'Z',
  И: 'I',
  Й: 'J',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'KH',
  Ц: 'C',
  Ч: 'CH',
  Ш: 'SH',
  Щ: 'SHCH',
  Ъ: '"',
  Ы: 'Y',
  Ь: "'",
  Э: 'E',
  Ю: 'YU',
  Я: 'YA',
  ' ': ' ',
};

// Function Create Words in WordsBook
function input() {
  // New Element's
  const divTag = document.createElement('div');
  const divTagEng = document.createElement('div');

  // Add Class Element's
  divTag.className = 'words';
  divTagEng.className = 'words';

  // Add Child
  wordBlock.appendChild(divTag);
  wordBlockEng.appendChild(divTagEng);
  // Process Translit
  const text = inputTag.value;
  const arrayTextRus = text.split('');
  const arrayTextEng = arrayTextRus.map((a) => {
    let b = a;
    b = wordTranslit[a];
    return b;
  }).join('');

  // Add Title Element's
  divTag.title = inputTag.value;
  divTagEng.title = arrayTextEng;

  // Add Text Element's
  divTagEng.innerText = arrayTextEng;
  divTag.innerText = inputTag.value;
}

// Add Event
buttonInput.addEventListener('click', input);

// New Options

// Create Element's
const headerTop = document.createElement('header'); // Header
const nameSite = document.createElement('div'); // Name
const headerLinkContainer = document.createElement('div'); // Link
const headerLogo = document.createElement('div'); // Logo

// Add Class Element's
nameSite.className = 'nameSite'; // Name
headerTop.className = 'header'; // Header
headerLinkContainer.className = 'link'; // Link
headerLogo.className = 'logo'; // Logo

// Add Link's for HeaderLinkContainer
for (let i = 0; i < 2; i += 1) {
  const headerLink = document.createElement('a'); // Link
  headerLinkContainer.appendChild(headerLink);
  headerLink.className = 'linkSite';
  if (i === 0) {
    headerLink.id = 'linkFacebook';
    headerLink.innerHTML = '<img src="img/facebook.png"/>';
    headerLink.setAttribute('href', 'https://www.facebook.com/tamerlan1319');
  }
  if (i === 1) {
    headerLink.id = 'linkInstagram';
    headerLink.innerHTML = '<img src="img/instagram.png"/>';
    headerLink.setAttribute('href', 'https://www.instagram.com/timur_popovich/');
  }
}

// Add Child
headerTop.appendChild(headerLogo);
headerTop.appendChild(nameSite);
headerTop.appendChild(headerLinkContainer);
bodyMain.prepend(headerTop);

headerLogo.innerText = 'Elbrus';
nameSite.innerText = 'T.R.A.N.S.L.I.T'; // Name
