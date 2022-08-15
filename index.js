import App from "./app.js"

export class  PubSub{

    #subscribers  = {}



    subcribe(channel,fn){
        if(!this.#subscribers[channel]) {
           this.#subscribers[channel] = []
        }
        
        this.#subscribers[channel].push(fn)


        return () => {
           this.#subscribers[channel] = this.#subscribers[channel].filter(sfn => sfn != fn)
        }


    }

    notify(channel, ...data){
        if(this.#subscribers[channel]){
            this.#subscribers[channel].forEach(fn => {
                fn(...data)
            })
        }
    }
}









export default App;


// const data = {
//   name: "sk", 
//   bottom: "this is a bottomless pit",
//   persons: [
//       {
//         name: "sk",
//         age: 23, 
//         avatar: "2.png"      
//       }, 
//           {
//         name: "mk",
//         age: 25, 
//         avatar: "2.png"      
//       }, 
      
  
  
//   ]
  

// }
// const talents = [
//     {
//        name: "React", 
//        level: 2
    
//     }, 
//     {
//        name: "Node", 
//        level: 3
    
//     },
//     {
//        name: "C", 
//        level: 1
    
//     },
//     {
//        name: "Zig", 
//        level: 1
    
//     },
//     {
//        name: "Rust", 
//        level: 2
    
//     },

// ]



// let el = document.getElementById("app")
// console.log(el)


// // pass enough state for each component

// let [state, r] = App('nav_nav', {})

//     state.update("talents",talents)
//      state.update("data", data) 


// console.log(state)
// let mount_page =  r.defaultRoute()
   
// mount_page(el, false)

// // const nav = r.route("nav")
// // const hero = r.route("proud")
// const an = r.route("petalfiles_an")



// // console.log(dom)

// // r.render()


// // setTimeout(()=> {r.route("nav"); state.update("nav", {name: "sk"})}, 2000)
// // setTimeout(()=> {r.route("hero"); state.update("hero", {name: "mk"})}, 3000)
// setTimeout(()=> {

//      an(el, true); 
//      let inn = document.getElementById("input_")
//      let f = document.getElementById("myForm")
//        console.log(inn)
//       inn.addEventListener("change", (event)=> {
//          event.preventDefault()
//           console.log(event)
      
//       })
      
//       f.addEventListener("submit", (event)=> {
//           event.preventDefault()
//           console.log(event)
      
//       })
     
     
//      }



// , 4000)
// // setTimeout(()=> r.route(['nav', 'hero', 'proud','an']), 5000)
