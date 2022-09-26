/** CLIENT-SIDE LOGIC */
$(function () {
    const socket = io();

    $("#send_answer").click(function (e) {
        e.preventDefault();
        const answer = $('input[type="radio"]:checked').val();
        if (answer == "EduardoMolina") {
            socket.emit('EduardoMolina');
            alert('Your vote has been sent successfully.');
        } else if (answer == "JohnDoe") {
            socket.emit('JohnDoe');
            alert('Your vote has been sent successfully.');
        } else if (answer == "DimitriVegas") {
            socket.emit('DimitriVegas');
            alert('Your vote has been sent successfully.');
        }
    });
});