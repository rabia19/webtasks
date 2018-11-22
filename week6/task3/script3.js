let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},
            {brand:'BMW',model:'X6', year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},
            {brand:'Daewoo',model:'Nexia', year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];

let carss = document.querySelector("#cars");
let items_inbasket = 0;
let total_price = 0; 

for(let i = 0; i< cars.length; i++){
    let carddiv = document.createElement('div');
    let image = document.createElement('img');
    image.src = cars[i].image_url;
    image.classList.add('card');
    carddiv.appendChild(image);
    
    let brand_name = document.createElement('h4');
    brand_name.textContent = cars[i].brand+" "+cars[i].model;
    carddiv.appendChild(brand_name);

    let baskets = [];
    let basket = document.createElement('img');
    basket.src = "https://cdn.onlinewebfonts.com/svg/img_334581.png";
    baskets[i]=basket;
    baskets[i].style.width = "40px";
    carddiv.appendChild(baskets[i]);
    baskets[i].classList.add('basket');

    carss.appendChild(carddiv);

    baskets[i].addEventListener('click',buy);

    function buy(){
        if (baskets[i].src == "https://cdn.onlinewebfonts.com/svg/img_334581.png"){
            baskets[i].src = "https://image.flaticon.com/icons/png/512/21/21004.png";
            items_inbasket++;
            total_price += cars[i].price;
        }
        else{
            baskets[i].src = "https://cdn.onlinewebfonts.com/svg/img_334581.png";
            items_inbasket--;
            total_price -= cars[i].price;
        }
        document.querySelector("#items").innerHTML = items_inbasket;
        document.querySelector("#sum").innerHTML = total_price;
    }
}