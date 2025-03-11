document.addEventListener("DOMContentLoaded", () => {
  const helloText = document.querySelector(".hello");
  const body = document.body;

  setTimeout(() => {
    helloText.style.opacity = "0"; // Hello 숨기기
    setTimeout(() => {
      helloText.style.display = "none"; // 완전히 숨기기
      body.classList.add("show-content"); // 전체 콘텐츠 나타나기
    }, 1000); // 1초 후 main, footer 등장
  }, 2500); // 2.5초 동안 Hello 표시
});
