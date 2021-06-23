const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

//loginButton을 click하는 것을 감지 --> loginInput서 받은 value를 저장하는 것
//이름에 대한 제한은 브라우저의 기능을 사용할 수 있다. -->html input tag에서 설정할 수 있다.
//기본설정을 바꿔야 한다 <-- 콘솔에 남게끔
function onLoginSubmit(tomato) {
    tomato.preventDefault();
    const username = loginInput.value;
    console.log(tomato);
}

loginForm.addEventListener('submit' , onLoginSubmit);
//onLoginSubmit(info) 브라우저는 event를 확인하고 함수를 호출한다 하지만 함수 속에는 info가 존재한다. (매우 중요)