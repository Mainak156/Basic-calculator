const disp = document.getElementById("data");

function appendtoScrn(input){
    disp.value += input;
}
function calculate(){
    try{
        disp.value = eval(disp.value);
    }
    catch(error){
        disp.value = "Error"
    }
}
function clrscrn(){
    disp.value = "";
}
function del(){
    disp.value = disp.value.slice(0, disp.value.length-1);
}