export function judulConvertToUrlParameter (string) {
  var result = '';
  for (var i=0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += '-'
    } else if (string[i] === ',' || string[i] === '!' || string[i] === '(' || string[i] === ')') {
      result += ''
    } else {
      result += string[i]
    }
  }
  return result.toLowerCase()
}

export function convertDay (num) {
  switch (num-1) {
    case 0:
      return 'Senin'
    case 1:
      return 'Selasa'
    case 2:
      return 'Rabu'
    case 3:
      return 'Kamis'
    case 4:
      return 'Jumat'
    case 5:
      return 'Sabtu'
    case 6:
      return 'Minggu'
    default:
      break;
  }
}

export function convertMonth (num) {
  switch (num-1) {
    case 0:
      return 'Januari'
    case 1:
      return 'Februari'
    case 2:
      return 'Maret'
    case 3:
      return 'April'
    case 4:
      return 'Mei'
    case 5:
      return 'Juni'
    case 6:
      return 'Juli'
    case 7:
      return 'Agustus'
    case 8:
      return 'September'
    case 9:
      return 'Oktober'
    case 10:
      return 'November'
    case 11:
      return 'Desember'
    default:
      break;
  }
}

export function cleanDate (date) {
  let d = new Date(date);
  let year = d.getFullYear();
  let month = d.getMonth()+1;
  let day = d.getDay();
  let dt = d.getDate();
  let hour = d.getHours();
  let minute = d.getMinutes();

  return `${convertDay(day)}, ${dt} ${convertMonth(month)} ${year} - ${hour}:${minute} WIB`
}