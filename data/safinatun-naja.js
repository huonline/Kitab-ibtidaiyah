/* =====================================================================
   SAFINATUN NAJA
   ---------------------------------------------------------------------
   CARA MENAMBAH FASHL
   1. Salin satu blok "Fashl" di bawah (dari tanda { sampai }, ).
   2. Tempel di dalam daftar fashl: [ ... ], urut sesuai kitab.
   3. Ganti isinya. Jangan lupa koma di akhir tiap blok.

   KETERANGAN ISIAN
   judul     : judul (Latin), tampil di daftar
   ar        : judul dalam Arab (tanpa tulisan "فصل")
   lat       : kata kunci Latin untuk pencarian (boleh beberapa kata)
   tanpaFashl: true -> judul tidak diawali kata "فصل" (untuk muqaddimah)
   lines     : daftar kalimat. Satu kalimat = satu blok { ar, sd, id }
                 ar = teks Arab    sd = Lugot Sunda    id = Indonesia
               Isi null kalau belum diisi.
   catatan   : penjelasan di bawah fashl (boleh dihapus).
               Tiap paragraf = satu teks di dalam [ ].
   ===================================================================== */

(window.KITAB = window.KITAB || []).push({

  judul: "Safinatun Naja",
  ar:    "سَفِينَةُ النَّجَا",
  ket:   "Fikih dasar",

  fashl: [

    /* ---------------------- Muqaddimah ---------------------- */
    {
      judul: "Muqaddimah",
      ar:    "مُقَدِّمَةٌ",
      lat:   "muqaddimah pembukaan hamdalah shalawat hauqalah",
      tanpaFashl: true,

      lines: [
        {
          ar: "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ",
          sd: "Ari sagala puji éta kagungan Allah, Pangéran sakabéh alam.",
          id: "Segala puji bagi Allah, Tuhan semesta alam.",
        },
        {
          ar: "وَبِهِ نَسْتَعِينُ عَلَى أُمُورِ الدُّنْيَا وَالدِّينِ",
          sd: "Jeung ku Anjeun-Na urang neneda pitulung kana urusan dunya jeung agama.",
          id: "Dan kepada-Nya kami memohon pertolongan atas urusan dunia dan agama.",
        },
        {
          ar: "وَصَلَّى اللهُ وَسَلَّمَ عَلَى سَيِّدِنَا مُحَمَّدٍ خَاتَمِ النَّبِيِّينَ",
          sd: "Jeung muga Allah maparin rahmat jeung salam ka junjungan urang, Nabi Muhammad, panutup para nabi.",
          id: "Semoga Allah melimpahkan selawat dan salam kepada junjungan kita, Nabi Muhammad, penutup para nabi.",
        },
        {
          ar: "وَآلِهِ وَصَحْبِهِ أَجْمَعِينَ",
          sd: "Sarta ka kulawarga jeung sahabat-sahabatna sakabéhna.",
          id: "Serta kepada keluarga dan seluruh sahabatnya.",
        },
        {
          ar: "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ",
          sd: "Jeung euweuh daya jeung euweuh kakuatan iwal ku pitulung Allah Nu Maha Luhur, Nu Maha Agung.",
          id: "Tiada daya dan tiada kekuatan kecuali dengan pertolongan Allah Yang Mahatinggi lagi Mahaagung.",
        },
      ],

      catatan: {
        sd: ["Muqaddimah dimimitian ku pujian ka Allah (hamdalah), salawat ka Nabi, jeung kalimah hawqalah (lā ḥawla wa lā quwwata illā billāh)."],
        id: ["Muqaddimah dibuka dengan pujian kepada Allah (hamdalah), selawat kepada Nabi, dan kalimat hawqalah (lā ḥawla wa lā quwwata illā billāh)."],
      },
    },

    /* ---------------------- Rukun Islam ---------------------- */
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

    /* ---------------------- Rukun Iman ---------------------- */
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
        /* PERIKSA: kata "وَرُسُلِهِ" tidak terlihat jelas di gambar naskah, saya tambahkan sesuai matan umumnya (rukun iman ada enam). Hapus bila naskah Anda memang tidak memuatnya. */
        {
          ar: "وَرُسُلِهِ",
          sd: "Jeung ka rasul-rasul-Na.",
          id: "Dan kepada rasul-rasul-Nya.",
        },
        {
          ar: "وَبِالْيَوْمِ الْآخِرِ",
          sd: "Jeung ka poé ahir.",
          id: "Dan kepada hari akhir.",
        },
        {
          ar: "وَبِالْقَدَرِ خَيْرِهِ وَشَرِّهِ مِنَ اللهِ تَعَالَى",
          sd: "Jeung ka takdir, anu hadé jeung anu goréng, ti Allah Ta’ala.",
          id: "Dan kepada takdir, yang baik dan yang buruk, dari Allah Ta’ala.",
        },
      ],

      catatan: {
        sd: ["Iman nyaéta ngayakinan dina haté, ngucapkeun ku létah, jeung ngamalkeun ku anggota awak."],
        id: ["Iman adalah meyakini dalam hati, mengucapkan dengan lisan, dan mengamalkan dengan anggota badan."],
      },
    },

    /* ---------------------- Makna Lā ilāha illallāh ---------------------- */
    {
      judul: "Makna Lā ilāha illallāh",
      ar:    "مَعْنَى لَا إِلٰهَ إِلَّا اللهُ",
      lat:   "makna la ilaha illallah",

      lines: [
        {
          ar: "وَمَعْنَى لَا إِلٰهَ إِلَّا اللهُ",
          sd: "Jeung harti 'lā ilāha illallāh' éta:",
          id: "Dan makna lā ilāha illallāh adalah:",
        },
        {
          ar: "لَا مَعْبُودَ بِحَقٍّ فِي الْوُجُودِ إِلَّا اللهُ",
          sd: "Euweuh anu disembah kalawan bener dina wujud iwal Allah.",
          id: "Tidak ada sesembahan yang berhak disembah dalam wujud ini selain Allah.",
        },
      ],

      catatan: {
        sd: ["Kecap 'kalawan bener' (bi-ḥaqq) penting: dina kanyataan aya anu disembah salian ti Allah, tapi ukur Allah anu pantes disembah."],
        id: ["Kata “dengan hak” (bi-ḥaqq) penting: dalam kenyataan ada yang disembah selain Allah, tetapi hanya Allah yang berhak disembah."],
      },
    },

    /* ---------------------- Tanda-tanda Baligh ---------------------- */
    {
      judul: "Tanda-tanda Baligh",
      ar:    "عَلَامَاتُ الْبُلُوغِ",
      lat:   "alamatul buluugh tanda baligh",

      lines: [
        {
          ar: "عَلَامَاتُ الْبُلُوغِ ثَلَاثٌ",
          sd: "Ari tanda-tanda baligh, éta tilu.",
          id: "Tanda-tanda baligh ada tiga.",
        },
        {
          ar: "تَمَامُ خَمْسَ عَشْرَةَ سَنَةً فِي الذَّكَرِ وَالْأُنْثَى",
          sd: "(Nu kahiji) sampurna lima welas taun, boh dina lalaki boh dina awéwé.",
          id: "(Pertama) genap lima belas tahun, baik pada laki-laki maupun perempuan.",
        },
        {
          ar: "وَالِاحْتِلَامُ فِي الذَّكَرِ وَالْأُنْثَى لِتِسْعِ سِنِينَ",
          sd: "Jeung ihtilam (ngimpi basa) dina lalaki jeung awéwé, pikeun umur salapan taun.",
          id: "Dan ihtilam (mimpi basah) pada laki-laki dan perempuan, pada usia sembilan tahun.",
        },
        {
          ar: "وَالْحَيْضُ فِي الْأُنْثَى لِتِسْعِ سِنِينَ",
          sd: "Jeung haid dina awéwé, pikeun umur salapan taun.",
          id: "Dan haid pada perempuan, pada usia sembilan tahun.",
        },
      ],

      catatan: {
        sd: ["Baligh téh wates mimiti hiji jalma kakenaan kawajiban agama (mukallaf). Umur dina ieu bab dihitung ku taun qamariyah (hijriah)."],
        id: ["Baligh adalah batas seseorang mulai terkena kewajiban agama (mukallaf). Usia dalam bab ini dihitung dengan tahun qamariyah (hijriah)."],
      },
    },

    /* ---------------------- Syarat Istinja dengan Batu ---------------------- */
    {
      judul: "Syarat Cukupnya Istinja dengan Batu",
      ar:    "شُرُوطُ إِجْزَاءِ الْحَجَرِ",
      lat:   "syuruth ijzaul hajar istinja batu",

      lines: [
        {
          ar: "شُرُوطُ إِجْزَاءِ الْحَجَرِ ثَمَانِيَةٌ",
          sd: "Ari syarat-syarat cukupna batu, éta dalapan.",
          id: "Syarat cukupnya (sahnya) istinja dengan batu ada delapan.",
        },
        {
          ar: "أَنْ يَكُونَ بِثَلَاثَةِ أَحْجَارٍ",
          sd: "Yén dilaksanakeun ku tilu batu.",
          id: "Dilakukan dengan tiga batu.",
        },
        {
          ar: "وَأَنْ يُنَقِّيَ الْمَحَلَّ",
          sd: "Jeung yén batuna ngabersihkeun tempatna.",
          id: "Dan batu itu membersihkan tempat keluarnya najis.",
        },
        {
          ar: "وَأَنْ لَا يَجِفَّ النَّجَسُ",
          sd: "Jeung yén najisna can garing.",
          id: "Dan najisnya belum kering.",
        },
        {
          ar: "وَلَا يَنْتَقِلَ",
          sd: "Jeung (najisna) henteu ngalih ti tempatna.",
          id: "Dan (najisnya) tidak berpindah dari tempatnya.",
        },
        {
          ar: "وَلَا يَطْرَأَ عَلَيْهِ آخَرُ",
          sd: "Jeung henteu datang najis séjén kana éta.",
          id: "Dan tidak datang najis lain padanya.",
        },
        {
          ar: "وَلَا يُجَاوِزَ صَفْحَتَهُ وَحَشَفَتَهُ",
          sd: "Jeung (najisna) henteu ngaliwatan sisi bujurna jeung sirah kémaluan lalaki.",
          id: "Dan (najisnya) tidak melampaui bagian samping pantat dan kepala zakar.",
        },
        {
          ar: "وَلَا يُصِيبَهُ مَاءٌ",
          sd: "Jeung henteu kenging cai.",
          id: "Dan tidak terkena air.",
        },
        {
          ar: "وَأَنْ تَكُونَ الْأَحْجَارُ طَاهِرَةً",
          sd: "Jeung yén batu-batuna suci.",
          id: "Dan batu-batu itu suci.",
        },
      ],

      catatan: {
        sd: ["Istinja ku batu (istijmar) cukup lamun dalapan syarat ieu kacumponan. Lamun aya anu teu kacumponan, wajib maké cai. Barang séjén kawas tisu bisa ngagantikeun batu lamun sifatna sarua (suci, garihal, jeung lain barang anu dimulyakeun)."],
        id: ["Istinja dengan batu (istijmar) mencukupi bila kedelapan syarat ini terpenuhi. Jika ada yang tidak terpenuhi, wajib memakai air. Benda lain seperti tisu dapat menggantikan batu bila sifatnya sama (suci, kesat, dan bukan benda yang dimuliakan)."],
      },
    },

    /* ---------------------- Fardu Wudu ---------------------- */
    {
      judul: "Fardu Wudu",
      ar:    "فُرُوضُ الْوُضُوءِ",
      lat:   "furudhul wudhu fardu wudu",

      lines: [
        {
          ar: "فُرُوضُ الْوُضُوءِ سِتَّةٌ",
          sd: "Ari fardu-fardu wudu, éta genep.",
          id: "Fardu wudu ada enam.",
        },
        {
          ar: "الْأَوَّلُ : النِّيَّةُ",
          sd: "Anu kahiji: niat.",
          id: "Pertama: niat.",
        },
        {
          ar: "الثَّانِي : غَسْلُ الْوَجْهِ",
          sd: "Anu kadua: ngabasuh beungeut.",
          id: "Kedua: membasuh wajah.",
        },
        {
          ar: "الثَّالِثُ : غَسْلُ الْيَدَيْنِ مَعَ الْمِرْفَقَيْنِ",
          sd: "Anu katilu: ngabasuh dua leungeun jeung dua siku.",
          id: "Ketiga: membasuh kedua tangan beserta kedua siku.",
        },
        {
          ar: "الرَّابِعُ : مَسْحُ شَيْءٍ مِنَ الرَّأْسِ",
          sd: "Anu kaopat: ngusap sabagian tina sirah.",
          id: "Keempat: mengusap sebagian kepala.",
        },
        {
          ar: "الْخَامِسُ : غَسْلُ الرِّجْلَيْنِ مَعَ الْكَعْبَيْنِ",
          sd: "Anu kalima: ngabasuh dua suku jeung dua mata suku.",
          id: "Kelima: membasuh kedua kaki beserta kedua mata kaki.",
        },
        {
          ar: "السَّادِسُ : التَّرْتِيبُ",
          sd: "Anu kagenep: tertib (nurutan runtuyna).",
          id: "Keenam: tertib (berurutan).",
        },
      ],

      catatan: {
        sd: ["Niat dina haté, dibarengkeun jeung ngamimitian ngabasuh beungeut. Ngusap sirah cukup sabagian, sanajan ukur sababaraha lambar buuk (dina mazhab Syafi’i)."],
        id: ["Niat dilakukan di dalam hati, bersamaan dengan awal membasuh wajah. Mengusap kepala cukup sebagian, meski hanya beberapa helai rambut (dalam mazhab Syafi’i)."],
      },
    },

  ],
});
