(()=>{"use strict";const e=[new t("starterProject")];function t(e){return this.projectName=e,this.tasks=[],e}function n(){const t=document.getElementById("nameOfProjects");t.innerHTML="";for(let n=0;n<e.length;n++){let s=document.createElement("div");s.className="projItem",s.innerText=e[n].projectName,t.appendChild(s)}!function(){const e=document.querySelectorAll(".projItem");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(()=>{console.log("this is project"+[t])}))}()}function s(){const e=document.getElementById("hiddenProjAdd"),t=document.getElementById("addProjButton");document.getElementById("inputText").value="",e.style.display="none",t.style.display="block"}!function(){const e=document.getElementById("addProjButton"),t=document.getElementById("cancelButton");e.addEventListener("click",(()=>{!function(){const e=document.getElementById("hiddenProjAdd");document.getElementById("addProjButton").style.display="none",e.style.display="block"}()})),t.addEventListener("click",(()=>{s()}))}(),function(){const e=document.getElementById("Priority"),t=document.getElementsByClassName("priorityClick");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{t[n].style.backgroundColor;var s=t[n].innerHTML;e.innerHTML=s,t[n].classList.contains("highPriority")&&(e.classList.replace("btn-secondary","btn-danger"),e.classList.replace("btn-warning","btn-danger"),e.classList.replace("btn-success","btn-danger")),t[n].classList.contains("mediumPriority")&&(e.classList.replace("btn-secondary","btn-warning"),e.classList.replace("btn-success","btn-warning"),e.classList.replace("btn-danger","btn-warning")),t[n].classList.contains("lowPriority")&&(e.classList.replace("btn-secondary","btn-success"),e.classList.replace("btn-danger","btn-success"),e.classList.replace("btn-warning","btn-success"))}))}(),n(),document.getElementById("addNewProj").addEventListener("click",(()=>{!function(){const n=document.getElementById("inputText").value;if(""!=n){const s=new t(n);e.push(s)}}(),n(),s()}))})();