const text = ['- Ali Omar -علي عمر-'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type()
{

   
    currentText = text[count];
    letter = currentText.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,200);
}())
