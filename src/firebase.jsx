import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3kd8MoyscUG-Qomqp0qRXlFHC33FWuz4",
  authDomain: "comics-f8ea2.firebaseapp.com",
  projectId: "comics-f8ea2",
  storageBucket: "comics-f8ea2.appspot.com",
  messagingSenderId: "807267709834",
  appId: "1:807267709834:web:5b7c959612e7b43e4a4e73",
  measurementId: "G-59ED6TF8JQ",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
