import {views} from "./temp.js"
import Render from "./Vdom.js"

const isArray = (val) => Array.isArray(val)



export default function app(Route = "",  state = {}){
        let arr = false;
       
        
       if(isArray(Route)){
          arr = true
         Route.forEach((view, i)=> {
        
               if(!views[view]) throw new Error(`route ${view} does not exist`)
        
         })
        
       
       }else {
          if(typeof Route !== "string"){
          
             throw new Error("expected route to a be a string or array")
          }
           
         if(!views[Route]) throw new Error(`route: ${Route} does not exist`)
         
         
       
       }


     // console.log(views[defaultRoute])
     return [{
             update: (id , newState) => {
                 console.log("UPDATING STATE")
               if(state[id]){
                 Object.assign(state[id], newState)
               }else{
                  state[id] = newState
                   
               }
                
                console.log(state)
             
             
             }
     
     }, {
        
        defaultRoute : (update = undefined) => {
               let $views
               let $v
               if(update){
                arr = isArray(update)
                Route = update
                // probably check for errors
               
               }
                 
                function mount(el, removeC){
                      
                     if(removeC){
                          while (el.firstChild) {
                              el.removeChild(el.lastChild);
                         }
                     
                     }
                     
                         $v.forEach((el_)=> {
                               // console.log(el_)
                                 if(isArray(el_)){
                                  // el.appendChild(el_)
                                   el_.forEach(c => el.appendChild(c))
                                 }
                                 else{
                                  el.appendChild(el_)
                                 }
                               
                         
                         })
                                          
                   
                   }
                
                // first render
               if(arr){
                    $v = [] 
                   Route.forEach((v, i)=> {
                         $v.push(Render(views[v].app, state))
                    
               
                    })
                    return mount
               }else{
               
                   $v =  Render(views[Route].app, state)
                   
                   return mount
               
               }
        
        
        } ,
        
        route : function (RouteTo){
             return this.defaultRoute(RouteTo)
        
            
        
        }   
          
     
     }]

}


//app("hero")



// app API 

// accept state object, with all required state
// on route check if required state is present 

// on state change: 
    // copy relevant associated views
    // diff, there's  really no need to diff loop's 
    // at best we can check if each loop is affected and rerender it


// for current VDOM:

// add new children to a specific parent
// remove an element from a specific parent
