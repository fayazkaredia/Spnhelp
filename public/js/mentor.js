// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: 'AIzaSyAjmpmQUxow_vH-h33hrRg4DcO_lY-V8kc',
  authDomain: 'mentor-24e7a.firebaseapp.com',
  databaseURL: 'https://mentor-24e7a.firebaseio.com',
  projectId: 'mentor-24e7a',
  storageBucket: 'mentor-24e7a.appspot.com',
  messagingSenderId: '1032575676160',
  appId: '1:1032575676160:web:faac40cf49e94bd4520de5',
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
  var location = getInputVal('location');
  var jobtitle = getInputVal('jobtitle');

  var company = getInputVal('company');
  var degree = getInputVal('degree');
  var country = getInputVal('country');
  var message = getInputVal('message');

  // Save message
  saveMessage(
    name,
    lastname,
    email,
    location,
    jobtitle,
    company,
    degree,
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
  location,
  jobtitle,
  company,
  degree,
  country,
  message
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lastname: lastname,
    email: email,
    location: location,
    jobtitle: jobtitle,
    company: company,
    degree: degree,
    country: country,
    message: message,
  });
}
