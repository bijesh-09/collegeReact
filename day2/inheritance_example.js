class Vehicle{
    constructor(VehicleName){
        this.name = VehicleName
    }

    makesound(sound){
        console.log(`${this.name} makes ${sound}`)
    }
}


class bike extends Vehicle{
    constructor(color, VehicleName){
        
        super(VehicleName)
        this.color = color
        //super is used to access the constructor of the parent
        
          
    }
}

let nt = new bike("Orange", "MT 15" )
nt.makesound("Brm Brm Brm")




    
    
    

