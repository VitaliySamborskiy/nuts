function s(s,t,a,e,i){s.forEach(((c,d)=>{c.addEventListener("click",(l=>{s.forEach((s=>{s.classList.remove(a),s.firstElementChild.classList.remove(e)})),t.forEach((s=>{s.classList.remove(i)}));const r=c.getAttribute("data-id");c.classList.add(a),c.firstElementChild.classList.add(e),t[d].id===r&&t[d].classList.add(i)}))}))}export{s as t};