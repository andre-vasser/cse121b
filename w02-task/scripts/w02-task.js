/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Andre Vasser';
let currentyear = '2024';
let profilePicture = "../images/Andre.png";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profilePicture");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentyear}`;
imageElement.setAttribute('src', profilePicture);



/* Step 5 - Array */






