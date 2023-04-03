export class Player {
    name;
    age;
    shape;
    chestlenght;
    armslenght;
    legslenght;
    gluteslenght;

    constructor(name,age,shape) {
        this.name = name;
        this.age = age;
        this.shape = shape;

        if (this.shape === "T") {
            this.chestlenght = 90;
            this.armslenght = 30;
            this.legslenght = 50;
            this.gluteslenght = 60;
        } else if (this.shape === "M"){
            this.chestlenght = 100;
            this.armslenght = 40;
            this.legslenght = 60;
            this.gluteslenght = 70;
        } else if (this.shape === "L"){
            this.chestlenght = 110;
            this.armslenght = 50;
            this.legslenght = 60;
            this.gluteslenght = 80;
        }
    }

    get status () {
        return [this.chestlenght, this.armslenght, this.legslenght, this.gluteslenght]
    }
    }

