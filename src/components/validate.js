const validate = values => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = yyyy + '-' + mm + '-' + dd

  var numbers = /^[0-9]+$/

  const errors = {};
  if (!values.namaDepan) {
    errors.namaDepan = 'Harus di isi!';
  }
  if (!values.namaBelakang) {
    errors.namaBelakang = 'Harus di isi!';
  }
  if (!values.email) {
    errors.email = 'Harus di isi!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'format email salah';
  }
  if (!values.sex) {
    errors.sex = 'Harus di isi!';
  }
  if (!values.alamat) {
    errors.alamat = 'Harus di isi!';
  }
  if (!values.alamat2) {
    errors.alamat2 = 'Harus di isi!';
  }
  if (!values.Asuransi) {
    errors.Asuransi = 'Harus di isi!';
  }
  if (!values.noTelp) {
    errors.noTelp = 'Harus di isi!';
  }else if(!values.noTelp.match(numbers)){
    errors.noTelp = 'Harus Angka!'
  }
  if (!values.noTelpDarurat) {
    errors.noTelpDarurat = 'Harus di isi!';
  }else if(!values.noTelpDarurat.match(numbers)){
    errors.noTelpDarurat = 'Harus Angka!'
  }
  if (!values.agama) {
    errors.agama = 'Harus di isi!';
  }
  if (!values.kondisi) {
    errors.kondisi = 'Harus di isi!';
  }
  if (!values.diet) {
    errors.diet = 'Harus di isi!';
  }
  if (!values.suplemen) {
    errors.suplemen = 'Harus di isi!';
  }
  if (!values.homestay) {
    errors.homestay = 'Harus di isi!';
  }
  if (!values.aliran) {
    errors.aliran = 'Harus di isi!';
  }
  if (!values.stadium) {
    errors.stadium = 'Harus di isi!';
  }
  if (!values.fasilitas) {
    errors.fasilitas = 'Harus di isi!';
  }
  if (!values.kebersihan) {
    errors.kebersihan = 'Harus di isi!';
  }
  if (!values.transportasi) {
    errors.transportasi = 'Harus di isi!';
  }
  // if (!values.kunjungan) {
  //   errors.kunjungan = 'Harus di isi!';
  // }
  // if (!values.konseling) {
  //   errors.konseling = 'Harus di isi!';
  // }
  if (!values.budget) {
    errors.budget = 'Harus di isi!';
  }else if(values.budget < 0){
    errors.budget = 'Budget Tidak Boleh Minus!'
  }
  if (!values.rumahSakit) {
    errors.rumahSakit = 'Harus di isi!';
  }
  if (!values.jadwalTreatment) {
    errors.jadwalTreatment = 'Harus di isi!';
  }else if(values.jadwalTreatment < 0){
    errors.jadwalTreatment = 'Tidak Boleh Minus!'
  }
  if (!values.namaContactDarurat) {
    errors.namaContactDarurat = 'Harus di isi!';
  }
  if (!values.hubungan) {
    errors.hubungan = 'Harus di isi!';
  }
  if (!values.tanggalMulai) {
    errors.tanggalMulai = 'Harus di isi!';
  } else if (values.tanggalMulai < String(today) && values.tanggalMulai !== String(today)) {
    console.log('apa aja')
    errors.tanggalMulai = 'Tanggal Mulain Tidak Boleh Sebelum Hari Ini'
  }
  if (!values.tanggalSelesai) {
    errors.tanggalSelesai = 'Harus di isi!';
  } else if (values.tanggalMulai > values.tanggalSelesai) {
    errors.tanggalSelesai = 'Tanggal Selesai Harus Lebih Dari Tanggal Mulai'
  }
  if (!values.asalKota) {
    errors.asalKota = 'Harus di isi!';
  }
  if (!values.datangDengan) {
    errors.datangDengan = 'Harus di isi!';
  }
  // if (!values.lainLain) {
  //   errors.lainLain = 'Harus di isi!';
  // }
  if (!values.jenisKanker) {
    errors.jenisKanker = 'Harus di isi!';
  }
  if (!values.tglLahir) {
    errors.tglLahir = 'Harus di isi!';
  }else if(values.tglLahir >=  String(today)){
    errors.tglLahir = 'Tanggal Lahir Anda Sebelum Tanggal Hari Ini'
  }
  if(!values.brosur){
    errors.brosur = 'Harus di isi!'
  }
  if(!values.kodeBrosur){
    errors.kodeBrosur = 'Harus di isi!'
  }
  return errors;
};

export default validate;
