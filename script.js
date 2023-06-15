const cards = document.querySelectorAll(".card-market-item");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalImage = document.getElementById("modal-image");
const modalTitle1 = document.getElementById("modal-title1");
const modalTitle2 = document.getElementById("modal-title2");
const modalClose = document.getElementById("modal-close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imageSrc = card.querySelector("img").src;
    const title1 = card.querySelector(".card-title-market:nth-of-type(1)").textContent;
    const title2 = card.querySelector(".card-title-market:nth-of-type(2)").textContent;

    modalImage.src = imageSrc;
    modalTitle1.textContent = title1;
    modalTitle2.textContent = title2;

    modal.style.display = "block";
    overlay.style.display = "block";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
