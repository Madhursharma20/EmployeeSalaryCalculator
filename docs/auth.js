// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase-config";

const auth = getAuth(app);

// Register Organization
export const registerOrg = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Organization Registered:", userCredential.user);
  } catch (error) {
    console.error("Error registering organization:", error.message);
  }
};

// Login Organization
export const loginOrg = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Organization Logged In:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};
