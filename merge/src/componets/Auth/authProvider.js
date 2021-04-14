import React, { useEffect, useState, useContext } from "react";
import firebase from "firebase/app";
import { firebaseConfig } from "../../componets";

export const AuthContext = React.createContext();

export function useAuth() {
  let myCon = useContext(AuthContext);
  console.log(myCon);
  return myCon;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);

  function login() {
    console.log("Google Log in Auth");
    // Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(credential, token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
  }

  function logout() {
    return firebaseConfig.signOut();
  }

  useEffect(() => {
    const unsubscribe = firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };
  

  return (
    <AuthContext.Provider value={value}>
      {!pending && children}
    </AuthContext.Provider>
  );
}
