let menuContainer = document.querySelector("#menuContainer")
let linkOptions = document.querySelector("#linkOptions")
let back = document.querySelector("#back")
let ruta = document.querySelector("#ruta")


ruta.addEventListener("click", () => 
{
    console.log("Hej")
    ruta.style.display = "flex"
})

menuContainer.addEventListener("click", () => 
{
    linkOptions.style.display = "flex"; 
    console.log("hej")
})

/*back.addEventListener("click", () =>
{
    linkOptions.style.display = "none"
})*/

/*boka.addEventListener("click", () => 
{
    console.log("Hej")
    ruta.style.display = "flex"
})*/

/*myInput.addEventListener("click", () => 
{
    
})*/

  

