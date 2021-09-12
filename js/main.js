
fetch("https://breakingbadapi.com/api/characters").then(function(res){
return res.json();
}).then(function(data){
    /*
    let y = data.map(item => {
            console.log(item.name);
    });
    */
document.querySelector("i").onclick = function(){
    clicking(data);
}
}).catch(function(){
    document.querySelector("bold").textContent = "could not find character";
    let x = setTimeout(function(){
        document.querySelector("bold").textContent = "";
    },2000);
});

function clicking(data){
    let count =0;
    let y = data.map(item => {
       if(document.querySelector("input").value == item.name.toLowerCase()){
           count++;
           let div = document.createElement("div");
        
           let img = document.createElement("img");
           let attr = document.createAttribute("src");
           attr.value = item.img;
           img.setAttributeNode(attr);
           div.appendChild(img);
           let p = document.createElement("p");
           let ptext = document.createTextNode(item.name);
           p.appendChild(ptext);
           div.appendChild(p);
           let p2 = document.createElement("span");
           let p2text = document.createTextNode(item.portrayed);
           p2.appendChild(p2text);
           div.appendChild(p2);
           document.querySelector(".showitems").appendChild(div);
         
           
       }

     
      
    });
    if(count == 0){
        document.querySelector("bold").textContent = "could not find character";
        let x = setTimeout(function(){
            document.querySelector("bold").textContent = "";
        },2000);
       }
    document.querySelector("input").value = '';
  
  
}