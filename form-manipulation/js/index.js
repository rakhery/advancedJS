const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const country = document.querySelector("#country");
const submitButton = document.querySelector("#submit_button");
const usersTableBody = document.querySelector("#users_list");

const formFields = [firstName, lastName, email, country, phoneNumber];

// # Tant que tous les champs ne sont pas remplis, ne rien ajouter au tableau
// # Les messages d'erreurs doivent disparaitre pour les champs remplis
//     Si dans une précédente validation ces champs étaient vides
//// # Ajouter un bouton supprimer dans la colonne action
// // # Supprimer la ligne quand on clique sur le bouton
// // # Supprimer les messages d'erreur quand les champs sont valides

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (!isFormValid1(formFields)) {
        for (const field of formFields) {
            displayErrorMessages(field);
        }
        return;
    }

    const row = document.createElement("tr");
    for (const field of formFields) {
        const column = CreateColumn(field.value);
        row.appendChild(column);
    }

    usersTableBody.appendChild(row);

    emptyForm(formFields);
});

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

function isFormValid1(formFields) {
    // return formFields.every((field) => field.value);
    return formFields.every((field) => field.value !== "");
}

function isFormValid2(formFields) {
    for (const field of formFields) {
        if (!field.value) {
            return false;
        }
    }
    return true;
}

function emptyForm(formFields) {
    for (const field of formFields) {
        field.value = "";
    }
}













/*
function editNodeText(regex, input, helpId, helpMessage)

{
    // See if the info matches the regex that was defined
    // If the wrong information was entered, warn them
    if (!regex.test(input)) {

        if (helpId != null)
            // We need to show a warning
            // Remove any warnings that may exist
            while (helpId.childNodes[0]){
                helpId.removeChild(helpId.childNodes[0]);
            }

        // Add new warning
        helpId.appendChild(document.createTextNode(helpMessage));

    } else {

        // If the right information was entered, clear the help message
        if (helpId != null){

            // Remove any warnings that may exist
            while (helpId.childNodes[0]){
                helpId.removeChild(helpId.childNodes[0]);
            }

        }

    }
}

// inputField – ID Number for the html text box
// helpId – ID Number for the child node I want to print a warning in
function isTheFieldEmpty(inputField, helpId) {

    // See if the input value contains any text
    return editNodeText(/^[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}\s?[A-Za-z\.\' \-]{1,15}/, inputField.value, helpId, "Please enter a valid name.");
}

// inputField.value – Value typed in the html text box
function isAddressOk(inputField, helpId) {

    return editNodeText(/^[A-Za-z0-9\.\' \-]{5,30}$/, inputField.value, helpId, "Enter a Street (Ex.1234 Main St.)");
}

function isStateOk(inputField, helpId) {

    return editNodeText(/^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/, inputField.value, helpId, "Enter a State Code in Uppercase (Ex.NY, PA, CA)");
}

function isPhoneOk(inputField, helpId) {

    return editNodeText(/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/, inputField.value, helpId, "Enter a Phone Number (Ex.412-828-3000)");

}

function isEmailOk(inputField, helpId) {

    return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, inputField.value, helpId, "Enter an Email (Ex. xxxx@xxxxx.xx)");

}
*/
