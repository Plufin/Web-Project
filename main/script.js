const navMenu = document.querySelector(".ulNav");
const body = document.body;
let prevScrollPos = window.pageYOffset;
let timeoutId;

//NAV

function hideNavbar() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.remove("active");
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
    clearTimeout(timeoutId);

    timeoutId = setTimeout(hideNavbar, 3000);
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
