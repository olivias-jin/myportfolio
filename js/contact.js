document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const plane = document.querySelector(".plane-icon");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 막기

    plane.classList.add("plane-fly"); // 애니메이션 적용

    setTimeout(() => {
      form.submit(); // 1.5초 후 실제 메일 전송
    }, 1500);
  });
});
