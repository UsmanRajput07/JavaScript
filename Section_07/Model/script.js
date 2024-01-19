"use Strict";
const modal = document.querySelector(".modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const OpenModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener("click",OpenModal);

const btnCloseModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModal.addEventListener("click", btnCloseModal);
overlay.addEventListener("click", btnCloseModal);

document.addEventListener("keydown", function(e){
  console.log(e.key)
   if(e.key === "Escape" && !modal.classList.contains("hidden")){
      btnCloseModal()
    }
})