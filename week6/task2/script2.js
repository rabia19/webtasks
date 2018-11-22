
let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],
                         "Russia":["Moscow","Saint-Petersburg","Kazan"],
                         "England":["London","Manchester","Liverpool"],
                         "France":["Paris","Lyon","Marseille"]};

function selectCountry(){
    for (let country of countries){
        let coun = document.createElement("option");
        coun.textContent = country;
        document.querySelector("#countries").appendChild(coun);
        document.querySelector("#countries").removeEventListener('click', selectCountry);
    } 
}
function selectCity(){
    for(let i = 0; i<countries.length; i++){
        let coun = document.getElementById("countries").value;
        if(coun == countries[i]){
            console.log(coun);
            for(let cit of cities_by_country[coun]){
                let cityItem = document.createElement("option");
                cityItem.textContent = cit;
                document.querySelector("#cities").appendChild(cityItem);
            }
        }
    }
    document.querySelector("#cities").removeEventListener('click', selectCity);
}
document.querySelector('#countries').addEventListener('click', selectCountry);
document.querySelector('#cities').addEventListener('click', selectCity);