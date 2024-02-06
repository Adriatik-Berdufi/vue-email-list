const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            title: 'Mail generator',
        };
    },
    methods: {
       
    },
    
    mounted(){
        console.log('App montata');
        
    },
});
app.mount('#app');