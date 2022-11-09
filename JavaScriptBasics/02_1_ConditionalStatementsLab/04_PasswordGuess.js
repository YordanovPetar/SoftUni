function isPasswordCorrect(input) {
  let correctPassword = "s3cr3t!P@ssw0rd";
  let enteredPassword = input[0];

  enteredPassword === correctPassword ? console.log("Welcome") : console.log("Wrong password!");
}

isPasswordCorrect(["qwerty"]);
