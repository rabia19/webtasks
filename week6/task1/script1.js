/*
let buttons = document.getElementsByTagName('button');
for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        buttons[i].parentElement.children[1].style.textDecoration = "line-through";
    });
}

*/
function finish(event){
    let fin = event.currentTarget.parentNode;
    fin.setAttribute('data-status','done');
}

let finn = document.querySelectorAll("div button");
for (let butt of finn){
    console.log('button');
    butt.addEventListener('click', finish);
}

