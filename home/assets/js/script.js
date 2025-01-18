
window.onload = function () {
  let page = window.location.pathname;
  let footerElement = document.getElementById('timeer');
  
  if (page.includes("home")) {
    alternarLogo(); // Começa a alternar as imagens
  } 
  if(page.includes("questao1")){
    iniciarCronometro(20,footerElement,"question1");
    adicionarListeners("questao1");
  }
  if(page.includes("questao2")){
    iniciarCronometro(20,footerElement,"question2");
    adicionarListeners("questao2");
  }
  if(page.includes("Pag2")){
    iniciarCronometro(20,footerElement,"question3");
    adicionarListeners("questao3");
  }
  if(page.includes("pag3")){
    iniciarCronometro(20,footerElement,"question4");
    adicionarListeners("questao4");
  }
  if(page.includes("pag4")){
    iniciarCronometro(20,footerElement,"question5");
    adicionarListeners("questao5");
  }
  if(page.includes("first_quetion")){
    iniciarCronometro(20,footerElement,"question6");
    adicionarListeners("questao6");
  }
  if(page.includes("second_quetion")){
    iniciarCronometro(20,footerElement,"question7");
    adicionarListeners("questao7");
  }
  if(page.includes("finalpage")){
    reiniciar(15,"final");
  }
}



function iniciarCronometro(tempo, footerElement, paginaNome) {
  let timeLeft = Number(tempo);
  
  if (footerElement) {
    footerElement.innerHTML = `<p>${timeLeft}</p>`;
  } else {
    console.error("Elemento do cronômetro não encontrado.");
    return;
  }

  const countdownInterval = setInterval(() => {
    timeLeft--;
    footerElement.innerHTML = `<p>${timeLeft}</p>`;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      
        alert(`Tempo na página ${paginaNome} acabou!`);
        window.location.href = "/QUIZAPP/home/index.html"; // Redireciona para a página inicial
    }
  }, 1000);
}

function reiniciar(tempo, paginaNome) {
  let timeLeft = Number(tempo);

  const countdownInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);

      if (paginaNome === "final") {
        alert("Clique OK para reiniciar o jogo!");
        window.location.href = "/home/index.html"; // Reinicia o jogo
      }
    }
  }, 1000); // A cada 1 segundo
}
// function iniciarCronometro(tempo, footerElement, paginaNome) {
//   let timeLeft = Number(tempo);
//  // let timeLeft = 3;
  
//   if (footerElement) {
//     footerElement.innerHTML = `<p>${timeLeft}</p>`;
//   } else {
//     console.error("Elemento do cronômetro não encontrado.");
//     return;
//   }

//   const countdownInterval = setInterval(() => {
//     timeLeft--;
//     footerElement.innerHTML = `<p>${timeLeft}</p>`;

//     if (timeLeft === 0) {
//         clearInterval(countdownInterval);
//         alert(`Tempo na página ${paginaNome} acabou!`);
//         window.location.href="/QUIZAPP/home/index2.html";
//     }
//     if(timeLeft===0 && paginaNome==="final"){
//         clearInterval(countdownInterval);
//         alert("click ok para reiniciar o jogo!");
//         window.location.href="/QUIZAPP/home/index2.html";
//     }
//   }, 1000);
// }

function alternarLogo() {
  //if (logoInterval) clearInterval(logoInterval); // Limpa o intervalo anterior
  const logoElement = document.getElementById('logoImg');
  let logoAtual = true; // Para controlar qual logo está sendo exibido

  setInterval(() => {
    if (logoAtual) {
      logoElement.src = '/assets/images/logo2.png'; // Troca para logo2.png
    } else {
      logoElement.src = '/assets/images/lololol.png'; // Troca de volta para lololol.svg
    }
    logoAtual = !logoAtual; // Alterna o estado
  }, 500); // A cada 2 segundos
}

function vaipara(pagina) {
  window.location.href = '/QUIZAPP/assets/section/sectionone/'+pagina + '.html';
}

function adicionarListeners(ver) {
      let alternativa;
      let index;
      let very;
       
      if(ver==="questao1"){
        let alternativas = document.querySelectorAll('.content');
        very=1;
        alternativas.forEach((alternativa, index) => {
          alternativa.addEventListener('click', () => {
            if (index === very) {
                window.location.href="/QUIZAPP/assets/section/sectionone/correct.html";
            } else {
                window.location.href="/QUIZAPP/assets/section/sectionone/errors.html";
            }
              // e então chamar a função para carregar a próxima pergunta
              //proximaPergunta();
          });
      });
      }
      if(ver==="questao2"){
        let alternativas = document.querySelectorAll('.content');
        very=1;
        alternativas.forEach((alternativa, index) => {
          alternativa.addEventListener('click', () => {
            if (index === very) {
                window.location.href="/QUIZAPP/assets/section/sectionone/correct_question2.html";
            } else {
                window.location.href="/QUIZAPP/assets/section/sectionone/errors_question2.html";
            }
              // e então chamar a função para carregar a próxima pergunta
              //proximaPergunta();
          });
      });
      }
      if(ver==="questao3"){
        let alternativas = document.querySelectorAll('.sectiontwo');
        very=1;
        alternativas.forEach((alternativa, index) => {
          alternativa.addEventListener('click', () => {
            if (index === very) {
                window.location.href="/QUIZAPP/assets/section/sectiontwo/correct1.html";
            } else {
                window.location.href="/QUIZAPP/assets/section/sectiontwo/error1.html";
            }
              // e então chamar a função para carregar a próxima pergunta
              //proximaPergunta();
          });
      });
      }
      if(ver==="questao4"){
        let alternativas = document.querySelectorAll('.sectiontwo');
        very=1;
        alternativas.forEach((alternativa, index) => {
          alternativa.addEventListener('click', () => {
            if (index === very) {
                window.location.href="/QUIZAPP/assets/section/sectiontwo/correct2.html";
            } else {
                window.location.href="/QUIZAPP/assets/section/sectiontwo/error2.html";
            }
              // e então chamar a função para carregar a próxima pergunta
              //proximaPergunta();
          });
      });
      }
      if(ver==="questao5"){
        let alternativas = document.querySelectorAll('.sectiontwo');
        very=0;
        alternativas.forEach((alternativa, index) => {
          alternativa.addEventListener('click', () => {
            if (index === very) {
                window.location.href="/QUIZAPP/assets/section/sectiontwo/correct3.html";
            } else {
                window.location.href="/QUIZAPP/assets/section/sectiontwo/error3.html";
            }
              // e então chamar a função para carregar a próxima pergunta
              //proximaPergunta();
          });
      });
      }
      if(ver==="questao6"){
        let alternativas = document.querySelectorAll('.content');
        very=0;
        alternativas.forEach((alternativa, index) => {
          alternativa.addEventListener('click', () => {
            if (index === very) {
                window.location.href="/QUIZAPP/assets/sectionthree/correct1.html";
            } else {
                window.location.href="/QUIZAPP/assets/sectionthree/errors1.html";
            }
              // e então chamar a função para carregar a próxima pergunta
              //proximaPergunta();
          });
      });
      }
      if(ver==="questao7"){
        let alternativas = document.querySelectorAll('.content');
        very=0;
        alternativas.forEach((alternativa, index) => {
          alternativa.addEventListener('click', () => {
            if (index === very) {
                window.location.href="/QUIZAPP/assets/sectionthree/correct2.html";
            } else {
                window.location.href="/QUIZAPP/assets/sectionthree/errors2.html";
            }
              // e então chamar a função para carregar a próxima pergunta
              //proximaPergunta();
          });
      });
      }

      
}
 
//}
