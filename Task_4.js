function Devises() {
    this.destination = "to help human",
    this.powerSupply = "electrical network",
    this.power = function (watt){
    if (watt < 300) {
    console.log(`power is ${watt} watt, power supply is battery`)
    } else {
    console.log(`power is ${watt} watt, power supply is electrical network`)
    }
    }
    }
    
    function TableLamp(model) {
    this.price = 3000,
    this.name = model
    }
    
    function Compucter(model) {
    this.price = 93000,
    this.name = model
    }
    
    TableLamp.prototype = new Devises();
    Compucter.prototype = new Devises();
    
    const superMegaLamp = new TableLamp();
    const compCompucter = new Compucter();
    
    superMegaLamp.power(75);
    compCompucter.power(1600)