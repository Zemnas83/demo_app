<template>
  <title>Registration Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 400px;
      margin: 100px auto;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }

    h2 {
      text-align: center;
      color: #333;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      background-color: #4caf50;
      color: #fff;
      border: none;
      padding: 12px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      width: 100%;
    }

    input[type="submit"]:hover {
      background-color: #45a049;
    }

    .error-message {
      color: red;
      margin-top: 10px;
    }
  </style>
  <script>
    function validateForm() {
      var email = document.forms["registrationForm"]["email"].value;
      var password = document.forms["registrationForm"]["password"].value;
      var confirmPassword =
        document.forms["registrationForm"]["confirmPassword"].value;
      var errorDiv = document.getElementById("error");

      if (email === "") {
        errorDiv.innerHTML = "Email is required";
        return false;
      }

      if (password === "") {
        errorDiv.innerHTML = "Password is required";
        return false;
      }

      if (password !== confirmPassword) {
        errorDiv.innerHTML = "Passwords do not match";
        return false;
      }

      // Add additional validation logic here, such as checking email format or password strength

      return true;
    }
  </script>
  <div class="container">
    <h2>Registration</h2>
    <form name="registrationForm" onsubmit="return validateForm()">
      <input type="text" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required />
      <input type="submit" value="Register" />
      <div id="error" class="error-message"></div>
    </form>
  </div>
</template>
