//https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email: any, password: any) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  return credentials;
};

export const signInUser = async (email: any, password: any) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
    }

    firebaseUser.value = user;
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  console.log("Sign out", result);
  return result;
};
