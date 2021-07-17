let nameInput = document.querySelector('#ime');
let startBtn = document.querySelector('#startBtn');
let showRes = document.querySelector('.showRes');

let nameInputVal; 
let nameScore;
let word 
let wordVal;

let words = {A:1, J:1, S:1, Š:1, B:2, K:2, T:2, C:3, Č:3, Ć:3, L:3, LJ:3, U:3, D:4, Đ:4, DŽ:4, M:4, V:4, E:5, N:5, NJ:5, W:5, F:6, O:6, X:6, G:7, P:7, Y:7, H:8, Q:8, Z:8, Ž:8, I:9, R:9};

startBtn.addEventListener('click', showResult);
window.addEventListener('keyup', check);

    
function showResult() {
    nameScore = 0;
    nameInputVal = nameInput.value.toUpperCase();
    checkTwoCharacter();
    if(nameInputVal.length >= 3) {
        for( let i = 0; i < nameInputVal.length; i++ ){   
            word = nameInputVal[i].split('');
            wordVal = words[ word ];
            nameScore += wordVal;
        }
        if(isNaN(parseInt(nameScore))) {
            showRes.innerHTML = `<span class="red">Please, check your letters</span>`;
            showRes.style.display = 'block';
        }  else {
            showRes.innerHTML = `Total score for <span class="red">${nameInputVal}</span> is: <span class="red">${nameScore}</span>`;
            showRes.style.display = 'block';
        }
        nameInput.value = '';
    } else {
        showRes.innerHTML = `<span class="red">Please, enter a name which contains more than 3 characters</span>`;
        showRes.style.display = 'block';
    }
   
}
    
function check(e) {
    if(e.keyCode === 13 ){
        showResult();
    }
}
function checkTwoCharacter() {
    if (nameInputVal.indexOf("DŽ") !== -1) {
        nameScore = -8;
    } else if (nameInputVal.indexOf("LJ") !== -1) {
        nameScore = -1;
    } else if (nameInputVal.indexOf("NJ") !== -1) {
        nameScore = -1;
    }
}
