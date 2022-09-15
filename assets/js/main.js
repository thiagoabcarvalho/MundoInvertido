import { subscribeToHellfireClub } from "./firebase/hellfire-club.js"

(function main(){
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
    //subscribetoHellfireClub(subscription)

    const subscriptionid = await subscribeToHellfireClub(subscription) 
    alert('Inscrição ${id} adcionada com sucesso!')
})

})()


//mudança do tema light/dark
/* 
function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}
 */

