const myApp = Vue.createApp({
    data(){
        return{
            num: Math.floor(Math.random()*100),
            guess: undefined,
            prevGuesses: "",
            remainingGuesses: 10,
            gameOver:false
        }
    },
    methods:{
        addGuess: function(){
            this.prevGuesses += `${this.guess} `
            this.remainingGuesses = 11 - this.prevGuesses.split(" ").length
            if(this.remainingGuesses == 0) this.gameOver = true
        },
        startGame: function(){
            this.num = Math.floor(Math.random()*100)
            this.guess = undefined
            this.prevGuesses = ""
            this.remainingGuesses = 10
            this.gameOver = false
        }
    }
})

myApp.mount("#wrapper")