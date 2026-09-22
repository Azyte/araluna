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

module.exports = {
  STORY_NODES
};
