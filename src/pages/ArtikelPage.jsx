import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { judulConvertToUrlParameter } from '../helper/helper';

import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllArticlesAction } from '../actions/action.artikel';

import { Helmet } from 'react-helmet';

class ArtikelPage extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      dataArticles: null
    }
  }

  componentDidMount () {
    let token = localStorage.getItem('token')
    this.props.getAllArticlesAction(token);
  }

  componentWillReceiveProps (nextProps) {
    let dataArticles = nextProps.state.reducerArticle.allArticles;
    this.setState({
      isLoading: true,
      dataArticles: dataArticles
    })
  }

  render() {
    const { slideSection } = this.props.lang.home;
    const listArticle = () => {
      if (this.state.isLoading) {
        const loopArticles = this.state.dataArticles.map((data, i) => {
          return (
            <Col md="4" style={{ marginBottom: '35px' }} key={data._id}>
              <Card>
                <Link to={`/artikel/${data._id}/${judulConvertToUrlParameter(data.judul)}`}>                
                  <CardImg top width="100%" src={data.img} alt="Card image cap" />
                </Link>
                <CardBody className="cardBody">
                  <Link className="cardTitle" to={`/artikel/${data._id}/${judulConvertToUrlParameter(data.judul)}`}>
                    <CardTitle>{data.judul.substring(0, 50)}</CardTitle>
                  </Link>
                  <CardText className="cardDesc">{data.isi.replace(/(<([^>]+)>)/ig,"").substring(0, 120)}..</CardText>
                  <CardText className="cardDate">
                    <small className="text-muted">{data.createdDate}</small>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          )
        })
        return loopArticles;
      }
    }
    return (
      <div>
        <Helmet>
          <title>Kemodijakarta.com | Artikel Jasa Perjalanan Medis Jakarta</title>
          <meta name="description" content="Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta..." data-react-helmet="true" />
          <meta name="keywords" content="perjalanan medis" data-react-helmet="true" />
          <meta name="author" content="PT Vitamin Masyarakat Sehat" data-react-helmet="true" />

          <meta property="og:url" content="http://kemodijakarta.com/" data-react-helmet="true" />
          <meta property="og:image" content="http://kemodijakarta.com/images/kemo-image-share.jpeg" data-react-helmet="true" />
          <meta property="og:title" content="Kemodijakarta.com | Artikel Jasa Perjalanan Medis Jakarta" data-react-helmet="true" />
          <meta property="og:description" content="Selamat datang di Layanan Perjalanan Medis Rumah sakit Jakarta. Kami (kemodijakarta) adalah sebuah layanan pendampingan bagi penderita kanker yang menjalani pengobatan di jakarta..." data-react-helmet="true" />
        </Helmet>
        <div className="headerWrap">
          <Navigation lang={this.props.lang.menu}/>
        </div>
        <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
        <Container style={{ paddingBottom: '100px' }}>
          <div className="marginTop"></div>
          <Row>
            <Col>
              <Container style={{ }}>
                <Row className="animated bounceInDown">
                  <div className="aboutWrap">
                    <h2>Artikel</h2> 
                  </div> 
                </Row>
                <Row>
                  <Col md="12" style={{  }}>
                    <div style={{ padding: '40px 0' }}>
                      <Row>
                        {listArticle()}
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllArticlesAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ArtikelPage);