import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import alertify from 'alertifyjs';
import ModalBodyComponent from '../../components/admin/ModalBodyComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllArticlesAction, deleteArticleAction, changeImageArticleAction } from '../../actions/action.artikel';
import { resetChooseImage } from '../../actions/action.gallery';

class ContentAdminArtikel extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      allArticles: null,
      modal: false,
      id: null,
      imgTerpilih: null
    }
    this.deleteArticle = this.deleteArticle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.saveChoosenImage = this.saveChoosenImage.bind(this);
  }
  componentDidMount () {
    let token = localStorage.getItem('token')
    this.props.getAllArticlesAction(token)
  }

  componentWillReceiveProps (nextProps) {
    let allDataArticle = nextProps.state.reducerArticle.allArticles
    this.setState({
      isLoading: true,
      allArticles: allDataArticle
    });

    let pilihGambar = nextProps.state.reducerGalleries.imageChooseForCreateArticle
    if (pilihGambar !== null) {
      this.setState({ imgTerpilih: pilihGambar })
    }
  }

  deleteArticle (id) {
    let deepThis = this;
    alertify.confirm(
      'Yakin hapus?',
      'Tindakan ini akan menghapus data dan tidak dapat dikembalikan kembali',
      function() {
        deepThis.props.deleteArticleAction(id, localStorage.getItem('token'))
        alertify.success('Anda berhasil menghapus artikel');
      },
      function () {
        alertify.error('Gagal hapus');
      })
  }

  toggle (id) {
    this.setState({
      modal: !this.state.modal,
      id: id
    })
  }

  saveChoosenImage () {
    let { id, imgTerpilih } = this.state;
    let token = localStorage.getItem('token');

    this.setState({ modal: false });
    this.props.changeImageArticleAction(id, imgTerpilih, token);
    this.props.resetChooseImage();
  }

  render() {
    const listArticle = () => {
      if (this.state.isLoading) {
        const loopArticle = this.state.allArticles.map((data, i) => {
          return (
            <tr key={data._id}>
              <td>{ i+1 }</td>
              <td>
                <img style={{ width: '100px', border: 'thin solid #ededed', padding: '5px' }} src={data.img} alt="images"/> <br/>
                <Button size="sm" onClick={() => this.toggle(data._id)} style={{ marginTop: '10px' }} color="primary">Ubah Gambar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>Ubah Gambar</ModalHeader>
                  <ModalBodyComponent id={this.state.id}/>
                  <ModalFooter>
                    <Button onClick={this.saveChoosenImage} color="primary">Pilih</Button><br/>
                    <Button onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </td>
              <td>{data.judul}</td>
              <td>{data.isi.replace(/(<([^>]+)>)/ig,"").substring(0, 200)}...</td>
              <td>{data.createdAt.split('T')[0]}</td>
              <td>{data.view}</td>
              <td>
                <Link style={{ display: 'table', marginBottom: '10px' }} to={`/admin/artikel/edit/${data._id}`}>
                  <Button size="sm"  color="warning">Edit</Button>
                </Link>
                <Button size="sm" color="danger" onClick={() => this.deleteArticle(data._id)}>Delete</Button>
              </td>
            </tr>
          )
        })
        return loopArticle;
      }
    }
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Content Admin Artikel</h1>
        <div style={{ display: 'table', width: '100%', height: '30px', margin: '50px!important', marginBottom: '20px' }}>
          <Link to="/admin/artikel/tambah">
            <Button color="primary">Tambah</Button>
          </Link>
        </div>
        {
          (!this.state.isLoading) ? 
          'Loading..' :
          <Table striped size="sm" hover>
            <thead>
              <tr>
                <td>#</td>
                <td>Gambar</td>
                <td>Judul</td>
                <td>Isi</td>
                <td>Tanggal</td>
                <td>View</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {listArticle()}
            </tbody>
          </Table>
        }
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
  getAllArticlesAction, deleteArticleAction, changeImageArticleAction, resetChooseImage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentAdminArtikel);