if (sessionStorage.getItem('authenticated') !== 'true') {
    window.location.href = 'password/password.html';
}
		
window.addEventListener("DOMContentLoaded", function(){
	const test_page = document.getElementById('test-page');
  	test_page.click();
});


function buttontest() {
    alert("I don't think I need to say this but this is a button test. If you see this, the button works as expected.");
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";  
	}
	tablinks = document.getElementsByClassName("tab");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	try{
		document.getElementById(tabName).style.display = "block";  
	}
	catch (error){
		console.error("This tab's content doesn't exist");
	}
	evt.currentTarget.className += " active";
}
