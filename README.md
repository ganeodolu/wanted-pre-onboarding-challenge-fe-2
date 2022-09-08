# Wanted Pre-onboarding Challenge FE2 (TypeScript)

## 구현 화면

- [배포 페이지](https://ganeodolu.github.io/wanted-pre-onboarding-challenge-fe-2/TodoApp.html)

|Class|Global|
|------------|-------------|
|<img src="https://user-images.githubusercontent.com/52700427/189060022-e976c9b1-2eb7-4769-af4c-32aa27787afc.png" width="300">|<img src="https://user-images.githubusercontent.com/52700427/189060212-e077496e-876e-4a9c-afb0-6f40026005aa.png" width="300">|


## 설치 환경설정 및 실행방법

```bash
// Install
npm install
or
yarn

// Build
npm run docs
or
yarn docs
```

## **📝** 구현 요구 사항 목록

### **필수 요구사항**

1. 첫번째 요구사항
- 아래의 Todo 앱 요구사항을 참고하여 필요한 데이터를 모두 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
    - 함수 및 클래스의 내부는 구현하지 않습니다.
- `JSDoc`을 활용해 문서화한다.
- `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

2. 두번째 요구사항
- 선언부뿐 아니라 내부도 구현한다.

### **Todo**

`Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}`

### **CREATE**

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

### **READ**

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

### **UPDATE**

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

### **DELETE**

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

### **Modeling (Shape)**

`Item {
  property(required),
  property(optional),
}`

## 사용한 프레임워크 및 라이브러리 설명

- JSDoc Boilerplate
- VSCode Extension : JSDoc Live Preview
    - JSDoc 실제 아웃풋과 차이는 있지만 바로 확인할 수 있어서 좋음

## 폴더 구조 설명
<img src="https://user-images.githubusercontent.com/52700427/188392661-b2f6e000-b890-492b-b173-2a81d40494ff.png" width="150">

- docs
    - index.html : 초기 페이지
    - TodoApp.html : class 단위 output
    - global.html : 전역 ouput
- src
    - index.js : JSDoc 작성 코드

## 과제 진행시 주안점

- JSDoc 사용해보기
- 적절한 타입 고민해보기

## 한계점 및 개선 사항 작성

- JSDoc 사용이 처음이라 강의와 다른 레포를 보면서 보완
