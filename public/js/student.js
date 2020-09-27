// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: 'AIzaSyCOTtDQP3wBZbOOUZG9_uSXY9KhwAvZpFE',
  authDomain: 'student-21d8e.firebaseapp.com',
  databaseURL: 'https://student-21d8e.firebaseio.com',
  projectId: 'student-21d8e',
  storageBucket: 'student-21d8e.appspot.com',
  messagingSenderId: '874203390826',
  appId: '1:874203390826:web:5cd6471b8c797f69103b13',
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
  var grade = getInputVal('grade');

  var field = getInputVal('field');
  var purpose = getInputVal('purpose');
  var LookingFor = getInputVal('LookingFor');
  var destination = getInputVal('destination');
  var Pursue = getInputVal('Pursue');
  var additional = getInputVal('additional');
  var country = getInputVal('country');
  var message = getInputVal('message');

  // Save message
  saveMessage(
    name,
    lastname,
    email,
    city,
    grade,
    field,
    purpose,
    LookingFor,
    destination,
    Pursue,
    additional,
    country,
    message
  );

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
function saveMessage(
  name,
  lastname,
  email,
  city,
  grade,
  field,
  purpose,
  LookingFor,
  destination,
  Pursue,
  additional,
  country,
  message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,

    lastname: lastname,
    email: email,
    city: city,
    grade: grade,
    field: field,
    purpose: purpose,
    LookingFor: LookingFor,
    destination: destination,
    Pursue: Pursue,
    additional: additional,
    country: country,
    message: message,
  });
}
