import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Inicializa la app de Firebase (Firebase se encargará de mantener una única instancia)
const app = initializeApp(firebaseConfig);

// Exporta los servicios que necesites
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;