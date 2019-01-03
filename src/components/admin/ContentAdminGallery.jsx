import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllGaleriesAction } from '../../actions/action.gallery';

class ContentAdminGallery extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      allGalleries: null,

    }
  }

  componentDidMount () {
    let token = localStorage.getItem('token');
    this.props.getAllGaleriesAction(token);
  }

  componentWillReceiveProps (nextProps) {
    let dataGalleries = nextProps.state.reducerGalleries.allGalleries
    console.log('Receive props => ', dataGalleries)
    this.setState({
      isLoading: true,
      allGalleries: nextProps.state.reducerGalleries.allGalleries,
    })
  }

  render() {
    const listGalleries = () => {
      if (this.state.isLoading) {
        const loopGalleries = this.state.allGalleries.map((data, i) => {
          return (
            <tr key={data._id}>
              <td>{i+1}</td>
              <td>
                <img style={{ width: '100px', border: 'thin solid #ededed', padding: '5px' }} src={data.img} alt="images"/>
              </td>
              <td>{data.desc}</td>
              <td>
                <Link to={'/admin/gallery/delete/id'}>
                  <Button size="sm" color="danger">Delete</Button>
                </Link>
              </td>
            </tr>
          )
        })
        return loopGalleries;
      }
    }
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Content Admin Gallery</h1>
        <div style={{ display: 'table', width: '100%', height: '30px', margin: '50px!important', marginBottom: '20px' }}>
          <Link to="/admin/gallery/tambah">
            <Button color="primary">Tambah</Button>
          </Link>
        </div>
        {/* <div style={{ width: '100%', height: '300px', background: 'red' }} className="daftarImage">
          <ul>
            <li>
              <img src="images.jpg" alt="images"/>
            </li>
          </ul>
        </div> */}
        <Table>
          <thead>
            <tr>
              <td>~</td>
              <td>Image</td>
              <td>Keterangan</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {listGalleries()}
          </tbody>
        </Table>
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
  getAllGaleriesAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentAdminGallery);