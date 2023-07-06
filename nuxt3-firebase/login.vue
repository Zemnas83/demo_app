<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          :class="{ 'is-invalid': validationErrors.username }"
        />
        <div class="invalid-feedback">{{ validationErrors.username }}</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          :class="{ 'is-invalid': validationErrors.password }"
        />
        <div class="invalid-feedback">{{ validationErrors.password }}</div>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      validationErrors: {},
    };
  },
  methods: {
    login() {
      this.validationErrors = {};

      // Validate username and password
      if (!this.username) {
        this.validationErrors.username = "Username is required.";
      }
      if (!this.password) {
        this.validationErrors.password = "Password is required.";
      }

      // Perform login logic if there are no validation errors
      if (Object.keys(this.validationErrors).length === 0) {
        // Call your login API or perform necessary authentication logic here
        // For simplicity, we'll just log the username and password
        console.log("Username:", this.username);
        console.log("Password:", this.password);
      }
    },
  },
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>


