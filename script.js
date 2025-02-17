/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const cardButton = document.querySelectorAll("#radio");
const optIn = document.querySelector(".content__bubble-text");
const quizSubmit = document.querySelector(".quiz__submit-button");

/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

let userAnswer = "";
const apiKey =
  "ed3841ce233bc6f7d78f21a55fa79295a3a88918WGoIEy7kot5ZWMfYMmJmDB4Fv";

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// function to display result
function displayResult() {
  const selectedRadio = document.querySelector('input[name="radio"]:checked');
  if (!selectedRadio) {
    alert("Please select an photo");
    return;
  }
  if (selectedRadio.value === "1") {
    alert("Moody was chosen");
  }
  if (selectedRadio.value === "2") {
    alert("Analytical was chosen");
  }
  if (selectedRadio.value === "3") {
    alert("Cutesy was chosen");
  }
  if (selectedRadio.value === "4") {
    alert("Outdoorsy was chosen");
  }
}

// function to send SMS
function sendSMS() {
  let userPhone = prompt("Please enter your phone number");
  if (userPhone !== null || "") {
    fetch("https://textbelt.com/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: userPhone,
        message: "Hello world",
        key: apiKey,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        userAnswer = "";
        console.log(userAnswer); // debugging
      });
  } else {
    alert("Please enter a valid phone number");
  }
}

/* -------------------------------------------------------------------------- */
/*                                  Event Listeners                           */
/* -------------------------------------------------------------------------- */

quizSubmit.addEventListener("click", displayResult);

optIn.addEventListener("click", sendSMS);
