import React, { Component } from 'react';

class ThumbnailLayanan extends Component {
  render() {
    const { listLayanan2 } = this.props.lang.home.slideSection
    return (
        <div className="thumbnailLayanan">
          <ul>
            <li>
              <div className="imageLayananWrap animated fadeInDown">
                <img src={'/layanan/nurse-helping-senior-man-exit-260nw-742009099.jpg'} alt="layanan-thumb"/>
              </div>
              <p className="animated fadeInUp delay-5s">{listLayanan2[0].h1}</p>
            </li>
            <li>
              <div className="imageLayananWrap animated fadeInDown">
                <img src={'/layanan/perawat-homecare.jpg'} alt="layanan-thumb"/>
              </div>
              <p className="animated fadeInUp delay-5s">{listLayanan2[1].h1}</p>
            </li>
            <li>
              <div className="imageLayananWrap animated fadeInDown">
                <img style={{ marginTop:-20, marginLeft: -5 }} src={'/layanan/makanan-sehat.jpg'} alt="layanan-thumb"/>
              </div>
              <p className="animated fadeInUp delay-5s">{listLayanan2[2].h1}</p>
            </li>
            <li>
              <div className="imageLayananWrap animated fadeInDown">
                <img style={{ marginTop:-20, marginLeft: -15 }} src={'/layanan/konsultasi.jpg'} alt="layanan-thumb"/>
              </div>
              <p className="animated fadeInUp delay-5s">{listLayanan2[3].h1}</p>
            </li>
            <li>
              <div className="imageLayananWrap animated fadeInDown">
                <img style={{ marginTop:-20, marginLeft: -15 }} src={'/layanan/hiburan.jpg'} alt="layanan-thumb"/>
              </div>
              <p className="animated fadeInUp delay-5s">{listLayanan2[4].h1}</p>
            </li>
          </ul>
        </div>
    );
  }
}

export default ThumbnailLayanan;