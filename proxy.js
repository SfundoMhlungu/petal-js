let deeply = {
    
     person: {
        name: "m", 
        talents: ['react', 'node'],
        colgs: [
              {
               name: "ndm", 
               talents: ['react'], 
               colgs: [
                      
                     
               ]  
              }, 
            
        
        ]
     
     }


}



let handler = {
    keys: [],
    get(target, key){
        this.keys.push(key)
      
        return new Proxy(obj => {
         
            return this.keys.reduce((acc, key)=> {
                return Reflect.get(acc, key)
            }), obj
        }, handler)
    }

}






