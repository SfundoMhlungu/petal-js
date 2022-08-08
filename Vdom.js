
function get_(obj, string, defaultValue){
   const parts = string.split(/[\]\[\.]/).filter((x)=> x);
   
   let attempt = obj;
   
   for(let part of parts){
   if(attempt == null || attempt[part] === undefined) return defaultValue;
   attempt = attempt[part];
   
   }
   return attempt;   

}




let Globalstate = null;
let functions = null;
let prevNode = null;
let loop = false;
let justLooped = false;
function createElement(node){
   // console.log("CREATE", node)
  if(node.type === "loop"){
  
    let val = Globalstate
    let keys = node.target.split(".");
    if(!keys){
       throw new SyntaxError(`loop at ${loc.line}:${loc.column} expected an existing target of ${node.target} which is an array`)
    }
    
     keys.forEach((key)=> {
             val = val[key]
             // console.log(val)
    })
    
    if(!Array.isArray(val)) {
      throw new SyntaxError(`expected ${node.target} to be an Array but got ${typeof val}`)
    }
    
    loop = true;
    justLooped = true;
      for(let i =0; i < val.length; i++){
         // if(obj === undefined) return;
         Globalstate[node.property] = val[i]
         // console.log(Globalstate)    
        node && node.children && node.children.map(createElement)
      .forEach(prevNode.appendChild.bind(prevNode))
    
    }
    
 
    // console.log(node)
    loop = false
    
  }


   if(node.type === "element"){
   
    const p = document.createElement(node.node)
    if(!loop){
      prevNode = p
    }
    
   //  console.log(node)
   if(node.attrs){

      SetAttribs(p, node.attrs)
   }
   node && node.children && node.children.map(createElement)
    .forEach(p.appendChild.bind(p))
    
    
    return p
   
 }
   else{
       if(node.inState){
         let val = Globalstate
         let keys = node.value.split(".")
             keys.forEach((key)=> {
             val = val[key]
             // console.log(val)
            })
           return document.createTextNode(val) 
       }
   
      // console.log(node)
   
      return document.createTextNode(node.value)
   
   }


}





function SetAttribs(target, attrs){
   let val = Globalstate;
   Object.keys(attrs).forEach((attr)=> {
      // console.log(typeof attrs[attr])
      if(typeof attrs[attr] === "object"){
         // console.log("ATTR IS OBJECT ")
         //  console.log(attrs[attr])
         // console.log(typeof attr)
         if(attr !== "onclick" && attr !== "onchange"){
       
            let keys = attrs[attr].value.split(".")
         // console.log(keys, "keys")
            keys.forEach((key)=> {
               val = val[key]
               // console.log(val)
            })
         }else{
           
             
              let composedArgs =  ``
             if(attrs[attr].value.startsWith("#")){
                // console.log("in state func")
                const str = attrs[attr].value
                let args = str.slice(str.indexOf("("))
                .replace(")", "").replace("(", "").split(",") 
                
                 // get real vals from the obj and pass them to onclick
                args.forEach((arg, i)=> {
                   if(i === args.length-1){
                          composedArgs += `${arg}`
                   }else{
                      composedArgs += `${arg},`
                   }
               
                })
                 console.log(composedArgs, "composed args")
           
                
                 
             // functions.print("HELLLO WORLD")
             if(attr === "onclick"){
                   // console.log(functions)
                     function encap(){
                            const fns = functions
                             let id = str.split("#").pop().split("(")[0]
                         
                         return function() {
                             //  console.log(id, "ID")
                             // console.log(fns[`${id}`])
                          
                            fns[id]("hellloooooooooooooooooooooo cassiddooooooooo")
                              
                           // `${fns.id("now i need to figure out how to pass arguments")}`
                        }
                  }
                 
                 
                 target.addEventListener("click", encap())
             
             }else{
                  return
             
             }
            // target.setAttribute(attr, `${functions[id]}`)
             
            return 
                
                
             }else{
                // normal function
                console.log("normal function", attrs[attr])
                val = attrs[attr].value
             
             }
             
             
         
         }
      
         
         
         // console.log(attrs[attr],"THIS IS THE VAL I GOT", val)
         
         
         
         target.setAttribute(attr, val)
         
         return
       
      
      }
      
    target.setAttribute(attr, attrs[attr])


   })


}

function pluckundefined(node){
      // console.log(node.nodeValue)
      // console.dir(node, {depth: null})
    if(node.lastChild.nodeValue === "undefined"){
      node.removeChild(node.lastChild);
      return;
    }
    
    pluckundefined(node.lastChild)

}



export default function render(view, state, fns){
    // console.log("STATE", state)
    console.log(fns)
    Globalstate = state;
    functions = fns;
    let view_ = []
     view.map((node, i)=> {
       if(node.root){
         const p = createElement(node.root)
         if(justLooped){
           // console.log(p.lastChild)
           pluckundefined(p)
           justLooped = false;
         }
         view_.push(p)
       
       }else(
           view_.push(createElement(node))
       
       )
    
    
    })




   //  root.appendChild(view_)
   // view_.forEach((el)=> {

   //        root.appendChild(el)

   // })
   
   
   return view_


}
