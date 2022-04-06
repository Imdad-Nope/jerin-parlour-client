import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import initializeFirebase from "../../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                // Update Name
                const newUser = { email, displayName: name }
                setUser(newUser);
                // Save users
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                const destination = location?.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                navigate(destination);
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // Google Sign In
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                console.log(error)
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // Save users in Database

    const saveUser = (email, displayName, method) => {
        const users = { email, displayName }
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then()
    }


    return {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError,
        signInWithGoogle
    }
};
export default useFirebase;