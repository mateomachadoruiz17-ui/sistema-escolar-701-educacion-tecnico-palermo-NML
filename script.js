
// ⏰ RELOJ
setInterval(()=>{
  let t=document.getElementById("time");
  if(t) t.innerText=new Date().toLocaleString();
},1000);

let currentUser="";

// 👥 USUARIOS
let users={
dante:{pass:"4821",role:"student",name:"DANTE BARACALDO"},
nelson:{pass:"1934",role:"student",name:"NELSON BESERRA"},
daniela:{pass:"7402",role:"student",name:"DANIELA BLANCO"},
daniel:{pass:"9183",role:"student",name:"DANIEL BORQUES"},
alejandro:{pass:"5529",role:"student",name:"ALEJANDRO BUITRAGO"},
sara:{pass:"6671",role:"student",name:"SARA CARDONA"},
amaia:{pass:"7740",role:"student",name:"AMAIA ROSA COCA"},
anisamara:{pass:"8892",role:"student",name:"ANI SAMARA CASTAÑO"},
santiago:{pass:"9901",role:"student",name:"SANTIAGO DURAN"},
estiven:{pass:"1209",role:"student",name:"FORERO ESTIVEN"},
camila:{pass:"3304",role:"student",name:"CAMILA DIAS"},
valeri:{pass:"4408",role:"student",name:"VALERI SANABRIA"},
mariafernanda:{pass:"5512",role:"student",name:"MARIA FERIA"},
antonia:{pass:"6623",role:"student",name:"ANTONIA LEON"},
mariana:{pass:"7735",role:"student",name:"MARIANA LOPEZ"},
felipe:{pass:"8846",role:"student",name:"MARTELO FELIPE"},
mateo:{pass:"9957",role:"student",name:"MATEO MACHADO RUIZ"},
jeray:{pass:"1018",role:"student",name:"JERAY MARTINES"},
joel:{pass:"2129",role:"student",name:"JOEL MARTINES"},
dana:{pass:"3231",role:"student",name:"DANA MATIZ"},
miguel:{pass:"4342",role:"student",name:"MIGUEL MOGICA"},
sharol:{pass:"5453",role:"student",name:"SHAROL ANDICA"},
leonel:{pass:"6564",role:"student",name:"LEONEL RAMIRES"},
celeste:{pass:"7675",role:"student",name:"CELESTE RENDON"},
james:{pass:"8786",role:"student",name:"JAMES RODRIGUES"},
joshua:{pass:"9897",role:"student",name:"JOSHUA RAMOS"},
mia:{pass:"1357",role:"student",name:"MIA SANCHES"},
julian:{pass:"2468",role:"student",name:"JULIAN SALAMANCA"},
laura:{pass:"3579",role:"student",name:"LAURA VARGAS"},
franchesco:{pass:"4680",role:"student",name:"FRANCHESCO SAMORA"},
elian:{pass:"5791",role:"student",name:"ELIAN VEGA"},
carlos:{pass:"6802",role:"student",name:"CARLOS VELANDIA"},
andres:{pass:"7913",role:"student",name:"ANDRES VIELMA"},

representante:{pass:"9999",role:"representante",name:"REPRESENTANTE"},
napoleon:{pass:"1111",role:"viewer",name:"NAPOLEON montero"}
};

// 📊 MATERIAS
let materias=Array.from({length:22},(_,i)=>"N"+(i+1));

// 📊 NOTAS
let notasData={
dante:[50,50,50,50,50,50,50,50,50,50,46,46,45,50,50,50,50,50,10,50,38,45],
nelson:[10,10,10,10,10,10,10,50,50,10,40,40,40,50,50,50,10,10,10,10,30,19],
daniela:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,49],
daniel:[45,50,40,10,37,30,50,10,10,50,45,45,35,50,50,50,50,50,10,10,35,35],
alejandro:[45,50,50,36,10,32,50,10,10,10,10,40,40,50,10,50,50,50,10,30,40,33],
sara:[50,50,50,50,50,50,50,10,10,50,50,50,50,50,50,50,50,10,10,50,50,43],
amaia:[45,30,10,50,10,50,50,50,50,50,48,48,50,10,50,50,50,50,50,50,35,40],
anisamara:[45,50,50,50,50,50,50,10,10,10,46,45,40,50,50,50,50,50,10,50,36,40],
santiago:[50,50,50,50,50,48,50,10,10,50,45,45,40,50,50,50,35,10,10,10,42,37],
estiven:[45,50,50,30,10,32,50,50,50,50,47,47,30,50,50,50,10,50,10,10,30,45],
camila:[50,50,50,50,50,50,50,10,10,50,46,46,50,50,10,50,50,10,50,50,50,42],
valeri:[50,50,50,50,40,50,50,10,10,50,48,48,50,50,50,50,50,50,50,50,50,46],
mariafernanda:[45,50,50,10,10,10,50,50,50,50,46,46,50,50,50,50,50,50,10,12,30,36],
antonia:[50,50,50,50,50,50,50,50,50,10,50,50,50,50,50,50,50,10,50,50,48,44],
mariana:[50,50,40,50,50,50,50,50,50,50,50,50,50,10,10,50,50,10,50,50,50,42],
felipe:[50,50,50,10,50,10,50,50,50,50,40,40,40,50,10,50,50,10,10,50,36,35],
mateo:[50,50,50,50,50,50,50,50,50,50,50,50,50,50,10,50,10,50,50,50,50,45],
jeray:[50,50,50,50,50,50,50,50,50,50,50,50,45,50,10,50,50,50,50,50,50,46],
joel:[50,50,50,50,50,50,50,50,50,50,46,50,45,50,50,50,50,50,50,50,50,48],
dana:[50,50,50,50,50,10,50,50,50,50,40,46,40,50,50,50,50,50,50,50,42,45],
miguel:[45,50,50,10,37,10,50,50,50,50,48,46,45,50,50,50,50,10,50,50,32,39],
sharol:[50,50,50,50,50,50,50,50,50,50,48,48,50,50,50,50,50,50,50,50,50,48],
leonel:[45,10,50,50,50,30,50,10,10,50,46,48,40,50,50,50,50,10,10,50,40,37],
celeste:[45,50,50,50,50,30,50,10,10,50,50,46,35,50,50,50,50,50,10,50,30,40],
james:[10,10,50,10,10,10,10,10,10,10,45,50,35,10,50,50,50,50,10,10,36,28],
joshua:[50,50,50,48,50,40,50,10,10,10,50,45,45,50,50,50,50,50,10,10,42,40],
mia:[45,50,50,50,40,50,50,50,50,50,50,50,50,50,50,50,50,50,50,10,48,44],
julian:[50,50,50,50,46,10,50,50,50,50,48,50,30,50,50,50,50,50,50,50,38,45],
laura:[50,50,50,50,50,50,50,50,50,10,40,48,50,50,50,50,50,10,50,50,38,43],
franchesco:[50,50,50,50,50,36,50,50,50,10,46,40,40,50,50,50,50,10,10,50,40,40],
elian:[50,50,40,40,36,36,50,50,50,50,40,46,50,50,50,50,50,50,50,10,39,43],
carlos:[50,50,50,50,50,50,50,50,50,50,50,40,35,50,50,50,50,50,50,50,48,47],
andres:[10,30,30,40,50,50,50,50,50,50,50,35,50,50,50,50,50,50,10,50,42,41]
};

// 📝 OBS + 📢 POSTS
let obsData={};
let posts=[];

// 🔐 LOGIN
function login(){
let u=document.getElementById("user").value.trim().toLowerCase();
let p=document.getElementById("pass").value.trim();

if(users[u] && users[u].pass===p){
currentUser=u;
panel();
}else alert("❌ Error");
}

// 🧠 PANEL
function panel(){
document.getElementById("loginBox").style.display="none";

document.getElementById("app").innerHTML=`
<h2>👋 ${users[currentUser].name}</h2>

<div class="menu">
<button onclick="verNotas()">📊 Notas</button>
<button onclick="verObs()">📝 Observaciones</button>
<button onclick="verPosts()">📢 Publicaciones</button>

${(users[currentUser].role==="admin" || users[currentUser].role==="representante")
? `<button onclick="addNota()">➕ Nueva Nota</button>`
: ""}

<button onclick="logout()">🚪 Salir</button>
</div>

<div id="contenido"></div>
`;
}

// 📊 NOTAS
function verNotas(){

let role=users[currentUser].role;

let lista=[];

// estudiante SOLO él mismo
if(role==="student"){
lista=[currentUser];
}else{
lista=Object.keys(users).filter(u=>users[u].role==="student");
}

let html="<h3>📊 Notas</h3>";

lista.forEach(u=>{
html+=tabla(u, role==="admin" || role==="representante");
});

document.getElementById("contenido").innerHTML=html;
}

// 📋 TABLA
function tabla(u,edit){

let datos=notasData[u]||[];
let suma=0;

let html=`<div class="card"><b>${users[u].name}</b><br>`;

materias.forEach((m,i)=>{
let val=datos[i]??0;

if(edit){
html+=`${m}: <input id="${u}_${i}" value="${val}" style="width:50px"><br>`;
}else{
html+=`${m}: ${val}<br>`;
}

suma+=Number(val);
});

let prom=(suma/materias.length).toFixed(1);

html+=`<b>Promedio:</b> ${prom}<br>`;

if(edit){
html+=`<button onclick="save('${u}')">💾 Guardar</button>`;
}

html+="</div>";
return html;
}

// 💾 SAVE
function save(u){
materias.forEach((m,i)=>{
notasData[u][i]=Number(document.getElementById(`${u}_${i}`).value);
});
verNotas();
}

// ➕ NOTA
function addNota(){
let n=prompt("Nombre nueva materia:");
if(n){
materias.push(n);
Object.keys(notasData).forEach(u=>{
notasData[u].push(0);
});
verNotas();
}
}

// 📝 OBS
function verObs(){

let html="<h3>📝 Observaciones</h3>";

Object.keys(users).forEach(u=>{

if(users[currentUser].role==="admin" ||
users[currentUser].role==="representante" ||
users[currentUser].role==="viewer" ||
u===currentUser){

let obs=obsData[u]||[];

html+=`<div class="card"><b>${users[u].name}</b><br>`;

obs.forEach(o=>{
html+=`<div class="obs">${o}</div>`;
});

if(users[currentUser].role==="admin" || users[currentUser].role==="representante"){
html+=`<input id="o_${u}">
<button onclick="addObs('${u}')">Agregar</button>`;
}

html+="</div>";
}
});

document.getElementById("contenido").innerHTML=html;
}

function addObs(u){
let v=document.getElementById("o_"+u).value;
if(!obsData[u]) obsData[u]=[];
obsData[u].push(v);
verObs();
}

// 📢 POSTS
function verPosts(){

let html="<h3>📢 Publicaciones</h3>";

posts.forEach(p=>{
html+=`<div class="card">${p}</div>`;
});

if(users[currentUser].role==="admin" || users[currentUser].role==="representante"){
html+=`<input id="postText"><button onclick="addPost()">Publicar</button>`;
}

document.getElementById("contenido").innerHTML=html;
}

function addPost(){
let v=document.getElementById("postText").value;
if(v){
posts.push(v);
verPosts();
}
}

// 🚪 SALIR (ARREGLADO)
function logout(){
currentUser="";
document.getElementById("app").innerHTML="";
document.getElementById("loginBox").style.display="block";
document.getElementById("user").value="";
document.getElementById("pass").value="";
}
