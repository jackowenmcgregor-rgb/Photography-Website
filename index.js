//run right away
if (localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.add("darkMode")
}
window.addEventListener('DOMContentLoaded', () => {
    const savedSize = localStorage.getItem('preferredFontSize') || 'medium';
    changeFontSize(savedSize);
});

function changeFontSize(size) {
    localStorage.setItem('preferredFontSize', size);
    applyFontSize(size);
}
//input
const mySubmit = document.getElementById("mySubmit");
if(mySubmit){
    let username
    let req = document.getElementById("required");
    let popup = document.getElementById("popup")

    document.getElementById("mySubmit").onclick = function(event){
        event.preventDefault();

        username = document.getElementById("myUser").value.trim();

        if(username !== ""){
            document.getElementById("myH1").textContent = `Hello ${username}`
            console.log(username)
            req.style.display = "none";
            popup.style.display = "none"
        }
        else{
            req.style.display = "inline";
            popup.style.display = "inline"
        }
    }
}

//check box
const submit = document.getElementById("submit");
if(submit){
    const test = document.getElementById("myCheckBox");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const subResult = document.getElementById("subResult");
    const result = document.getElementById("result");

    submit.onclick = function(){
        if(myCheckBox.checked){
            subResult.textContent = `You did click test`
        }
        else{
            subResult.textContent = `You didn't click test`
        }

        if(btn1.checked){
            result.textContent = `You selected 1`
        }
        else if(btn2.checked){
            result.textContent = `You selected 2`
        }
        else if(btn3.checked){
            result.textContent = `You selected 3`
        }
        else{
            result.textContent = `You need to select an option`
        }
    }
}
//animation
const box = document.getElementById("box");

if(box){
    window.addEventListener("load", () => {
        box.style.pointerEvents = "none";
        box.classList.add("slideUp");
    });

    box.addEventListener("animationend", (event) => {
        if (event.animationName === "slideUp") {
            box.classList.remove("slideUp");
            box.style.pointerEvents = "auto";
        }
    });
}
const box2 = document.getElementById("box2");

if(box2){
    window.addEventListener("load", () => {
        box2.style.pointerEvents = "none";
        box2.classList.add("slideLeft");
    });

    box2.addEventListener("animationend", (event) => {
        if (event.animationName === "slideLeft") {
            box2.classList.remove("slideLeft");
            box2.style.pointerEvents = "auto";
        }
    });
}
//settings
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    if (document.body.classList.contains("darkMode")) {
        darkModeBtn.checked = true;
    } else {
        darkModeBtn.checked = false;
    }

    darkModeBtn.addEventListener("change", () => {
        document.body.classList.toggle("darkMode");
        
        if (document.body.classList.contains("darkMode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
}

function applyFontSize(size) {
    const buttons = document.querySelectorAll('.fontBtn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (size === 'small') {
        const smallBtn = document.getElementById('small');
        if (smallBtn) smallBtn.classList.add('active');
        document.body.style.fontSize = '11px';
    } else if (size === 'medium') {
        const medBtn = document.getElementById('med');
        if (medBtn) medBtn.classList.add('active');
        document.body.style.fontSize = '16px';
    } else if (size === 'large') {
        const bigBtn = document.getElementById('Big');
        if (bigBtn) bigBtn.classList.add('active');
        document.body.style.fontSize = '30px';
    }
}

function changeFontSize(size) {
    localStorage.setItem('preferredFontSize', size);
    applyFontSize(size);
}

document.getElementById("resetBtn").addEventListener("click", function(){
    const darkModeOption = document.getElementById("darkModeBtn");
    if(darkModeOption){
        darkModeOption.checked = false;
        document.body.classList.remove("darkMode");
    }
    
    changeFontSize("medium"); 

    localStorage.clear();
});
