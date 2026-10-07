// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaOocwSqo2JVI5Pfyw_no__RGY350yybY",
  authDomain: "aiprojectfortest-ecc16.firebaseapp.com",
  projectId: "aiprojectfortest-ecc16",
  storageBucket: "aiprojectfortest-ecc16.firebasestorage.app",
  messagingSenderId: "161356290403",
  appId: "1:161356290403:web:35eb3668423faad38e1b56",
  measurementId: "G-WBBNT3L9L5",
};

// Registered in Firebase console > App Check > Manage debug tokens
const APPCHECK_DEBUG_TOKEN = "649452E6-3AA8-44C6-A142-EC1ACF558848";

// reCAPTCHA Enterprise key ID (Google Cloud > Security > Fraud Defense > Keys)
const RECAPTCHA_ENTERPRISE_SITE_KEY = "6LekjeMtAAAAAEGfox0cS_S7kL1eozT1xLd_NqpL";

const isBrowser = typeof window !== "undefined";
const isFirstInit = getApps().length === 0;

// Initialize Firebase (reuse the existing app during hot reload)
const app = isFirstInit ? initializeApp(firebaseConfig) : getApp();

// AI Logic enforces App Check, so every AI request must carry an App Check token.
// The debug token must be set before initializeAppCheck runs.
if (isBrowser && isFirstInit) {
  if (process.env.NODE_ENV !== "production") {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = APPCHECK_DEBUG_TOKEN;
  }

  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_ENTERPRISE_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

// Analytics only works in the browser, not during server rendering
export const analytics = isBrowser
  ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
  : Promise.resolve(null);

const ai = getAI(app, { backend: new GoogleAIBackend() });
export const model = getGenerativeModel(ai, { model: "gemini-3-flash-preview" });

export default app;
