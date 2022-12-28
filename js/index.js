// Your code goes here

const imgContent = 
document.querySelector('.img-content img')

imgContent.addEventListener('mouseover',
 () =>{
     imgContent.src = "https://media.istockphoto.com/id/1141968788/vector/concept-of-literary-art-with-letters-coming-out-of-a-pencil.jpg?s=612x612&w=0&k=20&c=30p9CxNFBNH-A7Xt-or1Nbz9RVfaqrLnRJFza9k16V4="               
 })

const text = 
document.querySelector('.text-content h2')

document.addEventListener('keydown', () =>{
text.innerHTML = "Ina Mari wan tagayna" ;
                
})

const introH2 = document.querySelector('.intro h2')

introH2.addEventListener('wheel', () => {
   introH2.textContent = 'ku so dhawoow fun bus' 
   console.log(" ku so dhawoow fun bus" );
})


const loading = document.querySelector('.footer .loading')

window.addEventListener('load', () => {
    loading.textContent = 'The page has finished loading'                
})

const resize = document.querySelector('.mount')

window.addEventListener('resize', () => {
    resize.textContent = 'waad yaraysay markaan'                
})

const container = document.getElementById("container");

container.addEventListener("scroll", function() {
  container.textContent = 'scrol box 1'
  console.log("Scroll Position: " +
   container.scrollTop);
});

const select = document.querySelector('.logo-heading')

select.addEventListener('select', () => {
console.log("Selected text: " +
 window.getSelection().toString());                  
})


const dd = document.querySelector(".logo-heading")

dd.addEventListener("dblclick", function() {
 console.log("Element was double-clicked!");
                  });







