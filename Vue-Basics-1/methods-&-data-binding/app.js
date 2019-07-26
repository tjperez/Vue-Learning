new Vue({
    el:"#app",
    //data property is an object which contains all the data to do with
    //this particular instance
    data: {
        title: 'Beconming a Vue Ninja',
        name: 'TJ',
        url: 'http://www.youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(time){
            //template string allow us to dynamically outport variables
            //within the string without concatenating
            return `Hello and good ${time}, ${this.name}`
        }
    }
});
