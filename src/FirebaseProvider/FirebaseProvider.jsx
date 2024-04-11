import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../components/Firebase/FirebaseConfig";

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    //create user
    const createUser = ( email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const allValues = {
        createUser,
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;