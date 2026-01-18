const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

inputBox.addEventListener("keyup", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
});

const starsContainer = document.getElementById('stars');
for(let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
        
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
        
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.animationDelay = `${delay}s`;
        
    starsContainer.appendChild(star);
}
