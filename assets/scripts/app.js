var ratingContainer = document.getElementById("rating-container");
var ratingButtons = document.getElementsByClassName("rating-button");
var userRate = 0;
var submitButton = document.getElementById("submit-button");

var resultContainer = document.getElementById("result-container");
var ratingValue = document.getElementById("rating-value");

for (let i = 0; i < ratingButtons.length; i++) {
    ratingButtons[i].addEventListener("click", function() {
        userRate = ratingButtons[i].value;
        console.log(userRate);
    });
}

submitButton.addEventListener("click", submitRating);

function submitRating() {
    if (userRate != 0) {
        ratingValue.innerHTML = userRate;
        
        ratingContainer.classList.toggle("non-active");
        resultContainer.classList.toggle("non-active");
    }
}
