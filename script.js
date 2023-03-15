let rvalue = document.getElementById("rangeLength")
let ucase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let nums = ["1","2","3","4","5","6","7","8","9","0"];
let symbols = ["~","!","@","#","$","%","^","&","*","(",")","_","-","=","+","|","]","}","[","{",";",":","/","?","<",">"]
let rndm;
let rangeLength;
let psw = [];
let inclds = [];

rangeLength = document.getElementById("rang").value
rvalue.innerText = rangeLength;

function range(){
    rangeLength = document.getElementById("rang").value
    rvalue.innerText = rangeLength;
    // pswLength.length = rangeLength;
}



function generating(){
    psw.length = 0;
    inclds.length = 0;
    if(document.getElementById("one").checked == false && document.getElementById("two").checked == false && document.getElementById("tri").checked == false && document.getElementById("four").checked == false) {
        console.log("Please select check boxes");
        return "Please select check boxes";
    }
    if(document.getElementById("one").checked == true){
        let a=upper()
        inclds.push(upper);
    }
    if(document.getElementById("two").checked == true){
        inclds.push(lower);
    }
    if(document.getElementById("tri").checked == true){
        inclds.push(num);
    }
    if(document.getElementById("four").checked == true){
        inclds.push(sym);
    }


    for(let i=0; i < rangeLength; i++){
        rndm = Math.floor(Math.random()*(inclds.length));
        psw[i] = inclds[rndm]();      
    }
    document.getElementById("psw").innerText = psw.join("");


    if(inclds.length == 4){
        strong();
    }
    else if(inclds.length == 3){
        medium();
    }
    else if(inclds.length == 2){
        weak();
    }
    else if(inclds.length == 1){
        tooWeak();
    }
}




function upper(){
    rndm = Math.floor(Math.random()*(ucase.length-1));
    return ucase[rndm];
}
function lower(){
    rndm = Math.floor(Math.random()*(lcase.length-1));
    return lcase[rndm];
}
function num(){
    rndm = Math.floor(Math.random()*(nums.length-1));
    return nums[rndm];
}
function sym(){
    rndm = Math.floor(Math.random()*(symbols.length-1));
    return symbols[rndm];
}


function strong(){
    document.getElementById("smallOne").style.backgroundColor = "#8cff9c";
    document.getElementById("smallTwo").style.backgroundColor = "#8cff9c";
    document.getElementById("smallTri").style.backgroundColor = "#8cff9c";
    document.getElementById("smallFour").style.backgroundColor = "#8cff9c";
    document.getElementById("strong").innerText = "STRONG";
}

function medium(){
    document.getElementById("smallOne").style.backgroundColor = "yellow";
    document.getElementById("smallTwo").style.backgroundColor = "yellow";
    document.getElementById("smallTri").style.backgroundColor = "yellow";
    document.getElementById("smallFour").style.backgroundColor = "black";
    document.getElementById("strong").innerText = "MEDIUM";
}

function weak(){
    document.getElementById("smallOne").style.backgroundColor = "orange";
    document.getElementById("smallTwo").style.backgroundColor = "orange";
    document.getElementById("smallTri").style.backgroundColor = "black";
    document.getElementById("smallFour").style.backgroundColor = "black";
    document.getElementById("strong").innerText = "WEAK";
}

function tooWeak(){
    document.getElementById("smallOne").style.backgroundColor = "red";
    document.getElementById("smallTwo").style.backgroundColor = "black";
    document.getElementById("smallTri").style.backgroundColor = "black";
    document.getElementById("smallFour").style.backgroundColor = "black";
    document.getElementById("strong").innerText = "TOO WEAK!!!";
}
let copyText;
function copyFunc(){
    copyText = document.getElementById("psw").innerText;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);

}