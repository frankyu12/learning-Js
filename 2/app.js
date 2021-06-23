const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

//loginButton을 click하는 것을 감지 --> loginInput서 받은 value를 저장하는 것
//이름에 대한 제한은 브라우저의 기능을 사용할 수 있다. -->html input tag에서 설정할 수 있다.
//기본설정을 바꿔야 한다 <-- 콘솔에 남게끔
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    //username을 기억하기: local storage
    localStorage.setItem(USERNAME_KEY , username);
    //로그인기능 hidden클래스 주시
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    paintGreetings(username);
    
}
//비어있는 h1에 택스트 넣어주기
//css hidden없애기
//간단하게 함수로 만들기
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}
//onLoginSubmit(info) 브라우저는 event를 확인하고 함수를 호출한다 하지만 함수 속에는 info가 존재한다. (매우 중요)
//브라우저는 기본적으로 실행하는 것이 있다.
//event.preventDefault();를 통해서 막아줄 수 있다.


//username이 DB에 있는가를 확인하는 작업
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //프로그램 실행
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit' , onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//clack.js

const clock = document.querySelector("h2#clock");

//DATE함수를 이용하고 시간 분 초를 추출한 후 2자리로 나타나도록 padstart를 줌
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${Minutes}:${Seconds}`;
}
//바로 실행하기
getClock()
//setinterval setInterval(sayHello, 5000);
//settimeouts setTimeout(sayHello, 5000);
setInterval(getClock, 1000); //1초 간격으로 
// string은 무조건 두자리로 만들기 --> 예쁘니까~



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//quotes.js

const quotes = [
    {
        quote:"긍정적인 생각, 유연한 사고"
        ,author: "Ralo"
    },
    {
        quote:"좀 제육이나 볶아온나"
        ,author: "Ralo"
    },
    {
        quote:"져놓고 좋은경기 했습니다??  지면 진거에요 그냥 *같은거에요"
        ,author: "Ralo"
    },
    {
        quote:"내가 누군가를 좋아한다는 사실이 그 사람에게 상처가 될 수도 있잖아요."
        ,author: "Ralo"
    },
    {
        quote:"남 탓을 할 수도 있다. 우린 남이니까"
        ,author: "Ralo"
    },
    {
        quote:"불편해? 불편하면 자세를 고쳐앉아"
        ,author: "Ralo"
    },
    {
        quote:"제 2원칙:제 1원칙을 고수해라"
        ,author: "Ralo"
    },
    {
        quote:"제 1원칙: 절대 손해보지 마라"
        ,author: "Ralo"
    },
    {
        quote:"나 커서 엄마 랄로가 될래요"
        ,author: "Ralo"
    },
    {
        quote:"못생긴 ... 담배 ... "
        ,author: "Ralo"
    }
]

//MathModel
const quote = document.querySelector('#quote > span:nth-child(1)')
const author = document.querySelector('#quote > span:nth-child(2)')

//길이만큼 랜덤으로 뽑고 내림해서 배열에서 선택 --> 랜덤 
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
//각 span에 텍스트 넣기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//background.js
//이미지 고르기 랜덤으로
const images =["1.jpg" , "2.jpg" , "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
//html에 이미지 추가하기
//img태그 만들기
const bgImage = document.createElement("img");
//src입력하기
bgImage.src = `${chosenImage}`;
//body에 추가하기
document.body.appendChild(bgImage)





















