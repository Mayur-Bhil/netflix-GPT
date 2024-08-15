export const checkValidetData = (email,password) => {

    const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);

    if(!isEmailvalid) return "Email id is not valid";
    if(!isPassword) return "You have entered wrong password";

    return null;
}  
