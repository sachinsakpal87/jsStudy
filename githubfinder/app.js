let gitHub = new GitHub();
let ui = new UI();
// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listner
searchUser.addEventListener('keyup',(e)=>{
    
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call

        gitHub.getUser(userText).then((data) => {
            if(data.profile.message === 'Not Found'){
                // Show alert
                ui.showAlert('User not found','alert alert-danger');
                // ui.clearProfile();
            } else{
                console.log(data.repos);
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
        
    }else{
        ui.clearProfile();
    }
})