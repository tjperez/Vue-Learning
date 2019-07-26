new Vue({
    el:"#app",
    data: {
        title: 'Beconming a Vue Ninja',
        wage: 15,
    },
    methods: {
        changeWage(amount){
            this.wage += amount
        },
    }
});