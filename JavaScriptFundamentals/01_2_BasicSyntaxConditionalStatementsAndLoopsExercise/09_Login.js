function printIsUserLogged(input) {
  let username = input[0];
  let usernameReversed = "";

  for (let i = username.length - 1; i >= 0; i--) {
    usernameReversed += username[i];
  }

  let currentPassword = input[1];
  let index = 2;
  let onFourthTry = index + 3;
  let isBlocked = false;

  while (currentPassword !== usernameReversed) {
    if(index === onFourthTry) {
        isBlocked = true;
        break;
    }

    if (currentPassword !== usernameReversed) {
      console.log("Incorrect password. Try again.");
    }

    currentPassword = input[index];
    index++;
  }

  if (!isBlocked) {
    console.log(`User ${username} logged in.`);
  } else {
    console.log(`User ${username} blocked!`);
  }
}

printIsUserLogged(['momo','omom']);
