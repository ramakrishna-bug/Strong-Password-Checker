function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strengthText");

    let strength = 0;

    // Conditions
    const length = password.length >= 8;
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    update("length", length);
    update("upper", upper);
    update("lower", lower);
    update("number", number);
    update("special", special);

    strength = [length, upper, lower, number, special].filter(Boolean).length;

    if (strength <= 2) {
        strengthText.textContent = "Weak Password ❌";
        strengthText.style.color = "red";
    } else if (strength <= 4) {
        strengthText.textContent = "Medium Password ⚠️";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strong Password ✅";
        strengthText.style.color = "green";
    }
}

function update(id, valid) {
    const element = document.getElementById(id);
    element.style.color = valid ? "green" : "red";
}
