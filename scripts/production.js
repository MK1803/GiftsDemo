let burgerMenu = document.querySelector(".burgerMenu")
let popUpMenu = document.querySelector(".popUpMenu")
let popUpContent = document.querySelector(".popUpContent")
let popClose = document.querySelector(".popClose")
let personIcon = document.querySelector(".personIcon")

burgerMenu.addEventListener("click", () => {
    popUpMenu.classList.add("popActive")
    popUpContent.classList.add("popUpContentActive")
})

popClose.addEventListener("click", () => {
    popUpMenu.classList.remove("popActive")
    popUpContent.classList.remove("popUpContentActive")
})


personIcon.addEventListener("click", () => {
    basketPopUp.classList.add("basketActive")
})