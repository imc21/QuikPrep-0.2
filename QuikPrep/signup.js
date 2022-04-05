var messagesRef = firebase.database()
 .ref('User Sign Up');

document.getElementById('Account')
 .addEventListener('submit', submitForm);

function submitForm(e) {
 e.preventDefault();

 // Get values
 var firstName = getInputVal('firstName');
 var lastName = getInputVal('lastName');
 var userName = getInputVal('userName');
 var email = getInputVal('userEmail');
 var password = getInputVal('userPassword');

 saveMessage(firstName, lastName, userName, email, password);
 document.getElementById('Account').reset();
}

// Function to get get form values
function getInputVal(id) {
 return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstName, lastName, userName, email, password) {
 var newMessageRef = messagesRef.push();
 newMessageRef.set({
     firstName: firstName,
     lastName: lastName,
     userName: userName,
     email: email,
     password: password,
 });
}