

let Globalstate = null;
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
         let keys = attrs[attr].value.split(".")
      // console.log(keys, "keys")
         keys.forEach((key)=> {
             val = val[key]
             // console.log(val)
         })
         
         
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



export default function render(view, state){
    // console.log("STATE", state)
    Globalstate = state;
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
