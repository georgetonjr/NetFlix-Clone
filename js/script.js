//simulaçao de dados
//------------------------------------------------------------------
//                           catogoria1                            |
//------------------------------------------------------------------

let capa = {
  titulo:
    "HTML CSS Javascript Website Tutorial - Responsive Beginner JS Project with Smooth Scroll",
  img: "https://img.youtube.com/vi/3-2Pj5hxwrw/maxresdefault.jpg",
  descricao:
    "Learn how to build a website using HTML, CSS, and Javascript in this beginner tutorial. The site is fully responsive and has a smooth scroll effect that highlights the navbar menu based on your position scrolled. Easy beginner Javascript project that you can refactor and add your own design.",
  link: "https://www.youtube.com/watch?v=3-2Pj5hxwrw&list=WL&index=26",
};

const catogoria1 = {
  video1: {
    titulo: "Responsividade na Prática | Masterclass #08",
    img: "https://img.youtube.com/vi/H91DhKPjhPk/hqdefault.jpg",
    descricao:
      "a Masterclass de hoje, vamos usar estratégias de CSS Units para que tanto o nosso Layout, quanto os nossos textos, fiquem fluidos. Utilizaremos também CSS Media Queries para adicionar CSS customizados conforme o breakpoint definido, para que nosso layout fique adaptado ao viewport do dispositivo.",
    link: "https://www.youtube.com/watch?v=H91DhKPjhPk&list=WL&index=3&t=829s",
  },

  video2: {
    titulo: "5 Ways to Customize VS Code",
    img: "https://img.youtube.com/vi/yvXHM2NByh4/hqdefault.jpg",
    descricao:
      "Want to make VS Code look a lot better? There are several ways to customize Visual Studio Code, but you should start with a nice font and a fun theme! After that, you can add extra functionality with extensions. Then, add the finishing touches with custom settings and keyboard shortcuts! ",
    link: "https://www.youtube.com/watch?v=yvXHM2NByh4&list=WL&index=12",
  },

  video3: {
    titulo:
      "Chat Application using React JS - Build and Deploy a Chat App in 1 Hour ",
    img: "https://img.youtube.com/vi/jcOKU9f86XE/hqdefault.jpg",
    descricao:
      "LEARN: Sockets, Rest APIs, Sending Images, React Hooks, Props, and CSS!",
    link: "https://www.youtube.com/watch?v=jcOKU9f86XE&list=WL&index=24",
  },

  video4: {
    titulo:
      "Configurando VSCode para Node.js, ReactJS e React Native | Diego Fernandes",
    img: "https://img.youtube.com/vi/c7P03kkrEG8/hqdefault.jpg",
    descricao:
      "Nesse vídeo eu vou mostrar como eu configurei meu ambiente de desenvolvimento no VSCode.. Os snippets que eu estou usando, plugins, atalhos e muito mais! ",
    link: "https://www.youtube.com/watch?v=c7P03kkrEG8&list=WL&index=39&t=255s",
  },

  video5: {
    titulo:
      "Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44",
    img: "https://img.youtube.com/vi/vAV4Vy4jfkc/hqdefault.jpg",
    descricao:
      "Nesse vídeo vamos resumir os princípios do SOLID e mostrar como conseguiríamos aplicar esses conceitos em uma API REST utilizando Node.js e TypeScript.",
    link: "https://www.youtube.com/watch?v=vAV4Vy4jfkc&list=WL&index=38&t=8s",
  },
};

//------------------------------------------------------------------
//                           catogoria2                            |
//------------------------------------------------------------------

const catogoria2 = {
  video1: {
    titulo: "Node.js: Iniciando da teoria à prática | Masterclass #11",
    img: "https://img.youtube.com/vi/DiXbJL3iWVs/hqdefault.jpg",
    descricao:
      "Estudaremos um pouco de teoria e bastante prática, desenvolvendo algumas aplicações com Node puro, para conhecer os módulos nativos como os, fs, path, url, events, http e comportamentos do Node no geral como, por exemplo, o Event Loop.",
    link: "https://www.youtube.com/watch?v=DiXbJL3iWVs",
  },

  video2: {
    titulo: "Responsividade na Prática | Masterclass #08",
    img: "https://img.youtube.com/vi/H91DhKPjhPk/hqdefault.jpg",
    descricao:
      "a Masterclass de hoje, vamos usar estratégias de CSS Units para que tanto o nosso Layout, quanto os nossos textos, fiquem fluidos. Utilizaremos também CSS Media Queries para adicionar CSS customizados conforme o breakpoint definido, para que nosso layout fique adaptado ao viewport do dispositivo.",
    link: "https://www.youtube.com/watch?v=H91DhKPjhPk&list=WL&index=3&t=829s",
  },

  video3: {
    titulo:
      "Chat Application using React JS - Build and Deploy a Chat App in 1 Hour ",
    img: "https://img.youtube.com/vi/jcOKU9f86XE/hqdefault.jpg",
    descricao:
      "LEARN: Sockets, Rest APIs, Sending Images, React Hooks, Props, and CSS!",
    link: "https://www.youtube.com/watch?v=jcOKU9f86XE&list=WL&index=24",
  },

  video4: {
    titulo: "React Native: armazenamento, migração e integração | #PR​ 34",
    img: "https://img.youtube.com/vi/hP0R39B2g_4/hqdefault.jpg",
    descricao:
      "Se liga que nesse vídeo tem uma dica que vale ouro para quem está começando a desenvolver aplicativos mobile pela primeira vez, também tem algumas estratégias para armazenar dados em apps offline. Mas e agora, será que faz sentido usar React Native em aplicações de realidade aumentada?",
    link: "https://www.youtube.com/watch?v=hP0R39B2g_4",
  },

  video5: {
    titulo:
      "Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44",
    img: "https://img.youtube.com/vi/vAV4Vy4jfkc/hqdefault.jpg",
    descricao:
      "Nesse vídeo vamos resumir os princípios do SOLID e mostrar como conseguiríamos aplicar esses conceitos em uma API REST utilizando Node.js e TypeScript.",
    link: "https://www.youtube.com/watch?v=vAV4Vy4jfkc&list=WL&index=38&t=8s",
  },
};

//------------------------------------------------------------------
//                           carrosel1                             |
//------------------------------------------------------------------

//pasando itens para o carrosel 1
let carrosel1 = document.querySelector("#carrosel1");

for (let i in catogoria1) {
  //Cria a Div que encapsula a imagem
  let divFilm = document.createElement("div");
  divFilm.className = "item";

  //Cria o elemento img e seta as propriedades do mesmo
  let img = document.createElement("img");
  img.className = "box-filme";
  img.src = catogoria1[i].img;
  img.alt = catogoria1[i].titulo;

  //atribuo a img na div
  divFilm.appendChild(img);

  //atribuo a divFilm no carrosel 1
  carrosel1.appendChild(divFilm);
}

//------------------------------------------------------------------
//                           carrosel2                             |
//------------------------------------------------------------------

//passando itens para o carrosel 2
let carrosel2 = document.querySelector("#carrosel2");

for (let i in catogoria2) {
  //Cria a Div que encapsula a imagem
  let divFilm = document.createElement("div");
  divFilm.className = "item";

  //Cria o elemento img e seta as propriedades do mesmo
  let img = document.createElement("img");
  img.className = "box-filme";
  img.src = catogoria2[i].img;
  img.alt = catogoria2[i].titulo;

  //atribuo a img na div
  divFilm.appendChild(img);

  //atribuo a divFilm no carrosel 1
  carrosel2.appendChild(divFilm);
}
