const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            title: 'Mail generator',
            mailList:[],
            nr:0,
        };
    },
    methods: {
     
        getEmailAPI() {             
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((mail) => {
                    const risultato = mail.data.response;
                    this.mailList.push(risultato);   
               });                      
        },
        getNrOfEEmails() {for(let i = 0; i < this.nr; i++){
            this.getEmailAPI();
            this.mailList = [];
        }
        },
    },
       
    mounted(){
        console.log('App montata');
    },
});
app.mount('#app');