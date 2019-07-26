new Vue({
    el:"#app",
    data: {
        title: 'Beconming a Vue Ninja',
        showName: true,
        showAge: true
        
    },
    methods: {
        toggleName(){
            this.showName = !this.showName   
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    } 
});