
/*intalar pacote firebase, instrucoes no firebase react hooks, colar initialize e const firebaseConfig*/
import { initializeApp } from "firebase/app";

//feito complementar
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIziSmflvwg90ObkZkKasRWHKM2IFweKA",
  authDomain: "rocketmovies-9c9d9.firebaseapp.com",
  projectId: "rocketmovies-9c9d9",
  storageBucket: "rocketmovies-9c9d9.appspot.com",
  messagingSenderId: "897746635992",
  appId: "1:897746635992:web:fb3f5b3b9bad58081d1bad"
};


const app = initializeApp(firebaseConfig);

//complementar
export const auth = getAuth(app);
//próx passo, ir até o componente de cadastrar