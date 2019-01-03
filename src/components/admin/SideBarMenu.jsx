import React, { Component } from 'react';
import history from '../../history';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';

class SideBarMenu extends Component {
  constructor (props) {
    super (props)
    this.state = {
      activeMenu: null
    }
    this.logOut = this.logOut.bind(this);
  }
  logOut () {
    console.log('delet ')
    localStorage.removeItem('token')
    localStorage.removeItem('usac')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    alertify.success('Anda berhasil keluar')
    history.push('/login')
  }
  componentDidMount () {
    let activePathname = window.location.pathname.split('/')[2]
    this.setState({ activeMenu: activePathname })
  }

  render() {
    const activeClass = (menu) => {
      if (this.state.activeMenu !== null) {
        let activeMenu = this.state.activeMenu
        if (activeMenu === menu) {
          return 'activeSidebarMenu'
        } else {
          return ''
        }
      }
    }
    return (
      <Col md="2" style={{ width: '100%', minHeight: '1000px', background: '#0e6a79' }}>
        <div style={{ position: 'fixed', display: 'table', marginLeft: '12px' }}>
          <div style={{ width: '100%', marginTop: '30px' }}>
            <div style={{ width: '130px', height: '130px', borderRadius: '100px', background: 'yellow', display: 'table', margin: '0 auto', overflow: 'hidden' }}>
            </div>
            <h5 style={{ textAlign: 'center', marginTop: '10px', color: '#de9d1f' }}>
              {localStorage.getItem('username')}
            </h5>
            <p style={{ textAlign: 'center', fontSize: '12px', lineHeight: '0.2em', color: '#de9d1f' }}>
              ( {localStorage.getItem('role')} )
            </p>
          </div>
          <br/>
          <ul className="sidebarMenu">
            <li className={activeClass('dashboard')}><Link to="/admin/dashboard">Dashboard</Link></li>
            {
              (localStorage.getItem('usac') === 'y') ? '' : <li className={activeClass('user')}><Link to="/admin/user">User</Link></li>
            }
            <li className={activeClass('artikel')}><Link to="/admin/artikel">Artikel</Link></li>
            <li className={activeClass('gallery')}><Link to="/admin/gallery">Gallery</Link></li>
          </ul>
          <Button style={{ display: 'table', margin: '30px auto' }} color="danger" size="sm" onClick={this.logOut}>
            Logout
          </Button>
        </div>
      </Col>
    );
  }
}

export default SideBarMenu;