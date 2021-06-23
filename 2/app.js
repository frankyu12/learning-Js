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























