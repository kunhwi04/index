# 코드 풀이 및 설명

## styles.css 코드 설명

### 1. 전체 페이지 스타일 설정
```markdown
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
}

```
'body': 페이지 전체에 대한 스타일을 정의합니다.
'margin: 0;': 바깥쪽 여백을 없앱니다.
'padding: 0;': 안쪽 여백을 없앱니다.
'overflow: hidden;': 페이지 내용이 화면을 벗어나면 숨깁니다.

### 2. 헤더 스타일 설정

```markdown
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    color: #fff;
    padding: 1px 20px;
    z-index: 1000;
}

```
'position: fixed;': 헤더를 고정 위치에 유지합니다.
'top: 0; left: 0; right: 0;': 화면 상단에 꽉 차도록 배치합니다.
'display: flex;': 자식 요소들을 플렉스 컨테이너로 설정합니다.
'justify-content: space-between;': 자식 요소들을 좌우로 최대한 펼쳐 배치합니다.
'align-items: center;': 자식 요소들을 수직 가운데 정렬합니다.
'background-color: #000000; color: #fff;': 배경색과 텍스트 색상을 지정합니다.
'padding: 1px 20px;': 내부 여백을 추가합니다.
'z-index: 1000;': 다른 요소 위에 레이어를 생성하여 헤더가 다른 요소 위에 나타나도록 합니다.

### 3. 로고 스타일 설정

```markdown
.logo {
    display: flex;
    align-items: center;
}
.logo img {
    max-height: 40px;
}

```
'.logo': 로고를 감싸는 컨테이너의 스타일을 정의합니다.
'display: flex; align-items: center;': 로고 컨테이너를 플렉스 컨테이너로 설정하고, 내부 요소들을 수직 가운데 정렬합니다.
'.logo img': 로고 이미지에 대한 스타일을 정의합니다.
'max-height: 40px;': 로고 이미지의 최대 높이를 40px로 설정합니다.

### 4. 내비게이션 메뉴 스타일 설정

```markdown
nav ul {
    list-style: none;
    display: flex;
}
nav li {
    margin: 0 15px;
}
nav a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;
}
.right-button {
    font-size: 1.2em;
    cursor: pointer;
}

```
'nav ul': 내비게이션 메뉴의 목록에 대한 스타일을 정의합니다.
'list-style: none;': 목록 기호를 없앱니다.
'display: flex;': 내비게이션 메뉴를 플렉스 컨테이너로 설정합니다.
'nav li': 각 메뉴 항목에 대한 스타일을 정의합니다.
'margin: 0 15px;': 메뉴 항목 간의 여백을 설정합니다.
'nav a': 링크에 대한 스타일을 정의합니다.
'text-decoration: none;': 밑줄을 없앱니다.
'color: #fff; font-size: 1.2em;': 텍스트 색상과 글꼴 크기를 설정합니다.
'.right-button': 특정 버튼에 대한 스타일을 정의합니다.
'cursor: pointer;': 마우스가 버튼 위에 있을 때 포인터 커서로 변경합니다.

### 5. 박스 스타일 설정

```markdown
.box1, .box2, .box3 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.box1 {
    background-color: #FF5733;
}
.box2 {
    background-color: #33FF57;
}
.box3 {
    background-color: #5733FF;
}

```
'.box1, .box2, .box3': 박스 요소들의 공통 스타일을 정의합니다.
'height: 100vh;': 화면 높이의 100%를 차지합니다.
'display: flex;': 내부 요소들을 플렉스 컨테이너로 설정합니다.
'justify-content: center; align-items: center;': 내부 요소들을 수평 및 수직 가운데 정렬합니다.
'flex-direction: column;': 내부 요소들을 세로 방향으로 정렬합니다.
'.box1, .box2, .box3': 각 박스에 대한 추가적인 스타일을 정의합니다.
'background-color': 각 박스의 배경 색상을 지정합니다.

### 6. 섹션 내의 콘텐츠 스타일 설정

```markdown
.section .content {
    text-align: center;
}
.section h1 {
    font-size: 2em;
    margin: 0;
}
.section p {
    font-size: 1.2em;
}

```
'.section .content': 섹션 내의 콘텐츠에 대한 스타일을 정의합니다.
'text-align: center;': 텍스트를 가운데 정렬합니다.
'.section h1': 섹션 내의 제목에 대한 스타일을 정의합니다.
'font-size: 2em; margin: 0;': 글꼴 크기를 설정하고, 상하 여백을 없앱니다.
'.section p': 섹션 내의 단락에 대한 스타일을 정의합니다.
'font-size: 1.2em;': 글꼴 크기를 설정합니다.


## script.js 코드 설명

```markdown
const sections = document.querySelectorAll("section");
```
웹 페이지의 모든 섹션 요소를 선택

```markdown
const navLinks = document.querySelectorAll(".nav-link");
```
내비게이션 링크 요소를 선택

```markdown
navLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
```
각 내비게이션 링크에 클릭 이벤트 리스너 추가

```markdown
        event.preventDefault();
```
기본 동작 취소 (페이지 이동 방지)

```markdown
        scrollToSection(index);
    });
});
```
클릭한 링크에 해당하는 섹션으로 부드러운 스크롤

```markdown
let currentSectionIndex = 0;
```
현재 보여지는 섹션의 인덱스를 저장하는 변수

```markdown
window.addEventListener("wheel", (event) => {
```
윈도우에서의 휠 이벤트 처리

```markdown
    const deltaY = event.deltaY;
```
휠의 이동 방향을 얻어옴

```markdown
    scrollSection(deltaY);
});
```
섹션을 스크롤하는 함수 호출

```markdown
function scrollSection(deltaY) {
```
섹션을 스크롤하는 함수

```markdown
    if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
    }
```
휠이 아래로 돌아가고, 현재 섹션이 마지막 섹션보다 이전에 있으면 다음 섹션으로 이동

```markdown
    else if (deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
    }
```
휠이 위로 돌아가고, 현재 섹션이 첫 번째 섹션 이후에 있으면 이전 섹션으로 이동

```markdown
    scrollToSection(currentSectionIndex);
}
```
변경된 섹션으로 부드러운 스크롤

```markdown
function scrollToSection(index) {
```
특정 섹션으로 부드러운 스크롤하는 함수

```markdown
    const targetSection = sections[index];
```
대상이 되는 섹션을 얻어옴

```markdown
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
    });
}
```
섹션의 상단으로 부드러운 스크롤
