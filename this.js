// console.log(this)


let Eleve = {
    name:'test',
    age:'test',

    printname: function(){
        console.log(this.name);
    },

    printage: function(){
        var self = this

        var demo = {
            demo: function(){
                console.log(this)
                console.log(this.age)
                console.log(self)
                console.log(self.age)
            }
        }
        demo.demo()
    },
    
}

// // EXemple 1 
// Eleve.printname();

// // EXemple 2 without bind
// var printname = Eleve.printname;
// printname()

// // EXemple 2 bind
// printname.bind(Eleve)()


// exemple self
Eleve.printage();





