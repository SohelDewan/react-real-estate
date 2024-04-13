import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/Firebase/FirebaseConfig";
import { TwitterAuthProvider } from "firebase/auth/cordova";

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
    //sign out user
    const logout = ()=>{
        setUser(null);
        signOut(auth)
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
    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    } 
    // Github login
    const githubProvider = new GithubAuthProvider();
    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    } 
    // Twitter login
    const twitterProvider = new TwitterAuthProvider();
    const twitterLogin = ()=>{
        return signInWithPopup(auth, twitterProvider)
    }
    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logout,
        user,
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;