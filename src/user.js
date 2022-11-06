const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutBtn = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 3. 첫 방문객에게 USERNAME_KEY를 생성해준다.
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// 4. 로그인을 환영한다.
function paintGreetings(username) {
  greeting.innerText = `반갑습니다 ${username} 님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

// 5. 로그아웃 수행
function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

// 1. USERNAME_KEY 를 가지고 있는지 첫번쨰로 확인
const saveUsername = localStorage.getItem(USERNAME_KEY);
logoutBtn.addEventListener("click", onLogoutClick);

if(saveUsername === null) {
  // 2-1. USERNAME_KEY 가 없으면 생성하러 가기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
}else {
  // 2-2. 있다면 환영인사.
  paintGreetings(saveUsername);
}