export default function Mode(){
  const sunButton = document.querySelector('.sun-button')
  const moonButton = document.querySelector('.moon-button') 
  const html = document.querySelector('html')


  sunButton.addEventListener('click', function(){
    html.classList.add("dark")
    moonButton.classList.toggle("hidden")
    sunButton.classList.toggle("hidden")
  })
  moonButton.addEventListener('click', function(){
    html.classList.remove("dark")
    moonButton.classList.toggle("hidden")
    sunButton.classList.toggle("hidden")
  })
    
}

