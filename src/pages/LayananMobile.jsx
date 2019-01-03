import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Collapse,
 }from 'reactstrap';
import Navigation from '../components/Navigation';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import { Icon } from 'react-icons-kit';
import {
    modelS,
    pizza,
    iosChatboxes,
    personStalker,
    iosHeart,
} from 'react-icons-kit/ionicons'

class LayananMobile extends Component {
    constructor(props) {
      super(props)
      this.state = {
        akomodasiToogle: false,
        perawatToogle: false,
        konsumsiToogle: false,
        edukasiToogle: false,
        hiburanToogle: false,
      }
      this.toogle = this.toogle.bind(this);
    }

    toogle (e) {
      this.setState({
        [e.target.id]: !this.state[e.target.id]
      })
    }

    render() {
        const { slideSection } = this.props.lang.home;
        const { listLayanan2 } = this.props.lang.home.slideSection;

        const icons = [ modelS, personStalker, pizza, iosChatboxes, iosHeart];
        const colorIcon = [ '#ad7cff', '#71b5eb', '#feae6c', '#66b899', '#ed6c6c' ];
        const toogleState = [ 
            this.state.akomodasiToogle,
            this.state.perawatToogle,
            this.state.konsumsiToogle,
            this.state.edukasiToogle,
            this.state.hiburanToogle ];
            
        const daftarLayanan = () => listLayanan2.map((layanan, i) => {
            return (
                <ListGroupItem key={i} onClick={this.toogle}>
                    <Icon icon={icons[i]} size="25" style={{ paddingRight: '15px', float: 'left', color: `${colorIcon[i]}` }}/>
                    <span id={layanan.id+'Toogle'} onClick={this.toogle} style={{ display: 'inline-table', paddingTop: '5px', float: 'left', marginTop: '45px !important', fontSize: '14px' }}>
                    {layanan.h1}
                    </span>
                    <div className="clear"></div>
                    <Collapse isOpen={toogleState[i]}>
                    <p style={{ paddingTop: '20px', color: '#474747' }}>
                        {layanan.desc}
                    </p>
                    </Collapse>
                </ListGroupItem>
            )
        })
        return (
            <div>
                <div className="headerWrap">
                    <Navigation lang={this.props.lang.menu}/>
                </div>
                <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
                <Container style={{ paddingBottom: '100px' }}>
                    <Row>
                        <div className="marginTop"></div>
                        <div style={{ width: '100%', height: '50px' }}></div>
                    </Row>
                    <Row>
                        <Col sm="12">
                          <h3>{slideSection.daftarLayanan}</h3>
                        </Col>
                        <Col sm="12">
                            <ListGroup>
                              {daftarLayanan()}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LayananMobile;