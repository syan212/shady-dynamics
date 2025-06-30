async function submitPassword() {
  try{
    const entered_password = document.getElementById('password_field').value;
    if (!entered_password) return;
    const response = await fetch('/.netlify/functions/compare-hash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({password: entered_password}),
    });
    const {match} = await response.json();
    console.log(match);
    if (match){
      alert('Correct Password!');
      sessionStorage.setItem('authenticated', 'true');
      window.location.href = '/index.html';
    }
    else{
      alert('Wrong Password');
    }
  } catch (error){
    console.error(error);
    alert('Error')
      }
}
