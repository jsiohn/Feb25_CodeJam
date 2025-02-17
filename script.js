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
function displayResult(e) {
  e.preventDefault();
  const selectedRadio = document.querySelector('input[name="radio"]:checked');
  if (!selectedRadio) {
    alert("Please select a photo");
    return;
  }
  if (selectedRadio.value === "1") {
    userAnswer = `"Dark Academic, Moody, Edgy, Gothic"
Based on the answer you provided your significant other's personality best fits into one of the above tropes. While no two are alike they do share some similarities. Here are our suggestions:
- Vacation: Locations that are rich in gothic architecture, dark vibes, and rich history for example Edinburgh, Scotland.
- Gift: Limited Edition Hardcover of their favorite book, Vinyl records, antiques, or tickets to their favorite band.
- Date: Find locations that are cozy, dimly lit, and bonus points if it has a cool backstory. Examples include speakeasys and jazz bars.`;
    alert(userAnswer);
  }
  if (selectedRadio.value === "2") {
    userAnswer = `"Logical, Gamer, Tech-Savvy"
Based on the answer you provided your significant other's personality best fits into one of the above tropes. While no two are alike they do share some similarities. Here are our suggestions:
- Vacation: Locations that are rich in immersive experiences, technology, and pop-culture for example Tokyo, Japan.
- Gift: Limited edition lego sets, new gaming gear, or new tech gadgets.
- Date: Immersive experiences such as SandBox VR.`;
    alert(userAnswer);
  }
  if (selectedRadio.value === "3") {
    userAnswer = `"Whimsical, Charming, Lively"
Based on the answer you provided your significant other's personality best fits into one of the above tropes. While no two are alike they do share some similarities. Here are our suggestions:
- Vacation: Locations that are rich in culture, arts, and aesthetics for example Prague, Czech Republic or New Orleans, USA.
- Gift: Personalized/sentimental gift are best. Examples include personalized playlists or scrapbooks. Anything that would be meaningful while making a good Instagram post.
- Date: Fun and low-key dates are the best fit for this personality. Examples include walking though the local botanical gardens, museum dates, or going to a jazz bar.`;
    alert(userAnswer);
  }
  if (selectedRadio.value === "4") {
    userAnswer = `"Free-Spirited, Thrill-seeker"
Based on the answer you provided your significant other's personality best fits into one of the above tropes. While no two are alike they do share some similarities. Here are our suggestions:
- Vacation: Any location that is rich in natural scenery and hiking trails for example Lake Tahoe, USA or Fiordland, NZ.
- Gift: Items that are adventure-ready or nature-inspired. If they're an avid traveler you can opt for the Go-Wild pass by Frontier airlines for unlimited flying.
- Date: Scenic Hike, Weekend Camping Trips, or Thrilling new experiences like skydiving or ziplining`;
    alert(userAnswer);
  }
  console.log(userAnswer); // debugging
}

// function to send SMS
function sendSMS() {
  if (userAnswer === "") {
    alert(
      "Please answer the question to get your significant other's personality"
    );
    return;
  }
  let userPhone = prompt("Please enter your phone number");
  if (userPhone !== null || "") {
    fetch("https://textbelt.com/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: userPhone,
        message: userAnswer,
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
