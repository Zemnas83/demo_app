<template>
  <div>
    <p>
        <NuxtLink to="/secret">Go to secret page</NuxtLink>
    </p>
    <button class="button" @click="signIn" v-if="!firebaseUser">Sign In</button>
    <button class="button" @click="signOut" v-if="firebaseUser">
      Sign Out
    </button>
    <div v-if="firebaseUser">
      <client-only>
        <pre>
          {{ firebaseUser }}
      </pre
        >
      </client-only>
    </div>
    <div v-else>User is signed out</div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const firebaseUser = useFirebaseUser();

const credentials = ref();

const signIn = async () => {
  const email = "fake@fake.com";
  const password = "fake123";
  credentials.value = await signInUser(email, password);
  // console.log("credentials:", credentials);
};

const signOut = async () => {
  credentials.value = await signOutUser();
};

onMounted(async () => {
  // const email = "fake@fake.com";
  // const password = "fake123";
  // const credentials = await createUser(email, password);
  // console.log('credentials:', credentials);
});
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
