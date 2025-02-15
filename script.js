/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const cardButton = document.querySelectorAll("#radio");

/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

// variable to store answers as array
let userAnswers = [];

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// function to add answer value to array
function getRadioValue() {
  const selectedRadio = document.querySelector('input[name="radio"]:checked');
  if (selectedRadio) {
    return parseInt(selectedRadio.value);
  }
}

// function to get sum of user answers
function calculateSum() {
  return userAnswers.reduce((total, num) => total + num, 0);
}

/* -------------------------------------------------------------------------- */
/*                                  Event Listeners                           */
/* -------------------------------------------------------------------------- */

cardButton.forEach((el) => {
  el.addEventListener("click", () => {
    userAnswers.push(getRadioValue());
    console.log(userAnswers);
  });
});
