import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class TopHeader extends Component {
    render() {
        return (
            <div style={{ width: '100%', background: 'red', display: 'table' }}>
                <Container>
                    <Link to="/about" className="float-right">
                        Tentang
                    </Link>
                </Container>
            </div>
        );
    }
}

export default TopHeader;