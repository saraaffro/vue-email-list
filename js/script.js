/*
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/

const {createApp} = Vue;

createApp({
    data(){
        return {
            mailArray: [],
            mail: "",
        }
    },
    mounted(){
        for(let i = 0; i < 10; i++){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((email) => {
                this.email = email.data.response;
                this.mailArray.push(this.email);
                console.log(this.email);
                console.log(this.mailArray);
            })

        }
        
        
    }
}).mount("#app")