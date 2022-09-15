import app from "./firebase.js"
import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-Firestore.js'


export async function subscribeToHellfireClub(subscription) { //por ter uma await (linha 8)obrigatóriamente precisa retornar uma promce
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc (hellfireClubCollection, subscription) //await - é uma função acincrona
    return docRef.id
}
