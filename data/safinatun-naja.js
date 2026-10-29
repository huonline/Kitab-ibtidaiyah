/* =====================================================================
   SAFINATUN NAJA
   ---------------------------------------------------------------------
   CARA MENAMBAH FASHL
   1. Salin satu blok "Fashl" di bawah (dari tanda { sampai }, ).
   2. Tempel di dalam daftar fashl: [ ... ], urut sesuai kitab.
   3. Ganti isinya. Jangan lupa koma di akhir tiap blok.

   KETERANGAN ISIAN
   judul  : judul fashl (Latin), tampil di daftar
   ar     : judul fashl dalam Arab (tanpa tulisan "فصل")
   lat    : kata kunci Latin untuk pencarian (boleh beberapa kata)
   lines  : daftar kalimat. Satu kalimat = satu blok { ar, sd, id }
              ar = teks Arab    sd = Lugot Sunda    id = Indonesia
            Isi null kalau fashl belum diisi.
   catatan: penjelasan di bawah fashl (boleh dikosongkan / dihapus).
            Tiap paragraf = satu teks di dalam [ ].
   ===================================================================== */

(window.KITAB = window.KITAB || []).push({

  judul: "Safinatun Naja",
  ar:    "سَفِينَةُ النَّجَا",
  ket:   "Fikih dasar",

  fashl: [

    /* ---------------------- Fashl 1 : Rukun Islam ---------------------- */
    {
      judul: "Rukun Islam",
      ar:    "أَرْكَانُ الْإِسْلَامِ",
      lat:   "arkanul islam rukun islam",

      lines: [
        {
          ar: "أَرْكَانُ الْإِسْلَامِ خَمْسَةٌ",
          sd: "Ari rukun Islam, éta lima perkara.",
          id: "Rukun Islam itu ada lima.",
        },
        {
          ar: "شَهَادَةُ أَنْ لَا إِلٰهَ إِلَّا اللهُ",
          sd: "Éta (nu kahiji) kasaksian yén euweuh pangeran iwal Allah.",
          id: "(Yang pertama) kesaksian bahwa tidak ada tuhan selain Allah.",
        },
        {
          ar: "وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ",
          sd: "Jeung yakin yén Muhammad éta utusan Allah.",
          id: "Dan bahwasanya Muhammad adalah utusan Allah.",
        },
        {
          ar: "وَإِقَامُ الصَّلَاةِ",
          sd: "Jeung ngadegkeun salat.",
          id: "Dan mendirikan salat.",
        },
        {
          ar: "وَإِيتَاءُ الزَّكَاةِ",
          sd: "Jeung méré zakat.",
          id: "Dan menunaikan zakat.",
        },
        {
          ar: "وَصَوْمُ رَمَضَانَ",
          sd: "Jeung puasa Ramadan.",
          id: "Dan puasa Ramadan.",
        },
        {
          ar: "وَحَجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا",
          sd: "Jeung haji ka Baitullah, pikeun jalma anu mampuh jalan ka dinya.",
          id: "Dan haji ke Baitullah bagi orang yang mampu menempuh jalan ke sana.",
        },
      ],

      catatan: {
        sd: [
          "Rukun Islam téh lima perkara pokok anu jadi dasar kaislaman hiji jalma. Syahadat jadi lawang asup Islam; satuluyna muslim wajib nagakkeun salat lima waktu, mikeun zakat, puasa dina bulan Ramadan, jeung haji ka Baitullah lamun mampuh.",
          "Mampuh dina haji hartina boga bekel jeung aman dina perjalanan.",
        ],
        id: [
          "Rukun Islam adalah lima perkara pokok yang menjadi dasar keislaman seseorang. Syahadat menjadi pintu masuk Islam; setelah itu seorang muslim wajib menegakkan salat lima waktu, menunaikan zakat, berpuasa di bulan Ramadan, dan berhaji ke Baitullah bila mampu.",
          "Mampu dalam haji berarti memiliki bekal dan aman dalam perjalanan.",
        ],
      },
    },

    /* ---------------------- Fashl 2 : Rukun Iman ----------------------- */
    {
      judul: "Rukun Iman",
      ar:    "أَرْكَانُ الْإِيمَانِ",
      lat:   "arkanul iman rukun iman",

      lines: [
        {
          ar: "أَرْكَانُ الْإِيمَانِ سِتَّةٌ",
          sd: "Rukun iman éta genep perkara.",
          id: "Rukun iman itu ada enam.",
        },
        {
          ar: "أَنْ تُؤْمِنَ بِاللهِ",
          sd: "Yén anjeun percaya ka Allah.",
          id: "Engkau beriman kepada Allah.",
        },
        {
          ar: "وَمَلَائِكَتِهِ",
          sd: "Jeung ka malaikat-malaikat-Na.",
          id: "Dan kepada malaikat-malaikat-Nya.",
        },
        {
          ar: "وَكُتُبِهِ",
          sd: "Jeung ka kitab-kitab-Na.",
          id: "Dan kepada kitab-kitab-Nya.",
        },
        {
          ar: "وَرُسُلِهِ",
          sd: "Jeung ka rasul-rasul-Na.",
          id: "Dan kepada rasul-rasul-Nya.",
        },
        {
          ar: "وَالْيَوْمِ الْآخِرِ",
          sd: "Jeung ka poé ahir.",
          id: "Dan kepada hari akhir.",
        },
        {
          ar: "وَالْقَدَرِ خَيْرِهِ وَشَرِّهِ مِنَ اللهِ تَعَالَى",
          sd: "Jeung ka takdir, anu hadé jeung anu goréng, ti Allah Ta’ala.",
          id: "Dan kepada takdir, yang baik dan yang buruk, dari Allah Ta’ala.",
        },
      ],

      catatan: {
        sd: ["Iman nyaéta ngayakinan dina haté, ngucapkeun ku létah, jeung ngamalkeun ku anggota awak."],
        id: ["Iman adalah meyakini dalam hati, mengucapkan dengan lisan, dan mengamalkan dengan anggota badan."],
      },
    },

    /* ------------- Fashl 3 : Makna Lā ilāha illallāh (kosong) ------------- */
    {
      judul: "Makna Lā ilāha illallāh",
      ar:    "مَعْنَى لَا إِلٰهَ إِلَّا اللهُ",
      lat:   "makna la ilaha illallah",
      lines: null,
    },

  ],
});
