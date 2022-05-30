// Add the coffee to local storage with key "coffee"

const url ="https://masai-mock-api.herokuapp.com/coffee/menu";


async function getData(){
    try{
    let res = await fetch(url);

    let coffee = await res.json();

    append(coffee);
    console.log(coffee);
    }
    catch(error){
        console.log(error);
    }
}

  getData(); // we are calling the function here

// now appending the data 

function append (data){
   console.log(data)
    let container = document.getElementById("menu");
      container.innerHTML=null;

    Object.keys(data).forEach(function(el){
        
        let div = document.createElement("div");
            // div.id="div";
    
            let img = document.createElement("img");
            img.src=el.data.image;

            let p = document.createElement("p");
            p.innerText=el.title;
    
            div.append(img,p);
            
            container.append(img,p);
    });
}
    
    
    
