/** SERVER-SIDE LOGIC */
module.exports = function (io) {
    let users = 0, EduardoMolina = 0, JohnDoe = 0, DimitriVegas = 0;

    io.on('connection', (socket) => {
        users++;
        io.emit('UpdateUsers', users);

        socket.on('EduardoMolina', function () {
            EduardoMolina++;
            io.emit('UpdateEduardoMolina', EduardoMolina);
        });

        socket.on('JohnDoe', function () {
            JohnDoe++;
            io.emit('UpdateJohnDoe', JohnDoe);
        });

        socket.on('DimitriVegas', function () {
            DimitriVegas++;
            io.emit('UpdateDimitriVegas', DimitriVegas);
        });

        socket.on('disconnect', function () {
            users--;
            io.emit('UpdateUsers', users);
        });
    })
}