// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: 'AIzaSyDcrAC7S2f1Fivtt5dqWrQ-pP6spRSUIXU',
  authDomain: 'contact-be504.firebaseapp.com',
  databaseURL: 'https://contact-be504.firebaseio.com',
  projectId: 'contact-be504',
  storageBucket: 'contact-be504.appspot.com',
  messagingSenderId: '833880859635',
  appId: '1:833880859635:web:5d99a98af5710f7812a886',
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var city = getInputVal('city');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, lastname, email, city, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, lastname, email, city, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lastname: lastname,
    email: email,
    city: city,
    message: message,
  });
}
