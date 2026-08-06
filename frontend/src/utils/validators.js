export function validateLogin(form) {

    const errors = {};

    if (!form.email.trim()) {
        errors.email = "Email is required";
    }

    if (!form.password.trim()) {
        errors.password = "Password is required";
    }

    return errors;
}

export function validateRegister(form) {

    const errors = {};

    if (!form.full_name.trim()) {
        errors.full_name = "Full name is required";
    }

    if (!form.email.trim()) {
        errors.email = "Email is required";
    }

    if (form.password.length < 6) {
        errors.password = "Password must contain at least 6 characters";
    }

    return errors;
}