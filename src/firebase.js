import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDg_BwiAiqULzI5KUMFbRXyHiogftFAndI",
  authDomain: "app-a1c06.firebaseapp.com",
  projectId: "app-a1c06",
  storageBucket: "app-a1c06.appspot.com",
  messagingSenderId: "575401570469",
  appId: "1:575401570469:web:bdd007d27ed0c3c4891d4c",
  databaseUrl: "https://app-a1c06-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
