
    // ==========================================
    // CASE DATABASE (INJECTED FROM JSON)
    // ==========================================
    const CASE_DATA = /* __CASE_DATA_PLACEHOLDER__ */ [];

    // ==========================================
    // SECTION 1: MASTER I18N & DATABASE
    // ==========================================
    // ARALUNA: Arsip Pembunuhan Tak Terpecahkan
// Master Engine Data & I18N Dictionaries (Atmospheric Noir, Deductive Focus, Human Voice)

const I18N = {
  id: {
    mainSub: "Arsip Pembunuhan Tak Terpecahkan",
    btnNewGame: "🕵️ Buka Lembaran Kasus Baru",
    btnContinue: "⏩ Lanjutkan Penyelidikan",
    btnLoad: "📂 Buka Arsip Simpanan (Save Slots)",
    btnLibrary: "🗄️ Case Library (102 Kasus Nyata)",
    btnSettings: "⚙️ Pengaturan & Bahasa",
    btnCredits: "📜 Catatan Kurator & Tim",
    btnReset: "🗑️ Bersihkan Seluruh Berkas",
    navGame: "Ruang Investigasi",
    navLibrary: "Case Library (102)",
    navDeduction: "Papan Deduksi",
    navLog: "Catatan Percakapan",
    navSave: "Simpan Kasus",
    hotspotBtn: "Amati Detail Ruangan",
    hotspotCloseBtn: "Tutup Pengamatan",
    ctrlNext: "Lanjut",
    ctrlSkip: "Skip",
    ctrlLog: "Log",
    ctrlDossier: "Dossier",
    dossierBtnTxt: "Berkas [D]",
    ctrlQSave: "Simpan Cepat",
    ctrlLoad: "Muat",
    ctrlCheckpoint: "Checkpoint",
    lblVoiceStyle: "GAYA SUARA BICARA KARAKTER (DIALOGUE VOCALIZATION):",
    focusTitle: "KETAJAMAN PIKIRAN ARUN",
    chapTitle: "Bab 1: Jejak Pertama",
    cluesTitle: "CATATAN BUKTI & PETUNJUK",
    emptyClues: "Gunakan 'Amati Detail Ruangan' untuk meneliti kejanggalan di sekitar TKP.",
    suspectsTitle: "SAKSI & PIHAK TERKAIT",
    deductTitle: "THE MIND PALACE (PAPAN DEDUKSI)",
    deductSub: "Rangkai dua pengamatan janggal menjadi sebuah kesimpulan logis. Logika yang kokoh akan meruntuhkan alibi palsu.",
    btnSynthesize: "TARIK KESIMPULAN DEDUKSI",
    trayTitle: "PILIH DUA PETUNJUK UNTUK DIHUBUNGKAN:",
    historyTitle: "KESIMPULAN LOGIS YANG TELAH TERBUKTI:",
    noDeductions: "Belum ada korelasi yang terhubung. Temukan petunjuk tersembunyi lalu sandingkan di sini.",
    libTitle: "ARSIP KASUS TAK TERPECAHKAN DUNIA",
    libSub: "Dokumentasi 102 misteri pembunuhan nyata dari 5 benua (1800-an hingga 2020-an) berdasarkan pengetahuan umum dan data historis terkurasi. Menyoroti anomali TKP, deduksi forensik, dan teka-teki logika.",
    showing: "Menampilkan",
    ofTotal: "dari 102 kasus sejarah",
    cardClickHint: "Klik map untuk membuka berkas rahasia kasus",
    filterReg: "WILAYAH / BENUA:",
    filterStat: "STATUS BERKAS:",
    tipDesk: "Meja Kayu Mahoni & Mesin Tik Antik",
    tipTeacup: "Cangkir Porselen Berisi Kopi Dingin",
    tipFireplace: "Perapian Meredup & Abu Kertas",
    tipDoor: "Pintu Masuk Tanpa Kerusakan Paksa",
    tipClock: "Jam Dinding Tua Berhenti",
    cpToastTitle: "Titik Checkpoint Tersimpan",
    cpBannerTitle: "TITIK KILAS BALIK TERAKHIR",
    cpBannerLoad: "Kembali ke Titik Ini",
    timerRemaining: "Sisa Waktu Penyelidikan:",
    timerWarning: "WAKTU MENDESAK: Jejak tersangka kian memudar di pelabuhan!"
  },
  en: {
    mainSub: "Unsolved Homicide Dossiers",
    btnNewGame: "🕵️ Unseal New Investigation",
    btnContinue: "⏩ Resume Case",
    btnLoad: "📂 Load Case Files (Save Slots)",
    btnLibrary: "🗄️ Case Library (102 Historical Cases)",
    btnSettings: "⚙️ Settings & Language",
    btnCredits: "📜 Curatorial Notes & Credits",
    btnReset: "🗑️ Wipe Investigation Data",
    navGame: "Active Scene",
    navLibrary: "Case Library (102)",
    navDeduction: "Deduction Board",
    navLog: "Dialogue Ledger",
    navSave: "Save Docket",
    hotspotBtn: "Examine Environment",
    hotspotCloseBtn: "End Scene Search",
    ctrlNext: "Proceed",
    ctrlSkip: "Skip",
    ctrlLog: "Log",
    ctrlDossier: "Dossier",
    dossierBtnTxt: "Dossier [D]",
    ctrlQSave: "Quick Save",
    ctrlLoad: "Load",
    ctrlCheckpoint: "Checkpoint",
    lblVoiceStyle: "CHARACTER DIALOGUE VOCALIZATION STYLE:",
    focusTitle: "ARUN'S MENTAL ACUITY",
    chapTitle: "Chapter 1: The First Scent",
    cluesTitle: "OBSERVED EVIDENCE & NOTES",
    emptyClues: "Use 'Examine Environment' to unearth subtle anomalies across the scene.",
    suspectsTitle: "WITNESSES & PERSONS OF INTEREST",
    deductTitle: "THE MIND PALACE DEDUCTION BOARD",
    deductSub: "Weave two distinct observations into an inescapable conclusion. Cold deductive logic tears through fabricated alibis.",
    btnSynthesize: "SYNTHESIZE DEDUCTION",
    trayTitle: "SELECT TWO CLUES TO INTERLOCK:",
    historyTitle: "VERIFIED DEDUCTIVE REVELATIONS:",
    noDeductions: "No deductions synthesized yet. Scour the room for quiet anomalies, then bring them to this board.",
    libTitle: "GLOBAL UNSOLVED HOMICIDE ARCHIVES",
    libSub: "Curated historical dossiers of 102 true cold cases across 5 continents (1800s-2020s) based on general knowledge and historical criminological records. Exploring crime scene anomalies, cryptographic riddles, and forensic science.",
    showing: "Displaying",
    ofTotal: "of 102 documented cases",
    cardClickHint: "Click any folder to open the confidential case brief",
    filterReg: "REGION / CONTINENT:",
    filterStat: "INVESTIGATION STATUS:",
    tipDesk: "Mahogany Desk & Vintage Typewriter",
    tipTeacup: "Porcelain Teacup with Untouched Cold Brew",
    tipFireplace: "Dying Embers & Paper Ash",
    tipDoor: "Pristine Oak Door (No Forced Entry)",
    tipClock: "Grandfather Clock Frozen in Time",
    cpToastTitle: "Investigation Checkpoint Logged",
    cpBannerTitle: "LAST ACTIVE CHECKPOINT",
    cpBannerLoad: "Restore This Snapshot",
    timerRemaining: "Investigation Time Remaining:",
    timerWarning: "TIME RUNNING THIN: The trail is dissolving into the harbor fog!"
  },
  id_gaul: {
    mainSub: "Arsip Pembunuhan Tak Terpecahkan",
    btnNewGame: "🕵️ Buka Kasus Baru",
    btnContinue: "⏩ Lanjutin Nyari Jejak",
    btnLoad: "📂 Buka Berkas Catetan (Save Slots)",
    btnLibrary: "🗄️ Case Library (102 Kasus Nyata)",
    btnSettings: "⚙️ Setelan & Bahasa",
    btnCredits: "📜 Yang Bikin Game",
    btnReset: "🗑️ Bersihin Semua Data",
    navGame: "Olah TKP",
    navLibrary: "Case Library (102)",
    navDeduction: "Papan Deduksi",
    navLog: "Catetan Ngobrol",
    navSave: "Simpen",
    hotspotBtn: "Ubek-Ubek Sudut Ruangan",
    hotspotCloseBtn: "Selesai Ngubek",
    ctrlNext: "Lanjut",
    ctrlSkip: "Skip",
    ctrlLog: "Log",
    ctrlDossier: "Berkas",
    dossierBtnTxt: "Berkas [D]",
    ctrlQSave: "Save Cepet",
    ctrlLoad: "Muat",
    ctrlCheckpoint: "Checkpoint",
    lblVoiceStyle: "GAYA SUARA NGOMONG KARAKTER (VOICE FX):",
    focusTitle: "KETAJAMAN KEPALA ARUN",
    chapTitle: "Bab 1: Jejak Pertama",
    cluesTitle: "BARANG BUKTI & KEJANGGALAN",
    emptyClues: "Pencet 'Ubek-Ubek Sudut Ruangan' buat nemuin hal janggal nyelip di TKP.",
    suspectsTitle: "SAKSI & ORANG-ORANG DICURIGAIN",
    deductTitle: "PAPAN DEDUKSI (THE MIND PALACE)",
    deductSub: "Jodohin dua kejanggalan biar dapet kesimpulan waras. Logika tajem bakal bikin alibi palsu rontok seketika.",
    btnSynthesize: "RANGKAI DEDUKSI LOGIS",
    trayTitle: "PILIH DUA BUKTI BUAT DIJODOHIN:",
    historyTitle: "KESIMPULAN NYATA NYANG UDAH KEBONGKAR:",
    noDeductions: "Belom ada kesimpulan nyambung. Kumpulin bukti di ruangan trus racik di sini.",
    libTitle: "ARSIP KASUS MISTERI DUNIA",
    libSub: "Kompilasi 102 kasus nyata sedunia dari 5 benua (1800-an ampe 2020-an) berdasarkan pengetahuan umum dan arsip kriminologi. Isinya fakta sejarah lapangan, sandi, ama teka-teki logika.",
    showing: "Nampilin",
    ofTotal: "dari 102 kasus tercatat",
    cardClickHint: "Klik map berkas buat buka isi dokumen intel",
    filterReg: "BENUA / KAWASAN:",
    filterStat: "STATUS KASUS:",
    tipDesk: "Meja Kayu Mahoni & Mesin Tik Tua",
    tipTeacup: "Cangkir Kopi Anyep Kaga Disentuh",
    tipFireplace: "Perapian Padam & Abu Kertas",
    tipDoor: "Pintu Jati Mulus Kaga Ada Bekas Congkel",
    tipClock: "Jam Bandul Dinding Mati",
    cpToastTitle: "Checkpoint Ke-Save",
    cpBannerTitle: "CHECKPOINT TERAKHIR NYANG AKTIF",
    cpBannerLoad: "Balik ke Titik Ini",
    timerRemaining: "Sisa Waktu Nyelidik:",
    timerWarning: "WAKTU MEFET BANGET: Jejak pelakunya keburu ilang di dermaga!"
  }
};

const CHAPTER_INFO = {
  1: {
    number: 1,
    title: {
      id: "Bab 1: Jejak Pertama",
      en: "Chapter 1: The First Scent",
      id_gaul: "Bab 1: Jejak Pertama"
    },
    location: {
      id: "Ruang Kerja Daniel Baskara (Tengah Malam, Gemuruh Badai)",
      en: "Daniel Baskara's Private Study (Midnight, Raging Storm)",
      id_gaul: "Ruang Kerja Daniel Baskara (Tengah Malem, Badai Petir)"
    },
    summary: {
      id: "Wartawan investigasi Daniel Baskara ditemukan tak bernyawa di balik meja kerjanya yang terkunci. Sebuah lambang sandi terukir halus di telapak tangannya.",
      en: "Investigative journalist Daniel Baskara lies lifeless in his locked study. A delicate cryptographic seal is carved into his open palm.",
      id_gaul: "Wartawan Daniel Baskara ditemukan kaku di balik meja kerjanya nyang kekunci. Ada lambang sandi halus terukir di telapak tangannya."
    },
    inspiration: "Zodiac Killer (1968) & Jack the Ripper (1888)"
  },
  2: {
    number: 2,
    title: {
      id: "Bab 2: Saksi Bisu",
      en: "Chapter 2: Silent Witnesses",
      id_gaul: "Bab 2: Saksi Bisu"
    },
    location: {
      id: "Gedung Surat Kabar Metro & Grand Harbor Club",
      en: "Metro Newspaper Headquarters & Grand Harbor Club",
      id_gaul: "Kantor Berita Metro & Grand Harbor Club"
    },
    summary: {
      id: "Anomali di rumah Daniel mengungkap bahwa pelaku berdiam diam-diam selama berhari-hari. Interogasi 4 saksi menyingkap tabir kepentingan yang saling bersilang.",
      en: "Anomalies in Daniel's home reveal the intruder quietly nested inside for days. Interrogating 4 key figures lays bare a web of conflicting motives.",
      id_gaul: "Kejanggalan di rumah Daniel ngebuktiin si pelaku sempet nginep diam-diam beberapa hari. Obrolan ama 4 saksi bikin belang mereka kebongkar pelan-pelan."
    },
    inspiration: "Pembunuhan Keluarga Setagaya (2000) & Hinterkaifeck (1922)"
  },
  3: {
    number: 3,
    title: {
      id: "Bab 3: Bayangan Masa Lalu",
      en: "Chapter 3: Shadows of the Past",
      id_gaul: "Bab 3: Bayangan Masa Lalu"
    },
    location: {
      id: "Gudang Arsip Bawah Tanah & Lab Forensik",
      en: "Daniel's Secret Archives & Underground Forensic Lab",
      id_gaul: "Gudang Arsip Bawah Tanah & Lab Forensik"
    },
    summary: {
      id: "Penyelidikan berakar pada skandal medis tak terpecahkan 20 tahun silam—sebuah kasus pembedahan dingin yang ditutupi oleh kalangan elite kota.",
      en: "The case traces back to a 20-year-old cold case—a calculated surgical cover-up buried by the city's highest social echelon.",
      id_gaul: "Kasus ini ternyata punya akar panjang ke tragedi 20 taun lalu—skandal bedah dingin nyang sengaja dipetieskan ama petinggi kota."
    },
    inspiration: "Black Dahlia (1947) & Kasus Mutilasi Setiabudi 13 (1981)"
  },
  4: {
    number: 4,
    title: {
      id: "Bab 4: Konfrontasi",
      en: "Chapter 4: The Reckoning",
      id_gaul: "Bab 4: Konfrontasi Puncak"
    },
    location: {
      id: "Dermaga Gudang 7 & Menara Jam Tua Pelabuhan",
      en: "Harbor Wharf Shed 7 & Old Clock Tower",
      id_gaul: "Dermaga Gudang 7 & Menara Jam Tua Pelabuhan"
    },
    summary: {
      id: "Pertemuan penentuan di dermaga berkabut sebelum kapal pelarian berlayar. Deduksi logis yang dirangkai pemain menentukan bagaimana keadilan ditegakkan.",
      en: "A midnight reckoning on the fog-drenched pier before the getaway vessel sets sail. Your synthesized logic decides the final verdict of justice.",
      id_gaul: "Pertemuan penentuan di dermaga berkabut sebelom kapal kabur jalan. Racikan logika lu nentuin nasib akhir kasus ini."
    },
    inspiration: "Lord Lucan (1974) & Kasus Marsinah (1993)"
  }
};

const CLUES_DATA = {
  'clue-zodiac-symbol': {
    id: 'clue-zodiac-symbol',
    icon: '⭕',
    name: {
      id: "Ukiran Lambang Sandi di Telapak Tangan",
      en: "Delicate Palm Cipher Inscription",
      id_gaul: "Ukiran Lambang Sandi di Telapak Tangan"
    },
    desc: {
      id: "Lambang lingkaran bersilang ditorehkan halus di telapak tangan Daniel saat ia masih bernapas (antemortem). Garisnya tenang tanpa gemetar, mengingatkan pada gaya sandi Zodiac.",
      en: "A cross-circle monogram etched into Daniel's palm while he was still breathing. The stroke is chillingly steady, reminiscent of the Zodiac Killer's signature cipher.",
      id_gaul: "Lambang bulet silang diukir tenang pas Daniel masih napas (antemortem). Garisnya lurus kaga gemeter, mirip tanda sandi pergeseran Zodiac."
    }
  },
  'clue-typewriter-draft': {
    id: 'clue-typewriter-draft',
    icon: '📄',
    name: {
      id: "Draf Investigasi yang Belum Rampung",
      en: "Unfinished Typewritten Exposé Draft",
      id_gaul: "Draf Liputan nyang Belom Kelar"
    },
    desc: {
      id: "Kertas ketikan pada mesin tik Daniel: 'Kasus dingin 20 tahun lalu bukanlah kekerasan acak di jalan, melainkan pembedahan tenang berencana yang dibungkam rapat oleh konsorsium pelabuhan.'",
      en: "A sheet still rolled in Daniel's platen: 'The cold case from twenty years ago was no drunken street scuffle, but a calculated, sterile procedure sealed away by harbor magnates.'",
      id_gaul: "Kertas ketikan di mesin tik Daniel: 'Kasus dingin 20 taun lalu bukan ribut jalanan, tapi pembedahan terencana rapi nyang ditutup rapat ama konsorsium pelabuhan.'"
    }
  },
  'clue-spare-key': {
    id: 'clue-spare-key',
    icon: '🗝️',
    name: {
      id: "Gantungan Kunci Cadangan yang Kosong",
      en: "Vacant Spare Key Hook",
      id_gaul: "Cantelan Kunci Serep nyang Kosong"
    },
    desc: {
      id: "Kunci kuningan cadangan rumah Daniel raib dari laci pribadinya sejak tiga hari sebelum kejadian. Menandakan seseorang masuk tanpa merusak kunci pintu (anomali Hinterkaifeck).",
      en: "The brass spare door key had gone missing from Daniel's private drawer three days before his death. Pointing to an unforced, quiet entry (Hinterkaifeck anomaly).",
      id_gaul: "Kunci kuningan serep di laci Daniel udah raib tiga hari sebelom kejadian. Berarti orang dalem atau penyusup masuk kaga pake ngerusak pintu (anomali Hinterkaifeck)."
    }
  },
  'clue-icecream-cup': {
    id: 'clue-icecream-cup',
    icon: '🍨',
    name: {
      id: "Cangkir Es Krim Melon di Sudut Dapur",
      en: "Discarded Melon Ice Cream Cup",
      id_gaul: "Bekas Cup Es Krim Melon di Dapur"
    },
    desc: {
      id: "Bekas wadah es krim melon dan sendok kecil diletakkan rapi di meja dapur. Sang penyusup tidak terburu-buru; ia meluangkan waktu tenang di dalam rumah korban (anomali Setagaya).",
      en: "An empty melon ice cream tub and spoon set neatly on the kitchen counter. The intruder did not flee in panic; they stayed behind at unhurried leisure (Setagaya anomaly).",
      id_gaul: "Bekas wadah es krim melon ama sendok ditaro rapi di meja dapur. Pelaku kaga panik buru-buru kabur; dia sempet santai di dalem rumah korban (anomali Setagaya)."
    }
  },
  'clue-attic-footprints': {
    id: 'clue-attic-footprints',
    icon: '👣',
    name: {
      id: "Jejak Debu di Loteng Atas Ruang Kerja",
      en: "Quiet Boot Prints in Attic Dust",
      id_gaul: "Jejak Sepatu di Debu Loteng"
    },
    desc: {
      id: "Jejak sol sepatu bot berdebu di atas bilik plafon tepat di atas meja kerja Daniel. Seseorang berdiam di sana berhari-hari, mengamati jadwal kerja korban melalui celah kisi udara.",
      en: "Faint tread marks in the dense dust above Daniel's ceiling vent. An observer had nested in the crawlspace for days, studying his daily rhythms through the wooden slats.",
      id_gaul: "Jejak sol sepatu di debu loteng pas di atas meja kerja Daniel. Ada orang nyang ngendon di sana berhari-hari, ngintipin rutinitas Daniel lewat lubang ventilasi."
    }
  },
  'clue-chloral-hydrate': {
    id: 'clue-chloral-hydrate',
    icon: '🧪',
    name: {
      id: "Catatan Toksikologi: Sedatif Farmasi",
      en: "Toxicology Ledger: Clinical Sedative",
      id_gaul: "Hasil Toksikologi: Obat Bius Farmasi"
    },
    desc: {
      id: "Kloral hidrat dosis terukur ditemukan di sisa kopi dingin Daniel. Sedatif medis ini lazim dipakai untuk menenangkan pasien sebelum prosedur bedah tertutup pada era lampau.",
      en: "A calculated dose of chloral hydrate detected in Daniel's cold coffee. A medical sedative historically reserved for surgical tranquility in private sanitariums.",
      id_gaul: "Kandungan kloral hidrat dosis pas ditemuin di sisa kopi Daniel. Obat bius medis jadul nyang biasa dipake bikin tenang sebelom operasi di klinik tertutup."
    }
  },
  'clue-syndicate-ledger': {
    id: 'clue-syndicate-ledger',
    icon: '📖',
    name: {
      id: "Buku Besar Konsorsium Pelabuhan 1981",
      en: "1981 Harbor Consortium Ledger",
      id_gaul: "Buku Besar Konsorsium Pelabuhan 1981"
    },
    desc: {
      id: "Buku bersampul kulit tebal dari brankas rahasia Daniel. Merinci aliran dana pembungkaman kasus penemuan tubuh terpotong rapi tahun 1981 yang melibatkan para pendahulu Reyn.",
      en: "A leather-bound folio retrieved from Daniel's hidden safe. Detailing hush money paid to bury the 1981 surgical mystery, linking directly to Reyn's family syndicate.",
      id_gaul: "Buku kulit tebel dari brankas rahasia Daniel. Isinya rincian duit tutup mulut kasus pembedahan rapi taun 1981 nyang nyenggol keluarga besarnya Reyn."
    }
  },
  'clue-surgical-kit': {
    id: 'clue-surgical-kit',
    icon: '🩺',
    name: {
      id: "Perangkat Bedah Anatomi Solingen",
      en: "Vintage Solingen Surgical Instruments",
      id_gaul: "Perangkat Bedah Antik Solingen"
    },
    desc: {
      id: "Gergaji bedah mikro dan pisau anatomi baja Solingen berlogo klinik maritim Reyn. Sayatan presisi pada alat ini identik dengan jejak fisik pada kasus dingin 20 tahun lalu.",
      en: "Micro-surgical saws and scalpels bearing Reyn Maritime clinic hallmarks. Their exact metallurgy matches the unhealed cuts preserved from the twenty-year-old cold case.",
      id_gaul: "Gergaji mikro ama pisau anatomi baja Solingen berstempel klinik Reyn Maritime. Ciri bilahnya identik persis ama jejak pemeriksaan kasus dingin 20 taun lalu."
    }
  }
};

const VALID_DEDUCTIONS = {
  'deduct-killer-presence': {
    id: 'deduct-killer-presence',
    icon: '🧩',
    clueA: 'clue-icecream-cup',
    clueB: 'clue-attic-footprints',
    title: {
      id: "Penyusup Telah Menetap di Loteng",
      en: "The Intruder Nested in the House",
      id_gaul: "Si Penyusup Udah Nginep di Loteng"
    },
    summary: {
      id: "Pelaku tidak mendobrak pintu saat malam pembunuhan. Berbekal kunci yang hilang, ia tinggal berhari-hari di loteng rumah, memantau Daniel, dan menikmati makanan di dapur dalam keheningan.",
      en: "The intruder never broke in tonight. Possessing the missing key, they spent days inhabiting the attic, observing Daniel's solitude, and quietly raiding the pantry in unhurried silence.",
      id_gaul: "Pelaku kaga ngejebol pintu pas malem kejadian. Berbekal kunci nyang ilang, dia udah ngendon beberapa hari di loteng, ngawasin Daniel, trus nyantai makan di dapur sunyi."
    }
  },
  'deduct-insider-theft': {
    id: 'deduct-insider-theft',
    icon: '🔑',
    clueA: 'clue-spare-key',
    clueB: 'clue-chloral-hydrate',
    title: {
      id: "Akses Rumah Diserahkan & Kopi Ditenangkan",
      en: "Surrendered House Access & Sedated Coffee",
      id_gaul: "Kunci Rumah Dikasih & Kopi Dibiut"
    },
    summary: {
      id: "Kunci cadangan diberikan oleh seseorang yang memiliki akses terpercaya, dan sedatif dimasukkan ke dalam cangkir Daniel agar korban tertidur tenang tanpa kepanikan atau perlawanan fisik.",
      en: "The spare key was handed over by someone close with legitimate access, and a sedative was slipped into Daniel's cup so he would quietly drift off without panic or a defensive struggle.",
      id_gaul: "Kunci serep diserahin ama orang deket nyang gampang masuk, trus obat bius dicampur ke cangkir Daniel biar korban tenang kaga panik atau sempat ngelawan."
    }
  },
  'deduct-cold-case-link': {
    id: 'deduct-cold-case-link',
    icon: '⚰️',
    clueA: 'clue-zodiac-symbol',
    clueB: 'clue-typewriter-draft',
    title: {
      id: "Pesan Penutup dari Tragedi Masa Lalu",
      en: "A Cryptic Message Bound to Unsolved History",
      id_gaul: "Pesan Penutup Nyambung ke Tragedi Masa Lalu"
    },
    summary: {
      id: "Lambang di telapak tangan dan naskah di mesin tik saling melengkapi: kematian Daniel merupakan upaya pembungkaman terencana agar rahasia sindikat bedah 20 tahun silam tidak pernah terbit ke publik.",
      en: "The palm mark and the draft tell a single truth: Daniel's death was a silenced execution to prevent the twenty-year-old surgical cover-up from ever seeing public light.",
      id_gaul: "Lambang telapak tangan ama draf ngetik saling ngisi: matinya Daniel emang sengaja buat ngebekap mulutnya biar skandal bedah 20 taun lalu kaga pernah kebaca publik."
    }
  },
  'deduct-reyn-conspiracy': {
    id: 'deduct-reyn-conspiracy',
    icon: '⚓',
    clueA: 'clue-syndicate-ledger',
    clueB: 'clue-surgical-kit',
    title: {
      id: "Keterlibatan Reyn & Rencana Pelarian Maritim",
      en: "Reyn's Entanglement & Maritime Departure",
      id_gaul: "Keterlibatan Reyn & Rencana Kabur ke Laut"
    },
    summary: {
      id: "Buku besar suap dan perkakas Solingen membuktikan bahwa garis keluarga Reyn membiayai operasi gelap tersebut, dan kini Reyn menyiapkan pelarian senyap ke perairan bebas seperti Lord Lucan.",
      en: "The bribery ledger and Solingen tools prove Reyn's syndicate underwrote the historical cover-up, and now Reyn is orchestrating an unheralded sea escape mirroring Lord Lucan.",
      id_gaul: "Buku besar sogokan ama alat bedah Solingen ngebuktiin dinasti Reyn nyokong operasi gelap itu, dan sekarang Reyn lagi nyiapin pelarian senyap ke laut lepas ala Lord Lucan."
    }
  }
};

const SUSPECTS_DATA = {
  'arun': {
    id: 'arun',
    name: 'Detektif Arun',
    role: {
      id: "Penyelidik Utama (Pemain)",
      en: "Lead Detective (Player)",
      id_gaul: "Detektif Utama (Pemain)"
    },
    avatar: "🕵️",
    desc: {
      id: "Penyelidik pendiam yang mengamati dunia lewat celah keheningan. Gaya bicaranya datar, sarkastik, namun menyimpan empati mendalam pada kebenaran yang terlupakan.",
      en: "A quiet investigator who observes the world through cracks of silence. Deadpan, dryly observant, yet harboring profound empathy for forgotten truths.",
      id_gaul: "Penyelidik pendiem nyang tajem ngamatin hal sepele. Gaya ngomongnya lempeng, rada sarkas, tapi dalem hatinya peduli ama kebenaran."
    }
  },
  'vela': {
    id: 'vela',
    name: 'Inspektur Vela',
    role: {
      id: "Kepala Satuan Reserse Kriminal",
      en: "Chief Homicide Inspector",
      id_gaul: "Kepala Satuan Reskrim"
    },
    avatar: "🎖️",
    desc: {
      id: "Polisi senior yang telah melihat terlalu banyak berkas mengendap di laci birokrasi. Tegas, tajam menyindir firasat tanpa bukti, namun selalu berdiri melindungi anak buahnya.",
      en: "A veteran inspector who has watched too many dossiers rot in municipal drawers. Sharp-tongued against baseless hunches, yet fiercely shielding her detectives.",
      id_gaul: "Perwira senior nyang kenyang ngeliat kasus dipetieskan. Kalo ngomong pedes kalo selidikan cuma modal firasat, tapi diam-diam pasang badan ngejagain timnya."
    }
  },
  'mira': {
    id: 'mira',
    name: 'Mira Adelia',
    role: {
      id: "Wartawan Investigasi Metro",
      en: "Investigative News Reporter",
      id_gaul: "Wartawan Investigasi Metro"
    },
    avatar: "🎙️",
    desc: {
      id: "Rival kerja Daniel selama satu dekade. Cepat berpikir, defensif, dan tajam bertanya balik. Di balik kekerasannya, ia terguncang melihat rekan sesama jurnalis dihabisi.",
      en: "Daniel's newsroom rival for a decade. Quick-witted, defensive, turning questions on her interrogator. Beneath her armor, she is deeply shaken by Daniel's quiet end.",
      id_gaul: "Rival sekantor Daniel sepuluh taun. Otaknya cepet, defensif, demen nanya balik. Di balik galaknya, dia kepukul banget liat nasib tragis rekan seprofesinya."
    }
  },
  'brama': {
    id: 'brama',
    name: 'Brama Baskara',
    role: {
      id: "Adik Kandung Korban",
      en: "Victim's Younger Brother",
      id_gaul: "Adik Kandung Korban"
    },
    avatar: "💔",
    desc: {
      id: "Pemuda yang terjebak lilitan utang kasino pelabuhan. Bicaranya terputus-putus dan dipenuhi rasa bersalah yang tak tertanggungkan atas kelalaiannya.",
      en: "A young man cornered by harbor gambling debts. Speech halting and raw, crushed by the unbearable realization of what his missteps unleashed.",
      id_gaul: "Anak muda nyang kejebak utang judi pelabuhan. Ngomongnya patah-patah, ancur hatinya ngerasa salah besar udah bikin celaka abang sendiri."
    }
  },
  'sena': {
    id: 'sena',
    name: 'Dr. Sena',
    role: {
      id: "Ahli Patologi & Kedokteran Forensik",
      en: "Forensic Pathologist",
      id_gaul: "Dokter Forensik & Patologi"
    },
    avatar: "🩺",
    desc: {
      id: "Dokter yang memandang kematian bukan sebagai sensasi kengerian, melainkan catatan sunyi tentang hukum-hukum alam dan kelemahan manusiawi. Dingin, presisi, berselera humor gelap.",
      en: "A pathologist viewing death not as macabre spectacle, but as a quiet ledger of natural laws and mortal frailty. Precise, solemn, with a streak of dry irony.",
      id_gaul: "Dokter nyang mandang kematian bukan buat nakut-nakutin, tapi lembaran fakta sains nyang jujur. Dingin, rapi analisanya, sesekali ada dark humor medis."
    }
  },
  'reyn': {
    id: 'reyn',
    name: 'Reyn',
    role: {
      id: "Tokoh Pelabuhan & Pengusaha Berpengaruh",
      en: "Maritime Magnate & Patriarch",
      id_gaul: "Cukong Pelabuhan & Tokoh Berkuasa"
    },
    avatar: "🍸",
    desc: {
      id: "Sosok yang duduk di puncak rantai kekuasaan kota. Tutur katanya santun, tenang seperti permukaan danau, namun setiap kalimatnya menegaskan siapa yang memegang hukum di telapak tangannya.",
      en: "A man resting atop the city's hierarchy. Exquisitely polite and calm as glass, yet every quiet sentence reminds you who actually drafts the laws in this town.",
      id_gaul: "Orang nyang duduk di pucuk kekuasaan kota. Tutur katanya sopan, adem, tapi tiap kata nyang keluar negasin kalo hukum bisa dia atur sesuka hati."
    }
  },
  'archivist': {
    id: 'archivist',
    name: 'The Archivist',
    role: {
      id: "Penjaga Memori & Pengirim Sandi",
      en: "Keeper of Cold Records & Cryptographer",
      id_gaul: "Penjaga Arsip Misterius & Pengirim Sandi"
    },
    avatar: "🎭",
    desc: {
      id: "Sosok bertudung yang mengumpulkan kembali nama-nama yang dihapus dari sejarah resmi. Tutur katanya puitis, tenang, berbicara tentang waktu dan keadilan yang tertunda.",
      en: "A cloaked figure collecting the names erased from official city gazettes. Speaking in measured, poetic cadences of time, grief, and delayed justice.",
      id_gaul: "Sosok berjubah nyang ngumpulin nama-nama korban nyang dihapus dari sejarah kota. Bahasanya puitis, adem, ngomongin soal waktu ama keadilan nyang ketunda."
    }
  }
};




    // ==========================================
    // SECTION 2: STORY GRAPH & DIALOGUES
    // ==========================================
    // ARALUNA: Arsip Pembunuhan Tak Terpecahkan
// Master Story Nodes Graph spanning Chapters 1 to 4 and 4 Endings
// Refined: Atmospheric Noir, Deductive Logic, Non-Sensational, Living Human Dialogue

const STORY_NODES = {
  // ==========================================
  // BAB 1: JEJAK PERTAMA (Inspirasi: Zodiac & Ripper)
  // ==========================================
  'c1_start': {
    id: 'c1_start',
    chapter: 1,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Awal Bab 1: Keheningan di Ruang Kerja Daniel',
    text: {
      id: "Hujan bulan November menghantam kaca jendela ruang kerja Daniel Baskara dengan irama yang tak teratur. Di dalam ruangan, semuanya tampak terlalu tertata: buku-buku bersampul kulit berbaris rapi di rak, cangkir porselen di atas tatakan, dan selembar kertas masih terjepit di rol mesin tik. Hanya satu hal yang salah: Daniel terduduk kaku di kursi kerjanya, menatap kosong ke langit-langit. Jejaknya masih hangat. Seseorang baru saja meninggalkan ruangan ini dalam hening.",
      en: "A relentless November rain beats against Daniel Baskara's study windows with an erratic cadence. Inside, the quiet is unnervingly composed: leather-bound volumes aligned on shelves, a porcelain teacup resting upon its coaster, a single sheet still rolled into the typewriter. Only one element is out of place: Daniel sits motionless in his leather chair, eyes fixed on the dim ceiling. The presence here is still warm. Someone slipped out of this room only moments ago.",
      id_gaul: "Ujan deres bulan November ngegebrak kaca jendela kamar kerja Daniel Baskara kaga karuan. Di dalem ruangan, suasananya aneh banget: buku-buku berjejer rapi di rak, cangkir kopi nangkring di tatakannya, selembar kertas masih nyelip di mesin tik. Cuma ada satu nyang salah: Daniel duduk kaku di kursinya, matanya kosong mandang plafon. Hawanya masih anget. Pelakunya baru banget cabut dari ruangan ini."
    },
    choices: [
      {
        text: {
          id: "Amati pemeriksaan tenang Dr. Sena di sisi meja",
          en: "Observe Dr. Sena's quiet examination beside the desk",
          id_gaul: "Liatin pemeriksaan tenang Dr. Sena di samping meja"
        },
        nextNode: 'c1_sena_autopsy'
      },
      {
        text: {
          id: "Periksa amplop bersegel lilin di atas rak perapian",
          en: "Inspect the wax-sealed envelope resting on the mantle",
          id_gaul: "Cek amplop segel lilin di atas rak perapian"
        },
        nextNode: 'c1_fireplace_envelope'
      }
    ]
  },

  'c1_sena_autopsy': {
    id: 'c1_sena_autopsy',
    chapter: 1,
    speaker: 'sena',
    charVisual: 'sena',
    awardClue: 'clue-zodiac-symbol',
    focusChange: 15,
    text: {
      id: "Dr. Sena meletakkan kaca pembesarnya perlahan, tanpa suara. \"Lihat telapak tangannya, Arun. Garis melingkar dengan salib di tengahnya ini diukir dengan ketenangan luar biasa sebelum Daniel kehilangan kesadaran. Tidak ada lebam perlawanan, tidak ada kuku yang patah. Mayat tidak pernah mengarang cerita, Detektif. Mereka hanya menyimpan kebenaran yang terlalu jujur untuk orang hidup.\"",
      en: "Dr. Sena lowers his magnifying glass with methodical stillness. \"Look closely at his palm, Arun. This cross-circle glyph was etched with extraordinary composure before Daniel lost consciousness. No defensive bruising, no broken fingernails. The dead never invent fables, Detective. They merely preserve truths too honest for the living.\"",
      id_gaul: "Dr. Sena naro kaca pembesarnya pelan banget kaga ada suaranya. \"Liat telapak tangannya, Arun. Pola bulet silang ini diukir tenang banget sebelom Daniel kaga sadar. Kaga ada bekas memar ngelawan, kuku-kukunya juga utuh. Jenazah kaga pernah ngarang cerita, Detektif. Mereka cuma nyimpen fakta nyang terlalu jujur buat orang idup.\""
    },
    choices: [
      {
        text: {
          id: "Tanyakan ketenangan instrumen yang digunakan pelaku",
          en: "Ask about the steady instrument used by the intruder",
          id_gaul: "Tanyain soal alat nyang dipake si pelaku"
        },
        nextNode: 'c1_sena_detail'
      },
      {
        text: {
          id: "Beralih memeriksa surat di dekat perapian",
          en: "Turn to examine the envelope by the hearth",
          id_gaul: "Pindah meriksa surat di deket perapian"
        },
        nextNode: 'c1_fireplace_envelope'
      }
    ]
  },

  'c1_sena_detail': {
    id: 'c1_sena_detail',
    chapter: 1,
    speaker: 'sena',
    charVisual: 'sena',
    text: {
      id: "\"Goresan tipis dengan kedalaman konstan,\" Sena berbisik sambil menatap cahaya lampu minyak. \"Hanya pisau bedah bermutu tinggi yang bisa menorehkan garis setipis ini tanpa merobek jaringan kulit di sekitarnya. Orang yang memegang bilah ini terlatih untuk tidak terburu-buru. Ia memperlakukan ruangan ini bukan sebagai lokasi kejahatan, melainkan sebuah ruang peragaan.\"",
      en: "\"A shallow incision of constant depth,\" Sena murmurs, studying the lamp's amber glow. \"Only high-grade surgical steel could trace lines this clean without jagged tearing of surrounding tissue. Whoever wielded this instrument was trained in patience. They treated this study not as a crime scene, but as an exhibition room.\"",
      id_gaul: "\"Garisannya tipis tapi dalemnya rata,\" bisik Sena sambil mandang pantulan lampu minyak. \"Cuma pisau bedah baja murni nyang bisa bikin goresan sebersih ini tanpa ngerusak kulit sekitar. Orang nyang megang piso ini udah biasa tenang kaga grasak-grusuk. Dia nganggep kamar ini bukan TKP biasa, tapi panggung pameran keahlian.\""
    },
    choices: [
      {
        text: {
          id: "Dekati rak perapian untuk membaca surat misterius",
          en: "Approach the mantle to inspect the cryptic letter",
          id_gaul: "Maju ke rak perapian buat liat surat misterius"
        },
        nextNode: 'c1_fireplace_envelope'
      }
    ]
  },

  'c1_fireplace_envelope': {
    id: 'c1_fireplace_envelope',
    chapter: 1,
    speaker: 'arun',
    charVisual: 'arun',
    text: {
      id: "Di atas bibir perapian marmer, sebuah amplop kertas linen bersegel lilin hitam diletakkan tegak. Tinta besi tua di atasnya membentuk namaku: 'Untuk Detektif Arun'. Ketika lilin segelnya kupecahkan, secarik kertas perkamen menampakkan deretan huruf sandi dan sebuah inisial: 'The Archivist'.",
      en: "Perched upright on the marble mantle rests a heavy linen envelope sealed in black wax. Faded iron gall ink forms my name across the center: 'For Detective Arun'. Breaking the brittle wax unrolls a sheet of vellum bearing a line of cipher text, signed merely: 'The Archivist'.",
      id_gaul: "Nangkring rapi di atas rak perapian marmer, ada amplop kertas tebel disegel lilin item. Tinta lawas di depannya nulis nama gue: 'Buat Detektif Arun'. Pas segel lilinnya gue ketuk patah, ada carik kertas perkamen isinya barisan huruf sandi bertanda tangan: 'The Archivist'."
    },
    choices: [
      {
        text: {
          id: "Pecahkan Sandi Caesar pada Perkamen (Puzzle 1)",
          en: "Decipher the Caesar Cryptogram on the Vellum (Puzzle 1)",
          id_gaul: "Pecahin Sandi Caesar di Perkamen (Puzzle 1)"
        },
        nextNode: 'c1_solve_puzzle1'
      }
    ]
  },

  'c1_solve_puzzle1': {
    id: 'c1_solve_puzzle1',
    chapter: 1,
    speaker: 'arun',
    charVisual: 'arun',
    triggerPuzzle: '1',
    text: {
      id: "Teks tertera: 'VHWDJDBD'. Huruf-huruf ini disusun dengan logika pergeseran alfabet klasik, gaya yang kerap digunakan pengirim sandi untuk menguji ketelitian penyelidik. Aku perlu memutar roda substitusi untuk membuka pesan di baliknya.",
      en: "The inscription reads: 'VHWDJDBD'. Arranged with classical alphabetic shift logic—a device cryptographers use to measure an investigator's patience. I need to align the substitution dial until the underlying word surfaces.",
      id_gaul: "Tulisannya kebaca: 'VHWDJDBD'. Huruf-huruf ini diacak pake sistem geser alfabet jaman dulu, cara khas nyang demen dipake buat nguji ketelitian detektif. Gue kudu muter roda sandi biar dapet kata kuncinya."
    },
    choices: [
      {
        text: {
          id: "[Putar Roda Sandi Caesar ROT-3]",
          en: "[Engage the Caesar ROT-3 Substitution Dial]",
          id_gaul: "[Puter Roda Geser Sandi Caesar ROT-3]"
        },
        nextNode: 'c1_post_puzzle1'
      }
    ]
  },

  'c1_post_puzzle1': {
    id: 'c1_post_puzzle1',
    chapter: 1,
    speaker: 'archivist',
    charVisual: 'archivist',
    triggerCheckpoint: 'Bab 1: Sandi Zodiac Terurai',
    focusChange: 20,
    text: {
      id: "Tiga langkah pergeseran mundur menampakkan kata: 'SETAGAYA'. Di lembar sebaliknya, tinta emas samar berbunyi: \"Waktu adalah tinta yang tak pernah mengering, Arun. Setiap korban hanyalah satu bab yang belum sempat kau baca. Lambang di telapak tangannya bukan ancaman kekerasan, melainkan kunci membuka peti mati masa lalu yang berusaha dilupakan kota ini.\"",
      en: "Three reverse increments resolve the letters into: 'SETAGAYA'. On the reverse side, pale gold ink whispers: \"Time is ink that never dries, Arun. Every victim is merely an unfinished chapter. The seal upon his palm is no threat of brutality, but a key to unseal the graveyard of an era this city chose to forget.\"",
      id_gaul: "Muter mundur 3 langkah langsung ngebentuk kata: 'SETAGAYA'. Di balik kertasnya, ada tulisan tinta emas nyala tipis: \"Waktu itu tinta nyang kaga bakal kering, Arun. Tiap korban cuma selembar bab nyang belom sempet lu baca. Lambang di tangannya bukan gertakan kasar, tapi kunci ngebuka peti mati masa lalu nyang sengaja dikubur kota ini.\""
    },
    choices: [
      {
        text: {
          id: "Periksa lembar ketikan pada mesin tik antik Daniel",
          en: "Examine the typed sheet in Daniel's vintage typewriter",
          id_gaul: "Cek lembar ketikan di mesin tik kuno Daniel"
        },
        nextNode: 'c1_typewriter_inspect'
      }
    ]
  },

  'c1_typewriter_inspect': {
    id: 'c1_typewriter_inspect',
    chapter: 1,
    speaker: 'arun',
    charVisual: 'arun',
    awardClue: 'clue-typewriter-draft',
    text: {
      id: "Pita hitam mesin tik Daniel mengering pada paragraf terakhirnya: '...Tragedi dua puluh tahun lalu bukanlah keributan jalanan acak. Seseorang dengan keahlian bedah tinggi melakukannya di ruang tertutup, disaksikan oleh mereka yang kini menduduki kursi-kursi kehormatan di dewan pelabuhan.' Daniel sedang menyusun sebuah dakwaan sebelum napasnya dihentikan.",
      en: "The ribbon on Daniel's typewriter had dried across his final paragraph: '...The tragedy from twenty years ago was never random street disorder. An operator of refined surgical skill carried it out in absolute seclusion, witnessed by those who now occupy gilded chairs on the harbor council.' Daniel was preparing an indictment before his ink was cut off.",
      id_gaul: "Pita item di mesin tik Daniel masih berjejak di paragraf terakhirnya: '...Tragedi dua puluh taun lalu bukan keributan preman pasar. Ada orang berkeahlian bedah tinggi nyang ngelakuin di ruang steril, disaksiin langsung ama mereka nyang sekarang duduk di kursi empuk dewan pelabuhan.' Daniel lagi ngeracik liputan panas sebelom suaranya dibikin sunyi."
    },
    choices: [
      {
        text: {
          id: "Dengarkan langkah sepatu berderap di lorong luar",
          en: "Listen to the firm footsteps approaching down the hallway",
          id_gaul: "Denger derap langkah sepatu nyamperin lorong luar"
        },
        nextNode: 'c1_vela_arrival'
      }
    ]
  },

  'c1_vela_arrival': {
    id: 'c1_vela_arrival',
    chapter: 1,
    speaker: 'vela',
    charVisual: 'vela',
    text: {
      id: "Pintu jati terbuka. Inspektur Vela melangkah masuk, mematikan pemantik minyaknya dengan jentikan jemari. Mantel wolnya basah kuyup oleh angin teluk. \"Lu mau bukti atau mau dongeng, Arun? Kalau cuma punya firasat, jangan bawa ke meja jaksa. Daniel Baskara bukan jurnalis yang mati karena salah tingkah di bar. Dia menggali arsip yang ditandatangani orang-orang berkuasa. Jika lu ingin membongkar ini, pastikan pijakan logikamu tidak goyah.\"",
      en: "The heavy oak door parts. Inspector Vela enters, snapping her brass lighter shut with a practiced flick. Her wool coat is drenched in bay mist. \"You want cold facts or fairy tales, Arun? Gut feelings won't hold in court. Daniel Baskara didn't cross the wrong drunk in a tavern. He was prying into archives signed by the city's architects. If you intend to see this through, make sure your logic doesn't wobble.\"",
      id_gaul: "Pintu jati kebuka. Inspektur Vela masuk, nyetek korek minyaknya pake jemari basah. Mantel wolnya kuyup kena angin teluk. \"Lu mau bukti ape mau dongeng, Arun? Kalo cuma modal firasat doang, jaksa kaga bakal mau denger. Daniel Baskara bukan wartawan nyang mati gara-gara salah nongkrong. Dia lagi ngubek berkas nyang ditandatangani orang-orang berkuasa. Kalo lu mau bongkar ini, pastiin logika lu kaga mencong.\""
    },
    choices: [
      {
        text: {
          id: "Jelaskan keterkaitan kata 'SETAGAYA' dengan anomali TKP",
          en: "Explain the link between 'SETAGAYA' and the scene's quiet anomalies",
          id_gaul: "Jelasin korelasi kata 'SETAGAYA' ama kejanggalan TKP"
        },
        nextNode: 'c1_transition_to_c2'
      }
    ]
  },

  'c1_transition_to_c2': {
    id: 'c1_transition_to_c2',
    chapter: 1,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Transisi Menuju Bab 2: Saksi Bisu',
    text: {
      id: "\"Kata sandinya adalah Setagaya, Vela. Di Tokyo tahun 2000, pelaku tidak langsung melarikan diri; ia berdiam di rumah korban, menyantap makanan dari lemari pendingin, dan menunggu waktu reda. Rumah ini tidak menunjukkan tanda-tanda pembobolan paksa. Kita harus meneliti seluruh lantai bawah dan loteng sekarang juga.\" Vela menatapku sejenak, lalu mengangguk singkat. \"Buktikan lewat fakta, Detektif.\"",
      en: "\"The keyword is Setagaya, Vela. In Tokyo 2000, the intruder didn't run into the night; he lingered inside the residence, ate from the icebox, and waited for the world to sleep. This house shows no mark of a forced lock. We need to comb the ground floor and the crawlspaces immediately.\" Vela watches me for a quiet beat, then nods. \"Show me the physical proof, Detective.\"",
      id_gaul: "\"Kata kuncinya Setagaya, Vela. Di Tokyo taun 2000, pelakunya kaga langsung lari; dia nginep santai di rumah korban, ngembat makanan dari kulkas, nunggu suasana tenang. Rumah ini kaga ada bekas pintu dicongkel. Kita kudu periksa lantai bawah ama loteng sekarang juga.\" Vela mandang gue sejenak, trus ngangguk kecil. \"Buktiin pake fakta nyata, Detektif.\""
    },
    choices: [
      {
        text: {
          id: "Lanjut ke Bab 2: Saksi Bisu ➔",
          en: "Advance to Chapter 2: Silent Witnesses ➔",
          id_gaul: "Gas ke Bab 2: Saksi Bisu ➔"
        },
        nextNode: 'c2_start'
      }
    ]
  },

  // ==========================================
  // BAB 2: SAKSI BISU (Inspirasi: Setagaya & Hinterkaifeck)
  // ==========================================
  'c2_start': {
    id: 'c2_start',
    chapter: 2,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Awal Bab 2: Anomali Ruang Dapur',
    awardClue: 'clue-icecream-cup',
    focusChange: 15,
    text: {
      id: "Penyelidikan di lantai dasar mengungkap sesuatu yang ganjil. Di dapur yang sunyi, pintu lemari pendingin dibiarkan sedikit renggang. Di atas meja dekat bak cuci piring, sebuah cangkir es krim melon kosong dan sendok kecil diletakkan rapi, seakan sang penikmat baru saja menyelesaikannya beberapa saat lalu. Pembunuhnya tidak tergesa-gesa; ia berdiam di sini dalam kenyamanan yang dingin.",
      en: "Downstairs, the house yields a quiet strangeness. In the silent kitchen, the refrigerator door rests ajar. On the counter beside the porcelain sink, an empty cup of melon ice cream and a small silver spoon sit perfectly aligned, as though their consumer had departed only moments before. The intruder was in no hurry; they lingered here in unhurried, chilling domesticity.",
      id_gaul: "Pemeriksaan di lantai bawah nemuin keanehan nyang bikin mikir keras. Di dapur nyang sepi, pintu kulkas dibiarin mangap dikit. Di meja samping wastafel, ada bekas cup es krim melon ludes ama sendok kecil ditaro rapi, kayak orang abis ngemil santai. Si pelaku kaga buru-buru; dia sempet leha-leha di dalem rumah korban."
    },
    choices: [
      {
        text: {
          id: "Periksa laci meja depan dan celah loteng atas",
          en: "Search the hallway bureau and the overhead crawlspace",
          id_gaul: "Cek laci meja depan ama lubang loteng atas"
        },
        nextNode: 'c2_anomalies_found'
      }
    ]
  },

  'c2_anomalies_found': {
    id: 'c2_anomalies_found',
    chapter: 2,
    speaker: 'arun',
    charVisual: 'arun',
    awardClue: 'clue-spare-key',
    text: {
      id: "Dua kejanggalan lain terhubung rapi: Gantungan kunci cadangan di laci depan kosong. Pembantu rumah tangga menyebut kunci itu telah hilang sejak tiga hari lalu—sebuah pengulangan misterius dari kasus Hinterkaifeck 1922. Dan ketika senter kuarahkan ke celah loteng di atas ruang kerja, tampak jejak sepatu bot berdebu di atas bilah kayu plafon.",
      en: "Two further observations interlock: The spare key hook in the front hall bureau hangs empty. The housekeeper noted it disappeared three days ago—an eerie echo of the 1922 Hinterkaifeck farm mystery. And when my flashlight sweeps the attic crawlspace above the study, distinct boot prints mark the dusty wooden beams.",
      id_gaul: "Dua kejanggalan laen nyambung rapi: Cantelan kunci serep di laci depan kosong melompong. Pembantu rumah bilang kunci itu udah raib dari tiga hari lalu—persis misteri Hinterkaifeck 1922. Pas senter gue sorot ke celah loteng atas kamar kerja, keliatan jejak sol sepatu bot nempel di debu papan kayu."
    },
    choices: [
      {
        text: {
          id: "Catat keberadaan pengintai di loteng ke Casebook",
          en: "Record the attic presence into the Casebook",
          id_gaul: "Catet jejak pengintai loteng ke Casebook"
        },
        nextNode: 'c2_attic_logged'
      }
    ]
  },

  'c2_attic_logged': {
    id: 'c2_attic_logged',
    chapter: 2,
    speaker: 'arun',
    charVisual: 'arun',
    awardClue: 'clue-attic-footprints',
    text: {
      id: "Seseorang telah tinggal di atas kepala Daniel selama tiga hari, mempelajari setiap helaan napas dan jadwal kerjanya. Pintu depan dibuka tanpa paksaan karena kuncinya telah diserahkan. Kini saatnya mendengarkan keterangan mereka yang memiliki akses ke lingkaran hidup Daniel.",
      en: "Someone lived above Daniel's head for three days, charting his breathing and his late-night typing. The front door opened without violence because someone handed over the brass key. It is time to listen to those who moved through the orbit of Daniel's final hours.",
      id_gaul: "Ada orang nyang beneran ngendon di atas kepala Daniel selama tiga hari, ngapalin jam tidur ama ketikan mesin tiknya. Pintu depan kebuka mulus gara-gara kuncinya emang diserahin. Sekarang saatnya gue dengerin omongan orang-orang nyang muter di sekitar Daniel."
    },
    choices: [
      {
        text: {
          id: "Temui Mira Adelia di ruang redaksi Metro",
          en: "Interview Mira Adelia in the Metro newsroom",
          id_gaul: "Samperin Mira Adelia di kantor redaksi Metro"
        },
        nextNode: 'c2_interrogate_mira'
      },
      {
        text: {
          id: "Bicara dengan Brama Baskara di ruang tunggu",
          en: "Speak with Brama Baskara in the waiting chamber",
          id_gaul: "Ngobrol ama Brama Baskara di ruang tunggu"
        },
        nextNode: 'c2_interrogate_brama'
      }
    ]
  },

  'c2_interrogate_mira': {
    id: 'c2_interrogate_mira',
    chapter: 2,
    speaker: 'mira',
    charVisual: 'mira',
    triggerCheckpoint: 'Bab 2: Keterangan Mira Adelia',
    text: {
      id: "Mira meletakkan cangkir kopinya yang bergetar sedikit. Matanya lelah, namun sorot pertahanannya menyala. \"Kenapa lu liatin gue kayak gitu, Detektif? Lu pikir gue yang menghabisi Daniel cuma gara-gara kalah cepat nulis berita? Daniel itu arogan dan suka menyerobot liputan, tapi dia jurnalis yang jujur. Kami bertengkar kemarin siang karena dia menolak berbagi dokumen transfer rekening gelap pelabuhan. Kalau lu mau cari dalang, periksa orang-orang berjas di Grand Harbor Club, bukan wartawan yang cuma memegang pulpen.\"",
      en: "Mira sets down her coffee cup, her fingers trembling slightly. Her eyes are rimmed with exhaustion, but her defensiveness is sharp. \"Why are you looking at me like that, Detective? Think I silenced Daniel over a front-page scoop? Daniel was insufferably arrogant and stole half my leads, but he had integrity. We argued yesterday because he refused to share bank wire slips from the harbor consortium. If you're looking for architects of silence, look to the silk suits at the Grand Harbor Club, not a reporter holding a pen.\"",
      id_gaul: "Mira naro cangkir kopinya nyang rada getar. Matanya sayu capek, tapi cara natapnya defensif banget. \"Ngapain lu melototin gue gitu, Detektif? Lu kira gue nyang ngabisin Daniel cuma gara-gara rebutan berita utama? Daniel emang tengil ama suka nyerobot draf gue, tapi dia jujur kaga bisa disogok. Kita ribut kemaren siang gegara dia gamau bagi bukti transferan siluman pelabuhan. Kalo mau nyari biangnya, periksa cukong berdasi di Grand Harbor Club, jangan mojokin wartawan nyang cuma modal pulpen.\""
    },
    choices: [
      {
        text: {
          id: "Tanyakan siapa yang ia lihat di pekarangan rumah Daniel kemarin",
          en: "Ask whom she saw near Daniel's gate yesterday afternoon",
          id_gaul: "Tanyain siapa nyang dia liat di pager rumah Daniel kemaren"
        },
        nextNode: 'c2_mira_revelation'
      },
      {
        text: {
          id: "Panggil Brama Baskara untuk dimintai keterangan",
          en: "Summon Brama Baskara for his statement",
          id_gaul: "Panggil Brama Baskara buat dimintai keterangan"
        },
        nextNode: 'c2_interrogate_brama'
      }
    ]
  },

  'c2_mira_revelation': {
    id: 'c2_mira_revelation',
    chapter: 2,
    speaker: 'mira',
    charVisual: 'mira',
    text: {
      id: "\"Kemarin sore saat aku mengantar berkas revisi, aku melihat Brama terburu-buru keluar dari pintu samping pekarangan Daniel. Tangannya menyembunyikan sesuatu ke dalam saku jaketnya. Wajahnya pucat seperti orang yang baru saja menjual jiwanya. Daniel selalu berusaha menyelamatkan adiknya itu dari lilitan utang kasino, tapi beberapa orang tak tahu cara diselamatkan.\"",
      en: "\"Yesterday afternoon when I dropped off galleys, I saw Brama hurry out of Daniel's side garden gate. He was stuffing something brass into his coat pocket, his face pale as someone who just sold his own skin. Daniel spent years trying to pull that boy out of gambling dens, but some people simply refuse to be salvaged.\"",
      id_gaul: "\"Kemaren sore pas gue nganter draf koran, gue liat si Brama buru-buru keluar dari pager samping rumah Daniel. Tangannya nyelipin benda kuningan ke saku jaket, mukanya pucet kayak abis ngejual harga dirinya dewek. Daniel tuh taunan nyoba nyelametin adiknya dari jeratan judi, tapi ada orang nyang emang kaga ngarti cara diselametin.\""
    },
    choices: [
      {
        text: {
          id: "Konfrontasi Brama Baskara mengenai kunci yang dibawanya",
          en: "Confront Brama Baskara regarding the brass key",
          id_gaul: "Tanyain Brama Baskara soal kunci nyang dia bawa"
        },
        nextNode: 'c2_interrogate_brama'
      }
    ]
  },

  'c2_interrogate_brama': {
    id: 'c2_interrogate_brama',
    chapter: 2,
    speaker: 'brama',
    charVisual: 'brama',
    triggerCheckpoint: 'Bab 2: Keterangan Brama Baskara',
    text: {
      id: "Brama duduk meringkuk di sudut bangku kayu, kedua tangannya saling meremas erat. Matanya merah dan sembap. \"Aku nggak tahu apa-apa, Detektif... Jangan tatap aku seperti itu. Daniel itu abangku satu-satunya! Sejak ibu meninggal, cuma dia yang mau menampungku saat aku kehilangan segalanya di meja judi pelabuhan... Demi Tuhan, aku tidak pernah bermaksud mencelakainya!\"",
      en: "Brama sits curled on the wooden bench, his hands wringing each other raw. His eyes are swollen with sleepless regret. \"I didn't know, Detective... Don't look at me like that. Daniel was my only brother! Ever since mother passed, he was the only one who took me in when I lost everything at the harbor tables... God as my witness, I never wanted him harmed!\"",
      id_gaul: "Brama duduk meringkuk di bangku kayu, tangannya ngeremas jemari dewek kenceng banget. Matanya merah bengkak. \"Gue beneran kaga tau, Detektif... Jangan mandang gue kayak gitu. Daniel itu abang gue satu-satunya! Dari emak meninggal, cuma dia nyang mau nampung pas gue ludes di meja judi pelabuhan... Demi Tuhan, kaga ada niat secuil pun gue mau nyelakain dia!\""
    },
    choices: [
      {
        text: {
          id: "Tanyakan mengapa kunci cadangan Daniel ada pada penagih utang",
          en: "Ask why Daniel's spare key wound up with the collectors",
          id_gaul: "Tanyain kenapa kunci serep Daniel bisa ada di tangan rentenir"
        },
        nextNode: 'c2_brama_breakdown'
      }
    ]
  },

  'c2_brama_breakdown': {
    id: 'c2_brama_breakdown',
    chapter: 2,
    speaker: 'brama',
    charVisual: 'brama',
    focusChange: 20,
    text: {
      id: "Air mata Brama menetes ke lantai kayu. Suaranya pecah menjadi bisikan tersengal. \"Tiga hari lalu orang-orang suruhan konsorsium pelabuhan mendatangi kontrakanku. Mereka bilang utang kasinoku dianggap lunas jika aku menyerahkan kunci cadangan rumah Daniel. Mereka bilang cuma ingin memeriksa dokumen riset yang disimpan abangku... Aku tidak tahu kalau mereka berniat menidurkan abangku untuk selamanya! Maafkan aku, Daniel...\"",
      en: "Tears slip quietly down Brama's hollow cheeks. His voice fractures into an unsteady whisper. \"Three days ago the consortium's collectors waited outside my room. They said my gambling markers would be burned if I surrendered Daniel's spare front door key. They swore they only needed an hour to inspect his research notes... I had no idea they intended to put Daniel to sleep forever! God, Daniel... forgive me...\"",
      id_gaul: "Air mata Brama netes ke lantai kayu. Suaranya serak pecah bisik-bisik nahan tangis. \"Tiga hari lalu orang suruhan konsorsium pelabuhan nungguin gue di kontrakan. Mereka bilang utang judi gue lunas bersih kalo gue nyerahin kunci serep rumah Daniel. Katanya cuma mau liat berkas liputan nyang disimpen abang gue... Gue kaga nyangka mereka beneran tega bikin Daniel tidur kaga bangun lagi! Ampunin gue, Dan...\""
    },
    choices: [
      {
        text: {
          id: "Tanyakan siapa nama sosok yang memegang surat utang tersebut",
          en: "Ask for the name of the man holding his debt markers",
          id_gaul: "Tanyain nama orang nyang megang surat utang itu"
        },
        nextNode: 'c2_brama_names_reyn'
      }
    ]
  },

  'c2_brama_names_reyn': {
    id: 'c2_brama_names_reyn',
    chapter: 2,
    speaker: 'brama',
    charVisual: 'brama',
    text: {
      id: "\"Namanya Reyn... Pemilik jalur kapal kargo dan anggota dewan maritim. Dia yang mengendalikan seluruh aliran uang di dermaga timur. Dia selalu berada di ruang privat lantai atas Grand Harbor Club setiap malam...\"",
      en: "\"His name is Reyn... Patriarch of the cargo lines and member of the maritime board. He directs the entire current of money across the eastern berths. He holds court in the private salon atop the Grand Harbor Club every evening...\"",
      id_gaul: "\"Namanya Reyn... Bos kapal kargo nyang megang dewan maritim. Dia nyang ngatur puteran duit di dermaga wetan. Tiap malem dia selalu nongkrong di ruang privat lantai atas Grand Harbor Club...\""
    },
    choices: [
      {
        text: {
          id: "Periksa hasil toksikologi cangkir kopi Daniel bersama Dr. Sena",
          en: "Review the coffee cup toxicology with Dr. Sena",
          id_gaul: "Cek hasil toksikologi kopi Daniel bareng Dr. Sena"
        },
        nextNode: 'c2_sena_toxicology'
      }
    ]
  },

  'c2_sena_toxicology': {
    id: 'c2_sena_toxicology',
    chapter: 2,
    speaker: 'sena',
    charVisual: 'sena',
    awardClue: 'clue-chloral-hydrate',
    text: {
      id: "Dr. Sena menunjukkan tabung reaksi berisi cairan bening di bawah cahaya lampu laboratorium. \"Kloral hidrat murni. Sedatif klasik yang membuat kesadaran memudar tanpa kejang atau rasa sakit. Korban tertidur tenang di kursinya sebelum ukiran di telapak tangannya dibuat. Ini bukan pekerjaan amarah yang meledak di jalan; ini adalah prosedur terencana yang dikerjakan oleh orang yang memahami batas biologi manusia.\"",
      en: "Dr. Sena holds a centrifuge tube of clear distillate before the bench light. \"Pure chloral hydrate. A classic pharmaceutical sedative that lulls consciousness into silence without convulsions or distress. The victim rested quietly in his chair before the palm monogram was traced. This was no flare of street passion; it was a planned, tranquil procedure conducted by someone who understands the exact boundaries of human biology.\"",
      id_gaul: "Dr. Sena nunjukin tabung kaca isi cairan bening di bawah lampu lab. \"Kloral hidrat murni. Obat bius jadul nyang bikin orang ngantuk ilang kesadaran tanpa kejang atau ngerasa sakit. Daniel udah tidur anteng di kursinya sebelom lambang di telapaknya diukir. Ini bukan kerjaan emosi orang kalap di jalan; ini prosedur rapi dari orang nyang paham bener batas tubuh manusia.\""
    },
    choices: [
      {
        text: {
          id: "Datangi Grand Harbor Club untuk mengamati sosok Reyn",
          en: "Visit the Grand Harbor Club to observe Reyn",
          id_gaul: "Samperin Grand Harbor Club buat nemuin sosok Reyn"
        },
        nextNode: 'c2_confront_reyn'
      }
    ]
  },

  'c2_confront_reyn': {
    id: 'c2_confront_reyn',
    chapter: 2,
    speaker: 'reyn',
    charVisual: 'reyn',
    triggerCheckpoint: 'Bab 2: Percakapan dengan Reyn di Grand Harbor Club',
    text: {
      id: "Di lounge berdinding kayu mahoni gelap, alunan piano mengalir pelan di antara denting gelas kristal. Reyn meletakkan gelas wiskinya dengan ketenangan tanpa cela. Senyumnya ramah, namun matanya menatap tajam bagai permukaan cermin danau es. \"Detektif Arun... Kota ini dibangun di atas fondasi yang jauh lebih dalam dari yang terlihat di permukaan jalanan. Kadang, ada dokumen yang lebih baik dibiarkan beristirahat dalam debu daripada dibangunkan. Angin malam di pelabuhan sangat dingin bagi mereka yang gemar berjalan di tepi dermaga. Berhati-hatilah agar tidak terpeleset ke dalam air yang dalam.\"",
      en: "In the dark mahogany salon, a grand piano breathes a low cadence beneath the clinking of crystal tumblers. Reyn rests his single malt with serene precision. His smile is warm, yet his gaze possesses the unyielding stillness of winter ice. \"Detective Arun... This city rests on pilings sunk far deeper than the cobbles you walk upon. Occasionally, certain ledgers are best left sleeping in quiet dust rather than disturbed. The night wind off the berths is remarkably unforgiving to those who walk the edge. Do take care not to lose your footing in the deep channel.\"",
      id_gaul: "Di lounge mewah berdinding mahoni gelap, suara piano ngalun alus di sela denting gelas kristal. Reyn naro gelas wiskinya tenang banget kaga ada goyangnya. Senyumnya sopan, tapi tatapan matanya dingin kayak es batu. \"Detektif Arun... Kota ini berdiri di atas tiang pondasi nyang jauh lebih dalem dari jalanan nyang lu pijak tiap hari. Kadang kala, ada berkas nyang emang lebih baik dibiarin berdebu daripada diungkit. Angin malem di pelabuhan nusuk banget buat nyang demen jalan di bibir dermaga. Hati-hati kepeleset trus klelep di air dalem.\""
    },
    choices: [
      {
        text: {
          id: "Tegaskan bahwa kebenaran Daniel tidak akan terkubur",
          en: "State that Daniel's truth will not be buried in dust",
          id_gaul: "Tegasin kalo kebenaran Daniel kaga bakal membal begitu aja"
        },
        nextNode: 'c2_reyn_threat'
      }
    ]
  },

  'c2_reyn_threat': {
    id: 'c2_reyn_threat',
    chapter: 2,
    speaker: 'reyn',
    charVisual: 'reyn',
    text: {
      id: "Reyn tersenyum tipis, menyesap aromanya. \"Kebenaran adalah kata yang puitis, Detektif. Namun kenyataannya, kota ini membutuhkan keteraturan perkapalan, bukan kegaduhan artikel koran. Daniel Baskara percaya pada kata-katanya sendiri, namun kata-kata tidak bisa menghentikan air pasang. Titipkan salam hangatku kepada Inspektur Vela. Katakan padanya, menyelamatkan masa depan seorang detektif muda jauh lebih bijak daripada mengejar hantu masa lalu.\"",
      en: "Reyn offers a faint, polite inclination of the head, savoring the malt's aroma. \"Truth is an admirable word, Detective. Yet in practice, this municipality requires functional shipping lanes, not the turbulence of ink and newsprint. Daniel Baskara had great faith in his own paragraphs, but words have never turned an ocean tide. Give my warmest regards to Inspector Vela. Remind her that preserving the career of a promising young detective is far more prudent than chasing old phantoms.\"",
      id_gaul: "Reyn senyum tipis sambil nyium aroma wiskinya. \"Kebenaran itu kata nyang manis, Detektif. Tapi kenyataannya, kota ini butuh puteran kapal dagang nyang lancar, bukan keributan selembar koran. Daniel Baskara percaya mati ama ketikannya, tapi tulisan kaga pernah bisa nahan ombak pasang. Salam hormat gue buat Inspektur Vela. Bilang ke dia, nyelametin masa depan detektif muda jauh lebih bijak daripada ngejar hantu masa lalu.\""
    },
    choices: [
      {
        text: {
          id: "Buka Papan Deduksi untuk merangkai anomali Bab 2",
          en: "Open the Deduction Board to synthesize Chapter 2 findings",
          id_gaul: "Buka Papan Deduksi buat ngeracik bukti Bab 2"
        },
        nextNode: 'c2_deduction_resolution'
      }
    ]
  },

  'c2_deduction_resolution': {
    id: 'c2_deduction_resolution',
    chapter: 2,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Bab 2: Korelasi Deduksi Terbukti',
    focusChange: 25,
    text: {
      id: "Di dalam benakku, pola-pola itu menemukan sambungannya: Brama menyerahkan kunci cadangan demi menghapus utangnya. Berbekal kunci itu, sang penyusup menetap di loteng rumah Daniel selama tiga hari (anomali Hinterkaifeck), memantau gerak-gerik korban, menaburkan kloral hidrat ke dalam kopi, lalu menikmati es krim melon di dapur dalam keheningan yang dingin (anomali Setagaya). Semua jejak intelektual ini menuntun ke satu muara: gudang arsip tersembunyi milik Daniel mengenai peristiwa 20 tahun silam.",
      en: "Inside my mind palace, the quiet threads weave together: Brama surrendered the spare key to buy back his debts. Armed with that key, the intruder inhabited Daniel's attic crawlspace for three quiet days (Hinterkaifeck anomaly), watched his prey, measured chloral hydrate into his cup, and calmly enjoyed melon ice cream in the kitchen (Setagaya anomaly). Every line of deduction points to a single nexus: Daniel's hidden archive concerning the events of twenty years ago.",
      id_gaul: "Di kepala gue, benang kusut itu mulai lurus: Brama nyerahin kunci serep buat nebus utangnya. Pake kunci itu, si penyusup nginep di loteng rumah Daniel tiga hari (anomali Hinterkaifeck), mantau gerak-geriknya, nyampurin kloral hidrat ke kopi, trus nyantai makan es krim melon di dapur (anomali Setagaya). Semua alur logika ini nunjuk ke satu tempat: gudang arsip rahasia Daniel soal kasus 20 taun lalu."
    },
    choices: [
      {
        text: {
          id: "Lanjut ke Bab 3: Bayangan Masa Lalu ➔",
          en: "Advance to Chapter 3: Shadows of the Past ➔",
          id_gaul: "Gas ke Bab 3: Bayangan Masa Lalu ➔"
        },
        nextNode: 'c3_start'
      }
    ]
  },

  // ==========================================
  // BAB 3: BAYANGAN MASA LALU (Inspirasi: Black Dahlia & Setiabudi 13)
  // ==========================================
  'c3_start': {
    id: 'c3_start',
    chapter: 3,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Awal Bab 3: Gudang Arsip Bawah Tanah Daniel',
    text: {
      id: "Gudang arsip rahasia Daniel bersembunyi di lantai bawah tanah bekas percetakan tua. Udara di sini berbau kertas lapuk, tinta cetak kering, dan debu berpuluh tahun. Di dinding bata terpasang kliping-kliping sejarah dengan benang merah: DOKUMEN MUTILASI SETIABUDI 13 & BLACK DAHLIA: REKAMAN BEDAH KLINIS YANG DIPETIESKAN KONSORSIUM 1981.",
      en: "Daniel's covert archive lies concealed in the cellar of a disused printing works. The subterranean air smells of brittle rag paper, dried printer's ink, and decades of dust. On the brick wall, historical clippings are pinned along a single crimson cord: SETIABUDI 13 & BLACK DAHLIA: CLINICAL DISSECTIONS BURIED BY THE 1981 CONSORTIUM.",
      id_gaul: "Gudang arsip rahasia Daniel nyelip di rubanah bekas pabrik percetakan koran tua. Udaranya bau kertas apek, tinta cetak lawas, ama debu puluhan taun. Di dinding bata nempel kliping sejarah nyang dihubungin tali merah: BERKAS MUTILASI SETIABUDI 13 & BLACK DAHLIA: REKAMAN BEDAH STERIL NYANG DIPETIESKAN KONSORSIUM 1981."
    },
    choices: [
      {
        text: {
          id: "Buka amplop kedua dari The Archivist di atas meja arsip",
          en: "Open The Archivist's second sealed letter on the desk",
          id_gaul: "Buka amplop kedua The Archivist di meja arsip"
        },
        nextNode: 'c3_archivist_letter2'
      },
      {
        text: {
          id: "Periksa brankas dinding antik di balik rak arsip",
          en: "Inspect the antique wall vault behind the file shelves",
          id_gaul: "Cek brankas dinding kuno di balik rak arsip"
        },
        nextNode: 'c3_safe_puzzle_prompt'
      }
    ]
  },

  'c3_archivist_letter2': {
    id: 'c3_archivist_letter2',
    chapter: 3,
    speaker: 'archivist',
    charVisual: 'archivist',
    text: {
      id: "Di samping lentera minyak kecil, terbaring selembar surat kedua beraksara rapi: \"Dua puluh tahun silam di Setiabudi, keahlian bedah yang sama memotong 180 bagian tanpa satu pun serpihan tulang retak kasar. Mereka yang membiayai keheningan itu kini menjadi pilar-pilar kehormatan di pelabuhan. Kunci kebenaran tersimpan di brankas Daniel dengan sandi tahun di mana luka sejarah ini pertama kali ditutup rapat oleh uang suap.\"",
      en: "Beside a small brass oil lamp rests a second parchment: \"Twenty years ago in Setiabudi, the exact surgical mastery separated 180 clean anatomical pieces without a single splintered bone. Those who underwrote that silence now stand as pillars of the harbor council. The key to the truth rests within Daniel's wall safe, locked by the year this historical wound was first sealed with bribes.\"",
      id_gaul: "Di samping lentera minyak kecil, nangkring surat kedua bertuliskan rapi: \"Dua puluh taun lalu di Setiabudi, keahlian bedah nyang sama ngerapiin 180 potongan tanpa ada tulang nyang patah remuk. Cukong nyang bayar duit tutup mulut itu sekarang jadi orang terhormat di dewan pelabuhan. Kunci brankas Daniel dipatok pake taun pas luka kelam ini pertama kali dibungkam pake duit suap.\""
    },
    choices: [
      {
        text: {
          id: "Buka brankas dinding bersandi 4 digit (Puzzle 2)",
          en: "Input the 4-digit combination on the wall safe (Puzzle 2)",
          id_gaul: "Buka brankas dinding sandi 4 digit (Puzzle 2)"
        },
        nextNode: 'c3_safe_puzzle_prompt'
      }
    ]
  },

  'c3_safe_puzzle_prompt': {
    id: 'c3_safe_puzzle_prompt',
    chapter: 3,
    speaker: 'arun',
    charVisual: 'arun',
    triggerPuzzle: '2',
    text: {
      id: "Pintu brankas baja tertanam di dinding bata kokoh. Keypad mekanis 4 digit menanti kombinasi angka. Berdasarkan kliping koran Kasus Mutilasi Setiabudi 13 di papan investigasi, peristiwa pembedahan misterius yang disembunyikan tersebut meledak pada tahun 1981.",
      en: "A steel vault door is recessed into the dense masonry. A 4-digit mechanical keypad awaits entry. Cross-referencing the yellowed Setiabudi 13 newsprint pinned upon the corkboard, that suppressed clinical mystery began in the year 1981.",
      id_gaul: "Pintu brankas baja nancep kokoh di tembok bata. Numpad mekanik 4 digit nunggu pencetan kode. Nyocokin kliping koran Kasus Mutilasi Setiabudi 13 di papan gabus, tragedi bedah steril nyang ditutup-tutupin itu meletus taun 1981."
    },
    choices: [
      {
        text: {
          id: "[Masukkan Kode Tahun Konsorsium: 1-9-8-1]",
          en: "[Enter the Consortium Foundation Year: 1-9-8-1]",
          id_gaul: "[Pencet Kode Taun Konsorsium: 1-9-8-1]"
        },
        nextNode: 'c3_safe_opened'
      }
    ]
  },

  'c3_safe_opened': {
    id: 'c3_safe_opened',
    chapter: 3,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Bab 3: Buku Besar 1981 Ditemukan',
    awardClue: 'clue-syndicate-ledger',
    focusChange: 25,
    text: {
      id: "Grendel baja bergeser dengan denting logam berat. Pintu brankas membuka ke dalam, menyingkap sebuah buku catatan tebal bersampul kulit hitam bertuliskan 'KONSORSIUM 1981'. Di dalamnya tercatat rincian aliran dana pembungkaman kepada mantan petinggi penegak hukum dan jaksa kota, diparaf langsung oleh almarhum ayah Reyn serta stempel persetujuan keluarga Reyn.",
      en: "The heavy internal tumblers fall with a resonant click. The vault door glides open, revealing a thick black leather journal debossed '1981 CONSORTIUM'. Inside lie the verified ledgers of silence: structured disbursements paid to retired magistrates and past chiefs of police, stamped with the seals of the elder Reyn and his heir.",
      id_gaul: "Grendel baja geser bunyi klik mantep. Pintu brankas ngebuka pelan, isinya buku tebel kulit item berlabel 'KONSORSIUM 1981'. Isinya catetan rapi duit sogokan tutup mulut ke mantan petinggi aparat ama jaksa kota, diparaf lengkap pake stempel keluarga besar Reyn."
    },
    choices: [
      {
        text: {
          id: "Tunjukkan buku besar ini kepada Inspektur Vela",
          en: "Present this ledger to Inspector Vela",
          id_gaul: "Tunjukkin buku besar ini ke Inspektur Vela"
        },
        nextNode: 'c3_vela_reaction'
      }
    ]
  },

  'c3_vela_reaction': {
    id: 'c3_vela_reaction',
    chapter: 3,
    speaker: 'vela',
    charVisual: 'vela',
    text: {
      id: "Vela membalik halaman buku besar dengan kehati-hatian luar biasa. Wajahnya menegang di bawah temaram lampu senter. \"Ini bukan lagi sekadar perkara kematian seorang reporter, Arun. Ini adalah peta pembungkaman institusi yang menopang tatanan kota ini selama empat dekade. Reyn tahu buku ini ada di tangan Daniel. Dia tidak akan membiarkan kita berjalan keluar ke fajar jika dia tahu kita memegangnya.\"",
      en: "Vela turns the aged pages with profound delicacy. Her jaw tightens beneath the torchlight. \"This is no longer the murder of an ink-stained reporter, Arun. This is an architectural map of institutional silence that has propped up this city for four decades. Reyn knew Daniel had unearthed this book. He will not permit either of us to walk into tomorrow's dawn if he knows we hold it.\"",
      id_gaul: "Vela ngebolak-balik lembaran buku besar ati-ati banget. Rahangnya ngeretek tegang disorot lampu senter. \"Ini bukan lagi urusan wartawan mati biasa, Arun. Ini peta kongkalikong pejabat nyang nopang kekuasaan kota ini empat puluh taun. Reyn tau buku ini dipegang Daniel. Dia kaga bakal ngebiarin kita napas liat matahari terbit kalo tau buku ini udah di tangan kita.\""
    },
    choices: [
      {
        text: {
          id: "Periksa dokumen manifes pelarian di sampul belakang",
          en: "Check the departure manifest tucked into the rear sleeve",
          id_gaul: "Cek manifes pelayaran nyelip di sampul belakang"
        },
        nextNode: 'c3_locate_docks'
      }
    ]
  },

  'c3_locate_docks': {
    id: 'c3_locate_docks',
    chapter: 3,
    speaker: 'arun',
    charVisual: 'arun',
    text: {
      id: "Di kantong belakang buku besar terselip manifes pelayaran: Kapal pesiar pribadi *The Nocturne* telah mengantongi izin berlayar pukul 04.00 fajar dari Dermaga Gudang 7 menuju perairan internasional bebas ekstradisi. Sebuah rencana pelarian senyap yang mengingatkan pada hilangnya Lord Lucan tahun 1974. Waktu kita kurang dari satu jam sebelum kapal itu membelah kabut malam.",
      en: "Tucked inside the rear binding is a maritime departure clearance: Private motor yacht *The Nocturne* has clearance to cast off at 04:00 AM from Wharf Shed 7 into international waters beyond jurisdiction. An unheralded vanishing act mirroring Lord Lucan in 1974. We have under an hour before that hull cuts through the seaward mist.",
      id_gaul: "Nyelip di kantong belakang buku besar, ada selembar manifes jalan kapal: Kapal pesiar pribadi *The Nocturne* udah dapet izin cabut jam 04.00 subuh dari Dermaga Gudang 7 ke laut lepas bebas ekstradisi. Trik kabur senyap nyang persis pola ngilangnya Lord Lucan taun 1974. Waktu kita kaga nyampe sejam sebelom kapal itu ngebut nembus kabut laut."
    },
    choices: [
      {
        text: {
          id: "Berangkat ke Dermaga Gudang 7 (Bab 4) ➔",
          en: "Depart for Harbor Wharf Shed 7 (Chapter 4) ➔",
          id_gaul: "Tancap gas ke Dermaga Gudang 7 (Bab 4) ➔"
        },
        nextNode: 'c4_start'
      }
    ]
  },

  // ==========================================
  // BAB 4: KONFRONTASI (Inspirasi: Lord Lucan & Marsinah)
  // ==========================================
  'c4_start': {
    id: 'c4_start',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Awal Bab 4: Suasana Sunyi Dermaga 7',
    text: {
      id: "Dermaga Gudang 7 terbentang basah di bawah guyuran hujan laut yang dingin. Lonceng kabut pelabuhan berdentang parau setiap beberapa puluh detik, meredam deru ombak yang menghantam tiang-tiang kayu dermaga. Di ujung tambatan, kapal pesiar *The Nocturne* menyalakan mesin gandanya dengan dengung rendah. Di sampingnya, sebuah kontainer kargo bernomor 77 tersegel oleh gembok resonansi frekuensi.",
      en: "Wharf Shed 7 stretches out wet and shadowed beneath a freezing sea spray. The harbor fog bell tolls its hollow note every few moments, swallowing the churn of black water against rotting timber pilings. At the berth's rim, motor yacht *The Nocturne* idles with a low twin-diesel thrum. Beside it, reinforced shipping container 77 is locked with an acoustic frequency resonance mechanism.",
      id_gaul: "Dermaga Gudang 7 basah kuyup dihajar cipratan air laut nyang dingin. Lonceng kabut dermaga bunyi parau tiap beberapa detik, ngeredam suara ombak nyang nabrak tiang-tiang kayu dermaga. Di ujung sandaran, kapal pesiar *The Nocturne* mesin gandanya udah ngebul pelan. Sebelahnya ada kontainer kargo nomer 77 nyang kegembok pake sistem nada resonansi frekuensi."
    },
    choices: [
      {
        text: {
          id: "Pecahkan Kunci Nada Frekuensi Kontainer 77 (Puzzle 3)",
          en: "Crack the Frequency Resonator on Container 77 (Puzzle 3)",
          id_gaul: "Pecahin Kunci Nada Frekuensi Kontainer 77 (Puzzle 3)"
        },
        nextNode: 'c4_puzzle3_prompt'
      }
    ]
  },

  'c4_puzzle3_prompt': {
    id: 'c4_puzzle3_prompt',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    triggerPuzzle: '3',
    text: {
      id: "Catatan The Archivist menginstruksikan: 'Penyetel mekanik ini hanya luluh pada irama lonceng kabut pelabuhan: nada rendah (1), nada tinggi (3), dan nada sedang (2).' Tiga dial harus diputar agar frekuensinya beresonansi dengan angin dermaga.",
      en: "The Archivist's marginal note instructs: 'The acoustic tumblers yield only to the cadence of the harbor fog bells: low pitch (1), high pitch (3), and median pitch (2).' Three dials must be aligned to resonate with the marine wind.",
      id_gaul: "Catetan The Archivist ngasih petunjuk: 'Gembok suara ini cuma mau kebuka kalo ngikut irama lonceng kabut dermaga: nada rendah (1), nada tinggi (3), ama nada sedeng (2).' Tiga puteran dial kudu disetel pas biar pas ama angin pelabuhan."
    },
    choices: [
      {
        text: {
          id: "[Setel Nada Frekuensi: 1 - 3 - 2]",
          en: "[Tune the Resonance Dials: 1 - 3 - 2]",
          id_gaul: "[Setel Puteran Nada: 1 - 3 - 2]"
        },
        nextNode: 'c4_container_opened'
      }
    ]
  },

  'c4_container_opened': {
    id: 'c4_container_opened',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    triggerCheckpoint: 'Bab 4: Rahasia Kontainer 77 Terbuka',
    awardClue: 'clue-surgical-kit',
    focusChange: 25,
    text: {
      id: "Pintu kontainer terbuka mendesing. Di dalamnya, di bawah sorot lampu darurat, tersimpan sebuah koper antik berlapis beledu ungu berisi perangkat bedah anatomi Solingen vintage: gergaji mikro dan pisau tipis berukir stempel klinik Reyn Maritime. Di sampingnya terdapat koper berisi paspor-paspor diplomatik dengan identitas baru dan tiket perjalanan laut internasional.",
      en: "The pneumatic seal releases with a soft sigh. Inside, illuminated beneath amber emergency lanterns, rests a vintage Solingen surgical casket lined in purple velvet: micro-saws and thin scalpels bearing the Reyn Maritime clinic hallmark. Flanking the case are diplomatic pouches holding foreign passports under assumed identities and passage documentation for an unheralded sea crossing.",
      id_gaul: "Pintu kontainer kebuka ngeses alus. Di dalemnya, disorot lampu darurat kuning, ada koper antik lapis beledu ungu isi alat bedah Solingen vintage: gergaji mikro ama pisau tipis berstempel klinik Reyn Maritime. Sebelahnya ada map isi paspor diplomatik identitas baru ama tiket pelayaran laut lepas."
    },
    choices: [
      {
        text: {
          id: "Berbalik saat mendengar langkah kaki di balik kabut dermaga",
          en: "Turn as footsteps emerge from the harbor fog",
          id_gaul: "Balik badan pas denger langkah kaki di balik kabut"
        },
        nextNode: 'c4_archivist_appearance'
      }
    ]
  },

  'c4_archivist_appearance': {
    id: 'c4_archivist_appearance',
    chapter: 4,
    speaker: 'archivist',
    charVisual: 'archivist',
    text: {
      id: "Dari balik bayangan tiang derek kapal, sesosok figur bertudung kain kelabu melangkah tenang. Topeng porselen menutupi separuh wajahnya. \"Dua puluh tahun aku menjaga nama-nama yang berusaha dihapus dari lembaran kota ini, Detektif Arun. Aku bukan pembunuh Daniel; aku adalah pembaca yang menyalakan pelita agar kebenaran ini tidak lagi terkubur dalam debu. Dan kini, orang yang memesan keheningan tersebut telah tiba.\"",
      en: "From behind the rusted shadows of the cargo crane, a hooded figure in slate cloth steps forth with quiet dignity. A porcelain mask conceals half their face. \"For twenty years I kept vigil over the names this city attempted to erase from its registries, Detective Arun. I did not take Daniel's breath; I was the reader who lit your lamp so this history would never rot in darkness. And now, the architect of that silence has arrived.\"",
      id_gaul: "Dari balik bayangan crane besi karatan, sosok berjubah abu-abu melangkah tenang berwibawa. Topeng porselen nutupin separuh mukanya. \"Dua puluh taun gue ngejaga nama-nama nyang coba dihapus dari lembaran kota ini, Detektif Arun. Gue bukan nyang ngabisin Daniel; gue cuma pembaca nyang nyalain lentera biar kebenaran ini kaga membusuk di kegelapan. Dan sekarang, orang nyang mesen keheningan itu udah nongol di depan mata.\""
    },
    choices: [
      {
        text: {
          id: "Hadapi Reyn yang menuruni tangga kapal",
          en: "Confront Reyn as he descends the yacht's gangplank",
          id_gaul: "Hadapin Reyn nyang turun dari tangga kapal"
        },
        nextNode: 'c4_reyn_standoff'
      }
    ]
  },

  'c4_reyn_standoff': {
    id: 'c4_reyn_standoff',
    chapter: 4,
    speaker: 'reyn',
    charVisual: 'reyn',
    triggerCheckpoint: 'Bab 4: Pertemuan Penentuan di Dermaga',
    text: {
      id: "Reyn menuruni tangga kapal dengan mantel kasmir hitam, tanpa pengawal yang berteriak atau senjata yang teracung gegabah. Ketenangannya adalah ketenangan orang yang terbiasa menentukan arah angin. \"Detektif Arun... Ketelitianmu patut dipuji. Namun mari kita memandang kenyataan dengan akal jernih. Seperti nasib aktivis buruh Marsinah atau puluhan nama tak terpecahkan yang kau simpan di berkasmu, keadilan di dunia nyata hanyalah kesepakatan mereka yang memiliki daya. Di kapal ini ada jaminan hidup tenang sepuluh juta dolar untukmu, dan posisi kepala kepolisian wilayah untuk Vela. Atau pilihan kedua: berkeras kepala, dan namamu akan ikut menjadi sebaris arsip dingin yang tak pernah dibuka lagi.\"",
      en: "Reyn steps down the gangplank in a tailored cashmere overcoat, unaccompanied by shouting guards or brandished steel. His calm is the composure of one accustomed to directing the municipal tides. \"Detective Arun... Your deductive rigor is genuinely commendable. Yet let us regard reality with unclouded eyes. Much like the reformer Marsinah or the scores of unsolved dossiers resting in your archives, justice in the mortal world is simply a consensus negotiated by those with the means to govern. Aboard this vessel lies a ten-million-dollar foundation for your quiet future, and a commissionership for Vela. Or the second path: remain obstinate, and your name will join the cold archives that no one ever reads again.\"",
      id_gaul: "Reyn turun dari tangga kapal pake mantel kasmir item, kaga pake teriak-teriak atau nodong pistol sembarangan. Ketenangannya bener-bener ketenangan orang nyang biasa ngatur arah angin kota. \"Detektif Arun... Ketelitian lu pantes diacungi jempol. Tapi mari kita liat kenyataan pake kepala dingin. Persis kayak nasib pejuang buruh Marsinah atau puluhan kasus tak terpecahkan nyang ada di berkas lu, keadilan di dunia nyata itu cuma kesepakatan orang-orang nyang megang kendali. Di kapal ini ada jaminan idup ayem sepuluh juta dolar buat lu, plus pangkat jenderal buat mbak Vela. Atau opsi kedua: lu tetep ngeyel, trus nama lu bakal nyusul jadi selembar arsip dingin nyang kaga bakal dibaca orang lagi.\""
    },
    choices: [
      {
        text: {
          id: "Tolak kompromi dan tegakkan hukum atas nama kebenaran Daniel! (Ending 1)",
          en: "Refuse compromise and enforce the law in Daniel's honor! (Ending 1)",
          id_gaul: "Tolak kompromi trus tegakin hukum demi kebenaran Daniel! (Ending 1)"
        },
        nextNode: 'end_1_justice'
      },
      {
        text: {
          id: "Biarkan kabut laut menelan kapal pelarian... (Ending 2)",
          en: "Watch the sea mist swallow the departing vessel... (Ending 2)",
          id_gaul: "Biarkan kabut laut nelen kapal pelarian... (Ending 2)"
        },
        nextNode: 'end_2_unsolved'
      },
      {
        text: {
          id: "Serahkan berkas ini ke meja pimpinan balai kota (Ending 3)",
          en: "Hand the dossiers to the senior judicial board at City Hall (Ending 3)",
          id_gaul: "Serahin berkas ini ke meja pimpinan balai kota (Ending 3)"
        },
        nextNode: 'end_3_betrayal'
      },
      {
        text: {
          id: "Sintesis Kebenaran Penuh 1981 bersama The Archivist! (Ending Rahasia 4)",
          en: "Synthesize the Complete 1981 Truth with The Archivist! (Secret Ending 4)",
          id_gaul: "Rangkai Kebenaran Penuh 1981 bareng The Archivist! (Ending Rahasia 4)"
        },
        nextNode: 'end_4_secret'
      }
    ]
  },

  // ==========================================
  // EPILOG: 4 MULTIPLE ENDINGS
  // ==========================================
  'end_1_justice': {
    id: 'end_1_justice',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    text: {
      id: "\"Simpan jaminanmu, Reyn. Lima menit lagi matahari terbit. Dan aku sudah tahu persis siapa yang harus kuborgol.\" Lampu-lampu sorot kendaraan patroli Inspektur Vela membelah tirai kabut dermaga. Pasukan kepolisian menutup seluruh jalan keluar. Logam borgol mengunci pergelangan tangan Reyn dalam keheningan fajar. Daniel Baskara mendapatkan keadilannya hari ini, walau kami tahu bayang-bayang kekuasaan lain masih akan mengintai kota ini.",
      en: "\"Keep your foundation, Reyn. Five minutes till sunrise. And I know precisely whom to cuff.\" The amber fog lamps of Inspector Vela's cruisers pierce the marine mist. Patrol units seal every access road. Steel cuffs click shut around Reyn's wrists in the quiet of dawn. Daniel Baskara receives his justice today, though we know the deeper shadows of power will linger over this harbor.",
      id_gaul: "\"Simpen duit jaminan lu, Reyn. Lima menit lagi subuh. Dan gue udah tau persis siapa nyang kudu diborgol.\" Lampu sorot mobil patroli Inspektur Vela nembus kabut dermaga. Pasukan polisi langsung nutup semua jalan keluar. Logam borgol ngunci tangan Reyn di keheningan subuh. Daniel Baskara dapet keadilannya hari ini, walau gue paham bayangan cukong laen masih bakal ngintip dari kejauhan."
    },
    choices: [
      {
        text: {
          id: "[BACA EPILOG: KEADILAN KELAM]",
          en: "[READ EPILOGUE: COLD JUSTICE]",
          id_gaul: "[BACA EPILOG: KEADILAN KELAM]"
        },
        nextNode: 'end_1_epilogue'
      }
    ]
  },

  'end_1_epilogue': {
    id: 'end_1_epilogue',
    chapter: 4,
    speaker: 'vela',
    charVisual: 'vela',
    text: {
      id: "Vela berdiri di sisiku di tepi dermaga, memandang mobil tahanan yang bergerak perlahan meninggalkan pelabuhan. \"Kerja bersih, Arun. Tapi di kota seperti ini, mematahkan satu cabang pohon tidak menghentikan akarnya di bawah tanah. Pulanglah, keringkan mantelmu.\" Aku menyalakan sebatang rokok, menatap fajar abu-abu yang merayap di atas cakrawala teluk.",
      en: "Vela stands beside me at the dock's edge, watching the prison wagon roll quietly toward the city. \"Clean work, Arun. But in a place like this, lopping off a branch doesn't kill the deep root beneath the soil. Go home, dry your coat.\" I light a match, watching a pale gray dawn creep across the harbor skyline.",
      id_gaul: "Vela berdiri di samping gue di bibir dermaga, ngeliatin mobil tahanan jalan pelan ninggalin pelabuhan. \"Kerja bersih, Arun. Tapi di kota kayak gini, nebas satu dahan kaga bakal matiin akar pohon di dalem tanah. Balik sono lu, keringin mantel lu.\" Gue nyalain korek, mandang langit subuh abu-abu nyang mulai terang di atas teluk."
    },
    choices: [
      {
        text: {
          id: "Kembali ke Menu Utama ➔",
          en: "Return to Main Menu ➔",
          id_gaul: "Balik ke Menu Utama ➔"
        },
        nextNode: 'c1_start'
      }
    ]
  },

  'end_2_unsolved': {
    id: 'end_2_unsolved',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    text: {
      id: "Sebuah suar cahaya dilepaskan ke udara, membutakan pandangan sesaat. Ketika kabut kembali tenang, deru mesin kapal *The Nocturne* telah menjauh, memotong ombak hitam menuju perairan internasional—persis seperti kepergian abadi Lord Lucan tahun 1974. Daniel telah tiada, Reyn lenyap ditelan samudra, dan map perkara ini ditutup dengan stempel merah: KASUS DINGIN - TIDAK TERPECAHKAN.",
      en: "A phosphorus flare erupts overhead, washing the pier in white blindness. By the time vision returns through the drifting fog, the twin engines of *The Nocturne* have cut into the black open swell toward international waters—mirroring Lord Lucan's eternal disappearance in 1974. Daniel is gone, Reyn has dissolved into the sea, and the docket is closed in red ink: COLD CASE - UNSOLVED.",
      id_gaul: "Suar cahaya meledak di udara, bikin mata perih silau sesaat. Pas kabut mulai tenang lagi, suara mesin kapal *The Nocturne* udah ngejauh, motong ombak item ke laut lepas—plek ketiplek kayak ngilangnya Lord Lucan taun 1974. Daniel udah kaga ada, Reyn ngilang ditelen samudra, trus map berkas ini ditutup stempel merah: COLD CASE - KAGA TERPECAHKAN."
    },
    choices: [
      {
        text: {
          id: "[BACA EPILOG: MISTERI ABADI]",
          en: "[READ EPILOGUE: INTO THE MIST]",
          id_gaul: "[BACA EPILOG: MISTERI ABADI]"
        },
        nextNode: 'end_2_epilogue'
      }
    ]
  },

  'end_2_epilogue': {
    id: 'end_2_epilogue',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    text: {
      id: "Hujan rintik kembali turun membasahi kayu dermaga yang sepi. Aku berdiri sendirian menatap cakrawala laut yang kosong. Di saku mantelku, secarik catatan singkat dari The Archivist berbunyi: 'Beberapa rahasia tidak pernah diselesaikan oleh ruang sidang. Mereka hidup abadi dalam keheningan yang tak pernah usai.'",
      en: "A gentle drizzle returns to wash the empty wooden pier. I stand alone staring into the vast, indifferent sea. In my coat pocket rests a final slip from The Archivist: 'Some secrets are never resolved in courtrooms. They endure forever within the silence that refuses to end.'",
      id_gaul: "Gerimis alus turun lagi ngebasahin kayu dermaga nyang sepi. Gue berdiri dewean mandang laut lepas nyang kosong melompong. Di saku mantel, ada secarik kertas dari The Archivist: 'Ada rahasia nyang kaga pernah kelar di meja sidang. Mereka idup abadi di keheningan nyang kaga pernah kelar.'"
    },
    choices: [
      {
        text: {
          id: "Kembali ke Menu Utama ➔",
          en: "Return to Main Menu ➔",
          id_gaul: "Balik ke Menu Utama ➔"
        },
        nextNode: 'c1_start'
      }
    ]
  },

  'end_3_betrayal': {
    id: 'end_3_betrayal',
    chapter: 4,
    speaker: 'vela',
    charVisual: 'vela',
    text: {
      id: "Keesokan paginya di Balai Kota, seluruh buku besar dan kotak perkakas disita langsung oleh utusan kejaksaan agung. 'Penyelidikan dinyatakan selesai demi menjaga stabilitas ekonomi wilayah.' Lencana detektifku ditarik dari saku jas. Kematian Daniel dinyatakan sebagai insiden perampokan acak, pola pembungkaman yang teramat akrab seperti penanganan kasus Marsinah.",
      en: "The next morning at City Hall, the entire ledger and Solingen case are taken directly into custody by emissaries from the prosecutor's office. 'Investigation concluded in the interest of regional economic stability.' My detective's badge is gathered from my pocket. Daniel's end is filed away as an unmotivated burglary, an institutional silencing pattern echoing the Marsinah affair.",
      id_gaul: "Besok paginya di Balai Kota, semua buku besar ama koper alat bedah disita langsung ama utusan kejaksaan. 'Penyelidikan resmi ditutup demi ngejaga stabilitas ekonomi daerah.' Lencana detektif gue dicopot dari saku jas. Kematian Daniel dibikin seolah-olah kemalingan biasa, persis pola pembungkaman sistemik kasus Marsinah jaman dulu."
    },
    choices: [
      {
        text: {
          id: "[BACA EPILOG: KONSPIRASI INSTITUSI]",
          en: "[READ EPILOGUE: INSTITUTIONAL BETRAYAL]",
          id_gaul: "[BACA EPILOG: KONSPIRASI INSTITUSI]"
        },
        nextNode: 'end_3_epilogue'
      }
    ]
  },

  'end_3_epilogue': {
    id: 'end_3_epilogue',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    text: {
      id: "Malam ini aku duduk di kedai kopi terpencil di pinggiran rel kereta. Tanpa lencana, tanpa surat tugas. Di hadapanku tergeletak mesin tik antik dan segel lilin hitam. Mulai malam ini, aku bukan lagi Detektif Arun yang terikat aturan dinas. Aku adalah The Archivist berikutnya.",
      en: "Tonight I sit in a quiet tavern by the rail yards. No badge, no official commission. Before me rests an antique typewriter and black sealing wax. From this hour forward, I am no longer Detective Arun bounded by municipal protocol. I am the next Archivist.",
      id_gaul: "Malem ini gue duduk di warkop sepi pinggir rel kereta. Kaga ada lencana, kaga ada surat tugas dinas. Di depan gue nangkring mesin tik tua ama lilin segel item. Mulai malem ini, gue bukan lagi Detektif Arun nyang diatur birokrasi dinas. Gue nyang bakal jadi The Archivist berikutnya."
    },
    choices: [
      {
        text: {
          id: "Kembali ke Menu Utama ➔",
          en: "Return to Main Menu ➔",
          id_gaul: "Balik ke Menu Utama ➔"
        },
        nextNode: 'c1_start'
      }
    ]
  },

  'end_4_secret': {
    id: 'end_4_secret',
    chapter: 4,
    speaker: 'archivist',
    charVisual: 'archivist',
    focusChange: 35,
    text: {
      id: "The Archivist melangkah ke sisiku dan melepaskan topengnya dengan tenang: ia adalah putri kandung kepala forensik 1981 yang disingkirkan karena menolak memalsukan autopsi Setiabudi. Bersama-sama, kami menyiarkan seluruh salinan mikrofilm dan buku besar Reyn ke sindikasi pers independen nasional dan internasional secara serentak. Dalam hitungan menit, sirene kepolisian pusat meraung menutup dermaga!",
      en: "The Archivist steps to my side and quietly lifts her porcelain mask: she is the surviving daughter of the 1981 chief pathologist who was exiled for refusing to alter the Setiabudi post-mortem. Together, we transmit high-resolution microfilm duplicates of Reyn's ledgers across national and international press wires simultaneously. Within minutes, federal sirens echo through the harbor basin!",
      id_gaul: "The Archivist maju ke samping gue trus ngebuka topengnya pelan: dia anak cewek dari dokter forensik taun 1981 nyang disingkirin pejabat gara-gara nolak malsuin autopsi Setiabudi. Bareng-bareng, kita siarin salinan mikrofilm buku besar Reyn ke semua kantor berita independen serentak. Cuma hitungan menit, sirene polisi mabes meraung-raung ngepung pelabuhan!"
    },
    choices: [
      {
        text: {
          id: "[BACA EPILOG ENDING RAHASIA: KEBENARAN 1981]",
          en: "[READ SECRET EPILOGUE: THE TRUTH OF 1981]",
          id_gaul: "[BACA EPILOG ENDING RAHASIA: KEBENARAN 1981]"
        },
        nextNode: 'end_4_epilogue'
      }
    ]
  },

  'end_4_epilogue': {
    id: 'end_4_epilogue',
    chapter: 4,
    speaker: 'arun',
    charVisual: 'arun',
    text: {
      id: "Reyn dan seluruh jejaring konsorsium ditangkap tanpa ada celah hukum yang dapat membelinya lagi. Kasus penemuan tubuh 20 tahun lalu, misteri Setiabudi 13, dan pembunuhan Daniel Baskara akhirnya menemukan penutupan sejati. Keadilan mungkin tertunda puluhan tahun, namun malam ini, bayang-bayang masa lalu akhirnya terurai di bawah hangatnya sinar mentari pagi.",
      en: "Reyn and the entire consortium network are taken into custody beyond the reach of local bribes. The twenty-year cold case, the Setiabudi 13 enigma, and Daniel Baskara's untimely end finally receive true closure. Justice may have wandered in the dark for decades, yet tonight, the long shadows of the past quietly dissolve beneath the morning sun.",
      id_gaul: "Reyn ama semua kroni konsorsiumnya diciduk tanpa ada celah hukum nyang bisa dibeli lagi. Kasus misteri 20 taun lalu, tragedi Setiabudi 13, ama kematian Daniel Baskara akhirnya tuntas bersih. Keadilan emang sempet muter-muter puluhan taun di kegelapan, tapi malem ini, bayangan kelam masa lalu akhirnya lebur disinarin matahari pagi."
    },
    choices: [
      {
        text: {
          id: "Kembali ke Menu Utama (Selamat! Anda Membuka Ending Terbaik) ➔",
          en: "Return to Main Menu (Congratulations! True Ending Unlocked) ➔",
          id_gaul: "Balik ke Menu Utama (Selamat! Lu Berhasil Ngebuka Ending Rahasia) ➔"
        },
        nextNode: 'c1_start'
      }
    ]
  }
};




    // ==========================================
    // SECTION 3: ENGINE CORE, AUDIO, PUZZLES, SAVES
    // ==========================================
    // ARALUNA: Arsip Pembunuhan Tak Terpecahkan
// Master Engine Core Logic (Audio, State, UI, Puzzles, Checkpoints, Saves, Case Library)

let currentLang = 'id';
let textSpeed = 22; // ms per char
let typingTimer = null;
let currentSaveModalMode = 'save'; // 'save' or 'load'

// 15-Minute Optional Pressure Timer
let isTimerEnabled = false;
let timerRemainingSeconds = 900;
let timerInterval = null;

// Puzzles State
let currentActivePuzzle = null;
let cipherShift = 0;
let safeEnteredCode = '';
let circuitDials = [1, 1, 1];

// Primary Game State
let gameState = {
  chapter: 1,
  currentNode: 'c1_start',
  currentScene: 'story', // 'story', 'hotspot', 'puzzle', 'ending'
  focus: 15,
  playerName: 'Detektif Arun',
  clues: [],
  deductions: [],
  flags: {},
  backlog: [],
  selectedSlotA: null,
  selectedSlotB: null
};

// ==========================================
// ADVANCED PROCEDURAL NOIR AUDIO ENGINE
// ==========================================
let audioCtx = null;
let isAudioMuted = false;
let masterVolume = 0.75;
let masterGainNode = null;
let rainGainNode = null;
let rainSourceNode = null;
let bgmTimer = null;
let thunderTimer = null;
let isAudioInitialized = false;

// 6 Melancholic Noir Jazz Chords (Fm9, Bbm7, Eb7, Abmaj7, Dbmaj7, C7alt)
const JAZZ_CHORDS = [
  [87.31, 130.81, 207.65, 311.13, 392.00],
  [58.27, 87.31, 138.59, 207.65, 261.63],
  [77.78, 116.54, 196.00, 277.18, 349.23],
  [51.91, 77.78, 130.81, 196.00, 233.08],
  [69.30, 103.83, 174.61, 261.63, 311.13],
  [65.41, 98.00, 164.81, 233.08, 311.13]
];
let currentChordIdx = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
      masterGainNode = audioCtx.createGain();
      masterGainNode.gain.setValueAtTime(isAudioMuted ? 0 : masterVolume, audioCtx.currentTime);
      masterGainNode.connect(audioCtx.destination);
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function initAudioEngine() {
  if (isAudioInitialized) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  isAudioInitialized = true;
  initProceduralRain();
  startNoirBgm();
  scheduleDistantThunder();
}

function initProceduralRain() {
  const ctx = getAudioContext();
  if (!ctx || rainSourceNode) return;

  const bufferSize = ctx.sampleRate * 2;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.038;
    b6 = white * 0.115926;
  }

  rainSourceNode = ctx.createBufferSource();
  rainSourceNode.buffer = noiseBuffer;
  rainSourceNode.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 820;

  rainGainNode = ctx.createGain();
  rainGainNode.gain.value = isAudioMuted ? 0 : 0.18;

  rainSourceNode.connect(filter);
  filter.connect(rainGainNode);
  rainGainNode.connect(masterGainNode);
  rainSourceNode.start();
}

function playNextJazzChord() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;

  const chord = JAZZ_CHORDS[currentChordIdx];
  currentChordIdx = (currentChordIdx + 1) % JAZZ_CHORDS.length;

  const now = ctx.currentTime;
  const chordGain = ctx.createGain();
  chordGain.gain.setValueAtTime(0.0001, now);
  chordGain.gain.exponentialRampToValueAtTime(0.055, now + 1.2);
  chordGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.9);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 720;

  chord.forEach((freq, idx) => {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc2.type = 'sine';

    const detune = (Math.random() - 0.5) * 5;
    osc1.frequency.setValueAtTime(freq, now + idx * 0.035);
    osc2.frequency.setValueAtTime(freq + detune, now + idx * 0.035);

    osc1.connect(filter);
    osc2.connect(filter);

    osc1.start(now + idx * 0.035);
    osc2.start(now + idx * 0.035);
    osc1.stop(now + 5.0);
    osc2.stop(now + 5.0);
  });

  filter.connect(chordGain);
  chordGain.connect(masterGainNode);
}

function startNoirBgm() {
  if (bgmTimer) return;
  playNextJazzChord();
  bgmTimer = setInterval(playNextJazzChord, 4800);
}

function scheduleDistantThunder() {
  if (thunderTimer) clearTimeout(thunderTimer);
  const nextThunderDelay = 35000 + Math.random() * 30000;
  thunderTimer = setTimeout(() => {
    triggerDistantThunder();
    scheduleDistantThunder();
  }, nextThunderDelay);
}

function triggerDistantThunder() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(55, now);
  osc.frequency.exponentialRampToValueAtTime(32, now + 2.8);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(140, now);
  filter.frequency.exponentialRampToValueAtTime(60, now + 3.0);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.08, now + 0.9);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(masterGainNode);

  osc.start(now);
  osc.stop(now + 3.3);
}

let dialogueVoiceStyle = localStorage.getItem('araluna_voice_style') || 'voice'; // 'voice', 'typewriter', 'none'

const CHARACTER_VOICE_PROFILES = {
  arun: {
    baseFreq: 140,
    wave: 'triangle',
    filterFreq: 520,
    q: 3.2,
    detuneRange: 16
  },
  vela: {
    baseFreq: 265,
    wave: 'triangle',
    filterFreq: 940,
    q: 2.8,
    detuneRange: 24
  },
  mira: {
    baseFreq: 385,
    wave: 'sine',
    filterFreq: 1220,
    q: 2.4,
    detuneRange: 32
  },
  brama: {
    baseFreq: 185,
    wave: 'sawtooth',
    filterFreq: 640,
    q: 3.6,
    detuneRange: 22
  },
  sena: {
    baseFreq: 235,
    wave: 'sine',
    filterFreq: 860,
    q: 3.2,
    detuneRange: 16
  },
  reyn: {
    baseFreq: 115,
    wave: 'triangle',
    filterFreq: 440,
    q: 4.2,
    detuneRange: 14
  },
  archivist: {
    baseFreq: 95,
    wave: 'sawtooth',
    filterFreq: 340,
    q: 4.6,
    detuneRange: 26
  }
};

function setDialogueVoiceStyle(style) {
  dialogueVoiceStyle = style;
  localStorage.setItem('araluna_voice_style', style);
  updateVoiceStyleButtons();
  if (style !== 'none') {
    playDialogueVoice('arun', 'A');
  }
  showToast(
    style === 'voice' 
      ? (currentLang === 'en' ? 'Voice Murmurs Active ("br-br-br")' : 'Suara Vokal Karakter Aktif ("br-br-br")')
      : style === 'typewriter'
      ? (currentLang === 'en' ? 'Noir Typewriter Audio Active' : 'Suara Mesin Tik Noir Aktif')
      : (currentLang === 'en' ? 'Dialogue Voice Muted' : 'Suara Dialog Dimatikan')
  );
}

function updateVoiceStyleButtons() {
  const buttons = document.querySelectorAll('#voice-options-row .settings-pill-btn');
  buttons.forEach(btn => {
    const style = btn.getAttribute('data-voice-style');
    btn.classList.toggle('active', style === dialogueVoiceStyle);
  });
}

function playDialogueVoice(speakerKey, char) {
  if (isAudioMuted || dialogueVoiceStyle === 'none') return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;
  const now = ctx.currentTime;

  const key = (speakerKey || '').toLowerCase().trim();
  const profile = CHARACTER_VOICE_PROFILES[key];

  if (dialogueVoiceStyle === 'voice' && profile) {
    // 1. CHARACTER VOCALIZATION ("br-br-br" Animalese / Ace Attorney / Undertale blip)
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = profile.wave;

    // Pitch inflection per character letter
    const charCode = (char ? char.charCodeAt(0) : 65);
    const inflection = ((charCode % 7) - 3) * (profile.detuneRange / 3);
    const targetFreq = Math.max(60, profile.baseFreq + inflection);

    osc.frequency.setValueAtTime(targetFreq, now);

    // Formant filter (human vowel tract resonance)
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(profile.filterFreq, now);
    filter.Q.setValueAtTime(profile.q, now);

    // Punchy, pleasant acoustic envelope
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.052);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGainNode);

    osc.start(now);
    osc.stop(now + 0.058);
  } else {
    // 2. MECHANICAL NOIR TYPEWRITER STRIKE
    // Layer A: Crisp mechanical snap transient
    const snapOsc = ctx.createOscillator();
    const snapGain = ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(1400 + Math.random() * 400, now);
    snapGain.gain.setValueAtTime(0.07, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);
    snapOsc.connect(snapGain);
    snapGain.connect(masterGainNode);
    snapOsc.start(now);
    snapOsc.stop(now + 0.025);

    // Layer B: Metal lever body plonk
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    bodyOsc.type = 'sine';
    bodyOsc.frequency.setValueAtTime(440 + Math.random() * 80, now);
    bodyGain.gain.setValueAtTime(0.09, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);
    bodyOsc.connect(bodyGain);
    bodyGain.connect(masterGainNode);
    bodyOsc.start(now);
    bodyOsc.stop(now + 0.042);
  }
}

function playSound(type) {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx || !masterGainNode) return;

  const now = ctx.currentTime;

  if (type === 'type') {
    playDialogueVoice('narasi', 'A');
    return;
  } else if (type === 'chime') {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.1, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.65);
      osc.connect(gain);
      gain.connect(masterGainNode);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.7);
    });
  } else if (type === 'sting') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130.81, now);
    osc.frequency.exponentialRampToValueAtTime(65.41, now + 0.45);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
    osc.connect(gain);
    gain.connect(masterGainNode);
    osc.start(now);
    osc.stop(now + 0.55);
  } else if (type === 'heartbeat') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(52, now);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    osc.connect(gain);
    gain.connect(masterGainNode);
    osc.start(now);
    osc.stop(now + 0.15);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(46, now + 0.16);
    gain2.gain.setValueAtTime(0.18, now + 0.16);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
    osc2.connect(gain2);
    gain2.connect(masterGainNode);
    osc2.start(now + 0.16);
    osc2.stop(now + 0.33);
  }
}

function setMasterVolume(val) {
  masterVolume = parseFloat(val);
  const ctx = getAudioContext();
  if (masterGainNode && ctx) {
    masterGainNode.gain.setValueAtTime(isAudioMuted ? 0 : masterVolume, ctx.currentTime);
  }
}

function toggleAudioEngine() {
  initAudioEngine();
  isAudioMuted = !isAudioMuted;
  const ctx = getAudioContext();
  if (masterGainNode && ctx) {
    masterGainNode.gain.setValueAtTime(isAudioMuted ? 0 : masterVolume, ctx.currentTime);
  }
  const icon = document.getElementById('audio-icon');
  if (icon) icon.textContent = isAudioMuted ? '🔇' : '🔊';
  showToast(isAudioMuted ? 'Audio Dimatikan' : 'Audio Diaktifkan');
}

function toggleAudio() {
  toggleAudioEngine();
}

// ==========================================
// OPTIONAL PRESSURE TIMER (15 MINUTES)
// ==========================================
function toggleTimerMode() {
  isTimerEnabled = !isTimerEnabled;
  const btn = document.getElementById('setting-timer-toggle-btn');
  const badge = document.getElementById('hud-timer-badge');
  if (btn) btn.textContent = isTimerEnabled ? 'AKTIF (15 Menit)' : 'NONAKTIF';
  if (badge) badge.style.display = isTimerEnabled ? 'flex' : 'none';

  if (isTimerEnabled) {
    startTimerCountdown();
    showToast('Mode Timer Aktif: 15 Menit');
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    showToast('Mode Timer Dimatikan');
  }
}

function startTimerCountdown() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isTimerEnabled) return;
    timerRemainingSeconds--;
    updateTimerDisplay();

    if (timerRemainingSeconds <= 180 && timerRemainingSeconds > 0) {
      if (timerRemainingSeconds % 2 === 0) playSound('heartbeat');
      const badge = document.getElementById('hud-timer-badge');
      if (badge) badge.classList.add('pulse-red');
    }

    if (timerRemainingSeconds <= 0) {
      clearInterval(timerInterval);
      showToast('WAKTU HABIS! Tersangka berhasil melarikan diri!');
      playSound('sting');
      goToStoryNode('end_2_unsolved');
    }
  }, 1000);
}

function updateTimerDisplay() {
  const disp = document.getElementById('timer-display');
  if (!disp) return;
  const m = Math.floor(timerRemainingSeconds / 60);
  const s = timerRemainingSeconds % 60;
  disp.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

// ==========================================
// TOAST & CHECKPOINTS (12 CHECKPOINTS)
// ==========================================
function showToast(message) {
  const toast = document.getElementById('game-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function triggerCheckpoint(checkpointName) {
  const cpData = {
    name: checkpointName,
    chapter: gameState.chapter,
    nodeId: gameState.currentNode,
    clues: [...gameState.clues],
    deductions: [...gameState.deductions],
    focus: gameState.focus,
    flags: { ...gameState.flags },
    playerName: gameState.playerName,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  };

  localStorage.setItem('araluna_latest_checkpoint', JSON.stringify(cpData));

  // Visual checkpoint banner notification
  const cpToast = document.getElementById('checkpoint-toast');
  if (cpToast) {
    const t = I18N[currentLang] || I18N['id'];
    cpToast.innerHTML = `<span>💾</span> <strong>${t.cpToastTitle}:</strong> ${checkpointName}`;
    cpToast.classList.add('show');
    clearTimeout(cpToast.timeout);
    cpToast.timeout = setTimeout(() => {
      cpToast.classList.remove('show');
    }, 3500);
  }

  // Trigger autosave alongside major checkpoint
  saveGameSlot('auto');
}

function loadLastCheckpoint() {
  const raw = localStorage.getItem('araluna_latest_checkpoint');
  if (!raw) {
    showToast(currentLang === 'en' ? 'No checkpoint recorded yet!' : 'Belum ada checkpoint tercatat!');
    return;
  }
  try {
    const cp = JSON.parse(raw);
    gameState.chapter = cp.chapter;
    gameState.currentNode = cp.nodeId;
    gameState.clues = [...cp.clues];
    gameState.deductions = [...cp.deductions];
    gameState.focus = cp.focus;
    gameState.flags = { ...cp.flags };
    gameState.playerName = cp.playerName;

    updateChapterNavigationUI();
    updateEvidenceInventory();
    renderDeductionTray();
    updateDeductionHistory();
    goToStoryNode(cp.nodeId);
    showToast(`Checkpoint Dimuat: ${cp.name}`);
    playSound('chime');
  } catch (err) {
    console.error('Error loading checkpoint:', err);
  }
}

// ==========================================
// STORY & DIALOGUE RENDERING ENGINE
// ==========================================
function goToStoryNode(nodeId, skipPushHistory = false) {
  const node = STORY_NODES[nodeId];
  if (!node) {
    console.error('Node not found:', nodeId);
    return;
  }

  if (!skipPushHistory && gameState.currentNode && gameState.currentNode !== nodeId) {
    if (!gameState.historyStack) gameState.historyStack = [];
    gameState.historyStack.push(gameState.currentNode);
    if (gameState.historyStack.length > 60) gameState.historyStack.shift();
  }

  gameState.currentNode = nodeId;
  gameState.chapter = node.chapter;

  if (node.triggerCheckpoint) {
    triggerCheckpoint(node.triggerCheckpoint);
  }
  if (node.awardClue && !gameState.clues.includes(node.awardClue)) {
    gameState.clues.push(node.awardClue);
    updateEvidenceInventory();
    renderDeductionTray();
    const clueObj = CLUES_DATA[node.awardClue];
    const cName = clueObj ? (clueObj.name[currentLang] || clueObj.name['id']) : node.awardClue;
    showToast(`Bukti Baru: ${cName}`);
    playSound('chime');
  }
  if (node.focusChange) {
    gameState.focus = Math.min(100, Math.max(0, gameState.focus + node.focusChange));
    updateFocusBar();
  }

  updateChapterNavigationUI();
  renderStoryNode(node);

  if (node.triggerPuzzle) {
    setTimeout(() => {
      openPuzzleModal(node.triggerPuzzle);
    }, 700);
  }
}

const CHAPTER_BG_MAP = {
  1: 'assets/bg_pier.jpg',
  2: 'assets/bg_precinct.jpg',
  3: 'assets/bg_archive.jpg',
  4: 'assets/bg_lighthouse.svg'
};

const CHAR_SVG_MAP = {
  'arun': 'assets/characters/arun.svg',
  'vela': 'assets/characters/vela.svg',
  'mira': 'assets/characters/mira.svg',
  'brama': 'assets/characters/brama.svg',
  'sena': 'assets/characters/sena.svg',
  'reyn': 'assets/characters/reyn.svg',
  'archivist': 'assets/characters/archivist.svg'
};

function updateSceneBackground(chapter, customBg) {
  const viewport = document.getElementById('scene-viewport');
  if (!viewport) return;
  const bg = customBg || CHAPTER_BG_MAP[chapter] || 'assets/bg_pier.jpg';
  viewport.style.backgroundImage = `url('${bg}')`;
}

function updateCharacterStage(speakerKey) {
  const charVisual = document.getElementById('character-visual');
  const avatarIcon = document.getElementById('speaker-avatar-icon');
  const key = (speakerKey || '').toLowerCase().trim();
  const svgPath = CHAR_SVG_MAP[key];

  if (charVisual) {
    if (svgPath) {
      charVisual.style.display = 'flex';
      charVisual.style.opacity = '0.94';
      charVisual.innerHTML = `<img src="${svgPath}" alt="${key}" class="character-portrait-img" />`;
      charVisual.classList.remove('fade-in');
      void charVisual.offsetWidth;
      charVisual.classList.add('fade-in');
    } else {
      charVisual.style.opacity = '0';
      setTimeout(() => {
        if (charVisual.style.opacity === '0') {
          charVisual.style.display = 'none';
        }
      }, 350);
    }
  }

  if (avatarIcon) {
    if (svgPath) {
      avatarIcon.innerHTML = `<img src="${svgPath}" alt="${key}" style="width:100%;height:100%;object-fit:cover;object-position:top center;" />`;
    } else {
      avatarIcon.innerHTML = `<span style="font-size:1.1rem;color:var(--gold);">⚖️</span>`;
    }
  }
}

function renderSidebarSuspects() {
  const container = document.getElementById('suspects-list-container');
  if (!container) return;
  container.innerHTML = '';

  const castKeys = ['vela', 'mira', 'brama', 'sena', 'reyn', 'archivist'];
  castKeys.forEach(k => {
    const s = SUSPECTS_DATA[k];
    if (!s) return;
    const svgPath = CHAR_SVG_MAP[k] || 'assets/characters/arun.svg';
    const roleText = s.role[currentLang] || s.role['id'];

    const item = document.createElement('div');
    item.className = 'suspect-item';
    item.onclick = () => interrogateSuspect(k);
    item.innerHTML = `
      <div class="suspect-avatar-mini">
        <img src="${svgPath}" alt="${s.name}" />
      </div>
      <div style="overflow:hidden;flex:1;">
        <div style="font-size:0.86rem;font-weight:600;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${s.name}</div>
        <div style="font-size:0.72rem;color:var(--gold-light);opacity:0.85;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${roleText}</div>
      </div>
    `;
    container.appendChild(item);
  });
}

function openSuspectDossier(suspectId) {
  interrogateSuspect(suspectId);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderStoryNode(node, skipTyping = false) {
  const speakerEl = document.getElementById('speaker-name');
  const roleEl = document.getElementById('speaker-role');
  const textEl = document.getElementById('dialogue-text');
  const choiceContainer = document.getElementById('choice-container');

  const charInfo = SUSPECTS_DATA[node.speaker] || {
    name: node.speaker || "Narasi",
    role: { id: "Penyelidikan", en: "Observation", id_gaul: "Pengamatan" },
    avatar: "🕵️"
  };

  if (speakerEl) speakerEl.textContent = charInfo.name;
  if (roleEl) roleEl.textContent = charInfo.role[currentLang] || charInfo.role['id'];

  // 1. Update Chapter & Scene Background
  updateSceneBackground(gameState.chapter, node.background);

  // 2. Update Character Visual on Stage & Mini Avatar
  updateCharacterStage(node.speaker || node.charVisual);

  const rawText = node.text[currentLang] || node.text['id'];
  choiceContainer.innerHTML = '';

  const advanceChevron = ' <span class="renpy-advance-chevron">▼</span>';

  if (skipTyping || textSpeed === 0) {
    textEl.innerHTML = escapeHtml(rawText) + advanceChevron;
    renderChoices(node.choices);
    if (typeof checkAutoPlayNext === 'function') checkAutoPlayNext();
  } else {
    textEl.textContent = '';
    let charIdx = 0;
    clearInterval(typingTimer);
    clearTimeout(typingTimer);

    const speakerKey = (node.speaker || '').toLowerCase().trim();

    const typeNextChar = () => {
      if (charIdx < rawText.length) {
        const char = rawText.charAt(charIdx);
        textEl.textContent += char;
        charIdx++;

        let delay = textSpeed;
        if (char !== ' ' && char !== '\n' && charIdx % 2 === 0) {
          playDialogueVoice(speakerKey, char);
        }

        // Slight dramatic pause for punctuation
        if (char === '.' || char === '!' || char === '?') {
          delay += 140;
        } else if (char === ',' || char === ';' || char === ':') {
          delay += 70;
        }

        typingTimer = setTimeout(typeNextChar, delay);
      } else {
        textEl.innerHTML = escapeHtml(rawText) + advanceChevron;
        renderChoices(node.choices);
        if (typeof checkAutoPlayNext === 'function') checkAutoPlayNext();
      }
    };

    typeNextChar();
  }

  // Record to dialogue backlog
  gameState.backlog.push({
    speaker: charInfo.name,
    text: rawText
  });
}

function renderChoices(choices) {
  const choiceContainer = document.getElementById('choice-container');
  if (!choiceContainer) return;
  choiceContainer.innerHTML = '';
  if (!choices || choices.length === 0) return;

  choices.forEach((ch, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.type = 'button';
    const indexStr = String(idx + 1).padStart(2, '0');
    const label = ch.text[currentLang] || ch.text['id'];

    btn.innerHTML = `
      <div class="choice-btn-inner">
        <span class="choice-index-tag">${indexStr}</span>
        <span class="choice-label-text">${escapeHtml(label)}</span>
        <span class="choice-arrow-icon">►</span>
      </div>
    `;
    btn.onmouseenter = () => playSound('type');
    btn.onclick = (e) => {
      e.stopPropagation();
      playSound('sting');
      goToStoryNode(ch.nextNode);
    };
    choiceContainer.appendChild(btn);
  });
}

function updateFocusBar() {
  const fill = document.getElementById('focus-bar-fill');
  const pct = document.getElementById('focus-percentage');
  if (fill) fill.style.width = `${gameState.focus}%`;
  if (pct) pct.textContent = `${gameState.focus}%`;
}

// ==========================================
// DEDUCTION BOARD (THE MIND PALACE)
// ==========================================
function renderDeductionTray() {
  const tray = document.getElementById('deduction-clue-tray');
  if (!tray) return;
  tray.innerHTML = '';

  gameState.clues.forEach(clueId => {
    const c = CLUES_DATA[clueId];
    if (!c) return;
    const name = c.name[currentLang] || c.name['id'];
    const pill = document.createElement('div');
    pill.className = 'tray-pill';
    if (gameState.selectedSlotA === clueId || gameState.selectedSlotB === clueId) {
      pill.classList.add('selected');
    }
    pill.innerHTML = `<span>${c.icon}</span> <span>${name}</span>`;
    pill.onclick = () => selectClueForDeduction(clueId);
    tray.appendChild(pill);
  });
}

function selectClueForDeduction(clueId) {
  if (gameState.selectedSlotA === clueId) {
    gameState.selectedSlotA = null;
  } else if (gameState.selectedSlotB === clueId) {
    gameState.selectedSlotB = null;
  } else if (!gameState.selectedSlotA) {
    gameState.selectedSlotA = clueId;
  } else if (!gameState.selectedSlotB) {
    gameState.selectedSlotB = clueId;
  } else {
    gameState.selectedSlotA = clueId;
  }
  updateDeductionSlotsUI();
  renderDeductionTray();
}

function updateDeductionSlotsUI() {
  const slotAEl = document.getElementById('slot-a-text');
  const slotBEl = document.getElementById('slot-b-text');

  if (slotAEl) {
    if (gameState.selectedSlotA) {
      const c = CLUES_DATA[gameState.selectedSlotA];
      slotAEl.textContent = c ? (c.name[currentLang] || c.name['id']) : gameState.selectedSlotA;
      slotAEl.style.color = 'var(--gold-light)';
    } else {
      slotAEl.textContent = currentLang === 'en' ? '[Drop First Clue]' : '[Pilih Petunjuk Pertama]';
      slotAEl.style.color = 'var(--text-muted)';
    }
  }

  if (slotBEl) {
    if (gameState.selectedSlotB) {
      const c = CLUES_DATA[gameState.selectedSlotB];
      slotBEl.textContent = c ? (c.name[currentLang] || c.name['id']) : gameState.selectedSlotB;
      slotBEl.style.color = 'var(--gold-light)';
    } else {
      slotBEl.textContent = currentLang === 'en' ? '[Drop Second Clue]' : '[Pilih Petunjuk Kedua]';
      slotBEl.style.color = 'var(--text-muted)';
    }
  }
}

function synthesizeDeductions() {
  const a = gameState.selectedSlotA;
  const b = gameState.selectedSlotB;

  if (!a || !b) {
    showToast(currentLang === 'en' ? 'Select 2 clues to synthesize!' : 'Pilih 2 petunjuk untuk disintesis!');
    return;
  }

  let matchedDeduction = null;
  for (const key in VALID_DEDUCTIONS) {
    const d = VALID_DEDUCTIONS[key];
    if ((d.clueA === a && d.clueB === b) || (d.clueA === b && d.clueB === a)) {
      matchedDeduction = d;
      break;
    }
  }

  if (matchedDeduction) {
    if (!gameState.deductions.includes(matchedDeduction.id)) {
      gameState.deductions.push(matchedDeduction.id);
      gameState.focus = Math.min(100, gameState.focus + 20);
      updateFocusBar();
      updateDeductionHistory();
      playSound('chime');
      showToast(currentLang === 'en' ? 'Deduction Synthesized!' : 'Deduksi Berhasil Ditarik!');
    } else {
      showToast(currentLang === 'en' ? 'Already deduced!' : 'Kesimpulan ini sudah pernah terbukti!');
    }
  } else {
    playSound('sting');
    triggerScreenShake();
    showToast(currentLang === 'en' ? 'No logical connection between these clues.' : 'Tidak ada hubungan logis antara kedua bukti ini.');
  }

  gameState.selectedSlotA = null;
  gameState.selectedSlotB = null;
  updateDeductionSlotsUI();
  renderDeductionTray();
}

function updateDeductionHistory() {
  const container = document.getElementById('deduction-history-list');
  const emptyEl = document.getElementById('txt-no-deductions');
  if (!container) return;

  if (gameState.deductions.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    container.innerHTML = '';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  container.innerHTML = '';

  gameState.deductions.forEach(dId => {
    const d = VALID_DEDUCTIONS[dId];
    if (!d) return;
    const title = d.title[currentLang] || d.title['id'];
    const summary = d.summary[currentLang] || d.summary['id'];

    const item = document.createElement('div');
    item.className = 'deduction-history-item';
    item.innerHTML = `
      <div style="font-weight: 700; color: var(--gold); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>${d.icon}</span> <span>${title}</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.5;">${summary}</div>
    `;
    container.appendChild(item);
  });
}

// ==========================================
// 3 INTERACTIVE PUZZLES
// ==========================================
function openPuzzleModal(puzzleId) {
  currentActivePuzzle = puzzleId;
  const modal = document.getElementById('puzzle-modal');
  const title = document.getElementById('puzzle-modal-title');
  const desc = document.getElementById('puzzle-modal-desc');
  const container = document.getElementById('puzzle-interactive-container');

  modal.classList.add('active');

  if (puzzleId === '1') {
    title.textContent = currentLang === 'en' ? 'PUZZLE 1: ZODIAC PALM CIPHER' : 'PUZZLE 1: SANDI ZODIAC TELAPAK TANGAN';
    desc.textContent = currentLang === 'en' ? 'Shift the Caesar dial until the encrypted keyword resolves.' : 'Geser roda substitusi Caesar hingga kata sandi terbaca sempurna.';
    renderPuzzle1UI(container);
  } else if (puzzleId === '2') {
    title.textContent = currentLang === 'en' ? 'PUZZLE 2: DANIEL\'S ARCHIVE SAFE' : 'PUZZLE 2: BRANKAS ARSIP DANIEL';
    desc.textContent = currentLang === 'en' ? 'Enter the 4-digit year code of the Setiabudi 13 surgical cold case.' : 'Masukkan 4 digit tahun awal mula kasus mutilasi Setiabudi 13.';
    renderPuzzle2UI(container);
  } else if (puzzleId === '3') {
    title.textContent = currentLang === 'en' ? 'PUZZLE 3: WHARF ACOUSTIC LOCK' : 'PUZZLE 3: KUNCI FREKUENSI DERMAGA';
    desc.textContent = currentLang === 'en' ? 'Tune the 3 acoustic frequency dials to match the harbor fog bells: 1 - 3 - 2.' : 'Setel 3 dial frekuensi akustik sesuai nada lonceng kabut pelabuhan: 1 - 3 - 2.';
    renderPuzzle3UI(container);
  }
}

function closePuzzleModal() {
  document.getElementById('puzzle-modal').classList.remove('active');
  currentActivePuzzle = null;
}

// Puzzle 1 UI
function renderPuzzle1UI(container) {
  const encrypted = "VHWDJDBD";
  const decoded = decodeCaesar(encrypted, cipherShift);

  container.innerHTML = `
    <div class="cipher-box">
      <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">KATA SANDI TERENKRIPSI:</div>
      <div style="font-size: 2rem; font-weight: 700; letter-spacing: 6px; color: var(--gold);">${encrypted}</div>
    </div>
    <div class="cipher-slider-row">
      <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="adjustCipherShift(-1)">◀</button>
      <div class="cipher-shift-val">ROT-${cipherShift}</div>
      <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="adjustCipherShift(1)">▶</button>
    </div>
    <div style="text-align: center; margin: 1rem 0;">
      <div style="font-size: 0.8rem; color: var(--text-muted);">HASIL TERJEMAHAN:</div>
      <div style="font-size: 1.6rem; font-weight: 700; color: ${decoded === 'SETAGAYA' ? 'var(--green)' : 'var(--crimson-light)'}; letter-spacing: 4px;">${decoded}</div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 1.5rem;">
      <button class="slot-btn" style="background: var(--gold); color: #000; font-weight: 700; padding: 0.8rem 2rem;" onclick="submitPuzzle1()">
        ${currentLang === 'en' ? 'DECRYPT KEYWORD' : 'PECAHKAN SANDI'}
      </button>
    </div>
  `;
}

function adjustCipherShift(delta) {
  cipherShift = (cipherShift + delta + 26) % 26;
  playSound('type');
  renderPuzzle1UI(document.getElementById('puzzle-interactive-container'));
}

function decodeCaesar(str, shift) {
  return str.split('').map(c => {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
    }
    return c;
  }).join('');
}

function submitPuzzle1() {
  const decoded = decodeCaesar("VHWDJDBD", cipherShift);
  if (decoded === 'SETAGAYA') {
    playSound('chime');
    showToast('Sandi Terpecahkan: SETAGAYA!');
    closePuzzleModal();
    goToStoryNode('c1_post_puzzle1');
  } else {
    playSound('sting');
    showToast('Sandi masih belum tepat. Terus geser roda pergeseran!');
  }
}

// Puzzle 2 UI
function renderPuzzle2UI(container) {
  const displayStr = safeEnteredCode.padEnd(4, '_').split('').join(' ');
  container.innerHTML = `
    <div class="safe-display-screen" style="text-align: center; font-size: 2.2rem; letter-spacing: 8px; font-family: monospace; padding: 1rem; border: 2px solid var(--border-gold); background: #070a10; color: #4ade80; margin-bottom: 1.5rem; border-radius: 6px;">
      ${displayStr}
    </div>
    <div class="numpad-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; max-width: 240px; margin: 0 auto;">
      <button class="numpad-btn" onclick="pressSafeDigit('1')">1</button>
      <button class="numpad-btn" onclick="pressSafeDigit('2')">2</button>
      <button class="numpad-btn" onclick="pressSafeDigit('3')">3</button>
      <button class="numpad-btn" onclick="pressSafeDigit('4')">4</button>
      <button class="numpad-btn" onclick="pressSafeDigit('5')">5</button>
      <button class="numpad-btn" onclick="pressSafeDigit('6')">6</button>
      <button class="numpad-btn" onclick="pressSafeDigit('7')">7</button>
      <button class="numpad-btn" onclick="pressSafeDigit('8')">8</button>
      <button class="numpad-btn" onclick="pressSafeDigit('9')">9</button>
      <button class="numpad-btn" style="color: var(--crimson);" onclick="clearSafeDigits()">C</button>
      <button class="numpad-btn" onclick="pressSafeDigit('0')">0</button>
      <button class="numpad-btn" style="color: var(--green);" onclick="submitPuzzle2()">➔</button>
    </div>
  `;
}

function pressSafeDigit(d) {
  if (safeEnteredCode.length < 4) {
    safeEnteredCode += d;
    playSound('type');
    renderPuzzle2UI(document.getElementById('puzzle-interactive-container'));
  }
}

function clearSafeDigits() {
  safeEnteredCode = '';
  playSound('type');
  renderPuzzle2UI(document.getElementById('puzzle-interactive-container'));
}

function submitPuzzle2() {
  if (safeEnteredCode === '1981') {
    playSound('chime');
    showToast('Brankas Terbuka: Tahun 1981 (Setiabudi 13)!');
    safeEnteredCode = '';
    closePuzzleModal();
    goToStoryNode('c3_safe_opened');
  } else {
    playSound('sting');
    triggerScreenShake();
    showToast('Kombinasi Salah! Periksa kliping koran Setiabudi 13.');
    safeEnteredCode = '';
    renderPuzzle2UI(document.getElementById('puzzle-interactive-container'));
  }
}

// Puzzle 3 UI
function renderPuzzle3UI(container) {
  container.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">DIAL FREKUENSI GELOMBANG AKUSTIK</div>
      <div style="font-size: 1.8rem; font-weight: 700; color: var(--gold); letter-spacing: 6px;">
        ${circuitDials[0]} - ${circuitDials[1]} - ${circuitDials[2]}
      </div>
    </div>
    <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 2rem;">
      ${[0, 1, 2].map(idx => `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
          <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="rotateCircuitDial(${idx}, 1)">▲</button>
          <div style="font-size: 1.8rem; font-weight: 700; color: #fff; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-gold); border-radius: 50%; background: #0c1017;">
            ${circuitDials[idx]}
          </div>
          <button class="numpad-btn" style="padding: 0.5rem 1rem;" onclick="rotateCircuitDial(${idx}, -1)">▼</button>
        </div>
      `).join('')}
    </div>
    <div style="display: flex; justify-content: center;">
      <button class="slot-btn" style="background: var(--gold); color: #000; font-weight: 700; padding: 0.8rem 2.5rem;" onclick="submitPuzzle3()">
        ${currentLang === 'en' ? 'UNLOCK CONTAINER' : 'BUKA KONTAINER'}
      </button>
    </div>
  `;
}

function rotateCircuitDial(dialIdx, delta) {
  circuitDials[dialIdx] = ((circuitDials[dialIdx] - 1 + delta + 5) % 5) + 1;
  playSound('type');
  renderPuzzle3UI(document.getElementById('puzzle-interactive-container'));
}

function submitPuzzle3() {
  if (circuitDials[0] === 1 && circuitDials[1] === 3 && circuitDials[2] === 2) {
    playSound('chime');
    showToast('Kunci Frekuensi Cocok! Kontainer Terbuka.');
    closePuzzleModal();
    goToStoryNode('c4_container_opened');
  } else {
    playSound('sting');
    triggerScreenShake();
    showToast('Frekuensi tidak selaras dengan lonceng kabut (1 - 3 - 2)!');
  }
}

// ==========================================
// SAVE / LOAD SYSTEM (5 SLOTS + 1 AUTOSAVE)
// ==========================================
function getSaves() {
  try {
    return JSON.parse(localStorage.getItem('araluna_saves') || '{}');
  } catch (e) {
    return {};
  }
}

function saveGameSlot(slotKey) {
  const saves = getSaves();
  const info = CHAPTER_INFO[gameState.chapter];
  const chapTitle = info ? (info.title[currentLang] || info.title['id']) : `Bab ${gameState.chapter}`;

  saves[slotKey] = {
    slot: slotKey,
    type: slotKey === 'auto' ? 'auto' : 'manual',
    chapter: gameState.chapter,
    nodeId: gameState.currentNode,
    chapterTitle: chapTitle,
    cluesCount: gameState.clues.length,
    clues: [...gameState.clues],
    deductions: [...gameState.deductions],
    focus: gameState.focus,
    flags: { ...gameState.flags },
    playerName: gameState.playerName,
    language: currentLang,
    timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  localStorage.setItem('araluna_saves', JSON.stringify(saves));
  showToast(slotKey === 'auto' ? 'Autosave Berhasil Disimpan' : `Kasus Disimpan di Slot ${slotKey}`);
  updateContinueButtonStatus();
}

function loadGameSlot(slotKey) {
  const saves = getSaves();
  const save = saves[slotKey];
  if (!save) {
    showToast('Slot kosong!');
    return;
  }

  gameState.chapter = save.chapter;
  gameState.currentNode = save.nodeId;
  gameState.clues = [...save.clues];
  gameState.deductions = [...save.deductions];
  gameState.focus = save.focus;
  gameState.flags = { ...save.flags };
  gameState.playerName = save.playerName;

  if (save.language && I18N[save.language]) {
    setLanguage(save.language);
  }

  updateChapterNavigationUI();
  updateEvidenceInventory();
  renderDeductionTray();
  updateDeductionHistory();

  document.getElementById('saveload-modal').classList.remove('active');
  document.getElementById('main-menu-screen').classList.add('hidden');

  goToStoryNode(save.nodeId);
  playSound('chime');
  showToast(`Kasus Dimuat dari Slot ${slotKey}`);
}

function deleteGameSlot(slotKey) {
  const saves = getSaves();
  delete saves[slotKey];
  localStorage.setItem('araluna_saves', JSON.stringify(saves));
  renderSaveSlotsModal(currentSaveModalMode);
  updateContinueButtonStatus();
  showToast(`Slot ${slotKey} Dihapus`);
}

function openSaveLoadModal(mode) {
  currentSaveModalMode = mode;
  const modal = document.getElementById('saveload-modal');
  const title = document.getElementById('saveload-modal-title');
  title.textContent = mode === 'save' ? 'SIMPAN KEMAJUAN KASUS' : 'MUAT BERKAS KASUS';
  renderSaveSlotsModal(mode);
  modal.classList.add('active');
}

function closeSaveLoadModal() {
  document.getElementById('saveload-modal').classList.remove('active');
}

function renderSaveSlotsModal(mode) {
  const container = document.getElementById('save-slots-list');
  if (!container) return;
  const saves = getSaves();
  container.innerHTML = '';

  // Slot keys: 'auto', '1', '2', '3', '4', '5'
  const slotKeys = ['auto', '1', '2', '3', '4', '5'];

  slotKeys.forEach(key => {
    const s = saves[key];
    const isAuto = key === 'auto';
    const card = document.createElement('div');
    card.className = 'slot-card';
    if (isAuto) card.classList.add('autosave-slot');

    if (s) {
      card.innerHTML = `
        <div>
          <div class="slot-title">${isAuto ? '⚡ AUTOSAVE (Otomatis)' : `SLOT ${key}`} — ${s.chapterTitle}</div>
          <div class="slot-meta">📅 ${s.timestamp} • 🔍 ${s.cluesCount} Bukti • 🧠 ${s.focus}% Fokus • 👤 ${s.playerName}</div>
        </div>
        <div class="slot-actions">
          ${mode === 'save' && !isAuto ? `<button class="slot-btn" onclick="saveGameSlot('${key}'); renderSaveSlotsModal('save');">💾 Timpa</button>` : ''}
          <button class="slot-btn" onclick="loadGameSlot('${key}')">📂 Muat</button>
          <button class="slot-btn" style="color: var(--crimson);" onclick="deleteGameSlot('${key}')">🗑️</button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div>
          <div class="slot-title">${isAuto ? '⚡ AUTOSAVE (Kosong)' : `SLOT ${key} — Kosong`}</div>
          <div class="slot-meta">Belum ada berkas tersimpan di slot ini.</div>
        </div>
        <div class="slot-actions">
          ${mode === 'save' && !isAuto ? `<button class="slot-btn" onclick="saveGameSlot('${key}'); renderSaveSlotsModal('save');">💾 Simpan</button>` : ''}
        </div>
      `;
    }
    container.appendChild(card);
  });
}

function updateContinueButtonStatus() {
  const saves = getSaves();
  const btn = document.getElementById('btn-continue-game');
  const sub = document.getElementById('btn-continue-sub');
  if (!btn) return;

  // Search for newest autosave or manual save
  let latest = saves['auto'];
  if (!latest) {
    for (let i = 1; i <= 5; i++) {
      if (saves[i]) {
        latest = saves[i];
        break;
      }
    }
  }

  if (latest) {
    btn.disabled = false;
    if (sub) sub.textContent = `${latest.chapterTitle} (${latest.timestamp})`;
  } else {
    btn.disabled = true;
    if (sub) sub.textContent = currentLang === 'en' ? 'No recent save' : 'Belum ada data simpanan';
  }
}

function loadLatestSaveOrContinue() {
  const saves = getSaves();
  if (saves['auto']) {
    loadGameSlot('auto');
  } else {
    for (let i = 1; i <= 5; i++) {
      if (saves[i]) {
        loadGameSlot(i);
        return;
      }
    }
  }
}

// ==========================================
// CASE LIBRARY (102 CASES FILTERING)
// ==========================================
let currentContinentFilter = 'all';
let currentStatusFilter = 'all';
let currentSearchQuery = '';

function setContinentFilter(region) {
  currentContinentFilter = region;
  document.querySelectorAll('#continent-pills .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${region}'`));
  });
  filterCases();
}

function setStatusFilter(stat) {
  currentStatusFilter = stat;
  document.querySelectorAll('#status-pills .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${stat}'`));
  });
  filterCases();
}

function filterCases() {
  const searchInput = document.getElementById('case-search');
  if (searchInput) currentSearchQuery = searchInput.value.toLowerCase().trim();
  renderCaseLibrary();
}

function renderCaseLibrary() {
  const container = document.getElementById('case-grid-container');
  const countEl = document.getElementById('visible-case-count');
  if (!container || !CASE_DATA) return;

  container.innerHTML = '';
  const filtered = CASE_DATA.filter(c => {
    // Continent filter
    if (currentContinentFilter !== 'all' && c.continent !== currentContinentFilter) return false;
    // Status filter
    if (currentStatusFilter !== 'all') {
      const st = (c.status || '').toLowerCase();
      if (currentStatusFilter === 'cold_case' && !st.includes('cold') && !st.includes('tak terpecahkan')) return false;
      if (currentStatusFilter === 'unsolved' && !st.includes('unsolved') && !st.includes('misteri')) return false;
      if (currentStatusFilter === 'controversial' && !st.includes('kontroversial')) return false;
    }
    // Search query
    if (currentSearchQuery) {
      const q = currentSearchQuery;
      const matchName = (c.name || '').toLowerCase().includes(q);
      const matchCountry = (c.country || '').toLowerCase().includes(q);
      const matchVictim = (c.victim || '').toLowerCase().includes(q);
      const matchSummary = (c.summary || '').toLowerCase().includes(q);
      const matchMechanic = (c.game_mechanic || '').toLowerCase().includes(q);
      if (!matchName && !matchCountry && !matchVictim && !matchSummary && !matchMechanic) return false;
    }
    return true;
  });

  if (countEl) countEl.textContent = filtered.length;

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.onclick = () => openDossierModal(c);

    card.innerHTML = `
      <div class="case-card-header">
        <span class="case-id-badge">#${c.id}</span>
        <span class="case-year-tag">${c.year} • ${c.country}</span>
      </div>
      <div class="case-title">${c.name}</div>
      <div class="case-snippet">${c.summary}</div>
      <div class="case-footer">
        <span class="case-status-badge">${c.status}</span>
        <span style="font-size: 0.75rem; color: var(--gold);">Lihat Berkas ➔</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function openDossierModal(c) {
  document.getElementById('modal-dossier-id').textContent = '#' + c.id;
  document.getElementById('modal-dossier-name').textContent = c.name;
  document.getElementById('modal-dossier-loc').textContent = `${c.year} • ${c.country}`;
  document.getElementById('modal-dossier-victim').textContent = c.victim;
  document.getElementById('modal-dossier-suspect').textContent = c.suspect || (currentLang === 'en' ? 'Unidentified / Anonymous' : 'Tidak Teridentifikasi / Anonim');
  document.getElementById('modal-dossier-status').textContent = c.status;
  document.getElementById('modal-dossier-continent').textContent = c.continent;
  document.getElementById('modal-dossier-summary').textContent = c.summary;
  document.getElementById('modal-dossier-mechanic').textContent = c.gameElement || c.game_mechanic || 'Analisis alibi dan deduksi barang bukti.';

  const stampEl = document.getElementById('modal-dossier-stamp');
  if (stampEl) stampEl.textContent = (c.status || 'COLD CASE').toUpperCase();

  const verEl = document.getElementById('modal-dossier-verification');
  if (verEl) {
    if (currentLang === 'en') {
      verEl.textContent = 'Source: Based on general knowledge & historical criminological records';
    } else if (currentLang === 'id_gaul') {
      verEl.textContent = 'Sumber Data: Berdasarkan pengetahuan umum & arsip kasus lama';
    } else {
      verEl.textContent = 'Sumber Data: Berdasarkan pengetahuan umum & catatan historis kriminologi';
    }
  }

  document.getElementById('dossier-modal').classList.add('active');
  playSound('type');
}

function closeDossierModal() {
  document.getElementById('dossier-modal').classList.remove('active');
}

// ==========================================
// HOTSPOTS & SIDEBAR SUSPECTS
// ==========================================
function toggleHotspots() {
  const overlay = document.getElementById('hotspots-overlay');
  const btn = document.getElementById('hotspot-toggle-btn');
  if (!overlay) return;

  const isShowing = overlay.classList.toggle('active');
  if (btn) btn.classList.toggle('active', isShowing);
}

function inspectHotspot(type) {
  const t = I18N[currentLang] || I18N['id'];
  let msg = '';
  if (type === 'desk') {
    msg = currentLang === 'en' ? 'Typewriter platen holds Daniel\'s unfinished exposé on the 20-year surgical syndicate.' : 'Mesin tik memuat draf naskah investigasi Daniel tentang sindikat bedah 20 tahun lalu.';
  } else if (type === 'teacup') {
    msg = currentLang === 'en' ? 'Cold coffee cup on the corner table smelling faintly of pharmaceutical chloral hydrate.' : 'Cangkir kopi dingin berbau samar obat bius klinis kloral hidrat.';
  } else if (type === 'fireplace') {
    msg = currentLang === 'en' ? 'Smoldering ashes and a black wax-sealed letter addressed to Detective Arun.' : 'Abu perapian yang masih hangat dan amplop bersegel lilin hitam untuk Detektif Arun.';
  } else if (type === 'door') {
    msg = currentLang === 'en' ? 'Heavy oak door was unlocked without forced entry marks. The spare key was stolen.' : 'Pintu jati tidak memiliki bekas congkelan. Kunci cadangan rumah telah dicuri sebelumnya.';
  } else if (type === 'clock') {
    msg = currentLang === 'en' ? 'Grandfather clock stopped precisely at 03:15 AM.' : 'Jam pendulum menara berhenti tepat pada pukul 03.15 pagi.';
  }
  showToast(msg);
  playSound('type');
}

function updateEvidenceInventory() {
  const list = document.getElementById('evidence-list-container');
  const badge = document.getElementById('clue-counter-badge');
  const empty = document.getElementById('txt-empty-clues');
  if (!list) return;

  if (badge) badge.textContent = `${gameState.clues.length}/8`;

  if (gameState.clues.length === 0) {
    if (empty) empty.style.display = 'block';
    list.innerHTML = '';
    return;
  }

  if (empty) empty.style.display = 'none';
  list.innerHTML = '';

  gameState.clues.forEach(cid => {
    const c = CLUES_DATA[cid];
    if (!c) return;
    const name = c.name[currentLang] || c.name['id'];
    const desc = c.desc[currentLang] || c.desc['id'];

    const el = document.createElement('div');
    el.className = 'evidence-item';
    el.innerHTML = `
      <div class="evidence-icon">${c.icon}</div>
      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--gold-light);">${name}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">${desc}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function updateChapterNavigationUI() {
  const chap = gameState.chapter || 1;
  const info = CHAPTER_INFO[chap];
  const chapTitle = info ? (info.title[currentLang] || info.title['id']) : `Bab ${chap}`;
  const locTitle = info ? (info.location[currentLang] || info.location['id']) : '';

  const titleEl = document.getElementById('txt-chap-title');
  const locEl = document.getElementById('scene-location-tag');
  const lblEl = document.getElementById('cur-chap-label');

  if (titleEl) titleEl.textContent = chapTitle;
  if (locEl) locEl.textContent = locTitle;
  if (lblEl) lblEl.textContent = (currentLang === 'en' ? 'CHAPTER ' : 'BAB ') + chap;

  // Chapter buttons 1-4 active states
  [1, 2, 3, 4].forEach(i => {
    const b = document.getElementById(`btn-step-chap${i}`);
    if (b) {
      b.classList.toggle('active', i === chap);
      b.classList.toggle('passed', i < chap);
    }
  });
}

// ==========================================
// VIEWS & SETTINGS
// ==========================================
function switchView(viewName) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-tab-btn').forEach(btn => btn.classList.remove('active'));

  if (viewName === 'game') {
    document.body.classList.add('in-gameplay');
    document.getElementById('view-game').classList.add('active');
    const navGame = document.getElementById('nav-btn-game');
    if (navGame) navGame.classList.add('active');
  } else {
    document.body.classList.remove('in-gameplay');
    if (viewName === 'library') {
      document.getElementById('view-library').classList.add('active');
      const navLib = document.getElementById('nav-btn-library');
      if (navLib) navLib.classList.add('active');
      renderCaseLibrary();
    } else if (viewName === 'deduction') {
      document.getElementById('view-deduction').classList.add('active');
      const navDed = document.getElementById('nav-btn-deduction');
      if (navDed) navDed.classList.add('active');
      renderDeductionTray();
      updateDeductionSlotsUI();
      updateDeductionHistory();
    }
  }
}

function openSettingsModal() {
  document.getElementById('settings-modal').classList.add('active');
}

function closeSettingsModal() {
  document.getElementById('settings-modal').classList.remove('active');
}

function openCreditsModal() {
  document.getElementById('credits-modal').classList.add('active');
}

function closeCreditsModal() {
  document.getElementById('credits-modal').classList.remove('active');
}

function openBacklogModal() {
  const container = document.getElementById('backlog-container');
  if (!container) return;
  container.innerHTML = '';

  gameState.backlog.forEach(item => {
    const d = document.createElement('div');
    d.innerHTML = `<strong style="color: var(--gold);">${item.speaker}:</strong> <span style="color: #e2e8f0;">${item.text}</span>`;
    container.appendChild(d);
  });

  document.getElementById('backlog-modal').classList.add('active');
}

function closeBacklogModal() {
  document.getElementById('backlog-modal').classList.remove('active');
}

function triggerScreenShake() {
  const card = document.getElementById('stage-card');
  if (!card) return;
  card.classList.remove('shake');
  void card.offsetWidth;
  card.classList.add('shake');
}

function resetAllGameData() {
  if (confirm(currentLang === 'en' ? 'Wipe all saves, checkpoints, and case progress?' : 'Hapus semua data simpanan, checkpoint, dan kemajuan kasus?')) {
    localStorage.removeItem('araluna_saves');
    localStorage.removeItem('araluna_latest_checkpoint');
    localStorage.removeItem('araluna_lang');
    location.reload();
  }
}

// ==========================================
// MULTI-LANGUAGE LIVE ENGINE
// ==========================================
function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('araluna_lang', lang);

  const buttons = document.querySelectorAll('#lang-options-row .settings-pill-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (lang === 'id') buttons[0]?.classList.add('active');
  if (lang === 'en') buttons[1]?.classList.add('active');
  if (lang === 'id_gaul') buttons[2]?.classList.add('active');

  applyLanguage();
}

function applyLanguage() {
  const t = I18N[currentLang] || I18N['id'];

  // UI Texts
  document.getElementById('ui-main-sub').textContent = t.mainSub;
  document.getElementById('btn-new-game').textContent = t.btnNewGame;
  document.getElementById('btn-continue').textContent = t.btnContinue;
  document.getElementById('btn-load-game').textContent = t.btnLoad;
  document.getElementById('btn-library').textContent = t.btnLibrary;
  document.getElementById('btn-settings').textContent = t.btnSettings;
  document.getElementById('btn-credits').textContent = t.btnCredits;
  document.getElementById('btn-reset').textContent = t.btnReset;

  document.getElementById('nav-txt-game').textContent = t.navGame;
  document.getElementById('nav-txt-library').textContent = t.navLibrary;
  document.getElementById('nav-txt-deduction').textContent = t.navDeduction;
  document.getElementById('nav-txt-log').textContent = t.navLog;
  document.getElementById('nav-txt-save').textContent = t.navSave;
  document.getElementById('hotspot-btn-txt').textContent = t.hotspotBtn;
  document.getElementById('ctrl-next').textContent = t.ctrlNext;
  const ctrlSkip = document.getElementById('ctrl-skip');
  if (ctrlSkip) ctrlSkip.textContent = t.ctrlSkip || 'Skip';
  const ctrlLog = document.getElementById('ctrl-log');
  if (ctrlLog) ctrlLog.textContent = t.ctrlLog || 'Log';
  const ctrlDossier = document.getElementById('ctrl-dossier');
  if (ctrlDossier) ctrlDossier.textContent = t.ctrlDossier || 'Dossier';
  const dossierBtn = document.getElementById('dossier-btn-txt');
  if (dossierBtn) dossierBtn.textContent = t.dossierBtnTxt || 'Berkas [D]';
  document.getElementById('ctrl-qsave').textContent = t.ctrlQSave;
  document.getElementById('ctrl-load').textContent = t.ctrlLoad;
  const ctrlCp = document.getElementById('ctrl-checkpoint');
  if (ctrlCp) ctrlCp.textContent = t.ctrlCheckpoint;

  document.getElementById('txt-focus-title').textContent = t.focusTitle;
  document.getElementById('txt-casebook-title').textContent = t.cluesTitle;
  const emptyCluesEl = document.getElementById('txt-empty-clues');
  if (emptyCluesEl) emptyCluesEl.textContent = t.emptyClues;
  document.getElementById('txt-suspects-title').textContent = t.suspectsTitle;

  document.getElementById('deduct-title').textContent = t.deductTitle;
  document.getElementById('deduct-sub').textContent = t.deductSub;
  document.getElementById('btn-synthesize').textContent = t.btnSynthesize;
  document.getElementById('txt-tray-title').textContent = t.trayTitle;
  document.getElementById('txt-history-title').textContent = t.historyTitle;

  document.getElementById('lib-title').textContent = t.libTitle;
  document.getElementById('lib-sub').textContent = t.libSub;
  document.getElementById('txt-showing').textContent = t.showing;
  document.getElementById('txt-of-total').textContent = t.ofTotal;
  document.getElementById('txt-card-click-hint').textContent = t.cardClickHint;
  document.getElementById('filter-reg-title').textContent = t.filterReg;
  document.getElementById('filter-stat-title').textContent = t.filterStat;

  updateTimerDisplay();
  updateChapterNavigationUI();
  updateEvidenceInventory();
  renderDeductionTray();
  updateDeductionHistory();
  renderCaseLibrary();
  renderSidebarSuspects();
  updateContinueButtonStatus();
  const lblVoice = document.getElementById('m-set-lbl-voice');
  if (lblVoice) lblVoice.textContent = t.lblVoiceStyle || 'GAYA SUARA BICARA KARAKTER (DIALOGUE VOCALIZATION):';
  updateVoiceStyleButtons();

  // Instant refresh of current dialogue without restart
  if (STORY_NODES[gameState.currentNode]) {
    renderStoryNode(STORY_NODES[gameState.currentNode], true);
  }
}


// ==========================================
// HTML5 FULLSCREEN API & IMMERSIVE DISPLAY
// ==========================================
function isFullscreenActive() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
}

function enterFullscreen() {
  const el = document.documentElement;
  try {
    if (!isFullscreenActive()) {
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    }
  } catch (err) {
    // Graceful fallback
  }
}

function exitFullscreen() {
  try {
    if (isFullscreenActive()) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  } catch (err) {
    // Graceful fallback
  }
}

function toggleFullscreen() {
  if (isFullscreenActive()) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
}

function updateFullscreenUI() {
  const isFs = isFullscreenActive();
  document.body.classList.toggle('is-fullscreen-mode', isFs);

  // Update Ren'Py quick bar button
  const quickBtn = document.getElementById('btn-quick-fullscreen');
  if (quickBtn) {
    const icon = quickBtn.querySelector('.fs-icon');
    const text = quickBtn.querySelector('.fs-text');
    if (icon) icon.textContent = isFs ? '🗗' : '⛶';
    if (text) text.textContent = isFs ? 'WINDOW' : 'FULL';
  }

  // Update floating button
  const floatBtn = document.getElementById('floating-fullscreen-btn');
  if (floatBtn) {
    const floatIcon = floatBtn.querySelector('.fs-float-icon');
    const floatText = floatBtn.querySelector('.fs-float-label');
    if (floatIcon) floatIcon.textContent = isFs ? '🗗' : '⛶';
    if (floatText) floatText.textContent = isFs ? 'WINDOW' : 'FULLSCREEN';
  }

  // Update main menu indicator
  const menuFsInd = document.getElementById('btn-menu-fs-indicator');
  if (menuFsInd) {
    menuFsInd.textContent = isFs ? 'ON' : 'OFF';
  }

  // Update settings modal toggle
  const settingsBtn = document.getElementById('btn-set-fullscreen-toggle');
  if (settingsBtn) {
    settingsBtn.textContent = isFs 
      ? (currentLang === 'en' ? '🗗 Exit Fullscreen (Windowed)' : '🗗 Keluar Fullscreen (Mode Jendela)')
      : (currentLang === 'en' ? '⛶ Enter Fullscreen [F]' : '⛶ Masuk Layar Penuh (Fullscreen) [F]');
    settingsBtn.classList.toggle('active', isFs);
  }
}

document.addEventListener('fullscreenchange', updateFullscreenUI);
document.addEventListener('webkitfullscreenchange', updateFullscreenUI);
document.addEventListener('mozfullscreenchange', updateFullscreenUI);
document.addEventListener('MSFullscreenChange', updateFullscreenUI);

// Start New Game
function startNewGame() {
  gameState = {
    chapter: 1,
    currentNode: 'c1_start',
    currentScene: 'story',
    focus: 15,
    playerName: 'Detektif Arun',
    clues: [],
    deductions: [],
    flags: {},
    backlog: [],
    selectedSlotA: null,
    selectedSlotB: null
  };

  initProceduralRain();
  document.getElementById('main-menu-screen').classList.add('hidden');
  switchView('game');
  enterFullscreen();
  updateChapterNavigationUI();
  updateEvidenceInventory();
  updateFocusBar();
  goToStoryNode('c1_start');
}

function interrogateSuspect(suspectId) {
  const s = SUSPECTS_DATA[suspectId];
  if (!s) return;
  const desc = s.desc[currentLang] || s.desc['id'];

  if (gameState.chapter === 2) {
    if (suspectId === 'mira') {
      goToStoryNode('c2_interrogate_mira');
      return;
    } else if (suspectId === 'brama') {
      goToStoryNode('c2_interrogate_brama');
      return;
    } else if (suspectId === 'sena') {
      goToStoryNode('c2_sena_toxicology');
      return;
    } else if (suspectId === 'reyn') {
      goToStoryNode('c2_confront_reyn');
      return;
    }
  }

  showToast(`${s.name}: ${desc}`);
  playSound('type');
}

// ==========================================
// COMPREHENSIVE CONTROLS, SHORTCUTS & CANVAS
// ==========================================
let isAutoPlay = false;
let autoPlayTimer = null;

function continueGame() {
  enterFullscreen();
  loadLatestSaveOrContinue();
}

function openCaseLibraryFromMenu() {
  document.getElementById('main-menu-screen').classList.add('hidden');
  switchView('library');
}

function confirmResetAllData() {
  resetAllGameData();
}

function returnToMainMenu() {
  document.body.classList.remove('in-gameplay');
  document.getElementById('main-menu-screen').classList.remove('hidden');
  updateContinueButtonStatus();
}

function toggleDossierDrawer(forceState) {
  const drawer = document.getElementById('sidebar-casebook');
  const backdrop = document.getElementById('dossier-backdrop');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('drawer-open');
  const shouldOpen = forceState !== undefined ? forceState : !isOpen;

  if (shouldOpen) {
    drawer.classList.add('drawer-open');
    if (backdrop) backdrop.classList.add('active');
    playSound('type');
  } else {
    drawer.classList.remove('drawer-open');
    if (backdrop) backdrop.classList.remove('active');
  }
}


function rollbackDialogue() {
  if (!gameState.historyStack || gameState.historyStack.length === 0) {
    showToast(currentLang === 'en' ? 'At start of current scene.' : 'Sudah di awal adegan.');
    return;
  }
  const prevNodeId = gameState.historyStack.pop();
  playSound('type');
  goToStoryNode(prevNodeId, true);
}

function skipToNextChoice() {
  const node = STORY_NODES[gameState.currentNode];
  if (!node) return;
  if (!node.choices || node.choices.length === 0) return;

  if (node.choices.length === 1) {
    playSound('type');
    goToStoryNode(node.choices[0].nextNode, true);
  } else {
    showToast(currentLang === 'en' ? 'Choice required to proceed!' : 'Pilihan diperlukan untuk lanjut!');
    const container = document.getElementById('choice-container');
    if (container) {
      container.classList.add('shake');
      setTimeout(() => container.classList.remove('shake'), 400);
    }
  }
}

function advanceDialogue() {
  const textEl = document.getElementById('dialogue-text');
  const node = STORY_NODES[gameState.currentNode];
  if (!node) return;

  const rawText = node.text[currentLang] || node.text['id'];

  // If text is still typing, finish immediately
  const cleanCurrent = (textEl.textContent || '').replace('▼', '').trim();
  if (cleanCurrent.length < rawText.trim().length) {
    clearTimeout(typingTimer);
    clearInterval(typingTimer);
    textEl.innerHTML = escapeHtml(rawText) + ' <span class="renpy-advance-chevron">▼</span>';
    renderChoices(node.choices);
    if (typeof checkAutoPlayNext === 'function') checkAutoPlayNext();
    return;
  }

  // If already finished typing and exactly 1 choice exists, advance automatically
  if (node.choices && node.choices.length === 1) {
    playSound('sting');
    goToStoryNode(node.choices[0].nextNode);
  } else if (node.choices && node.choices.length > 1) {
    const container = document.getElementById('choice-container');
    if (container) {
      container.classList.add('shake');
      setTimeout(() => container.classList.remove('shake'), 400);
    }
  }
}

function toggleAutoPlay() {
  isAutoPlay = !isAutoPlay;
  const statusEl = document.getElementById('auto-status');
  if (statusEl) {
    statusEl.textContent = isAutoPlay ? (currentLang === 'en' ? 'ON' : 'Aktif') : (currentLang === 'en' ? 'OFF' : 'Mati');
    statusEl.style.color = isAutoPlay ? 'var(--green)' : 'var(--text-muted)';
  }
  showToast(isAutoPlay ? 'Auto-play Aktif' : 'Auto-play Dimatikan');

  if (isAutoPlay) {
    checkAutoPlayNext();
  } else {
    clearTimeout(autoPlayTimer);
  }
}

function checkAutoPlayNext() {
  if (!isAutoPlay) return;
  clearTimeout(autoPlayTimer);
  autoPlayTimer = setTimeout(() => {
    if (!isAutoPlay) return;
    const node = STORY_NODES[gameState.currentNode];
    if (node && node.choices && node.choices.length === 1) {
      goToStoryNode(node.choices[0].nextNode);
    }
  }, 2400);
}

function quickSaveGame() {
  saveGameSlot('1');
}

function switchChapter(targetChap) {
  if (targetChap <= gameState.chapter) {
    const chapNodes = {
      1: 'c1_start',
      2: 'c2_start',
      3: 'c3_start',
      4: 'c4_start'
    };
    if (chapNodes[targetChap]) {
      goToStoryNode(chapNodes[targetChap]);
      showToast(`Meninjau Bab ${targetChap}`);
    }
  } else {
    showToast(currentLang === 'en' ? 'Chapter locked. Advance the investigation first!' : 'Bab ini masih terkunci. Selesaikan bab sebelumnya!');
  }
}

function clearSlot(slot) {
  if (slot === 'a') {
    gameState.selectedSlotA = null;
  } else if (slot === 'b') {
    gameState.selectedSlotB = null;
  }
  updateDeductionSlotsUI();
  renderDeductionTray();
  playSound('type');
}

function synthesizeDeduction() {
  synthesizeDeductions();
}

function closeModalOnBackdrop(e) {
  if (e && e.target && e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
  }
}

function setTextSpeed(speedVal) {
  if (speedVal === 'slow') textSpeed = 42;
  else if (speedVal === 'fast') textSpeed = 8;
  else textSpeed = 22; // normal

  const btns = document.querySelectorAll('#text-speed-row .settings-pill-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (speedVal === 'slow' && btns[0]) btns[0].classList.add('active');
  if (speedVal === 'normal' && btns[1]) btns[1].classList.add('active');
  if (speedVal === 'fast' && btns[2]) btns[2].classList.add('active');

  showToast(`Kecepatan Teks: ${speedVal.toUpperCase()}`);
}

// ==========================================
// DYNAMIC NOIR RAIN PARTICLE SYSTEM
// ==========================================
function initRainCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
    canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const dropCount = 60;
  const drops = [];
  for (let i = 0; i < dropCount; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      len: 12 + Math.random() * 16,
      speed: 12 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.25
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
    ctx.lineWidth = 1;

    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + 1.2, d.y + d.len);
      ctx.stroke();

      d.y += d.speed;
      d.x += 0.8;
      if (d.y > canvas.height) {
        d.y = -d.len;
        d.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(render);
  }
  render();
}

// Keyboard shortcuts for detective navigation & visual novel controls
window.addEventListener('keydown', (e) => {
  const activeModal = document.querySelector('.modal-backdrop.active');
  const drawer = document.getElementById('sidebar-casebook');
  const isDrawerOpen = drawer && drawer.classList.contains('drawer-open');
  const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

  if (e.code === 'Space') {
    if (!activeModal && !isInput) {
      e.preventDefault();
      advanceDialogue();
    }
  } else if (e.code === 'Escape') {
    if (activeModal) {
      document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
    }
    if (isDrawerOpen) {
      toggleDossierDrawer(false);
    }
  } else if ((e.code === 'ArrowLeft' || e.code === 'PageUp') && !isInput && !activeModal && !isDrawerOpen) {
    e.preventDefault();
    rollbackDialogue();
  } else if ((e.key === 'd' || e.key === 'D' || e.key === 'Tab') && !isInput && !activeModal) {
    e.preventDefault();
    toggleDossierDrawer();
  } else if ((e.key === 'f' || e.key === 'F' || e.key === 'F11') && !isInput && !activeModal) {
    e.preventDefault();
    toggleFullscreen();
  } else if ((e.key === 'l' || e.key === 'L') && !isInput && !activeModal) {
    openBacklogModal();
  } else if (e.key >= '1' && e.key <= '4' && !isInput && !activeModal) {
    const choices = document.querySelectorAll('#choice-container .choice-btn');
    const idx = parseInt(e.key) - 1;
    if (choices[idx]) {
      choices[idx].click();
    }
  }
});

// Initialize on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('araluna_lang');
  if (savedLang && I18N[savedLang]) {
    currentLang = savedLang;
  }
  applyLanguage();
  renderSidebarSuspects();
  updateContinueButtonStatus();
  updateChapterNavigationUI();
  updateEvidenceInventory();
  renderCaseLibrary();
  initRainCanvas('menu-rain-canvas');
  initRainCanvas('rain-canvas');

  // Trigger procedural audio on first interaction (respects browser policy)
  const triggerAudio = () => {
    initAudioEngine();
    window.removeEventListener('click', triggerAudio);
    window.removeEventListener('keydown', triggerAudio);
    window.removeEventListener('touchstart', triggerAudio);
  };
  window.addEventListener('click', triggerAudio, { once: true });
  window.addEventListener('keydown', triggerAudio, { once: true });
  window.addEventListener('touchstart', triggerAudio, { once: true });
});



