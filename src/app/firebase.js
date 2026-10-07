// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAI, getGenerativeModel, GoogleAIBackend} from "firebase/ai";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaOocwSqo2JVI5Pfyw_no__RGY350yybY",
  authDomain: "aiprojectfortest-ecc16.firebaseapp.com",
  projectId: "aiprojectfortest-ecc16",
  storageBucket: "aiprojectfortest-ecc16.firebasestorage.app",
  messagingSenderId: "161356290403",
  appId: "1:161356290403:web:35eb3668423faad38e1b56",
  measurementId: "G-WBBNT3L9L5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const ai = getAI(app,{backend: new GoogleAIBackend()});
export const model = getGenerativeModel(ai, { model: "gemini-3-flash-preview" });

export default app;