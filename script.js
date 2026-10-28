const menuKitab = document.getElementById('menu-kitab');
const isiKitab = document.getElementById('isi-kitab');
const judulKitab = document.getElementById('judul-kitab');
const kontenTabel = document.getElementById('konten-tabel');
const tombolKembali = document.getElementById('tombol-kembali');
const pilihBahasa = document.getElementById('pilih-bahasa');
const modalNahwu = document.getElementById('modal-nahwu');
const teksNahwu = document.getElementById('teks-nahwu');
const teksArabModal = document.getElementById('teks-arab-modal');
const tutupModal = document.querySelector('.tutup-modal');

let kitabAktif = '';

function muatMenu() {
    menuKitab.innerHTML = '';
    for (let id in window.dataKitab) {
        const kartu = document.createElement('div');
        kartu.className = 'kartu-kitab';
        kartu.onclick = () => bukaKitab(id);
        
        kartu.innerHTML = `
            <div class="judul-arab-menu">${window.dataKitab[id].judul}</div>
            <div class="judul-latin-menu">${id.toUpperCase()}</div>
        `;
        menuKitab.appendChild(kartu);
    }
}

function bukaKitab(id) {
    kitabAktif = id;
    menuKitab.classList.add('sembunyi');
    isiKitab.classList.remove('sembunyi');
    judulKitab.innerText = window.dataKitab[id].judul;
    renderTabel();
}

function renderTabel() {
    const bahasa = pilihBahasa.value;
    const fashalData = window.dataKitab[kitabAktif].fashal;
    let html = '';

    fashalData.forEach(f => {
        html += `<div class="fashal-container">
                    <h3 class="fashal-judul">${f.namaFashal}</h3>
                    <table class="tabel-kitab">
                        <tbody>`;
        f.isi.forEach(baris => {
            const arti = bahasa === 'sunda' ? baris.sunda : baris.indo;
            // Menghindari error jika ada tanda kutip
            const arabAman = baris.arab.replace(/'/g, "\\'");
            const nahwuAman = baris.nahwu.replace(/'/g, "\\'");
            
            html += `<tr onclick="tampilkanNahwu('${arabAman}', '${nahwuAman}')">
                        <td class="sel-arti">${arti}</td>
                        <td class="sel-arab font-arab">${baris.arab}</td>
                     </tr>`;
        });
        html += `       </tbody>
                    </table>
                 </div>`;
    });
    kontenTabel.innerHTML = html;
}

window.tampilkanNahwu = function(arab, nahwu) {
    teksArabModal.innerText = arab;
    teksNahwu.innerText = nahwu;
    modalNahwu.classList.remove('sembunyi');
    setTimeout(() => modalNahwu.classList.add('tampil'), 10);
}

tutupModal.onclick = () => {
    modalNahwu.classList.remove('tampil');
    setTimeout(() => modalNahwu.classList.add('sembunyi'), 300);
}

window.onclick = (event) => { 
    if (event.target == modalNahwu) {
        modalNahwu.classList.remove('tampil');
        setTimeout(() => modalNahwu.classList.add('sembunyi'), 300);
    }
}

tombolKembali.onclick = () => {
    isiKitab.classList.add('sembunyi');
    menuKitab.classList.remove('sembunyi');
}

pilihBahasa.onchange = renderTabel;

// Inisialisasi mulai dari sini
if (window.dataKitab) {
    muatMenu();
}
