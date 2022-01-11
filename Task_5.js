class Devises {
    constructor(cost, current, voltage){
      this.cost = cost;
      this.current = current;
      this.voltage = voltage;
   }
    getPower(){
      console.log(`Power is ${+this.current * +this.voltage}`)
    }
    canIBuy(myIncome){
      if (myIncome >= +this.cost) {
        console.log("i can buy it")
        } else {
          console.log("i can't buy it")
        }
    }
  }
  class Lamp extends Devises {
    constructor(cost, current, voltage, electNetCon, colTemperature){
      super(cost, current, voltage); //--------------------
      this.electNetCon = electNetCon;
      this.colTemperature = colTemperature;
    }
    getInfo(){
      console.log("it is Lamp")
    }
  }
  class Comp extends Devises {
    constructor(cost, current, voltage, compDest, compOwner){
      super(cost, current, voltage); //--------------------
      this.compDest = compDest;
      this.compOwner = compOwner;
    }
    getInfo(){
      console.log("it is Comp")
    }
  }
  let lamp = new Lamp (1250, 5, 12, 'battery', "3000K");
  //console.log(lamp.electNetCon);
  //console.log(lamp.colTemperature);
  //lamp.getInfo();
  
  lamp.getPower();//-------------     -------------
  lamp.canIBuy(30000);//-------------     -------------
  //console.log(lamp.cost);
  //console.log(lamp.current);
  //console.log(lamp.voltage);
  
  let comp = new Comp(160000, 20, 220, 'for work', 'Timon');
  //console.log(comp.compDest);
  //console.log(comp.compOwner);
  comp.getPower();//-------------     -------------
  comp.canIBuy(30000);//-------------     -------------
  
  //console.log(comp.cost);
  //console.log(comp.current);
  //console.log(comp.voltage);
  
  
  