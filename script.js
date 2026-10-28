window.kumpulanKitab = window.kumpulanKitab || {};

const menuKitab = document.getElementById('menu-kitab');
const isiKitab = document.getElementById('isi-kitab');
const judulKitab = document.getElementById('judul-kitab');
const kontenTabel = document.getElementById('konten-tabel');
const tombolKembali = document.getElementById('tombol-kembali');
const pilihBahasa = document.getElementById('pilih-bahasa');
const modalNahwu = document.getElementById('modal-nahwu');
const teksArabModal = document.getElementById('teks-arab-modal');
const teksNahwu = document.getElementById('teks-nahwu');
const tutupModal = document.querySelector('.tutup-modal');

let kitabAktif = '';

// 1. Tampilkan Menu Berdasarkan Data yang Terdaftar
function muatMenu() {
    menuKitab.innerHTML = '';
    
    // Looping semua kitab yang terdaftar di window.kumpulanKitab
    for (let id in window.kumpulanKitab) {
        const kitab = window.kumpulanKitab[id];
        
        const kartu = document.createElement('div');
        kartu.className = 'kartu-kitab';
        kartu.onclick = () => bukaKitab(id);
        
        // Buat judul Arab besar di atas, Latin kecil di bawah
        kartu.innerHTML = `
            <div class="judul-arab-menu font-arab">${kitab.judulArab}</div>
            <div class="judul-latin-menu">${kitab.judulLatin}</div>
        `;
        menuKitab.appendChild(kartu);
    }
}

// 2. Buka Halaman Kitab Spesifik
function bukaKitab(id) {
    kitabAktif = id;
    menuKitab.classList.add('sembunyi');
    isiKitab.classList.remove('sembunyi');
    judulKitab.innerText = window.kumpulanKitab[id].judulArab; // Menampilkan judul Arab di atas tabel
    renderTabel();
}

// 3. Render Tabel Bergaris 2 Kolom
function renderTabel() {
    const bahasa = pilihBahasa.value;
    const fashalData = window.kumpulanKitab[kitabAktif].fashal;
    let html = '';

    fashalData.forEach(f => {
        // Buat wadah fashal dan judulnya
        html += `<div class="fashal-container">
                    <h3 class="fashal-judul">${f.namaFashal}</h3>
                    <table class="tabel-kitab">
                        <thead>
                            <tr>
                                <th style="text-align:left;">Terjemahan</th>
                                <th style="text-align:right;">Teks Arab</th>
                            </tr>
                        </thead>
                        <tbody>`;
        
        // Isi tabel (baris demi baris)
        f.isi.forEach(baris => {
            const arti = bahasa === 'sunda' ? baris.sunda : baris.indo;
            // Hindari error tanda kutip pada parameter onclick dengan replace
            const arabAman = baris.arab.replace(/'/g, "\\'");
            const nahwuAman = baris.nahwu.replace(/'/g, "\\'");
            
            html += `       <tr onclick="tampilkanNahwu('${arabAman}', '${nahwuAman}')">
                                <td class="sel-arti">${arti}</td>
                                <td class="sel-arab font-arab">${baris.arab}</td>
                            </tr>`;
        });
        
        // Tutup tabel
        html += `       </tbody>
                    </table>
                 </div>`;
    });
    
    kontenTabel.innerHTML = html;
}

// 4. Sistem Pop-up (Modal) Nahwu
window.tampilkanNahwu = function(arab, nahwu) {
    teksArabModal.innerText = arab;
    teksNahwu.innerText = nahwu;
    modalNahwu.classList.remove('sembunyi');
    // Jeda sedikit untuk animasi CSS
    setTimeout(() => { modalNahwu.classList.add('tampil'); }, 10);
}

function sembunyikanModal() {
    modalNahwu.classList.remove('tampil');
    setTimeout(() => { modalNahwu.classList.add('sembunyi'); }, 300);
}

tutupModal.onclick = sembunyikanModal;
window.onclick = (event) => { 
    if (event.target == modalNahwu) sembunyikanModal(); 
}

// 5. Interaksi Tombol
tombolKembali.onclick = () => {
    isiKitab.classList.add('sembunyi');
    menuKitab.classList.remove('sembunyi');
}
pilihBahasa.onchange = renderTabel;

// Jalankan saat web dimuat
window.onload = muatMenu;
```
