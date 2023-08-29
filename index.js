const logo  = document.getElementById('logo')

const form = document.forms['newsletter']
const email = form['email']
 function handleInputChange(){
const email = form['email']
localStorage.setItem('email', email.value)
alert('You have sucessfully subscribed to our newsletter')
 }


logo.addEventListener('click',changeBackground)
        
logo.addEventListener('mouseover',function(){
    this.style.background = 'purple'
})
 function changeBackground(){
        logo.style.width = '200%'
     }


let fname  = 'olawale paul john';
let s = fname.split(' ')
console.log(s)
console.log(s[0])