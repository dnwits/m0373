let items_lista = document.querySelectorAll("li");
console.log(items_lista);
for (let i=0; i<items_lista.length; i++){
    console.log("posició "+i)
    console.log(items_lista[i])
    if(i==1 || i==2){
        items_lista[i].style.color= "lightgreen"
        items_lista[i].innerHTML= "Changed option"
    }
}
let paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

for (let i=0; i<paragrafos;i++){
    
    if (i%2==0){
        paragrafos[i].style.backgroundColor = "lightblue";
    } else{
        paragrafos[i].style.backgroundColor = "blue";
    }
}