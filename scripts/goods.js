let products = [{
        id: 1,
        count: 1,
        title: "EL001 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 109,
        slideNum: 1,
        imageBasket: "",
        size: "S",
        description: "EL001 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },
    {
        id: 2,
        count: 1,
        title: "EL002 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 31,
        slideNum: 1,
        imageBasket: "",
        size: "M",
        description: "EL002 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },
    {
        id: 3,
        count: 1,
        title: "EL003 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 55,
        slideNum: 1,
        imageBasket: "",
        size: "L",
        description: "EL003 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },
    {
        id: 4,
        count: 1,
        title: "EL004 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 69,
        slideNum: 1,
        imageBasket: "",
        size: "XS",
        description: "EL004 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },
    {
        id: 5,
        count: 1,
        title: "EL004 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 69,
        slideNum: 1,
        imageBasket: "",
        size: "XS",
        description: "EL004 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },
    {
        id: 6,
        count: 1,
        title: "EL004 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 69,
        slideNum: 1,
        imageBasket: "",
        size: "XS",
        description: "EL004 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },
    {
        id: 7,
        count: 1,
        title: "EL004 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 69,
        slideNum: 1,
        imageBasket: "",
        size: "XS",
        description: "EL004 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },
    {
        id: 8,
        count: 1,
        title: "EL004 Elleven Checkpoint-Friendly Compu-Backpack",
        price: 69,
        slideNum: 1,
        imageBasket: "",
        size: "XS",
        description: "EL004 Model",
        image: "img/hoodi.png",
        image2: "img/hoodi2.png",
        image3: "img/hoodi3.png",
        color1: "color1",
        color2: "color2",
        color3: "color3",
        color: "",
    },

]
let cartArr = []



let goodsRow = document.querySelector(".goodsRow")

let testAmount = document.querySelector(".testTotal")

let test = JSON.parse(localStorage.getItem("goodStorage"))


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




products.forEach(e => {
    goodsRow.innerHTML += `
        <div class="goodsCard">
            <div class="goodsCardSlider col-12">
                <img src=${e.image} alt="" class="cardImg" >
                <img src=${e.image2} alt="" class="cardImg" >
                <img src=${e.image3} alt="" class="cardImg" >
                
            </div>
            <div class="cardSliderNav">
                <img src="icons/arrowLeft.svg" alt="" class="cardArrowLeft">
                <span class="slideNum">1</span>
                <span>/</span>
                <span>3</span>
                <img src="icons/arrowRight.svg" alt="" class="cardArrowRight">
            </div>
            <h1>${e.title}</h1>
            <p>${e.description}</p>
            <div class="cardsColor">
                <div class="color ${e.color1}"></div>
                <div class="color ${e.color2}"></div>
                <div class="color ${e.color3}"></div>
                <div class="sizeCard">Size: ${e.size}</div>
            </div>
            <div class="cardPrice col-12">
                <span class="col-8">From Price<span class="cardPriceSpan"> $ ${e.price} <span/></span>
                <button class="basketBtn cardBasket col-4">
                    <img src="icons/basket2.svg" alt="" class="col-12" onclick = "addToBasket(${e.id})" id = "addToCardId">
                </button>
            </div>
        </div>
`
})

let basketList = document.querySelector(".itemsList")
localStorage.getItem("goodStorage")


let addToCardId = document.querySelectorAll("#addToCardId")

let localArr = []

const addToBasket = (id) => {
    let data = products.find(e => e.id === id)
    let check = cartArr.some(e => e.id == id)
    if (products.some(e => e.slideNum == 1)) {
        if (check) {
            incItem(id)
        } else {
            cartArr.push(data)
        }
    } else if (products.some(e => e.slideNum == 2)) {
        if (check) {
            incItem(id)
        } else {
            cartArr.push(data)
        }
    } else if (products.some(e => e.slideNum == 3)) {
        if (check) {
            incItem(id)
        } else {
            cartArr.push(data)
        }
    }

    localArr.push(data)
    localStorage.setItem("goodStorage", JSON.stringify(localArr))

    listCartItems()
}
// const listCartItems = () => {
//     basketList.innerHTML = ``
//     cartArr.forEach(e => {

//         if (e.slideNum == 1) {
//             e.imageBasket = e.image
//             e.color = e.color1
//         } else if (e.slideNum == 2) {
//             e.imageBasket = e.image2
//             e.color = e.color2
//         } else if (e.slideNum == 3) {
//             e.imageBasket = e.image3
//             e.color = e.color3
//         }
//         basketList.innerHTML += `
//         <div class="itemCard col-12">
//             <div class="itemCarImg col-2">
//                 <img src=${e.imageBasket} alt="" class="col-6">
//             </div>
//             <h3 class="col-4">EL003 Elleven Checkpoint-Friendly Compu-Backpack</h3>
//             <div class="size col-2">
//                 <span class="sizeColor">Цвет <div class="color ${e.color} colorBasket"></div></span>
//                 <span class="sizeDes">Размер</span>
//                 <span class="itemSize">${e.size}</span>
//             </div>
//             <div class="count col-2">
//                 <span class="col-12">Кол-во</span>
//                 <div class="countNum">
//                     <img src="icons/minus.svg" alt="" class="minus" onclick="dickCount(${e.id})">
//                     <span>${e.count}</span>
//                     <img src="icons/plus.svg" alt="" class="plus" onclick="incItem(${e.id})">
//                 </div>
//             </div>
//             <div class="price">
//                 <img src="icons/popUpBasketClosesvg.svg" alt="" class="toClose" onclick = "removeItem(${e.id})">
//                 <div class="priceNum">
//                     <h1 class = "pNum" >${e.price * e.count}$</h1>
//                 </div>
//             </div>
//         </div>
            
//         `
        
//     })
//     calcTotal()
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
    calcTotal()
}
listCartItems ()




// console.log(JSON.parse(localStorage.getItem("goodStorage")));











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


// const removeItem = (id) => {
//     cartArr.find(e => e.id === id).count = 1
//     cartArr = cartArr.filter(e => e.id !== id)
//     listCartItems()
// }


const removeItem = (id) => {
    test.find(e => e.id === id).count = 1
    test = test.filter(e => e.id !== id)
    listCartItems()
}





let sliderCard = document.querySelectorAll(".goodsCard")


const slide = (slider) => {
    const cardImg = slider.querySelectorAll(".cardImg")
    const cardSlider = slider.querySelectorAll(".goodsCardSlider")
    let count = 0
    let width;
    let slideNum = slider.querySelectorAll(".slideNum")

    const init = () => {
        const cardImg = slider.querySelectorAll(".cardImg")
        width = document.querySelector(".goodsCard").offsetWidth;
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
            e.style.transform = 'translate(-' + (count * width) + 'px)';
        })
    }

    init();
    window.addEventListener('resize', init);

    cardImg.forEach(e => {
        e.addEventListener('touchmove', function () {
            count++;
            if (count >= cardImg.length) {
                count = 0;
            }
            rollSlider();
            slideNum.forEach(e => {
                e.innerText = `${count + 1}`
            })
        });
    })

    let next = slider.querySelectorAll('.cardArrowRight')

    next.forEach(e => {
        e.addEventListener('click', function () {
            count++;
            if (count >= cardImg.length) {
                count = 0;
            }
            rollSlider();
            slideNum.forEach(e => {
                e.innerText = `${count + 1}`
            })
            products.map(el => {
                el.slideNum = count + 1
            })
        });


    })

    let prev = slider.querySelector('.cardArrowLeft')

    prev.addEventListener('click', () => {
        count--;
        if (count < 0) {
            count = cardImg.length - 1;
        }
        rollSlider();
        slideNum.forEach(e => {
            e.innerText = `${count + 1}`
        })
    });


    //color btns

    let color3 = slider.querySelectorAll(".color3")

    color3.forEach(e => {
        e.addEventListener("click", () => {
            count = 2
            cardSlider.forEach(e => {
                e.style.transform = 'translate(-' + (count * width) + 'px)';
            })
            slideNum.forEach(e => {
                e.innerText = `${count + 1}`
            })
            products.map(el => {
                el.slideNum = count + 1
            })
        })
    })

    let color2 = slider.querySelectorAll(".color2")

    color2.forEach(e => {
        e.addEventListener("click", () => {
            count = 1
            cardSlider.forEach(e => {
                e.style.transform = 'translate(-' + (count * width) + 'px)';
            })
            slideNum.forEach(e => {
                e.innerText = `${count + 1}`
            })
            products.map(el => {
                el.slideNum = count + 1
            })
        })
    })

    let color1 = slider.querySelectorAll(".color1")

    color1.forEach(e => {
        e.addEventListener("click", () => {
            count = 0
            cardSlider.forEach(e => {
                e.style.transform = 'translate(-' + (count * width) + 'px)';
            })
            slideNum.forEach(e => {
                e.innerText = `${count + 1}`
            })
            products.map(el => {
                el.slideNum = count + 1
            })
        })
    })
}

sliderCard.forEach(e => {
    slide(e)
})







let burgerMenu = document.querySelector(".burgerMenu")
let popUpMenu = document.querySelector(".popUpMenu")
let popUpContent = document.querySelector(".popUpContent")
let popClose = document.querySelector(".popClose")
let basketBtn = document.querySelectorAll(".testBasket")
let basketPopUp = document.querySelector(".PopUpItems")
let basketClose = document.querySelector(".closeMainBasket")
let slider = document.querySelector(".besidesSlideImg")
let addBasket = document.querySelector("body")
let personIcon = document.querySelector(".personIcon")


burgerMenu.addEventListener("click", () => {
    popUpMenu.classList.add("popActive")
    popUpContent.classList.add("popUpContentActive")
})

popClose.addEventListener("click", () => {
    popUpMenu.classList.remove("popActive")
    popUpContent.classList.remove("popUpContentActive")
})


basketBtn.forEach(e => {
    e.addEventListener("click", () => {
        basketPopUp.classList.add("basketActive")
    })
})

basketClose.addEventListener("click", () => {
    basketPopUp.classList.remove("basketActive")
})

personIcon.addEventListener("click", () => {
    basketPopUp.classList.add("basketActive")
})