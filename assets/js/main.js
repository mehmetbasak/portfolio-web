// =========MENU SHOW Y HIDDEN========
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')


// ===MENU SHOW=====
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click',()=>{
     navMenu.classList.add('show-menu')   
    })
}

// //MENU HIDDEN
if(navClose){
    navClose.addEventListener('click',()=>{
     navMenu.classList.remove('show-menu')   
    })
}



// //=============REMOVE MENU MOBILE============
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))





// ==========ACCORDION SKILS===============
const skillsContent=document.getElementsByClassName('skills__content'),
        skillsHeader=document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i = 0; i<skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className ='skills__content skills__open'
    }
}

skillsHeader.forEach((eL)=>{
    eL.addEventListener('click', toggleSkills)
})



// =================QUALIFICATIONS TABS===================
const tabs=document.querySelectorAll('[data-target]'),
        tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target= document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach( tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})



// =================ACTIVE SERVICES MODAL===================
const modalViews=document.querySelectorAll('.services__modal'),
      modalBtns=document.querySelectorAll('.services__button'),
      modalCloses=document.querySelectorAll('.services__modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})


modalCloses.forEach((modalClose,i) => {
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView,i) => {
            modalView.classList.remove('active-modal')
        })
    })
})
