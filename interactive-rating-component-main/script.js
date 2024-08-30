let selectedRating = null;
let previousButton = null;

let selectedValue = document.querySelector('.selectedValue'); 

const submitButton = document.querySelector('.submit');
const ratingButtons = document.querySelectorAll(".btn-class");
const ratingCard = document.querySelector(".rating-card");
const thankState = document.querySelector(".thank-state");

ratingButtons.forEach((button) => {
  button.addEventListener("click", function () {

    if (previousButton && previousButton !== this) {
      previousButton.style.backgroundColor = "hsla(217, 12%, 63%, 0.1)";
      previousButton.style.color = "white";
    }

    this.style.backgroundColor = "white";
    this.style.color = "black";

    selectedRating = this.getAttribute("data-value");
    selectedValue.innerHTML = selectedRating;
    previousButton = this;
  });
});

submitButton.addEventListener('click', function(){
    if(selectedRating){
        console.log(`Değerlendirmeniz: ${selectedRating}`);
    }

    ratingCard.style.display = "none";
    thankState.style.display = "block";
});
