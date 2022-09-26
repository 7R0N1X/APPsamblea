/** CLIENT-SIDE LOGIC */
socket = io();

socket.on("UpdateUsers", (n_users) => {
    document.getElementById("n-users").innerHTML = n_users;
});

socket.on("UpdateEduardoMolina", (n_votes) => {
    document.getElementById("VotesEduardoMolina").innerHTML = n_votes;
});

socket.on("UpdateJohnDoe", (n_votes) => {
    document.getElementById("VotesJohnDoe").innerHTML = n_votes;
});

socket.on("UpdateDimitriVegas", (n_votes) => {
    document.getElementById("VotesDimitriVegas").innerHTML = n_votes;
})