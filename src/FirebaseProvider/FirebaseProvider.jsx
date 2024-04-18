import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/Firebase/FirebaseConfig";
import { TwitterAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(loading)

     //create user
     const createUser = ( email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
      }
      // update user profile
      const updateUserProfile = (name, photo)=>{
           return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: photo
          })
      }
    //sign in user
    //sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //sign out user
   
     //observe changes
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              setLoading(false); 
            } 
          });
          return () => unSubscribe();
    },[])
    // social auth provider
    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    } 
    // Github login
    const githubProvider = new GithubAuthProvider();
    const githubLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    } 
    // Twitter login
    const twitterProvider = new TwitterAuthProvider();
    const twitterLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, twitterProvider)
    }
    const logout = ()=>{
        setUser(null);
        signOut(auth)
    }
    const allValues = {
        createUser,
        loading,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logout,
        user,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;