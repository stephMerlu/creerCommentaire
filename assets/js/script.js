let button = document.querySelector('#comment-submit');
console.log(button)

// add a click event listener on the form submit button
// don't forget to "prevent" the form from being sent

button.addEventListener('click', interception);

function interception(event) {
    console.log(event);
    event.preventDefault();
    let nom = document.getElementById('comment-username').value;
    console.log(nom);

    let message = document.querySelector('#comment-content').value;
    console.log(message);

    addElement(nom, message)
}

function addElement(nom, message) {

    let nouveauCom = document.createElement("li");
    let nom2 = document.createElement("h5");
    nom2.append(nom);
    let date1 = document.createElement("h6");
    date1.append(new Date().toLocaleDateString());
    let paragraphe = document.createElement("p");
    paragraphe.append(message);

    nouveauCom.append(nom2, date1, paragraphe);
    console.log(nouveauCom.outerHTML)

    let com = document.querySelector('#comments-list')
    com.appendChild(nouveauCom);
}









// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

// new comments must have the same HTML structure as existing comments.