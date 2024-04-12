import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/Firebase/FirebaseConfig";

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    // console.log(user)

    //sign in user

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //create user
    const createUser = ( email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    // social provider
    const googleProvider = new GoogleAuthProvider();
    // google login
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    //observe changes
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
          });
    },[])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;