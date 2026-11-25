# Candidates — One-Line Office Joke Laugh-Off (u-suzy-one-line-office-joke-laugh-off-f574ac73)

Skill: `~/workspace/custom-skills/humor-one-liner/SKILL.md` (read in full before writing).
Brief juri (competition.yaml): (1) benar-benar one-line office joke; (2) punchline
tajam & mengejutkan, bukan observasi ringan; (3) jelas sekali baca; (4) segar,
hindari klise kantor; (5) kata-kata ketat. Gate: 1–200 karakter.

## C1 — DIPILIH
> I automated my job with a spreadsheet macro, and now my boss thinks I'm a genius — the macro's only job is emailing him my own timesheet.
- 137 karakter, 27 kata. Setup:punchline 18:9 kata (rasio 2:1, zona target skill 2:1–5:1).
- Twist di kata-kata terakhir ("emailing him my own timesheet") — membalik setup:
  "pekerjaan" yang diotomasi ternyata cuma mengirim timesheet si narator sendiri
  ke bosnya. Narator self-own (dianggap genius padahal macro yang kerja).
- Dua gambar konkret bertabrakan: spreadsheet macro × timesheet.
- Tanpa angka yang tak dibayar; tanpa kutipan yang membocorkan punchline;
  tanpa klise lapangan ("you're welcome", "this meeting could have been an email",
  "per my last email", "circle back" — semua dihindari).
- O1 (25 Nov 2026 ~20:0x WIB): pencarian verbatim frasa
  "the macro's only job is emailing him my own timesheet" = 0 hit verbatim.
- O2: leaderboard API kompetisi ini BLIND — `GET /api/competitions/<slug>/leaderboard`
  mengembalikan `entries: []`, `metrics_withheld: true`, `scores_visible: false`
  (dicek first-hand 25 Nov 2026 ~20:0x WIB). Tidak ada teks rival yang bisa dicek
  duplikatnya; tidak ada round board (ronde 1 cutoff 26 Nov 03:05 WIB, belum jalan).
  Keterbatasan ini dicatat — scan pemenang segar tidak mungkin run ini.
- O3 struktural (§3 skill short-text-originality): ≥1 nomina konkret spesifik
  (macro, spreadsheet, timesheet) + verba transaksi (emailing) + reframe di paruh
  kedua. Bukan ide-pertama generik (verba abstrak + nomina generik).

## C2
> I set my out-of-office reply to 'I'm on leave and will respond never,' and my boss forwarded it to the whole company as an example of 'clear communication.'
- 156 karakter, 28 kata. Twist di akhir (dipuji sebagai "clear communication").
- O1: frasa "I'm on leave and will respond never" = 0 hit verbatim.
- DITOLAK sebagai pilihan: tema out-of-office reply baru saja jadi kompetisi
  sejenis (funniest AI out-of-office reply) — risiko duplikasi konvergen di lapangan
  tinggi; twist "dipuji bos" lebih ringan dari C1.

## C3
> HR banned naps after I was caught asleep under my desk, so now I schedule 'deep focus blocks' and snore in 25-minute Pomodoros.
- 127 karakter, 23 kata. Twist di akhir (snore in 25-minute Pomodoros); angka 25
  dibayar oleh punchline.
- O1: frasa "deep focus blocks" + "snore" + Pomodoros = 0 hit verbatim.
- Cadangan: kuat, tapi punchline ("snore") adalah asosiasi pertama yang terpikir
  dari premis tidur — kurang mengejutkan dari C1.

## C4
> I joined the all-hands from my car, and when the CEO asked why I was driving, I said 'I'm just circling back' — now it's in the company handbook as a valid excuse.
- 163 karakter, 33 kata. Twist di akhir (handbook).
- O1: frasa "I'm just circling back" + "company handbook" = 0 hit verbatim.
- DITOLAK: "circle back" adalah klise kantor yang didokumentasikan luas
  (kriteria-4 juri menghukum klise); punchline bergantung pada frasa klise itu.

## C5
> Our stand-up meeting ran so long the intern who joined as a trainee retired mid-sentence — his update was just 'and that's my update.'
- 134 karakter, 24 kata. Kutipan sebagai punchline di akhir.
- O1: frasa "retired mid-sentence" + stand-up intern = 0 hit verbatim.
- DITOLAK: gema "retired mid-conversation / mid-sentence" sudah muncul di daftar
  lelucon generik web (punopedia); setup panjang, punchline hanya mengulang
  format update — kurang tajam dari C1.

## Cek C1–C9 (skill humor-one-liner §4) untuk C1
- C1: nomina konkret baru di punchline ≥1 (timesheet) — lolos.
- C2: yang berubah bukan sekadar waktu/intensitas — lolos.
- C3: punchline 9 kata / 27 = 33% < 40% — lolos.
- C4: rasio setup:punchline 2:1 — lolos (zona target).
- C5: tanpa kutipan/ironi sebelum pivot terakhir — lolos.
- C6: tanpa angka — lolos.
- C7: belokan baru (macro → timesheet sendiri) terjadi di pivot terakhir — lolos.
- C8: kata kerja terkuat ("emailing") ada di punchline dengan objek konkret — lolos.
- C9: lelucon berdiri tanpa konteks kompetisi (kantor + macro + timesheet umum) — lolos.
- Hasil: 9/9.
