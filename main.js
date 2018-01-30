// Initialize Firebase
var config = {
  apiKey: "AIzaSyDC6PnSrF4cC_mHACHx4Fx4XbHinDzPCZo",
  authDomain: "contactform-522eb.firebaseapp.com",
  databaseURL: "https://contactform-522eb.firebaseio.com",
  projectId: "contactform-522eb",
  storageBucket: "contactform-522eb.appspot.com",
  messagingSenderId: "458349520458"
};
firebase.initializeApp(config);

// reference message collection
var messagesRef = firebase.database().ref('messages')

// listen for for Submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

// submit form
function submitForm(e){
  e.preventDefault()
  // get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Calls function
  saveMessage(name, company, email, phone, message)

  // confirmation
  window.alert('Your message has been sent!')
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// save the message to firebasejs
// this is just sending an object to our database
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push()
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  })
}
