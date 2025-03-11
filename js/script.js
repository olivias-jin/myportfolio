document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".icon-track");
  const icons = Array.from(track.children);

  // 아이콘을 3배로 복제
  icons.forEach((icon) => {
    const clone1 = icon.cloneNode(true);
    track.appendChild(clone1);
  });

  icons.forEach((icon) => {
    const clone1 = icon.cloneNode(true);
    track.appendChild(clone1);
  });

  icons.forEach((icon) => {
    const clone1 = icon.cloneNode(true);
    track.appendChild(clone1);
  });

  let position = 0;
  const speed = 1.5;

  const trackWidth = track.scrollWidth / 2;
  function moveIcons() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    // 트랙 끝에 도달하면 즉시 시작 부분으로 이동
    if (position <= -trackWidth) {
      position += trackWidth;
    }

    requestAnimationFrame(moveIcons);
  }

  moveIcons();
});
