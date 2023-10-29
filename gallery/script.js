const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const navMenu = document.querySelector(".ulNav");
const body = document.body;
let prevScrollPos = window.pageYOffset;
let timeoutId;
var imgElements = document.querySelectorAll(".galleryImage");

const galleryData = [
  { src: "/images/phoenix.jpg", alt: "Phoenix", type: "digital" }, //Filtering coming
  { src: "/images/cyborg.jpg", alt: "Cyborg", type: "digital" },
  { src: "/images/elements.jpg", alt: "Elements", type: "digital" },
  { src: "/images/gargoyle.jpg", alt: "Gargoyle", type: "digital" },
  { src: "/images/hybrid.jpg", alt: "Hybrid", type: "digital" },
  { src: "/images/tree.png", alt: "Tree", type: "digital" },
  { src: "/images/fox.png", alt: "Fox", type: "traditional" },
  { src: "/images/hunt.jpg", alt: "Hunt", type: "digital" },
  { src: "/images/phoenix2.jpg", alt: "Phoenix2", type: "digital" },
  { src: "/images/infans.jpg", alt: "Infans", type: "digital" },
  { src: "/images/predator.jpg", alt: "Predator", type: "digital" },
  { src: "/images/camo.jpg", alt: "Camo", type: "digital" },
  { src: "/images/cave.jpg", alt: "Cave", type: "digital" },
  { src: "/images/craweler.jpg", alt: "Craweler", type: "digital" },
  { src: "/images/manedWolf.png", alt: "Maned Wolf", type: "traditional" },
  { src: "/images/dog.jpg", alt: "Dog", type: "digital" },
  { src: "/images/dragon.jpg", alt: "Dragon", type: "digital" },
  { src: "/images/element2.jpg", alt: "Element2", type: "digital" },
  { src: "/images/fish.jpg", alt: "Fish", type: "digital" },
  { src: "/images/headpiece.jpg", alt: "Headpiece", type: "digital" },
  { src: "/images/herbivore.jpg", alt: "Herbivore", type: "digital" },
  { src: "/images/hex.jpg", alt: "Hex", type: "digital" },
  { src: "/images/infans2.jpg", alt: "Infans2", type: "digital" },
  { src: "/images/knot.jpg", alt: "Knot", type: "digital" },
  { src: "/images/ludwig.jpg", alt: "Ludwig", type: "digital" },
  { src: "/images/Lost.png", alt: "Lost", type: "digital" },
  { src: "/images/maria.jpg", alt: "Maria", type: "digital" },
  { src: "/images/sketch.png", alt: "Sketch", type: "traditional" },
  { src: "/images/raikou.jpg", alt: "Raikou", type: "digital" },
  { src: "/images/tommy.jpg", alt: "Tommy", type: "digital" },
  { src: "/images/vicar.jpg", alt: "Vicar", type: "traditional" },
];

class GalleryImage {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
    this.element = this.createImageElement();
    this.addEventListeners();
  }

  createImageElement() {
    const img = document.createElement("img");
    img.src = this.src;
    img.alt = this.alt;
    img.className = "galleryImage";
    return img;
  }

  addEventListeners() {
    this.element.addEventListener("click", () => {
      Modal.showImage(this.src);
    });

    this.element.addEventListener("mouseleave", () => {
      GalleryImage.resetAllImages();
    });
  }

  static resetAllImages() {
    galleryImages.forEach((image) => {
      image.style.transform = `scale(${sideScaleFactor})`;
      image.style.opacity = sideOpacity;
      image.style.zIndex = 1;
    });
  }
}

const galleryContainer = document.getElementById("gallery");
const galleryImages = [];

galleryData.forEach((imageData, index) => {
  const galleryImage = new GalleryImage(imageData.src, imageData.alt);
  galleryImages.push(galleryImage);

  const imageItem = document.createElement("div");
  imageItem.className = "imageItem";
  imageItem.appendChild(galleryImage.element);
  galleryContainer.appendChild(imageItem);
});

$(document).ready(function () {
  $(".imageItem").each(function () {
    $(this).wrap('<div class="imageWrapper"></div>');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imageItems = document.querySelectorAll(".imageItem");
  imageItems.forEach(function (item) {
    const img = item.querySelector(".galleryImage");
    const altText = img.getAttribute("alt");
    const altTextElement = document.createElement("p");
    altTextElement.classList.add("altText");
    altTextElement.textContent = altText;
    item.appendChild(altTextElement);
  });
});

//MODAL
class Modal {
  static showImage(src) {
    modalImage.src = src;
    modal.style.display = "block";
    body.classList.add("modal-open");
  }

  static close() {
    modal.style.display = "none";
    body.classList.remove("modal-open");
  }
}
document.getElementById("closeModal").addEventListener("click", () => {
  Modal.close();
});

//NAVBAR
class Navbar {
  static hide() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("active");
  }

  static show() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("active");
    clearTimeout(timeoutId);
    timeoutId = setTimeout(Navbar.hide, 3000);
  }
}
window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    Navbar.hide();
  } else {
    Navbar.show();
  }

  prevScrollPos = currentScrollPos;
});

//SHOW CONTACT INFO
document.getElementById("loadText").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "text.html", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      var receivedData = xhr.responseText;
      document.getElementById("text").innerHTML = receivedData;
      document.getElementById("loadText").style.display = "none";
    } else {
      console.log("Error when fetching text");
    }
  };

  xhr.send();
});
