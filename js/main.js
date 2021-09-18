'use strict'

{
  // トビラ
  $(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');
  $("#splash").delay(2000).fadeOut('slow',function(){
    $('body').addClass('appear');
  });
  // $('splashbg1').on('animationend',function(){
  // }); 
  });
  
  // ハンバーガーメニュー
  const open0 = document.getElementById('open0');
  const overlay = document.querySelector('.overlay');  /*IDを指定しておらず、CLASSを指定している時に使える*/
  const close0 = document.getElementById('close0');
 const link1 = document.querySelector('.link1'); 
 const link2 = document.querySelector('.link2'); 
 const link3 = document.querySelector('.link3'); 

  open0.addEventListener('click',() => {
    overlay.classList.add('show');
    open0.classList.add('hide');
  });

  close0.addEventListener('click',() => {
    overlay.classList.remove('show');
    open0.classList.remove('hide');
  });

  link1.addEventListener('click',() => {
    overlay.classList.remove('show');
    open0.classList.remove('hide');
  });
  link2.addEventListener('click',() => {
    overlay.classList.remove('show');
    open0.classList.remove('hide');
  });
  link3.addEventListener('click',() => {
    overlay.classList.remove('show');
    open0.classList.remove('hide');
  });

  // モーダルウィンドウ
  const open=document.getElementById('open');
  const close=document.getElementById('close');
  const modal=document.getElementById('modal');
  const mask=document.getElementById('mask');

  open.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click',()=>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click',()=>{
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    colose.click;
  });
  // カルーセル
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  // const ul = document.querySelector('ul');
  const ul = document.getElementById('carouselimg');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if(currentIndex === 0){
      prev.classList.add('hidden');
    }
    if(currentIndex === slides.length -1){
      next.classList.add('hidden');
    }
  }

  function moveSlides(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots(){
    for (let i=0; i<slides.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click',()=>{
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.getElementById('nav0').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots(){
    dots.forEach(dot=>{
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click',()=>{
    currentIndex++;
    updateDots();
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click',()=>{
    currentIndex--;
    updateDots();
    updateButtons();
    moveSlides();
  });

  window.addEventListener('resize',()=>{
    moveSlides();
  })
  // タブメニュー
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem=>{
    clickedItem.addEventListener('click',e=>{
      e.preventDefault();

      menuItems.forEach(item=>{
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content=>{
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
  // アコーディオン
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt=>{
    dt.addEventListener('click',()=>{
      dt.parentNode.classList.toggle('appear');
      dts.forEach(el=>{
        if (dt !== el){
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}