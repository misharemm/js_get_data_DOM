var t=document.querySelectorAll("span.population"),e=document.querySelector("span.total-population"),n=document.querySelector("span.average-population"),o=[];t.forEach(function(t){var e=parseInt(t.textContent.replaceAll(",",""));isNaN(e)||o.push(e)});var r=o.reduce(function(t,e){return t+e},0);e.textContent=r.toLocaleString("en-US");var a=o.length>0?r/o.length:"Error";n.textContent=a.toLocaleString("en-US");
//# sourceMappingURL=index.365f3ed9.js.map
