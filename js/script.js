function tabOpen(e, tabName) {
  let tabContent = document.getElementsByClassName('tabcont');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  document.getElementById(tabName).style.display = 'block';
  // 컨텐츠를 보여주기 위해서 사용.
  
  // 탭리스트에 클래스를 추가 하기 위함. 
  let tabL = document.getElementsByClassName("tablink");
  for (i = 0; i < tabL.length; i++) {
    tabL[i].className = tabL[i].className.replace(' active', '');
  }
  e.currentTarget.className += ' active';
}

let color = ['red', 'green', 'blue', 'orange', 'yellow'];
let i = 0;

function changeC() {
  // for (i=0; i<color.length; i++){
  //   let bg= document.getElementById('bgColor');
  //   bg.style.backgroundColor='color[i]';
  // }

  // 반복하는 if문 입니다.
  // if (i>=color.length){
  //   i = 0;
  // }

  let bg = document.getElementById('bgColor');
  bg.style.backgroundColor = color[i];
  i++
}

let tests = document.getElementById('test');
tests.addEventListener('click',function(){
  alert('hello');
}); 

let accor = document.getElementsByClassName('title');
for(i=0; i <accor.length; i++){
  accor[i].addEventListener('click', function(){
    this.classList.toggle('active');
    let next = this.nextElementSibling;
    if (next.style.maxHeight){
      next.style.maxHeight=null;
    } else {
      let act = document.querySelectorAll('.title.active');
      for (j=0; j<act.length; j++){
        act[j].classList.remove('active')
        act[j].nextElementSibling.style.maxHeight=null;
      }
      this.classList.add('active');
      next.style.maxHeight = '200px';
    }
  });
}
// window.onload = function () {
//   setInterval(changeC, 1000);
// }



/*버튼 0(Products)을 누르면  
0. 버튼0, 1 붙은 주황색 제거
0. 내용0,1,2 안보이게 하기
1. 버튼 0이 주황색으로 하이라이트가 되어야함
2. 내용 0이 보여야함*/

//함수 호출 반복문
// for(let i = 0; i < $('.tab-button').length; i++){
//   tabOpen(i); 
// }

// //함수에 보관
// function tabOpen(e){
//   $('.tab-button').eq(e).click(function(){
//       $('.tab-button').removeClass('active');
//       $('.tab-content').removeClass('show');
//       $('.tab-button').eq(e).addClass('active');
//       $('.tab-content').eq(e).addClass('show');
//   });
// }