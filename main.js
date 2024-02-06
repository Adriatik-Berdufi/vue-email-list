const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            title: 'Mail generator',
            mailList:[],
        };
    },
    methods: {
     
        getEmailAPI(i) {             
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((mail) => {
                    const risultato = mail.data.response;
                    this.mailList.push(risultato);
               });
                                  
        },
        getNeEmails() {for(let i = 0; i < 10; i++) {this.getEmailAPI(i);}},
    },
       
    mounted(){
        console.log('App montata');
    },
});
app.mount('#app');