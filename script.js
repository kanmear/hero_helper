const cardMini = document.querySelector('.player_sheet_mini');
cardMini.addEventListener('click', revealFullCard);
const cardFull = document.querySelector('.player_sheet_full');
cardFull.addEventListener('click', (e) => hideFullCard(e));

function hideFullCard(keyevent) {
    // if (keyevent.key == 'Escape')
    cardFull.style.display = 'none';
}

function revealFullCard() {
    cardFull.style.display = 'flex'
}

function createPlayerCardMini() {
    let playerCardMini = document.createElement('div');
    playerCardMini.classList.add('main-info-container');

    let playerCharacteristics = document.createElement('div');
    playerCharacteristics.classList.add('player-characteristics');

    let nameAndClass = document.createElement('div');
    nameAndClass.classList.add('name_and_class');
    let playerName = document.createElement('span');
    playerName.classList.add('player_name');
    let playerClass = document.createElement('span');

    let levelAndExp = document.createElement('div');
    levelAndExp.classList.add('level_and_exp');
    let level = document.createElement('span');
    level.classList.add('level');

    playerClass.classList.add('player_class');
    playerCharacteristics.appendChild(nameAndClass);
    nameAndClass.appendChild(playerName);
    nameAndClass.appendChild(playerClass);
    //TODO: finish implementation/refactor

    playerCardMini.appendChild(playerCharacteristics);
}

