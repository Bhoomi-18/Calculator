let screen = document.querySelector('#screen');

function clearScreen(){
    screen.value = "";
}

function deletePre(){
    screen.value = screen.value.slice(0,-1);
}

function showNum(number){
    screen.value += number;
}

function showOp(operator){
    screen.value += operator;
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    }catch (e){
        screen.value = 'ERROR';
    }
}