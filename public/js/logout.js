const logout = async () => {
    const response = await fetch('/api/guest/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
$('logout').on('click', logout);
  