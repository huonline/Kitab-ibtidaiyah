// Logika aplikasi. Isi kitab dimuat dari folder data/ (lihat index.html). Tidak perlu diubah saat menambah fashl.
const DATA=window.KITAB||[];
const $=id=>document.getElementById(id);
const S={lang:"sd",trans:true,hk:true,notes:true,fa:innerWidth<=380?1.3:innerWidth<=640?1.45:innerWidth>=900?2.1:1.9,theme:"auto"};
try{Object.assign(S,JSON.parse(localStorage.getItem("ngaji")||"{}"))}catch(e){}
const save=()=>{try{localStorage.setItem("ngaji",JSON.stringify(S))}catch(e){}};
let K=null,i=0;
const strip=s=>s.replace(/[\u064B-\u065F\u0670\u0640]/g,"").replace(/[أإآ]/g,"ا").toLowerCase();
const ar=s=>S.hk?s:s.replace(/[\u064B-\u065F\u0670]/g,"");
const mode=()=>!$("read").hidden?"read":!$("home").hidden?"home":"shelf";
function prefs(){const r=document.documentElement;r.style.setProperty("--fa",S.fa+"rem");if(S.theme==="auto")delete r.dataset.theme;else r.dataset.theme=S.theme}
function view(v){["shelf","home","read"].forEach(x=>$(x).hidden=x!==v);$("pager").hidden=v!=="read";$("nav").style.visibility=v==="shelf"?"hidden":"visible";
$("sub").textContent=v==="shelf"?"Perpustakaan kitab ibtidaiyah":v==="home"?K.judul:K.fashl[i].judul;scrollTo(0,0)}
$("nav").onclick=()=>{if(mode()==="read")view("home");else{K=null;view("shelf")}};

function shelf(){const S_=$("kitabs");S_.innerHTML="";DATA.forEach(k=>{const b=document.createElement("button");b.className="kcard"+(k.fashl.length?"":" dim");
b.innerHTML='<span class="ar">'+ar(k.ar)+'</span><b>'+k.judul+'</b><small>'+k.ket+(k.fashl.length?" · "+k.fashl.length+" fashl":" · belum diisi")+'</small>';
b.onclick=()=>{if(!k.fashl.length)return alert("Kitab ini belum diisi.");K=k;$("q").value="";list();view("home")};S_.appendChild(b)})}
function items(el,t,pick){el.innerHTML="";let n=0;K.fashl.forEach((f,x)=>{if(t&&!strip(f.ar).includes(t)&&!strip(f.lat+" "+f.judul).includes(t))return;n++;
const b=document.createElement("button");b.className="item"+(x===i&&mode()==="read"?" cur":"")+(f.lines?"":" dim");
b.innerHTML='<span><b>'+f.judul+'</b><br><small>Halaman '+(x+1)+(f.lines?"":" · belum diisi")+'</small></span><span class="ar">'+ar(f.ar)+'</span>';
b.onclick=()=>pick(x);el.appendChild(b)});if(!n)el.innerHTML='<div class="empty">Tidak ada fashl yang cocok. Coba kata lain, misalnya “rukun”.</div>';return n}
function list(){const t=strip($("q").value.trim()),n=items($("list"),t,x=>open(x,0));$("hint").textContent=t?n+" hasil ditemukan.":"Pilih fashl untuk mulai membaca."}
$("q").oninput=list;

function open(x,dir){i=x;page(dir);view("read")}
function page(dir){const f=K.fashl[i],b=$("fashl");b.className="fashl"+(S.trans?"":" noT");
let h='<div class="ftitle">'+ar((f.tanpaFashl?"":"فَصْلٌ: ")+f.ar)+'</div>';
if(!f.lines)h+='<p class="empty">Fashl ini belum diisi.</p>';
else if(!S.trans)h+='<p class="para">'+f.lines.map(l=>ar(l.ar)).join(" ")+'</p>';
else f.lines.forEach(l=>{h+='<div class="row"><div class="arab">'+ar(l.ar)+'</div><div class="trans">'+(l[S.lang]||l.id||"")+'</div></div>'});
if(S.notes&&f.catatan){let c=typeof f.catatan==="string"||Array.isArray(f.catatan)?f.catatan:(f.catatan[S.lang]||f.catatan.id||"");if(Array.isArray(c))c=c.join("\n");h+='<aside class="catatan"><h3>Catatan</h3>'+c.split("\n").map(p=>"<p>"+p+"</p>").join("")+'</aside>'}
b.innerHTML=h;b.style.animation="none";void b.offsetWidth;b.style.animation=dir?"":"none";b.style.setProperty("--dx",(dir||0)*16+"px");
$("pl").textContent="Halaman "+(i+1)+" / "+K.fashl.length+" · Daftar";$("pv").disabled=i===0;$("pn").disabled=i===K.fashl.length-1;
if(mode()==="read")$("sub").textContent=f.judul}
function go(d){const j=i+d;if(j<0||j>=K.fashl.length)return;i=j;page(d);scrollTo(0,0)}
$("pv").onclick=()=>go(-1);$("pn").onclick=()=>go(1);

function sheet(h){$("pop").innerHTML=h;$("ov").classList.add("show")}
function close(){$("ov").classList.remove("show")}
$("pl").onclick=()=>{sheet('<h3>Daftar fashl · '+K.judul+'</h3><input class="sin" id="jq" type="search" placeholder="Cari fashl…" aria-label="Cari fashl"><div class="jl" id="jl"></div><button class="x" id="cl">Tutup</button>');
const f=()=>items($("jl"),strip($("jq").value.trim()),x=>{close();const d=x>i?1:-1;i=x;page(d);scrollTo(0,0)});f();$("jq").oninput=f;$("cl").onclick=close};
function settings(){const sw=(k,t)=>'<button class="sw" role="switch" aria-checked="'+S[k]+'" data-t="'+k+'"><span>'+t+'</span><i></i></button>';
const o=(k,v,t,c)=>'<button data-k="'+k+'" data-v="'+v+'" class="'+(c===v?"on":"")+'">'+t+'</button>';
sheet('<h3>Terjemahan</h3>'+sw("trans","Tampilkan terjemah")+(S.trans?'<div class="grp">'+o("l","sd","Lugot Sunda",S.lang)+o("l","id","Indonesia",S.lang)+'</div>':"")+
'<h3>Teks Arab</h3>'+sw("hk","Tampilkan harakat")+'<div class="grp"><button data-k="f" data-v="-1" aria-label="Kecilkan huruf">A−</button><button data-k="f" data-v="1" aria-label="Besarkan huruf">A+</button></div>'+
'<h3>Catatan</h3>'+sw("notes","Tampilkan catatan penjelasan")+
'<h3>Tema</h3><div class="grp">'+o("t","auto","Otomatis",S.theme)+o("t","light","Terang",S.theme)+o("t","dark","Gelap",S.theme)+'</div><button class="x" id="cl">Selesai</button>');
$("pop").querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{S[b.dataset.t]=!S[b.dataset.t];apply()});
$("pop").querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const k=b.dataset.k,v=b.dataset.v;if(k==="l")S.lang=v;else if(k==="t")S.theme=v;else S.fa=Math.min(2.8,Math.max(1.2,S.fa+v*.15));apply()});
$("cl").onclick=close}
function apply(){save();prefs();shelf();if(K)list();if(mode()==="read")page();settings()}
$("gear").onclick=settings;
$("ov").onclick=e=>{if(e.target===$("ov"))close()};
addEventListener("keydown",e=>{if(e.key==="Escape")close();else if(mode()==="read"&&!$("ov").classList.contains("show")){if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)}});
let sx=0,sy=0;$("read").addEventListener("touchstart",e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
$("read").addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>80&&Math.abs(dx)>Math.abs(dy)*1.5)go(dx<0?1:-1)},{passive:true});
prefs();shelf();view("shelf");
