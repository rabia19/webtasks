function process(responses) {
    for (let response of responses) {
        const greeting = document.querySelector("#cards");
        let newEl = document.createElement("div");
        newEl.classList.add("card");
        let newElmaker = document.createElement("div");
        let newElprice = document.createElement("div");
        let maker = response.maker + " " + response.model;
        newElmaker.textContent = maker; //sets or returns the text content of the specified node
        newElmaker.classList.add("title");
        var price = response.price;
        newElprice.textContent = price;
        newElprice.classList.add("price");
        newEl.appendChild(newElmaker);
        newEl.appendChild(newElprice);
        greeting.appendChild(newEl);
    }
}
function work() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        fetch('http://demo4296963.mockable.io/listCars').then(call);
        
    }, 200);   
    
}
function toText(responce) {
    return responce.json().then(process); //stores data that we can load into js
}

function call() {
    fetch("http://demo4296963.mockable.io/listCars").then(toText);
}
document.querySelector("button").addEventListener("click", work);