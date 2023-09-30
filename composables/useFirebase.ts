import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


export const createUser = async (email: string, password: string) => {
        const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return credentials;
}

export const signInUser = async (email :string, password:string) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return credentials
}
export const signOutUser = async () => {
    const auth = getAuth();
    const result =  await auth.signOut();
    return result;
    // return credentials
}

export const initUser = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)
        } else {
            // User is signed out
            // ...
        }
    });
}
