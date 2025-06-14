document.querySelector(".type-country");const s=s=>s.map(s=>`<li class="userBasa">
  <h1 class="userTitle">${s.login}</h1>,
   <p class="userId">${s.id}</p>,
    <p class="userNode"Ig >${s.node_id}</p>,
    <img class="userImg" src="${s.avatar_url}" alt="${s.login}">;
    </li>`).join("");fetch("https://api.github.com/users").then(s=>s.json()).then(e=>{console.log(e),ghPages.innerHTML=s(e)});
//# sourceMappingURL=goit-js-hw-12-countries.788e0eeb.js.map
