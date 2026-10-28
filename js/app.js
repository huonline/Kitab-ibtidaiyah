// Logika aplikasi. Data kitab dimuat dari folder data/ (lihat index.html)
const $=id=>document.getElementById(id);
let lang="sd",fa=innerWidth<=640?1.45:1.9,curK=null;
const strip=s=>s.replace(/[\u064B-\u065F\u0670\u0640]/g,"").replace(/[أإآ]/g,"ا").toLowerCase();
function setLang(l){lang=l;if(cur)renderFashl(cur)}
function size(d){fa=Math.min(2.8,Math.max(1.3,fa+d));document.documentElement.style.setProperty("--fa",fa+"rem")}


function renderList(){
const t=strip($("q").value.trim());const L=$("list");L.innerHTML="";let n=0;
curK.fashl.forEach(f=>{
if(t&&!strip(f.ar).includes(t)&&!strip(f.lat+" "+f.judul).includes(t))return;n++;
const b=document.createElement("button");b.className="item"+(f.lines?"":" dim");
b.innerHTML='<span><b>'+f.judul+'</b><br><small>'+curK.judul+(f.lines?"":" · belum diisi")+'</small></span><span class="ar">'+f.ar+'</span>';
b.onclick=()=>f.lines?openFashl(f):alert("Fashl ini belum diisi.");L.appendChild(b)});
if(!n)L.innerHTML='<div class="empty">Tidak ada fashl yang cocok. Coba kata lain, misalnya “rukun”.</div>';
$("hint").textContent=t?n+" hasil ditemukan.":"Pilih fashl untuk mulai membaca."}
$("q").oninput=renderList;

let cur=null;
function openFashl(f){cur=f;$("home").hidden=true;$("read").hidden=false;$("sub").textContent=f.judul;renderFashl(f);scrollTo(0,0)}
function nav(){if(cur){cur=null;$("read").hidden=true;$("home").hidden=false;$("sub").textContent=curK.judul}else if(curK){curK=null;$("home").hidden=true;$("shelf").hidden=false;$("sub").textContent="Perpustakaan kitab ibtidaiyah"}$("nav").style.visibility=curK?"visible":"hidden"}
$("nav").onclick=nav;
function renderFashl(f){
const box=$("fashl");box.innerHTML='<div class="ftitle">فَصْلٌ: '+f.ar+'</div>';
f.lines.forEach(l=>{
const r=document.createElement("div");r.className="row";
const a=document.createElement("div");a.className="arab";
l.segs.forEach((s,i)=>{const sp=document.createElement("span");sp.className="seg";sp.tabIndex=0;sp.textContent=s[0];
sp.onclick=()=>pop(s);sp.onkeydown=e=>{if(e.key==="Enter")pop(s)};a.append(sp,i<l.segs.length-1?" ":"")});
const t=document.createElement("div");t.className="trans";t.textContent=l[lang];
r.append(a,t);box.appendChild(r)})}
function pop(s){
$("pop").innerHTML='<p class="pa">'+s[0]+'</p><dl><dt>Kedudukan nahwu</dt><dd>'+s[1]+'</dd><dt>Lugot Sunda</dt><dd>'+s[2]+'</dd><dt>Indonesia</dt><dd>'+s[3]+'</dd></dl><button class="x" id="cl">Tutup</button>';
$("ov").classList.add("show");$("cl").focus();$("cl").onclick=close}
function close(){$("ov").classList.remove("show")}
$("ov").onclick=e=>{if(e.target===$("ov"))close()};
addEventListener("keydown",e=>{if(e.key==="Escape")close()});
function renderShelf(){const S=$("kitabs");S.innerHTML="";KITAB.forEach(k=>{const b=document.createElement("button");b.className="kcard"+(k.fashl.length?"":" dim");
b.innerHTML='<span class="ar">'+k.ar+'</span><b>'+k.judul+'</b><small>'+k.ket+(k.fashl.length?" · "+k.fashl.length+" fashl":" · belum diisi")+'</small>';
b.onclick=()=>k.fashl.length?openKitab(k):alert("Kitab ini belum diisi.");S.appendChild(b)})}
function openKitab(k){curK=k;$("shelf").hidden=true;$("home").hidden=false;$("kt").textContent=k.judul;$("sub").textContent=k.judul;$("nav").style.visibility="visible";$("q").value="";renderList();scrollTo(0,0)}
function settings(){
const th=document.documentElement.dataset.theme||"auto";
const o=(k,v,t,c)=>'<button data-k="'+k+'" data-v="'+v+'" class="'+(c===v?"on":"")+'">'+t+'</button>';
$("pop").innerHTML='<div class="set"><h3>Terjemahan</h3><div class="grp">'+o("l","sd","Lugot Sunda",lang)+o("l","id","Indonesia",lang)+'</div><h3>Ukuran huruf Arab</h3><div class="grp"><button data-k="f" data-v="-1" aria-label="Kecilkan">A−</button><button data-k="f" data-v="1" aria-label="Besarkan">A+</button></div><h3>Tema</h3><div class="grp">'+o("t","auto","Otomatis",th)+o("t","light","Terang",th)+o("t","dark","Gelap",th)+'</div></div><button class="x" id="cl">Selesai</button>';
$("ov").classList.add("show");
$("pop").querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const k=b.dataset.k,v=b.dataset.v;
if(k==="l")setLang(v);else if(k==="f")size(v*.15);else if(v==="auto")delete document.documentElement.dataset.theme;else document.documentElement.dataset.theme=v;
settings()});
$("cl").onclick=close}
$("gear").onclick=settings;
renderShelf();
