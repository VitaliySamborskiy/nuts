let e=new Map,t=new Map,a=new Map;function n(e,t,a,n,r){for(let o=0;o<t.length;o++){new IntersectionObserver((i=>{i.forEach((i=>{i.isIntersecting&&s(t,o,e,a,n,r)}))}),{rootMargin:"100px"}).observe(t[o])}}function s(n,s,o,i,c,l){"iframe"!==n[s].tagName.toLowerCase()&&(e.set(n[s],i[s]),t.set(n[s],c[s]),a.set(n[s],new YT.Player(n[s],{videoId:o[s],playerVars:{controls:0,rel:0,fs:0,enablejsapi:1,modestbranding:1},events:{onReady:e=>function(e,n,s){t.get(s).addEventListener("click",(()=>{t.get(s).classList.add(n),a.get(s).playVideo()}))}(0,l,n[s]),onStateChange:t=>function(t,a,n,s){r(t,a,n,s);const o=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting||(t.target.pauseVideo(),r(t,a,n,s))}))}));o.observe(e.get(s))}(t,s,l,n[s])}})))}function r(e,n,s,r){e.data==YT.PlayerState.PLAYING&&a.forEach(((e,a)=>{a!==r&&(e.pauseVideo(),t.get(a).classList.remove(s))})),e.data!=YT.PlayerState.ENDED&&e.data!=YT.PlayerState.PAUSED||t.get(r).classList.remove(s)}export{n as o};
