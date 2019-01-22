require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 7000;
const path = require('path');
const fs = require('fs');

require('isomorphic-fetch');

const app = express();

app.get('/', function(req, res) {
  console.log('Home')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Kemodijakarta.com | Jasa Perjalanan Medis Jakarta');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta...');
    data = data.replace(/\$OG_KEYWORDS/g, 'perjalanan medis');
    data = data.replace(/\$OG_AUTHOR/g, 'PT Vitamin Masyarakat Sehat');
    data = data.replace(/\$OG_IMAGE/g, 'http://kemodijakarta.com/images/kemo-image-share.jpeg');
    data = data.replace('416386378901873', '416386378901873');
    res.send(data);
  });
});

app.get('/about', function(req, res) {
  console.log('About');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Kemodijakarta.com | Tentang Jasa Perjalanan Medis Jakarta');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta...');
    data = data.replace(/\$OG_KEYWORDS/g, 'perjalanan medis');
    data = data.replace(/\$OG_AUTHOR/g, 'PT Vitamin Masyarakat Sehat');
    data = data.replace(/\$OG_IMAGE/g, 'http://kemodijakarta.com/images/kemo-image-share.jpeg');
    data = data.replace('416386378901873', '416386378901873');
    res.send(data);
  });
});

app.get('/artikel', function(req, res) {
  console.log('ArtikelSS S')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Kemodijakarta.com | Artikel Jasa Perjalanan Medis Jakarta');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta...');
    data = data.replace(/\$OG_KEYWORDS/g, 'perjalanan medis');
    data = data.replace(/\$OG_AUTHOR/g, 'PT Vitamin Masyarakat Sehat');
    data = data.replace(/\$OG_IMAGE/g, 'http://kemodijakarta.com/images/kemo-image-share.jpeg');
    data = data.replace('416386378901873', '416386378901873');
    res.send(data);
  });
});

app.get('/kalkulator', function(req, res) {
  console.log('Kalkulator')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/contact', function(req, res) {
  console.log('Contact');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Kemodijakarta.com | Kontaks Jasa Perjalanan Medis Jakarta');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta...');
    data = data.replace(/\$OG_KEYWORDS/g, 'perjalanan medis');
    data = data.replace(/\$OG_AUTHOR/g, 'PT Vitamin Masyarakat Sehat');
    data = data.replace(/\$OG_IMAGE/g, 'http://kemodijakarta.com/images/kemo-image-share.jpeg');
    data = data.replace('416386378901873', '416386378901873');
    res.send(data);
  });
});

app.get('/artikel/:id/:title', function(req, res) {
  console.log('Detail Artikel')

  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    const url = req.url;
    const id = url.split('/')[2];
    const judulUrl = url.split('/')[3];

    fetch(`http://35.187.225.21:3000/api/article/getarticlebyid/${id}`)
    .then(function (response) {
      if (!response) {
        return console.log('ERROR');
      }
      return response.json();
    })
    .then(function (response) {
      const { judul, isi, img } = response.data;
      data = data.replace(/\$OG_URL/g, `http://kemodijakarta.com/artikel/${id}/${judulUrl}`);
      data = data.replace(/\$OG_TYPE/g, 'article');
      data = data.replace(/\$OG_TITLE/g, judul);
      data = data.replace(/\$OG_DESCRIPTION/g, isi.replace(/(<([^>]+)>)/ig,"").substring(0, 100));
      data = data.replace(/\$OG_KEYWORDS/g, 'perjalanan medis');
      data = data.replace(/\$OG_AUTHOR/g, 'PT Vitamin Masyarakat Sehat');
      data = data.replace(/\$OG_IMAGE/g, img);
      data = data.replace('416386378901873', '416386378901873');
      res.send(data);
    })
  });
});

app.get('/login', function(req, res) {
  console.log('Login')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Login');
    data = data.replace(/\$OG_DESCRIPTION/g, 'Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta...');
    data = data.replace(/\$OG_KEYWORDS/g, 'perjalanan medis');
    data = data.replace(/\$OG_AUTHOR/g, 'PT Vitamin Masyarakat Sehat');
    data = data.replace(/\$OG_IMAGE/g, 'http://kemodijakarta.com/images/kemo-image-share.jpeg');
    data = data.replace('416386378901873', '416386378901873');
    res.send(data);
  });
});

app.get('/admin/dashboard', function(req, res) {
  console.log('Admin Dashboard');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Dashboard');
    res.send(data);
  });
});

app.get('/admin/artikel', function(req, res) {
  console.log('Admin Artikel');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Artikel');
    res.send(data);
  });
});

app.get('/admin/artikel/tambah', function(req, res) {
  console.log('Admin Artikel Tambah');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Tambah Artikel');
    res.send(data);
  });
});

app.get('/admin/artikel/edit/:id', function(req, res) {
  console.log('Admin Artikel Edit');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Edit ARtikel');
    res.send(data);
  });
});

app.get('/admin/user', function(req, res) {
  console.log('Admin User');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'User');
    res.send(data);
  });
});

app.get('/admin/user/tambah', function(req, res) {
  console.log('Admin User Tambah');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Artikel');
    res.send(data);
  });
});

app.get('/admin/user/edit/:id', function(req, res) {
  console.log('Admin User Edit');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Edit User');
    res.send(data);
  });
});

app.get('/admin/gallery', function(req, res) {
  console.log('Admin Gallery')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Gallery');
    res.send(data);
  });
})

app.get('/admin/gallery/tambah', function(req, res) {
  console.log('Admin Gallery Tambah');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Tambah Gallery');
    res.send(data);
  });
});

app.get('/admin/gallery/edit/:id', function(req, res) {
  console.log('Admin Gallery Edit');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    data = data.replace(/\$OG_URL/g, 'http://kemodijakarta.com');
    data = data.replace(/\$OG_TYPE/g, 'website');
    data = data.replace(/\$OG_TITLE/g, 'Edit Gallery');
    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
