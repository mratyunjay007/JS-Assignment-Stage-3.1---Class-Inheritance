// import using require

// declare class


// export class using module.exports

// import Shape from './shape';

let  Shape=require('./shape');

module.exports= class Circle extends Shape{
    constructor(){
        super();
    }

    calculateArea(){
        console.log("Area of circle");

        return 3.14*5*5;
    }
}

