const e=document.querySelector(".type-country"),t=document.createElement("ul");document.body.appendChild(t);let n=[];fetch("https://restcountries.com/v2/all?fields=name,flag,capital,population,languages").then(e=>e.json()).then(e=>{n=e}).catch(e=>{console.error("Помилка при завантаженні країн:",e)}),e.addEventListener("input",()=>{let u=e.value.toLowerCase().trim();if(t.innerHTML="",""===u)return;let l=n.filter(e=>e.name.toLowerCase().includes(u));if(0===l.length){t.innerHTML="<li>Країн не знайдено</li>";return}if(l.length>10)return void PNotify.notice({text:"Занадто багато збігів. Уточніть запит.",delay:500});if(1===l.length){let e=l[0],n=e.languages.map(e=>e.name).join("");t.innerHTML=`
      <li class="countryCard">
        <h2>${e.name}</h2>
        <img src="${e.flag}">
        <p>\u{421}\u{442}\u{43E}\u{43B}\u{438}\u{446}\u{44F}: ${e.capital}</p>
        <p>\u{41D}\u{430}\u{441}\u{435}\u{43B}\u{435}\u{43D}\u{43D}\u{44F}: ${e.population.toLocaleString()}</p>
        <p>\u{41C}\u{43E}\u{432}\u{438}:${n}</p>
      </li>
    `}else t.innerHTML=l.map(e=>`<li>${e.name}</li>`).join("")});
//# sourceMappingURL=goit-js-hw-12-countries.8df8d84d.js.map
