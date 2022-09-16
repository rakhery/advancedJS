//import { CreateColumn } from "./js/components/create-column.js";

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");
const firstNameError = document.querySelector("#err_first_name");
const lastNameError = document.querySelector("#err_last_name");
const emailError = document.querySelector("#err_email");
const phoneNumberError = document.querySelector("#err_phone_number");
const countryError = document.querySelector("#err_country");

const formFields = [firstName, lastName, email, country, phoneNumber];

// # Tant que tous les champs ne sont pas remplis, ne rien ajouter au tableau
// # Les messages d'erreurs doivent disparaitre pour les champs remplis
//     Si dans une précédente validation ces champs étaient vides

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
     formFields[0].addEventListener('onblur',()=>{
         isTheFieldEmpty(this, document.getElementById('err_first_name'));
     });
    // isTheFieldEmpty("last_name","err_last_name");
   // isTheFieldEmpty("first_name","err_first_name");
    const row = document.createElement("tr");
    for (const field of formFields) {
        const column = CreateColumn(field.value);
        row.appendChild(column);
    }
    usersTableBody.appendChild(row);
});

//@author : formateur avec css
function displayErrorMessages(field) {
    const fieldDisplayName = field.getAttribute("data-name");
    const errorField = document.querySelector(`#err_${field.name}`);
    if (!field.value) {
        errorField.innerText = `${fieldDisplayName} cannot be empty`;
        errorField.classList.add("error");
    } else {
        errorField.innerText = "";
    }
}

function editNodeText(regex, input, helpId, helpMessage)
{
    if (!regex.test(input)) {
        if (helpId != null)
            while (helpId.childNodes[0]){
                helpId.removeChild(helpId.childNodes[0]);
            }
        helpId.appendChild(document.createTextNode(helpMessage));
    } else {
        if (helpId != null){
            while (helpId.childNodes[0]){
                helpId.removeChild(helpId.childNodes[0]);
            }
        }

    }
}

function isTheFieldEmpty(inputField, helpId) {
    return editNodeText(/^[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}/, inputField.value, helpId, "Please enter a valid name.");
}
function isAddressOk(inputField, helpId) {
    return editNodeText(/^[A-Za-z0-9\.\' \-]{5,30}$/, inputField.value, helpId, "Enter a Street (Ex.1234 Main St.)");
}
function isPhoneOk(inputField, helpId) {
    return editNodeText(/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/, inputField.value, helpId, "Enter a Phone Number (Ex.412-828-3000)");
}
function isEmailOk(inputField, helpId) {
    return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, inputField.value, helpId, "Entrer Email format valid xxxx@xxx.fr");
}

