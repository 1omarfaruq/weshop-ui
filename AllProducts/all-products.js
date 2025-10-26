function toggleCollapse(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);

  if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    arrow.classList.remove("rotate-180");
  } else {
    content.classList.add("expanded");
    arrow.classList.add("rotate-180");
  }
}

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (
        e.target.className ===
        "input-min w-full pl-2 text-right text-[14px] text-[#192739F0]"
      ) {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

function changeCardView (cardNumber){
  //v card- sm:grid-cols-2 grid xl:grid lg:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-5
//  h-card- hidden md:grid grid-cols-2 gap-5
// l -card - hidden sm:grid grid-cols-1 gap-5
const allProductsPage = document.querySelector(".all-product-page")
const varticalCard = document.querySelector(".vCards")
const horizontalCard = document.querySelector(".hCards")
const listCard = document.querySelector(".lCards")
console.log(cardNumber, allProductsPage.offsetWidth,varticalCard,horizontalCard,listCard)
switch (cardNumber) {
  case 1:
  
    
    break;
  case 2:
    if(allProductsPage.offsetWidth >= 1536){
      varticalCard.classList.remove("grid")
      varticalCard.style.display = 'none'

    }
    
    break;
  case 3:
    if(allProductsPage.offsetWidth >= 1536){
      varticalCard.classList.remove("2xl:grid-cols-4")
      varticalCard.style.display = 'grid'
      varticalCard.classList.add("2xl:grid-cols-3")

    }

    
    break;
  case 4:
    if(allProductsPage.offsetWidth >= 1536){
      varticalCard.classList.remove("2xl:grid-cols-3")
      varticalCard.classList.add("2xl:grid-cols-4")

    }

    
    break;

  default:
    break;
}


}
// Start:: Testimonial Slider Script

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-shop-next",
      prevEl: ".swiper-shop-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      // When window width is >= 320px
      320: {
        slidesPerView: 1, // Show 1 slide
        spaceBetween: 16,
      },
      // When window width is >= 640px
      640: {
        slidesPerView: 2, // Show 2 slides
        spaceBetween: 16,
      },
      768:{
        slidesPerView: 3, // Show 2 slides
        spaceBetween: 30,

      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 4, // Show 2 slides
        spaceBetween: 30,
      },
      // When window width is >= 1440px
      1280: {
        slidesPerView: 5, // Show 3 slides
        spaceBetween: 30,
      },
    },
  });

//End:: Testimonial Slider Script 