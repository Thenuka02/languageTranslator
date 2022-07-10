export const validator  = (values, fieldName) => {
  let errors = {};
  switch (fieldName) {
    case "userName":
      validateUserName(values.userName, errors);
      break;
    case "password":
      validatePassword(values.password, errors);
      break;
    default:
  }
  return errors;
};


function validateUserName(userName, errors) {
  let result = true;

  if (!userName) {
    errors.userName = "User Name is Required";
    result = false;
  } else {
     //errors.userName = "Invalid User Name ";
  }
  return result;
}

function validatePassword(pass, errors) {
  let result = true;

  if (!pass) {
    errors.password = "Password is Required";
    result = false;
  } else {
    var lower = /(?=.*[a-z])/;
    result = lower.test(pass);

    if (!result) {
      errors.password = "Password must contain at least one lower case letter.";
      result = false;
    } else if (pass.length < 8) {
      errors.password = "Your password has less than 8 characters.";
      result = false;
    }
  }

  return result;
}

