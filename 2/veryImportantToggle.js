const h1 = document.querySelector('.hello h1');

//className을 추가하면서 색 바꾸기
//실수를 줄이기 위해서는 변수로 선언하는 것이 안전
//toggle은 class의 이름에 특정한 이름이 있는지 알려줌
//만약에 있다면 제거해주고 없다면 classList에 만들어줌-->on&off의 기능임
function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click" , handleTitleClick);
