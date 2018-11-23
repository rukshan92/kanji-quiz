//H1 WHERE TEXT IS DISPLAYED
const kanji=document.querySelector('.kanji');
//INPUT WHERE USER ENTER ROMAJI
const input=document.getElementById('input');
//BUTTON USER CLICKS AFTER ENTERING GUESS
const check=document.getElementById('check');
//KANJI OBJECT:KEYS=ROMAJI & VALUE=KANJI
const refresh=document.getElementById('refresh')
const kanjiobj={
                 jin:'人',
                 shin:'新',
                 eki:'駅',
                 den:'電'   
}
//ARRAY OF KANJI CHARACTERS
const kanjiValue=Object.values(kanjiobj);
//ARRAY OF ROMAJI
const kanjikey=Object.keys(kanjiobj);
//COUNT CHANGER
let counter=0;
    let nowKanji=kanjiValue[counter];
    let nowRomaji=kanjikey[counter];
//ALWAYS LISTENING FOR A CLICK ON THE BUTTON WITH 
check.addEventListener('click',function(){
if(input.value===nowRomaji){
display();
correct();
}
else{
 incorrect();
}
});

function display(){
        counter=counter+1;
        nowKanji=kanjiValue[counter];
        nowRomaji=kanjikey[counter];
        kanji.innerHTML=nowKanji;
        input.value='';
    }


function incorrect(){
    kanji.innerHTML='Incorrect,Try Agian'
    input.value='';
    setTimeout(function(){
        kanji.innerHTML=nowKanji;
    },2000);
}
function correct(){
    if(counter===kanjiValue.length)
    {kanji.innerHTML='Good Job';
      }
  
    else{
    kanji.style.color='green';
    kanji.innerHTML='Correct,Lets go to the Next'
    input.value='';
    setTimeout(function(){
        kanji.style.color='black';
        kanji.innerHTML=nowKanji;
    },1000);
}

}
