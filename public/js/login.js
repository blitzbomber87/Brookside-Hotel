// grab references to the important DOM elements
const login = $("#login");
const signup = $("#signup");


const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = $('#email').val();
  const password = $('#password').val();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/guest/login', {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
  
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  const fullName = $('#fullName').val();
  const email = $('#emailSignUp').val();
  const phone = $('#phone').val();
  const password = $('#passwordSignUp').val();
  
  // Send a POST request to the API endpoint
  if (fullName && email && phone && password) {
    const response = await fetch('/api/guest', {
      method: 'POST',
      body: JSON.stringify({ fullName, email, phone, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
       // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
  
login.on('click', loginFormHandler);
signup.on('click', signupFormHandler);