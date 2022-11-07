let add = document.getElementsByClassName('add')[0];
let del = document.getElementsByClassName('delete')[0];
let next = document.getElementsByClassName('next')[0];
let add2 = document.getElementsByClassName('add2')[0];
let del2 = document.getElementsByClassName('delete2')[0];
let play = document.getElementsByClassName('play')[0];
let again = document.getElementsByClassName('again')[0];
let edit = document.getElementsByClassName('edit')[0];
let resulte1 = document.getElementsByClassName('resulte1')[0];
let resulte2 = document.getElementsByClassName('resulte2')[0];
let link = document.getElementsByTagName("link")[0];
let number = 2;
let number2 = 1;
add.onclick = function(){
    let label = document.createElement('label');
    let input = document.createElement('input');
    label.htmlFor = `player${number+1}`;
    label.append(`player${number+1}`);
    input.id = `player${number+1}`;
    input.className = 'player';
    input.type = 'text';
    input.placeholder = 'name';
    add.before(label);
    add.before(input);
    add.before(document.createElement('br'));
    number++;
    
}
del.onclick = function(){
    if(number>2){
        add.previousSibling.remove();
        add.previousSibling.remove();
        add.previousSibling.remove();
        number--;
    }
}
next.onclick = function(){
    let inputs = false;
    while(inputs == false){
        inputs = true;
        for(let i = 0; i < document.getElementsByClassName('player').length; i++){
            if(document.getElementsByClassName('player')[i].value == ''){
                document.getElementsByClassName('player')[i].focus();
                inputs = false;
                return;
            }
        }
    }
    document.getElementsByClassName('players')[0].style.display = 'none';
    next.style.display = 'none';
    document.getElementsByClassName('punishments')[0].style.display = 'inline-block';
    play.style.display = 'inline-block';
}
add2.onclick = function(){
    let input = document.createElement('input');
    input.className = 'punishment';
    input.type = 'text';
    input.placeholder = 'punishment';
    add2.before(input);
    add2.before(document.createElement('br'));
    number2++;
}
del2.onclick = function(){
    if(number2>1){
        add2.previousSibling.remove();
        add2.previousSibling.remove();
        number2--;
    }
}
play.onclick = function (){
    let inputs = false;
    while(inputs == false){
        inputs = true;
        for(let i = 0; i < document.getElementsByClassName('punishment').length; i++){
            if(document.getElementsByClassName('punishment')[i].value == ''){
                document.getElementsByClassName('punishment')[i].focus();
                inputs = false;
                return;
            }
        }
    }
    document.getElementsByClassName('resulte')[0].style.display = 'none';
    document.getElementsByClassName('punishments')[0].style.display = 'none';
    play.style.display = 'none';
    let victim = Math.round(Math.random() * (document.getElementsByClassName('player').length-1));
    let punish = Math.round(Math.random() * (document.getElementsByClassName('punishment').length-1));
    function system(){
        document.getElementsByClassName('resulte')[0].style.display = 'inline-block';
        resulte1.innerHTML = document.getElementsByClassName('player')[victim].value;
        resulte2.innerHTML = document.getElementsByClassName('punishment')[punish].value;
    }
    setTimeout(system, 100);
}
edit.onclick = function(){
    document.getElementsByClassName('resulte')[0].style.display = 'none';
    document.getElementsByClassName('players')[0].style.display = 'inline-block';
    next.style.display = 'inline-block';
}
again.onclick = play.onclick;
function detect(){
    let device = navigator.userAgent.toLowerCase().match(/mobile/i);
    return device;
}
window.addEventListener("load", detect());
if(detect()!=null){
    link.href = 'mobile.css';
    resulte1.before(document.createElement('br'));
    resulte2.before(document.createElement('br'));
}