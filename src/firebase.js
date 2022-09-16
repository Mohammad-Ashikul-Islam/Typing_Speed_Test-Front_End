import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD_WQeDD7vr9S4oZwRtRLo0_rp6TAtMd4g",
  authDomain: "typing-speed-test-b60ff.firebaseapp.com",
  projectId: "typing-speed-test-b60ff",
  storageBucket: "typing-speed-test-b60ff.appspot.com",
  messagingSenderId: "201163677014",
  appId: "1:201163677014:web:78345007498d396b7f8af7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };