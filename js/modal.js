document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");
  const openButtons = document.querySelectorAll(".btn"); // 'View Details' 버튼

  if (!modal || !modalBody || !closeBtn) {
    console.error("모달 요소를 찾을 수 없습니다.");
    return;
  }

  console.log("모달 초기 상태:", window.getComputedStyle(modal).display); // 현재 모달 상태 확인

  const projectDetails = {
    Pokedex: `
    <h1>Pokedex</h1>
      <div class="Link">
            <a href="https://oliviasjin-pokemon.netlify.app/" target="_blank" class="link-box">Live App</a>
            <a href="https://github.com/olivias-jin/pokemonRepository.git" target="_blank"
                class="link-box">Repository</a>
        </div>
        <div>
            <h3>Project Overview</h3>
            <p>This is a a small web application with HTML, CSS, and JavaScript that loads data from an external API and
                enables the viewing of data points in detail.</p>

            <a href=" https://pokeapi.co/docs/v2" target="_blank">Pokemon API</a>


            <h3>Technologies Used</h3>
            <div class="tech-container">
                <span class="tech-box">JavaScript</span>
                <span class="tech-box">Bootstrap</span>
                <span class="tech-box">CSS</span>
                <span class="tech-box">HTML</span>
                <span class="tech-box">Prettier</span>
            </div>

            <h3>Page Views</h3>
            <a href="#">
                <img src="img/project/pokedex.png" class="zoom-img">
                <img src="img/project/pokedex1.png" class="zoom-img">
            </a>
        </div>`,

    MovieHive: `
          <h1>Full Stack Web App (React)</h1>
          <div class="Link">
              <a href="https://myflix-movies-oj.netlify.app/" target="_blank" class="link-box">Live App</a>
              <a href="https://github.com/olivias-jin/myFlix-client.git" target="_blank" class="link-box">Frontend Repository</a>
              <a href="https://github.com/olivias-jin/movie_api.git" target="_blank" class="link-box">Backend Repository</a>
              <a href="moviehive_case.html" role="menuitem" class="link-box">Case Study</a>
          </div>
          <h3>Project Overview</h3>
          <p>This is the front-end application of the MovieBaseAPI project. This is a demo web application built
              with React that allows users to browse, view details, and manage favorite movies.</p>
          <h3>Technologies Used</h3>
          <div class="tech-container">
              <span class="tech-box">JavaScript</span>
              <span class="tech-box">Mongoose</span>
              <span class="tech-box">MongoDB</span>
              <span class="tech-box">Heroku</span>
              <span class="tech-box">Netlify</span>
              <span class="tech-box">React</span>
              <span class="tech-box">JSON Web Token</span>
              <span class="tech-box">Bootstrap</span>
              <span class="tech-box">CSS</span>
              <span class="tech-box">HTML</span>
              <span class="tech-box">Prettier</span>
          </div>
          <h3>Page Views</h3>
          <div class="image-container">
              <img src="img/project/moviehive.png" class="zoom-img">
              <img src="img/project/moviehive4.png" class="zoom-img">
              <img src="img/project/moviehive3.png" class="zoom-img">
              <img src="img/project/moviehive5.png" class="zoom-img">
              <img src="img/project/moviehive2.png" class="zoom-img">
              <img src="img/project/moviehive1.png" class="zoom-img">
          </div>
      `,

    "Chit Chat Talk": ` 
    <h1>PWA: Mobile Chat App (React)</h1>
        <div class="Link">
            <a href="https://github.com/olivias-jin/chat-app.git" target="_blank" class="link-box">Repository</a>
        </div>

        <div>
            <h3>Project Overview</h3>
            <p>This is a a small web application with HTML, CSS, and JavaScript that loads data from an external API and
                enables the viewing of data points in detail.</p>



            <h3>Technologies Used</h3>
            <div class="tech-container">
                <span class="tech-box">JavaScript</span>
                <span class="tech-box">Bootstrap</span>
                <span class="tech-box">CSS</span>
                <span class="tech-box">HTML</span>
                <span class="tech-box">Prettier</span>
                <span class="tech-box">AsyncStorage</span>
                <span class="tech-box">Firebase Authentication</span>
                <span class="tech-box">Expo</span>
                <span class="tech-box">Node.js</span>
                <span class="tech-box">JSON</span>
                <span class="tech-box">Firebase</span>
                <span class="tech-box">React Native</span>
            </div>

            <h3>Page Views</h3>
            <a href="#">
                <img src="img/project/chat.png" class="zoom-img">
                <img src="img/project/chat4.png" class="zoom-img">
                <img src="img/project/chat1.png" class="zoom-img">
                <img src="img/project/chat3.png" class="zoom-img">
                <img src="img/project/chat5.png" class="zoom-img">

            </a>
        </div>
      `,

    "Meet App": `<h1>React Native App: Meet App</h1>
        <div class="Link">
            <a href="https://olivias-jin.github.io/meet/" target="_blank" class="link-box">Live App</a>
            <a href="https://github.com/olivias-jin/meet.git" target="_blank" class="link-box">Repository</a>
        </div>

        <div>
            <h3>Project Overview</h3>
            <p>This is Event application built with Progressive Web application (PWA) and it uses Google Calendar
                API to fetch upcoming events.</p>

            <h3>Technologies Used</h3>
            <div class="tech-container">
                <span class="tech-box">JavaScript</span>
                <span class="tech-box">React</span>
                <span class="tech-box">Recharts</span>
                <span class="tech-box">AWS Lambda</span>
                <span class="tech-box">Google Calendar API</span>
                <span class="tech-box">Jest</span>
                <span class="tech-box">Jest-Cucumber</span>
                <span class="tech-box">Puppeteer</span>
                <span class="tech-box">Atatus </span>
                <span class="tech-box">React</span>
                <span class="tech-box">CSS</span>
                <span class="tech-box">HTML</span>
                <span class="tech-box">Prettier</span>
            </div>

            <h3>Page Views</h3>
            <a href="#">
                <img src="img/project/meetapp.png" class="zoom-img">
                <img src="img/project/meetapp1.png" class="zoom-img">
            </a>
        </div>
      `,
    "Web App": ` <h1>Full-Stack Web App (Angular)</h1>
        <div class="Link">
            <a href="https://oliviasjin-pokemon.netlify.app/" target="_blank" class="link-box">Live App</a>
            <a href="https://github.com/olivias-jin/myFlix-Angular-client.git" target="_blank" class="link-box">Frontend
                Repository</a>
            <a href="https://github.com/olivias-jin/movie_api.git" target="_blank" class="link-box">Backend
                Repository</a>
        </div>

        <div>
            <h3>Project Overview</h3>
            <p>This is Angular applocation of the MovieBaseAPI, a responsive web application built using Angular.
                This app allows users to browse movies, register an account, log in, and manage their profile.</p>



            <h3>Technologies Used</h3>
            <div class="tech-container">
                <span class="tech-box">Angular</span>
                <span class="tech-box">TypeScript</span>
                <span class="tech-box">TypeDoc</span>
                <span class="tech-box">JSDoc</span>
                <span class="tech-box">SCSS</span>
                <span class="tech-box">HTML</span>
                <span class="tech-box">Express</span>
                <span class="tech-box">JavaScript - Backend
                </span>
                <span class="tech-box">Mongoose - Backend </span>
                <span class="tech-box">Redux - Backend</span>
                <span class="tech-box">Parcel - Backend</span>
                <span class="tech-box">JSON Web Token - Backend</span>
                <span class="tech-box">MongoDB - Backend</span>
                <span class="tech-box">Heroku - Backend</span>
            </div>

            <h3>Page Views</h3>
            <a href="#">
                <img src="img/project/angular.png" class="zoom-img">
                <img src="img/project/angular1.png" class="zoom-img">
                <img src="img/project/angular2.png" class="zoom-img">
                <img src="img/project/angular3.png" class="zoom-img">
                <img src="img/project/angular4.png" class="zoom-img">

            </a>
        </div>`,
  };

  // 초기 모달 상태를 닫음
  modal.style.display = "none";

  // 각 버튼에 클릭 이벤트 추가
  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // 기본 링크 이동 막기

      // 클릭한 프로젝트 카드 찾기
      const projectCard = button.closest(".project-card");
      if (!projectCard) return;

      const projectName = projectCard.querySelector("h3")?.innerText.trim(); // 프로젝트 제목 가져오기

      // 해당 프로젝트에 맞는 상세 내용 삽입
      modalBody.innerHTML =
        projectDetails[projectName] || `<p>No details available.</p>`;

      console.log(`'${projectName}' 모달이 열립니다.`); // 디버깅 로그

      // 모달 표시
      modal.style.display = "flex";
    });
  });

  // 모달 닫기 기능 추가
  closeBtn.addEventListener("click", () => {
    console.log("모달 닫기 버튼 클릭");
    modal.style.display = "none";
  });

  // 모달 바깥을 클릭하면 닫기
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      console.log("모달 바깥 클릭으로 닫기");
      modal.style.display = "none";
    }
  });
});
