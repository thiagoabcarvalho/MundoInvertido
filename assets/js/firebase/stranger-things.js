import app from "./firebase/app.js" //importando o arquivo do firebase

import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToStrangerThings(subscription) {
    const db = getFirestore(app)
    const cadastrostCollection  = collection (db, 'cadastroST')
    const docRef = await addDoc (cadastrostCollection, subscription) //addDoc é uma função acincrona, ela retorna uma promece
    return docRef.id
     
}