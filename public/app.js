const button=document.querySelector("#refresh")
const path="https://type.fit/api/quotes"
const content=document.querySelector("#content")
const Name=document.querySelector("#name")
const logo=document.querySelector("#logo")

fetch(path)
    .then((data)=>data.json())
    .then((data)=>{
     
     var index=Math.floor(Math.random()*(1643))
     content.innerHTML=data[index].text
     
     Name.innerHTML="~"+data[index].author
    })
button.addEventListener('click',()=>{
    fetch(path)
    .then((data)=>data.json())
    .then((data)=>{
     
     var index=Math.floor(Math.random()*(1643))
     content.innerHTML=data[index].text
     
     Name.innerHTML="~"+data[index].author
    })
})
logo.addEventListener('click',()=>{
    const tweet=`https://twitter.com/intent/tweet?text=${content.innerHTML}`
    window.open(tweet)
})