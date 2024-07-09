const nav=document.querySelector('.navs');
const bar=document.querySelector('#bar');
const close=document.querySelector('#close-button');
 
if(bar){
bar.addEventListener('click',()=>{
   nav.classList.add('active');
})}

if(close){
    close.addEventListener('click',()=>{
       nav.classList.remove('active');
    })}
