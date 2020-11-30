const myApp = new Vue({
    el : '#app',
    data : {
        mails : []
    },

    mounted() {
        for(let i = 0; i <= 9; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risultato) => {
                    this.mails.push(risultato.data.response)
                })
        }
        
    },

}
)