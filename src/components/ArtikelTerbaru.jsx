import history from '../history';
import React, { Component } from 'react';
import {
  Row,
  Col,
  Card, CardImg, CardBody, CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { judulConvertToUrlParameter, limitJudul } from '../helper/helper';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticleNewest, getArticleByIdAction } from '../actions/action.artikel';

class ArtikelTerbaru extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      data: null
    }
    this.goToLink = this.goToLink.bind(this);
  }
  componentDidMount () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    let id = window.location.pathname.split('/')[2];
    this.props.getArticleNewest(id)
  }
  componentWillReceiveProps (nextProps) {
    console.log('NEXTPROPS ===> ', nextProps.state.articleTerbaru)
    this.setState({
      isLoading: true,
      data: nextProps.state.reducerArticle.articleTerbaru
    })
  }
  
  goToLink (link) {
    history.push(link)
    window.location.reload(true)
  }

  render() {
    const { isLoading, data } = this.state;
    const listArtikelTerbaru = (thisInside) => {
      let loopArtikelTerbaru = data.map((datas) => {
        return (
          <Col md="4" key={datas._id}>
            <Card>
              <Link to={`#`} onClick={() => thisInside.goToLink(`/artikel/${datas._id}/${judulConvertToUrlParameter(datas.judul)}`)}>
                <CardImg src={datas.img} />
              </Link>
              <CardBody className="cardBodyArtikelTerkait">
              <CardTitle className="cardTitleArtikelTerkait">
                <Link style={{ color: '#3d3d3d' }} to={`#`} onClick={() => thisInside.goToLink(`/artikel/${datas._id}/${judulConvertToUrlParameter(datas.judul)}`)}>
                  { limitJudul(datas.judul) }
                </Link>
              </CardTitle>
              </CardBody>
            </Card>
          </Col>
        )
      })

      return loopArtikelTerbaru;
    }
    if (isLoading) {
      return (
        <div>
          <Row>
              <Col md="12">
              <h4>Artikel Terbaru</h4>
              <br/>
              </Col>
              {listArtikelTerbaru(this)}
          </Row>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getArticleNewest, getArticleByIdAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtikelTerbaru);