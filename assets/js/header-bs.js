export default function(){
  // Close menu when anchor is clicked
  let closeCollapse = document.querySelectorAll('.js-closeCollapse');
  let target = document.querySelector('[data-bs-target="#navbarNav"]');

  closeCollapse.forEach((item)=>{
    item.addEventListener('click', ()=>{
      target.click();
    })
  })
}