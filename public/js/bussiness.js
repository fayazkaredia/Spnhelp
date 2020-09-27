// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: 'AIzaSyDQ0inYjrWaqep4PCLv-X4XyKHs4Hcs7l0',
  authDomain: 'bussiness-f8381.firebaseapp.com',
  databaseURL: 'https://bussiness-f8381.firebaseio.com',
  projectId: 'bussiness-f8381',
  storageBucket: 'bussiness-f8381.appspot.com',
  messagingSenderId: '530463861998',
  appId: '1:530463861998:web:7b0bf5217ca505b07357ff',
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
