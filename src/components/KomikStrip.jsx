import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Modal,
} from 'reactstrap';

import { Icon } from 'react-icons-kit';
import { arrowLeft, arrowRight } from 'react-icons-kit/fa';

const komiks = () => {
    if (localStorage.getItem('lang') === 'en') {
      return [
            { img: '/kartun/1-en.jpg' },
            { img: '/kartun/2-en.jpg' },
            { img: '/kartun/3-en.jpg' },
        ]
    } else {
        return [
            { img: '/kartun/1.jpeg' },
            { img: '/kartun/2.jpeg' },
            { img: '/kartun/3.jpeg' }
        ]
    }
} 

class KomikStrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalKartun: false,
            modalImage: '',
            indexShow: 0,
        }
        this.showKartun = this.showKartun.bind(this);
        this.prevKartun = this.prevKartun.bind(this);
        this.nextKartun = this.nextKartun.bind(this);
    }

    showKartun (i, requireImage) {
        // console.log('ini kartun ke '+ i + ' ' + requireImage)
        this.setState({
            modalKartun: !this.state.modalKartun,
            modalImage: requireImage,
            indexShow: i
        })
    }

    prevKartun (i) {
        console.log('komiks', this.state.indexShow-1)
        this.setState({
            modalKartun: true,
            modalImage: komiks()[this.state.indexShow-1].img,
            indexShow: this.state.indexShow-1
        })
    }

    nextKartun (i) {
        console.log('komiks', this.state.indexShow+1)
        this.setState({
            modalKartun: true,
            modalImage: komiks()[this.state.indexShow+1].img,
            indexShow: this.state.indexShow+1
        })
    }

    render() {
        const komikStrip = () => komiks().map((komik, i) => {
            return (
                // <h1>komik</h1>
                <Col md="4" key={komik.img}>
                    <img style={{ width: '100%', margin: '10px 0px' }} src={komik.img} alt={'img'+ i} onClick={() => this.showKartun(i, komik.img)}/>
                    <Modal isOpen={this.state.modalKartun} style={{ position: 'relative', marginTop: '80px' }}>
                        <div style={{ width: '100%', position: 'absolute', top: '-30px', left: 0, right: 0, marginLeft: 0, marginRight: 0, margin: '0 auto' }}>
                            <p style={{ color: 'white', float: 'right' }} onClick={() => this.showKartun(i, komik.img)}>
                                Close [x]
                            </p>
                        </div>
                        <img style={{ width: '100%' }} src={this.state.modalImage} alt={'imgModal'+ i}/>
                        <div style={{ width: '100%', position: 'absolute', bottom: '-50px', left: 0, right: 0, marginLeft: 0, marginRight: 0, margin: '0 auto' }}>
                            {
                                (this.state.indexShow >= 1) ?
                                    <div style={{ color: 'white', float: 'left' }}>
                                        <Icon size={30} icon={arrowLeft} onClick={() => this.prevKartun()}/>
                                    </div>
                                : ''
                            }
                            {
                                (this.state.indexShow < 2) ?
                                <div style={{ color: 'white', float: 'right' }}>
                                    <Icon size={30} icon={arrowRight} onClick={() => this.nextKartun()}/>
                                </div>
                                : ''
                            }
                        </div>
                    </Modal>
                </Col>
            )
        })
        return (
            <div style={{ background: 'rgb(29, 39, 74)' }}>
                <Container style={{ padding: '50px 0px 50px 0px' }}>
                    <Row style={{ marginLeft: '0px', marginRight: '0px' }}>
                        {komikStrip()}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default KomikStrip;