//MOVIE
class Movie {
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

     static getPg(movie)
    { 
       let moviePg=[]
        movie.forEach(element => {
            if(element.rating =="PG")
            moviePg.push(element)
        });
        return moviePg

    }
}
let newMovie=new Movie("Casino Royale","Eon Productions","PG-13");
let arr=[newMovie];
let PGMovie=Movie.getPg(arr);
console.log(PGMovie);


//CIRCLE

class Circle{
    constructor(radius,color)
    {
        this._radius=radius;
        this._color=color;
    }

    get radius(){
        return this._radius
    }
    set radius(value){
        this._radius =value

    }
    get color(){
        return this._color
    }
    set color(value){
        this._color=value
    }

    getArea(){
        return Math.PI*Math.pow(this._radius,2)
    }
    
    getCircum(){
        return 2*Math.PI*this._radius
    }

}
let circle1= new Circle(1,"Yellow")
console.log(circle1.getArea())
console.log(circle1.getCircum())


//PERSON DETAILS

class Person{
    constructor (firstName,lastName,age){
        this._firstName=firstName;
        this._lastName=lastName;
        this._age=age;
    }

    getDetails(){
        return [this._firstName,this._lastName,this._age]
    }
}

let myData= new Person("Sai Sandeep","D",22)
console.log(myData.getDetails())

//UBER

class Uber{
    constructor(totalKm,waitingTime=0)
    {
        this.totalKm=totalKm;
        this.waitingTime=waitingTime
    }
    calculateFare(){
        if(this.totalKm<=2)
        {
        return (30 + ' Rs')
        }
        else
        this.totalKm =this.totalKm-2
        return (30+(this.totalKm*4)+(this.waitingTime*2)+' Rs')

    }
}

let Ride1 =new Uber(2)
console.log(Ride1.calculateFare())

let Ride2 = new Uber(45,4)
console.log(Ride2.calculateFare())



