# 코드 풀이 및 설명

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
