$(function () {
    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickname = $('#nickname');
    const $password = $('#password');

    $nickForm.submit(e => {
        e.preventDefault();
        if ($nickname.val() == '' || $password.val() == '') {
            $nickError.html(`
              <div class="alert alert-danger">
              Enter your username and password.
              </div>
              `);
        }
    });
});