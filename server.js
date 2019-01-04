require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 9000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  console.log('Home')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/about', function(req, res) {
  console.log('About')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/contact', function(req, res) {
  console.log('Contact')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/kalkulator', function(req, res) {
  console.log('Kalkulator')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/artikel', function(req, res) {
  console.log('Artikel')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/artikel/:id/:title', function(req, res) {
  console.log('Detail Artikel')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/contact', function(req, res) {
  console.log('Kontak')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/login', function(req, res) {
  console.log('Login')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/dashboard', function(req, res) {
  console.log('Admin Dashboard')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/artikel', function(req, res) {
  console.log('Admin Artikel')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/artikel/tambah', function(req, res) {
  console.log('Admin Artikel Tambah')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/artikel/edit/:id', function(req, res) {
  console.log('Admin Artikel Edit')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/user', function(req, res) {
  console.log('Admin User')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/user/tambah', function(req, res) {
  console.log('Admin User Tambah')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/user/edit/:id', function(req, res) {
  console.log('Admin User Edit')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/gallery', function(req, res) {
  console.log('Admin Gallery')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/gallery/tambah', function(req, res) {
  console.log('Admin Gallery Tambah')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/admin/gallery/edit/:id', function(req, res) {
  console.log('Admin Gallery Edit')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
