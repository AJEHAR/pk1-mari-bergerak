/*
  Data game "Mari Bergerak" — Pengurusan Kehidupan Tahun 1, Kemahiran Manipulatif (Motor Kasar)
  SK 1.1 Pergerakan asas bahagian kepala | SK 1.2 Pergerakan asas bahagian tangan
  FRASA: ayat arahan Bahasa Melayu. Rakaman disimpan di audio/<kunci>.wav (rakam di rakam-suara.html)
*/
(function () {
  var BAHAGIAN = {
    kepala: { nama: 'Bahagian Kepala', pendek: 'Kepala', emoji: '🙂', sk: 'SK 1.1', warna: '#f76707' },
    tangan: { nama: 'Bahagian Tangan', pendek: 'Tangan', emoji: '✋', sk: 'SK 1.2', warna: '#1c7ed6' }
  };
  // pandangan: 'depan' atau 'sisi' (watak dilukis dari sisi supaya dongak/tunduk/angguk jelas)
  var GERAK = [
    { id: 'toleh',  nama: 'Toleh kanan dan kiri', bhg: 'kepala', sp: '1.1.1', pandangan: 'depan', warna: '#f76707' },
    { id: 'dongak', nama: 'Dongak',               bhg: 'kepala', sp: '1.1.2', pandangan: 'sisi',  warna: '#e8590c' },
    { id: 'tunduk', nama: 'Tunduk',               bhg: 'kepala', sp: '1.1.2', pandangan: 'sisi',  warna: '#d9480f' },
    { id: 'geleng', nama: 'Geleng',               bhg: 'kepala', sp: '1.1.3', pandangan: 'depan', warna: '#f59f00' },
    { id: 'angguk', nama: 'Angguk',               bhg: 'kepala', sp: '1.1.4', pandangan: 'sisi',  warna: '#e67700' },
    { id: 'regang', nama: 'Regang dan ayun',      bhg: 'tangan', sp: '1.2',   pandangan: 'depan', warna: '#1c7ed6' },
    { id: 'pusing', nama: 'Pusing tangan',        bhg: 'tangan', sp: '1.2',   pandangan: 'depan', warna: '#1971c2' },
    { id: 'tarik',  nama: 'Tarik dan tolak',      bhg: 'tangan', sp: '1.2',   pandangan: 'depan', warna: '#4263eb' }
  ];
  var PUJI = ['Bagus!', 'Hebat!', 'Pandai!', 'Betul!'];
  var BIMBINGAN = {
    tanpa:   { nama: 'Tanpa bimbingan',   emoji: '🌟', warna: '#2b8a3e' },
    minimum: { nama: 'Bimbingan minimum', emoji: '🤝', warna: '#e67700' },
    penuh:   { nama: 'Bimbingan penuh',   emoji: '🧑‍🏫', warna: '#c92a2a' }
  };

  var F = {};
  F.tulis_nama = 'Tulis nama samaran dahulu.';
  F.soalan_a = 'Lihat. Pergerakan apa ini?';
  F.cari = 'Cari pergerakan';
  PUJI.forEach(function (t, i) { F['puji_' + (i + 1)] = t; });
  GERAK.forEach(function (g) { F['nama_' + g.id] = g.nama + '.'; });
  F.cuba_lagi = 'Cuba lagi. Lihat baik-baik.';
  F.jawapannya = 'Jawapannya,';
  F.lakukan_mula = 'Jom bergerak! Lihat dan ikut pergerakan ini.';
  F.lakukan_ikut = 'Mari lakukan.';
  ['Satu', 'Dua', 'Tiga', 'Empat', 'Lima'].forEach(function (t, i) { F['kira_' + (i + 1)] = t + '.'; });
  F.lakukan_tanya = 'Syabas! Bagaimana kamu melakukannya?';
  F.tamat_3 = 'Hebat! Kamu dapat tiga bintang.';
  F.tamat_2 = 'Bagus! Kamu dapat dua bintang.';
  F.tamat_1 = 'Syabas kerana mencuba! Mari main lagi.';

  window.BAHAGIAN = BAHAGIAN;
  window.GERAK = GERAK;
  window.PUJI = PUJI;
  window.BIMBINGAN = BIMBINGAN;
  window.FRASA = F;
})();
