var first;
function setH1()
{
    if(first)
        document.querySelector("h1").textContent = "Магазин детской одежды \"Детский дворик\"";
    else
        document.querySelector("h1").textContent = "г. Чайковский ул. Ленина 61/1 Д.Б. \"Элегант\"";
    first = !first;
}
setInterval(setH1, 8000);


const initMages = () => {
    const magesConteiner = document.querySelector(".mages")
    const mages = document.querySelectorAll(".mage")
   
    magesConteiner.style.setProperty("--total-mages", mages.length)

    magesConteiner.addEventListener("click", (event) => {
    const clickedMage = event.target.closest(".mage")
   
    if (!clickedMage || clickedMage.classList.contains ("active")) return
    
     mages.forEach((mage) => {
        mage.classList.remove("active")
    })
    
    clickedMage.classList.add("active")
})
}

document.addEventListener("DOMContentLoaded", initMages)