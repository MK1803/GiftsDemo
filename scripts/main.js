let burgerMenu = document.querySelector(".burgerMenu")
let popUpMenu = document.querySelector(".popUpMenu")
let popUpContent = document.querySelector(".popUpContent")
let popClose = document.querySelector(".popClose")
let basketBtn = document.querySelector(".basketBtn")
let basketPopUp = document.querySelector(".PopUpItems")
let basketClose = document.querySelector(".closeMainBasket")
let slider = document.querySelector(".besidesSlideImg")
let personIcon = document.querySelector(".personIcon")

let i = 1




burgerMenu.addEventListener("click", () => {
    popUpMenu.classList.add("popActive")
    popUpContent.classList.add("popUpContentActive")
})

popClose.addEventListener("click", () => {
    popUpMenu.classList.remove("popActive")
    popUpContent.classList.remove("popUpContentActive")
})

basketBtn.addEventListener("click", () => {
    basketPopUp.classList.add("basketActive")
})

basketClose.addEventListener("click", () => {
    basketPopUp.classList.remove("basketActive")
    // console.log('sadas');
})

personIcon.addEventListener("click", () => {
    basketPopUp.classList.add("basketActive")
})



















// besidesArrowRight.addEventListener("click", () => {
//     let slideImg = document.querySelectorAll(".bSliderImg")
//     i++

//     if (i == 5){
//         i = 1
//     }
//     if (slider.scrollLeft >= 380) {
//         slider.scrollTo({
//             left: -500,
//             behavior: "smooth"
//         })

//     }else{
//         slider.scrollTo({
//             left: slider.scrollLeft + 130,
//             behavior: "smooth"
//         })
//     }
//     if(i==5){
//         i = 1
//     }
//     besidesSlideNum.innerText = `${i}`


// })
// besidesSlideNum.innerText = `${i}`


// besidesArrowLeft.addEventListener("click", () => {
//     let slideImg = document.querySelectorAll(".besidesSlideImg")

//     if (slider.scrollLeft <= 0) {
//         slider.scrollTo({
//             left: 500,
//             behavior: "smooth"
//         })

//     }else{
//         slider.scrollTo({
//             left: slider.scrollLeft - 160,
//             behavior: "smooth"
//         })
//     }
//     if(slider.scrollLeft == 0){
//         i = 5
//     }
//     i--
//     besidesSlideNum.innerText = `${i}`


//     console.log(slider.scrollLeft);

// })








let sliderCard = document.querySelectorAll(".swiper")
let besidesSlideNum = document.querySelector("#besidesSlideNum")

const slide = (slider) => {
    const cardImg = slider.querySelectorAll(".bSliderImg")
    const cardSlider = slider.querySelectorAll(".besidesSlideImg")
    let count = 0
    let width;

    const init = () => {
        const cardImg = slider.querySelectorAll(".bSliderImg")
        width = document.querySelector(".swiper").offsetWidth;
        cardSlider.forEach(e => {
            e.style.width = width * cardImg.length + 'px';
        })
        cardImg.forEach(e => {
            e.style.width = width + 'px';
            e.style.height = 'auto';
        })
    }

    const rollSlider = () => {
        cardSlider.forEach(e => {
            e.style.transform = 'translate(-' + (count * width) / 4 + 'px)';
        })
    }

    init();
    window.addEventListener('resize', init);

    let next = slider.querySelectorAll('.besidesArrowRight')

    next.forEach(e => {
        e.addEventListener('click', function () {
            count++;

            if (count >= cardImg.length / 3) {
                count = 0;
            }
            rollSlider();

            besidesSlideNum.innerText = `${count+1}`
        });


    })

    let prev = slider.querySelector('.besidesArrowLeft')
    let k = 5
    prev.addEventListener('click', () => {
        count--;
        k--;
        if (count < 0) {
            count = (cardImg.length / 2.5) - 1;
        }
        rollSlider();
        if (k == 0) {
            k = 4
        }
        rollSlider();

        besidesSlideNum.innerText = `${k}`
    });
}

sliderCard.forEach(e => {
    slide(e)
})









// Coop Slider

let coopArrowLeft = document.querySelector(".coopArrowLeft")
let coopArrowRight = document.querySelector(".coopArrowRight")
let coopSlider = document.querySelector(".coopImg")



coopArrowRight.addEventListener("click", () => {
    if (coopSlider.scrollLeft >= 582) {
        coopSlider.scrollTo({
            left: -500,
            behavior: "smooth"
        })

    } else {
        coopSlider.scrollTo({
            left: coopSlider.scrollLeft + 160,
            behavior: "smooth"
        })
    }
    console.log(coopSlider.scrollLeft);

})


coopArrowLeft.addEventListener("click", () => {
    if (coopSlider.scrollLeft <= 0) {
        coopSlider.scrollTo({
            left: 582,
            behavior: "smooth"
        })

    } else {
        coopSlider.scrollTo({
            left: coopSlider.scrollLeft - 180,
            behavior: "smooth"
        })
    }
    console.log(coopSlider.scrollLeft);

})


// =================
let test = JSON.parse(localStorage.getItem("goodStorage"))
let cartArr = []
let basketList = document.querySelector(".itemsList")
localStorage.getItem("goodStorage")
let testAmount = document.querySelector(".testTotal")


// const calcTotal = () => {
//     let totalBasket = 0
//     testAmount.innerHTML = ""
//     test.map(e => {
//         totalBasket += e.price * e.count

//     })
//     testAmount.innerHTML += `
//         <div class="total col-12">
//             <span class="col-4">Всего: <span class="totalCount">${totalBasket} $</span></span>
//         </div>
//         `
// }




const listCartItems = () => {
    
    
    
    basketList.innerHTML = ``
    test.forEach(e => {

        if (e.slideNum == 1) {
            e.imageBasket = e.image
            e.color = e.color1
        } else if (e.slideNum == 2) {
            e.imageBasket = e.image2
            e.color = e.color2
        } else if (e.slideNum == 3) {
            e.imageBasket = e.image3
            e.color = e.color3
        }
        basketList.innerHTML += `
        <div class="itemCard col-12">
            <div class="itemCarImg col-2">
                <img src=${e.imageBasket} alt="" class="col-6">
            </div>
            <h3 class="col-4">EL003 Elleven Checkpoint-Friendly Compu-Backpack</h3>
            <div class="size col-2">
                
                <span class="sizeDes">Размер</span>
                <span class="itemSize">${e.size}</span>
            </div>
            <div class="count col-2">
                <span class="col-12">Кол-во</span>
                <div class="countNum">
                    <img src="icons/minus.svg" alt="" class="minus" onclick="dickCount(${e.id})">
                    <span>${e.count}</span>
                    <img src="icons/plus.svg" alt="" class="plus" onclick="incItem(${e.id})">
                </div>
            </div>
            <div class="price">
                <img src="icons/popUpBasketClosesvg.svg" alt="" class="toClose" onclick = "removeItem(${e.id})">
                <div class="priceNum">
                    <h1 class = "pNum" >${e.price * e.count}$</h1>
                </div>
            </div>
        </div>
            
        `
        
    })
    // calcTotal()
}
listCartItems ()




const incItem = (id) => {
    let data = test.find(e => e.id == id)
    data.count++
    listCartItems()
}

const dickCount = (id) => {
    let data = test.find(e => e.id == id)
    // data.count--

    if (data.count == 1) {
        removeItem(id)
    } else {
        data.count--
    }

    listCartItems()
}


const removeItem = (id) => {
    test.find(e => e.id === id).count = 1
    test = test.filter(e => e.id !== id)
    listCartItems()
}

const calcTotal = () => {
    let totalBasket = 0
    testAmount.innerHTML = ""
    test.map(e => {
        totalBasket += e.price * e.count

    })
    testAmount.innerHTML += `
        <div class="total col-12">
            <span class="col-4">Всего: <span class="totalCount">${totalBasket} $</span></span>
        </div>
        `
}
