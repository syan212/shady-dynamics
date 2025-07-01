async function submitPassword() {
	const password_output = document.querySelector('#screen #login-container #password-output');
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
			password_output.style = 'color: black;'
      		password_output.innerHTML = 'Correct Password. You have been authenticated.';
      		sessionStorage.setItem('authenticated', 'true');
      		window.location.href = '/index.html';
    	}
    	else{
			password_output.style = 'color: red;'
      		password_output.innerHTML = 'Wrong Password. Please try again.';
			await new Promise(r => setTimeout(r, 750));
			password_output.style = 'color: black;'
    	}
    }catch (error){
    	console.error(error);
    	alert('Error')
    }
}
