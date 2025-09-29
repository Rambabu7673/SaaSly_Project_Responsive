 const menuBtn=document.getElementById("menu_btn")
    const mobileMenu=document.getElementById("mobile-menu ")
    menuBtn.addEventListener('click',()=>{
      mobileMenu.classList.toggle('hidden')
    })