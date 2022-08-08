import App from "./app.js"





const data = {
  name: "sk", 
  bottom: "this is a bottomless pit",
  persons: [
      {
        name: "sk",
        age: 23, 
        avatar: "2.png"      
      }, 
          {
        name: "mk",
        age: 25, 
        avatar: "2.png"      
      }, 
      
  
  
  ]
  

}
const talents = [
    {
       name: "React", 
       level: 2
    
    }, 
    {
       name: "Node", 
       level: 3
    
    },
    {
       name: "C", 
       level: 1
    
    },
    {
       name: "Zig", 
       level: 1
    
    },
    {
       name: "Rust", 
       level: 2
    
    },

]



let el = document.getElementById("app")
console.log(el)

// pass enough state for each component

let [state, r] = App('nav', {})

    state.update("talents",talents)
     state.update("data", data) 


console.log(state)
let mount_page =  r.defaultRoute()
   
mount_page(el, false)

const nav = r.route("nav")
const hero = r.route("proud")
const an = r.route("an")



// console.log(dom)

// r.render()


setTimeout(()=> {r.route("nav"); state.update("nav", {name: "sk"})}, 2000)
setTimeout(()=> {r.route("hero"); state.update("hero", {name: "mk"})}, 3000)
setTimeout(()=> {

     an(el, true); 
     
     
     }



, 4000)
// setTimeout(()=> r.route(['nav', 'hero', 'proud','an']), 5000)
