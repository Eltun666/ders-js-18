// https://fakestoreapi.com/products

// yuxaridaki apiden istifade etmekle
// men's clothing categorysi olanlarin
// titlesini ve pricesini ekranda cixaracaqsiz


const getadddata = () => {
    try {
        axios.get("https://fakestoreapi.com/products")     
        .then((res) => {
            let ul = document.getElementById("ul")
            let a = res.data
            a.forEach(item => {
                if(item.category == "men's clothing"){
                    let li = document.createElement("li")
                    li.innerHTML = `
                    <a href="https://fakestoreapi.com/products">Title : ${item.title}</a> <br> <a href="https://fakestoreapi.com/products">Price : ${item.price}</a>
                    `
                    li.style = "margin-bottom: 10px;"
                    ul.appendChild(li)
                }                
            });          
        })            
    } catch (error) {
        console.log(error);
    }

}

getadddata()
  
