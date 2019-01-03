import alertify from 'alertifyjs';

export function testAction (data) {
  return dispatch => {
    fetch('http://neoal.xyz:3000/api/bukutamu/add', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(result => result.json())
      .then(res => {
        alertify.alert('Pesan Terkirim', `Terimakasih <b>${data.nama}</b>, karena telah menghubungi kami, 
        Jika ada hal yang mendesak dapat menghubungi kami via : whatsapp di <b>0812-288-566-99</b> atau melalui email ke: <b>info@kemodijakarta.com</b>  !`);
        
      })
  }
}