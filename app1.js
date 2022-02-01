const text1 = ['EST. 2001'];
let count1 = 0;
let index1 = 0;
let currentText1 = '';
let letter1 = '';

(function type()
{

   
    currentText = text1[count1];
    letter1 = currentText.slice(0,++index1);
    document.querySelector('.typing2').textContent = letter1;
    if(letter1.length === currentText1.length){
        count1++;
        index1 = 0;
    }
    setTimeout(type,200);
}())
