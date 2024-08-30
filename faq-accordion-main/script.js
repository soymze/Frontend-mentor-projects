function toggleAnswer(imageElement, paragraphElement) {
    const plus = "./assets/images/icon-plus.svg";
    const minus = "./assets/images/icon-minus.svg";

    if (paragraphElement.hidden) {
      paragraphElement.hidden = false;
      imageElement.src = minus;
    } else {
      paragraphElement.hidden = true;
      imageElement.src = plus;
    }
  }

  const questionsAndAnswers = [
    {
      image: document.getElementById("que-one"),
      paragraph: document.getElementById("ans-one"),
    },
    {
      image: document.getElementById("que-two"),
      paragraph: document.getElementById("ans-two"),
    },
    {
      image: document.getElementById("que-three"),
      paragraph: document.getElementById("ans-three"),
    },
    {
      image: document.getElementById("que-four"),
      paragraph: document.getElementById("ans-four"),
    },
  ];

  questionsAndAnswers.forEach((item) => {
    item.image.addEventListener("click", function () {
      toggleAnswer(item.image, item.paragraph);
    });

    item.image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAnswer(item.image, item.paragraph);
      }
    });
  });