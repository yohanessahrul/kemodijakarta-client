import React, { Component } from 'react';
import './App.css';
import history from './history'; 
import { Helmet } from 'react-helmet';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './components/formSignUp/WizardForm';
import NotifRegister from './components/formSignUp/FifthForm';
import { Router, Switch, Route } from 'react-router-dom';
import LayananMobile from './pages/LayananMobile';
import ArtikelPage from './pages/ArtikelPage';
import ArtikelPageById from './pages/ArtikelPageById';

import dataJSON from './template.json';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import User from './pages/admin/User';
import UserTambah from './pages/admin/UserTambah';
import UserEdit from './pages/admin/UserEdit';
import Artikel from './pages/admin/Artikel';
import ArtikelTambah from './pages/admin/ArtikelTambah';
import ArtikelEdit from './pages/admin/ArtikelEdit';
import Gallery from './pages/admin/Gallery';
import GalleryTambah from './pages/admin/GalleryTambah';
import GalleryEdit from './pages/admin/GalleryEdit';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoad: false,
      lang: null,
      langRegister: null,
    }
  }
  componentDidMount() {
    if (localStorage.getItem('lang') === null || localStorage.getItem('lang') === 'id') {
      this.setState({
        lang: dataJSON.id,
      })
    }
    if (localStorage.getItem('lang') === 'en') {
      this.setState({
        lang: dataJSON.en,
      })
    }
    setTimeout(() => {
      this.setState({
        isLoad: true
      })
    }, 1000);

  }
  render() {
    if (this.state.isLoad === false) {
      return (
        <div style={{ width: '100%', height: '100%', background: 'white' }}>
          <p style={{ display: 'table', margin: 'auto', paddingTop: '20%' }}>
            <img src={'/images/loader.gif'} alt="loader" style={{ display: 'table', width: '30%', margin: '0 auto' }}/>
          </p>
        </div>
      )
    } else {
      // console.log('Bahasa', this.state.lang)
      return (
        <div>
          <Helmet>
            <title>Kemodijakarta.com | Jasa Perjalanan Medis Jakarta</title>
            <meta name="description" content="Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta..." data-react-helmet="true" />
            <meta name="keywords" content="perjalanan medis" data-react-helmet="true" />
            <meta name="author" content="PT Vitamin Masyarakat Sehat" data-react-helmet="true" />

            <meta property="og:url" content="http://kemodijakarta.com/" data-react-helmet="true" />
            <meta property="og:image" content="http://kemodijakarta.com/images/kemo-image-share.jpeg" data-react-helmet="true" />
            <meta property="og:title" content="Kemodijakarta.com | Jasa Perjalanan Medis Jakarta" data-react-helmet="true" />
            <meta property="og:description" content="Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta..." data-react-helmet="true" />
          </Helmet>
          <Router history={history}>
            <div className="bigWrap">
              <Switch>
                <Route exact path="/" component={(props) => <Home {...props} lang={this.state.lang}/>}></Route>
                <Route path="/about" component={(props) => <About {...props} lang={this.state.lang}/>}></Route>
                <Route path="/contact" component={(props) => <Contact {...props} lang={this.state.lang}/>}></Route>
                <Route path="/register" component={(props) => <Register {...props} lang={this.state.langRegister}/>}></Route>
                <Route path="/notif-form" component={NotifRegister}></Route>
                <Route path="/layananmobile" component={(props) => <LayananMobile {...props} lang={this.state.lang}/>}></Route>                                                     
                <Route path="/kalkulator" component={() => window.location = 'http://kalkulator.kemodijakarta.com/#/'}></Route>
                <Route exact path="/artikel" component={(props) => <ArtikelPage {...props} lang={this.state.lang}/>}></Route>
                <Route exact path="/artikel/:id/:title" component={(props) => <ArtikelPageById {...props} lang={this.state.lang} />}/>

                <Route path="/login" component={Login}></Route>
                <Route path="/admin/dashboard" component={Dashboard}></Route>
                <Route exact path="/admin/user" component={User}></Route>
                <Route path="/admin/user/tambah" component={UserTambah}></Route>
                <Route path="/admin/user/edit/:id" component={UserEdit}></Route>
                <Route exact path="/admin/artikel" component={Artikel}></Route>
                <Route path="/admin/artikel/tambah" component={ArtikelTambah}></Route>
                <Route path="/admin/artikel/edit/:id" component={ArtikelEdit}></Route>
                <Route exact path="/admin/gallery" component={Gallery}></Route>
                <Route path="/admin/gallery/tambah" component={GalleryTambah}></Route>
                <Route path="/admin/gallery/edit/:id" component={GalleryEdit}></Route>
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
  }
}

export default App;
