function editPassword(element) {
    element.style.display = 'none';
    let password = window.prompt('Password Please!', '');
    passWordCheck(element, password);

}

function passWordCheck(element, password) {
    let trial = 1;
    while (trial < 3) {
        if (!password)
            history.go(-1);
        if (password.toLowerCase() == "song") {
            alert('You Got it Right!');
            element.style.display = 'block';
            break;
        }
        trial += 1;
        var password =
            prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (password.toLowerCase()!="song" & trial ==3)
        history.go(-1);
    return " ";
}

export default editPassword;