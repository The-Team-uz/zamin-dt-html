document.addEventListener("DOMContentLoaded", function () {
  var otherLinks = document.getElementsByClassName("othera");
  for (var i = 0; i < otherLinks.length; i++) {
    otherLinks[i].addEventListener("click", function (event) {
      event.preventDefault();

      var loading = document.getElementById("loading");
      loading.style.display = "block";

      setTimeout(function () {
        window.location.href = event.target.href;
      }, 500);
    });
  }

  var thisLinks = document.getElementsByClassName("thisa");
  for (var j = 0; j < thisLinks.length; j++) {
    thisLinks[j].addEventListener("click", function (event) {
      event.preventDefault();

      var loading = document.getElementById("loading");
      loading.style.display = "block";

      setTimeout(function () {
        window.location.href = event.target.href;
      }, 500);
    });
  }
});
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var fixedDiv = document.getElementById("second");
  var firstDiv = document.getElementById("first");
  var hidingMenu = document.getElementById("hide");

  if (scrollPosition > firstDiv.offsetHeight) {
    fixedDiv.classList.add("fixed");
    hidingMenu.classList.add("fixedMenu");
  } else {
    fixedDiv.classList.remove("fixed");
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
      solid_hearts[index].style.display = "block";
      regular_heart.style.display = "none";
    });
  });

  solid_hearts.forEach((solid_heart, index) => {
    solid_heart.addEventListener("click", () => {
      solid_heart.style.display = "none";
      regular_hearts[index].style.display = "block";
    });
  });
});

// function changeLike(isLiked) {
//   var regular_heart = document.querySelector(".heart");
//   var solid_heart = document.querySelector(".fill-heart");
//   if (!isLiked) {
//     solid_heart.style.display = "block";
//     regular_heart.style.display = "none";
//     isLiked = true;
//   } else {
//     solid_heart.style.display = "none";
//     regular_heart.style.display = "block";
//     isLiked = false;
//   }
// }
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var fixedDiv = document.getElementById("second");
  var firstDiv = document.getElementById("first");
  var thirdDiv = document.getElementById("third");
  var content = document.getElementsByClassName("title")[0];

  if (scrollPosition > firstDiv.offsetHeight) {
    if (!thirdDiv) {
      fixedDiv.classList.add("fixed");
      content.style.marginTop = 20 + fixedDiv.offsetHeight + "px";
    } else {
      fixedDiv.classList.remove("fixed");
      if (scrollPosition > fixedDiv.offsetHeight+20) {
        fixedDiv.classList.remove("sticky");
        fixedDiv.classList.add("fixed");
        content.style.marginTop = 20 + fixedDiv.offsetHeight + "px";
      } else {
        fixedDiv.classList.add("sticky");
        fixedDiv.classList.remove("fixed");
        content.style.marginTop = "20px";
      }
    }
  } else {
    fixedDiv.classList.remove("fixed");
    fixedDiv.classList.remove("sticky");
    content.style.marginTop = "20px";
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
