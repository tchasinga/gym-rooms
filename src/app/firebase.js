// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAI, getGenerativeModel, GoogleAIBackend} from "firebase/ai";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn5llMfrZceHDfcqUhMy3k-Jby-AsozNE",
  authDomain: "devservice-b0f39.firebaseapp.com",
  projectId: "devservice-b0f39",
  storageBucket: "devservice-b0f39.appspot.com",
  messagingSenderId: "542468977925",
  appId: "1:542468977925:web:81493ea8ac24460421b36c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const ai = getAI(app,{backend: new GoogleAIBackend()});
export const model = getGenerativeModel(ai, { model: "gemini-3-flash-preview" });

export default app;