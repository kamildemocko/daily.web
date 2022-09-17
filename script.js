buttons_expand = document.querySelectorAll("button.button-expand");
buttons_expand.forEach((butt) => {
    butt.addEventListener("click", () => {
        let div = butt.nextElementSibling;
        div.classList.toggle("hidden");

        let button_text = butt.innerText;
        if (button_text === "EXPAND") {
            butt.innerText = "HIDE";
        } else {
            butt.innerText = "EXPAND";
        }
    })
})

const theverge2 = document.querySelector("div.theverge2");
const rtvs2 = document.querySelector("div.rtvs2");

if (theverge2 && !theverge2.innerHTML) {
  theverge2.style.display = "none";
}

if (rtvs2 && !rtvs2.innerHTML) {
  rtvs2.style.display = "none";
}

// modal
imgs = document.querySelectorAll("img");
modal = document.querySelector("modal");
modalDiv = document.querySelector("modal div");
modalImg = document.querySelector("img.modal");
body = document.querySelector("body");

imgs.forEach((el) => {
  el.addEventListener("click", (e) => {
    picture_path = e.composedPath()[0];
    if (picture_path === "img.modal") return;

    modalImg.src = picture_path.src;
    modal.classList.toggle("hidden");
    modalImg.classList.toggle("hidden");

    modalDiv.addEventListener("click", () => {
      modal.classList.add("hidden");
      modalImg.classList.add("hidden");
    });
  });
});

body.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 27) {
    modal.classList.add("hidden");
    modalImg.classList.add("hidden");
  }
});
