import React, { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth, db, onAuthStateChanged } from "../firebase/firebase";
import { query, where, collection, getDocs } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const Context = ({ children }) => {

    const collectionUserRef = collection(db, "users");
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [userData, setUserData] = useState();

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try{
            const popup = await signInWithPopup(auth, provider);
            const user = popup.user;
            const querri = query(collectionUserRef, where("uid", "==", user.uid));
            const docs = await getDocs(querri);
            if (docs.docs.length === 0) {
            await addDoc(collectionUserRef, {
            uid: user?.uid,
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            authProvider: popup?.providerId,
          });
        }}catch(err){
            alert(err.message);
            console.log(err.message);
        }
    };

    const loginWithUserAndEmail = async (email, password) => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }catch (err) {
            alert(err.message);
            console.log(err.message);
        }
    };

    const registerWithEmailAndPassword = async (name, email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collectionUserRef, {
                uid: user.uid,
                name,
                providerId : "email/password",
                email: user.email,
            });
        } catch (err) {
            alert(err.message);
            console.log(err.message);
        }
    };

    const sendPasswordToUser = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("New password send to your email");
        } catch (err) {
            alert(err.message);
            console.log(err.message);
        }
    };

    const signOutUser = async () => {
        await signOut(auth);

    };

    const initialState = {
      signInWithGoogle: signInWithGoogle,
      loginWithUserAndEmail: loginWithUserAndEmail,
      registerWithEmailAndPassword: registerWithEmailAndPassword,
      sendPasswordToUser: sendPasswordToUser,
      signOutUser: signOutUser,
      user: user,
      userData: userData,
    };

    const userStateChanged = async () => {
        onAuthStateChanged(auth, async () => {
            if (user) {
                const querri = query(collectionUserRef, where ("uid","==", user?.uid));
                await onSnapshot(q, (doc) => {
                    setUserData(doc?.docs[0]?.data());
                });
                setUser(user);
            } else {
                setUser(null);
                navigate('/login')
            }
        });
    };

    useEffect(() => {
        userStateChanged();
        if (user || userData) {
            navigate("/");
        } else {
            navigate("/login");
        }
        return () => userStateChanged();
    }, []);



    return ( 
    <div>
        <AuthContext.Provider value={initialState}>
            {children}
        </AuthContext.Provider>
    </div> 
    );
};
 
export default Context;