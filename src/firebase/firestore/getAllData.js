import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDocument(col_name) {
    let col = collection(db, col_name)
    let result = null;
    let error = null;

    try {
        result = await getDocs(col);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
