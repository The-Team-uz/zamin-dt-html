// document.addEventListener("DOMContentLoaded", function () {
//   var otherLinks = document.getElementsByClassName("othera");
//   for (var i = 0; i < otherLinks.length; i++) {
//     otherLinks[i].addEventListener("click", function (event) {
//       event.preventDefault();

//       var loading = document.getElementById("loading");
//       loading.style.display = "block";

//       setTimeout(function () {
//         window.location.href = event.target.href;
//       }, 500);
//     });
//   }
//   var thisLinks = document.getElementsByClassName("thisa");
//   for (var j = 0; j < thisLinks.length; j++) {
//     thisLinks[j].addEventListener("click", function (event) {
//       event.preventDefault();

//       var loading = document.getElementById("loading");
//       loading.style.display = "block";

//       setTimeout(function () {
//         window.location.href = event.target.href;
//       }, 500);
//     });
//   }
// });

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  // var fixedDiv = document.getElementById("second");
  var firstDiv = document.getElementById("first");
  var hidingMenu = document.getElementById("hide");

  if (scrollPosition > firstDiv.offsetHeight) {
    hidingMenu.classList.add("fixedMenu");
  } else {
    hidingMenu.classList.remove("fixedMenu");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var hiding_menu = document.getElementById("bar");
  var menu = document.getElementById("hide");
  var isOpen = false;

  hiding_menu.addEventListener("click", () => {
    if (!isOpen) {
      isOpen = true;
      menu.style.display = "flex";
    } else {
      isOpen = false;
      menu.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var regular_hearts = document.querySelectorAll(".heart");
  var solid_hearts = document.querySelectorAll(".fill-heart");

  regular_hearts.forEach((regular_heart, index) => {
    regular_heart.addEventListener("click", () => {
      solid_hearts[index].style.display = "flex";
      regular_heart.style.display = "none";
    });
  });

  solid_hearts.forEach((solid_heart, index) => {
    solid_heart.addEventListener("click", () => {
      solid_heart.style.display = "none";
      regular_hearts[index].style.display = "flex";
    });
  });
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var fixedDiv = document.getElementById("second");
  var firstDiv = document.getElementById("first");
  var thirdDiv = document.getElementById("third");

  if (scrollPosition > firstDiv.offsetHeight) {
    if (thirdDiv) {
      console.log("bor");
      third.style.marginTop = fixedDiv.offsetHeight + "px";
      fixedDiv.classList.add("fixed");
    } else {
      console.log("yoq");
      firstDiv.style.marginBottom = fixedDiv.offsetHeight + "px";
      fixedDiv.classList.add("fixed");
    }
  } else {
    if (thirdDiv) {
      thirdDiv.style.marginTop = "0px";
    }

    fixedDiv.classList.remove("fixed");
    firstDiv.style.marginBottom = "0px";
  }
});

function openNewPage() {
  window.location.href = "single_product.html";
}
function home() {
  window.location.href = "home.html";
}
function products() {
  window.location.href = "products.html";
}
function favourites() {
  window.location.href = "favourites.html";
}
function basket() {
  window.location.href = "basket.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".minus");
  const plusBtn = document.querySelector(".plus");
  const numberDisplay = document.querySelector(".number");
  const totalPrice = document.querySelector(".total_price");
  const tPrice = document.querySelector(".t_price");
  const offering = document.getElementById("offering");
  const offering_price = document.getElementById("offering_price");
  if (minusBtn || plusBtn) {
    let count = 1;
    minusBtn.classList.add("minus_unable");

    function incrementCount() {
      if (count < 20) {
        count++;
        updateDisplay();
      }
    }

    function decrementCount() {
      if (count > 1) {
        count--;
        updateDisplay();
      }
    }

    function updateDisplay() {
      numberDisplay.textContent = count;
      let price = count * 7100000;
      price = price.toLocaleString();
      if (tPrice) {
        tPrice.textContent = price + " som";
        if (offering) {
          offering.value = count * 7100000;
          let offer = offering.value;
          offer = (+offer).toLocaleString();
          offering_price.textContent = offer + " som";
          offering.addEventListener("input", function () {
            var currentValue = parseInt(offering.value, 10);

            var maxValue = parseInt(offering.getAttribute("max"), 10);
            if (currentValue > maxValue) {
              offering.value = maxValue;
            }
            let offer = offering.value;
            offer = (+offer).toLocaleString();
            offering_price.textContent = offer + " som";
          });
        }
      } else {
        totalPrice.textContent = count + " " + "/" + " " + price + " som";
      }
      if (count == 1) {
        minusBtn.classList.remove("minus_able");
        minusBtn.classList.add("minus_unable");
      } else {
        minusBtn.classList.remove("minus_unable");
        minusBtn.classList.add("minus_able");
      }
      if (count == 20) {
        plusBtn.classList.add("plus_unable");
        plusBtn.classList.remove("plus_able");
      } else {
        plusBtn.classList.remove("plus_unable");
        plusBtn.classList.add("plus_able");
      }
    }

    // Event listeners for the plus and minus buttons
    plusBtn.addEventListener("click", incrementCount);
    minusBtn.addEventListener("click", decrementCount);
  }
});
