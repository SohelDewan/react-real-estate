import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/Firebase/FirebaseConfig";

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user)

     //create user
     const createUser = ( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
      }
    //sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
     //observe changes
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
          });
    },[])
    // social auth provider
    const googleProvider = new GoogleAuthProvider();
    // google login
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    } 

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