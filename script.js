// Mengambil elemen HTML
const menuKitab = document.getElementById('menu-kitab');
const isiKitab = document.getElementById('isi-kitab');
const judulKitab = document.getElementById('judul-kitab');
const kontenTabel = document.getElementById('konten-tabel');
const tombolKembali = document.getElementById('tombol-kembali');
const pilihBahasa = document.getElementById('pilih-bahasa');
const modalNahwu = document.getElementById('modal-nahwu');
const teksNahwu = document.getElementById('teks-nahwu');
const tutupModal = document.querySelector('.tutup-modal');

let kitabAktif = '';

// 1. Tampilkan Menu Utama
function muatMenu() {
    menuKitab.innerHTML = '';
    for (let id in dataKitab) {
        const kartu = document.createElement('div');
        kartu.className = 'kartu-kitab';
        kartu.innerText = dataKitab[id].judul;
        kartu.onclick = () => bukaKitab(id);
        menuKitab.appendChild(kartu);
    }
}

// 2. Buka Kitab Spesifik
function bukaKitab(id) {
    kitabAktif = id;
    menuKitab.classList.add('sembunyi');
    isiKitab.classList.remove('sembunyi');
    judulKitab.innerText = dataKitab[id].judul;
    renderTabel();
}

// 3. Render Tabel Terjemahan
function renderTabel() {
    const bahasa = pilihBahasa.value;
    const fashalData = dataKitab[kitabAktif].fashal;
    let html = '';

    fashalData.forEach(f => {
        html += `<div class="fashal-container">
                    <h3 class="fashal-judul">${f.namaFashal}</h3>`;
        f.isi.forEach(baris => {
            const arti = bahasa === 'sunda' ? baris.sunda : baris.indo;
            // Menambahkan event onclick langsung ke baris untuk pop-up Nahwu
            html += `<div class="baris-terjemah" onclick="tampilkanNahwu('${baris.nahwu}')">
                        <div class="kolom-arti">${arti}</div>
                        <div class="kolom-arab">${baris.arab}</div>
                     </div>`;
        });
        html += `</div>`;
    });
    kontenTabel.innerHTML = html;
}

// 4. Pop-up Modal Nahwu
window.tampilkanNahwu = function(nahwu) {
    teksNahwu.innerText = nahwu;
    modalNahwu.classList.remove('sembunyi');
}
tutupModal.onclick = () => modalNahwu.classList.add('sembunyi');
window.onclick = (event) => { if (event.target == modalNahwu) modalNahwu.classList.add('sembunyi'); }

// 5. Interaksi Tombol
tombolKembali.onclick = () => {
    isiKitab.classList.add('sembunyi');
    menuKitab.classList.remove('sembunyi');
}
pilihBahasa.onchange = renderTabel;

// Inisialisasi awal
muatMenu();
