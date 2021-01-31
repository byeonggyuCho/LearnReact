# react

## SPA

### 단점

- 하나의 번들이 너무 커진다. (sol: 코드스플리팅)
- 브라우저가 자바스크립트가 구동되지 않으면 UI를 볼 수 없다.
- 검색엔진에서 크롤링이 불가능하다. (sol:서버사이드랜더링)

## Router

어던 주소에 어떤 UI를 보여줄지 정한다.

- router를 이용해 탭 컴포넌트를 만들 수 있다.
- tab 버튼을 Link로 텝 컨텐츠 영역을 Route로 구분한다.

### BrowserRouter

HTML5의 history API를 사용하여 주소표시줄에 나오는 경로만 바꾸고 페이지는 다시 불러오지 않도록 한다.

### HashRouter

옛날에 사용하던 방식, 올드 브라우저에서도 동작한다.

### MemoyRouter

브라우저의 주소와 무관하며 임베디드 웹앱, 리액트 네이티브에서 사용한다.  
이 라우터를 사용할 경우 브라우저 주소표시줄의 경로가 변하지 않는다.

### StaticRouter

서버사이드 랜더링을 할 때 사용한다.

### Route

라우트를 정의할 때 사용한다.  
어떤 경로로 들어 왔을 때 어떤 컴포넌트를 보여줄 것이다라는 것을 정의한다.

### Link

사용한 Router의 주소만 바꿔준다.

### Switch

- 매칭되는 가장 첫번째 Route를 매칭한다.
- not found페이지를 연결할 때 유용하다.

- history.push()
- history.bakc()

### Prompt

페이지를 이탈방지를 할 때 사용한다.

### Redirect

history.push()를 사용할 수 있지만 컴포넌트로 동일한 작업을 할 수 있다.

### routeConfig

서브 라우트와 컴포넌트를 한번에 정의할 수 있다.

## REF

- [reactrouter](https://reactrouter.com/web/example/auth-workflow)
- [tab-component](https://reactrouter.com/web/example/animated-transitions)
