
import { subscribeToStrangerThings } from "./firebase/stranger-things.js"


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    //salvar no banco de dados!
    const subscriptionid = await subscribeToStrangerThings(subscription) 
    console.log('inscrito com sucesso: ${subscriptionid}')
} ) 


//mudança do tema light/dark
/* 
function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}
 */

