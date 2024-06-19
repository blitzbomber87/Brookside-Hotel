const logout = async () => {
  // remove session variables
  const response = await fetch('/api/guest/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // if sucessful, redirect to homepage
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

$('#logout').on('click', logout);
  