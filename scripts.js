let lock = true
let version = "v1.0.0"

function buttonLink(link) {
    location.replace(link)
}

function showAdminPrompt(){
    if (sessionStorage.getItem('isAdmin') == 'true') {
        let adminPrompt = prompt("$System-Administrator: ");
        if (adminPrompt == "testCommand") {
            alert("testCommand Successful")
        }
    }
}

function alertMessage(message){
    alert(message);
}