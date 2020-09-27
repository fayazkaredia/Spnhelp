// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: 'AIzaSyBG8KQsw1ghCg9JYk5GV8KikOi9kM9gvyM',
  authDomain: 'feedback-6433f.firebaseapp.com',
  databaseURL: 'https://feedback-6433f.firebaseio.com',
  projectId: 'feedback-6433f',
  storageBucket: 'feedback-6433f.appspot.com',
  messagingSenderId: '950841235318',
  appId: '1:950841235318:web:5c0f9f1c52a95aa60f0c57',
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
  var interaction = getInputVal('interaction');
  var question = getInputVal('question');
  var future = getInputVal('future');
  var impactful = getInputVal('impactful');
  var frequency = getInputVal('frequency');
  var medium = getInputVal('medium');
  var message = getInputVal('message');

  // Save message
  saveMessage(
    name,
    lastname,
    email,
    interaction,
    question,
    future,
    impactful,
    frequency,
    medium,
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
  interaction,
  question,
  future,
  impactful,
  frequency,
  medium,
  message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lastname: lastname,
    email: email,
    interaction: interaction,
    question: question,
    future: future,
    impactful: impactful,
    frequency: frequency,
    medium: medium,
    message: message,
  });
}
