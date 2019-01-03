import React, { Component } from 'react';
import { Collapse, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import CollapseGalleries from '../../components/admin/CollapseGalleries';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createArticleAction } from '../../actions/action.artikel';
import { chooseImageReducer, resetChooseImage } from '../../actions/action.gallery';

class FormArtikelTambah extends Component {
  constructor (props) {
    super (props)
    this.state = {
      editorState: EditorState.createEmpty(),
      judul: '',
      tanggal: '',
      collapse: false,
      loadingImage: false,
      imageUrl: null,
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toogleCollapse = this.toogleCollapse.bind(this);
  }

  toogleCollapse () {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  onEditorStateChange (editorState) {
    this.setState({
      editorState
    })
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault();
    let { judul, imageUrl } = this.state;
    let isi = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    let token = localStorage.getItem('token');

    this.props.createArticleAction(judul, isi, imageUrl, token)
    this.props.resetChooseImage();
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      collapse: false,
      imageUrl: nextProps.state.reducerGalleries.imageChooseForCreateArticle
    })
  }

  render() {
    const { editorState } = this.state;
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Artikel Tambah</h1>
        <Form>
          <FormGroup>
            <Label>Judul</Label>
            <Input type="text" onChange={this.onChange} name="judul"/>
          </FormGroup>
          <FormGroup>
            <Label>Isi</Label>
            <Editor
              style={{  width: '100%', background: 'red'}}
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Pilih/Upload Gambar</Label><br/>
            <Button color="secondary" size="sm" onClick={this.toogleCollapse}>Pilih Gambar</Button>
            {
              (!this.state.imageUrl) ? '' :  
                <Alert color="success" style={{ marginTop: '10px', fontSize: '12px' }}>
                  <b>Gambar terpilih</b> - {this.state.imageUrl}
                </Alert>
            }
            <Collapse isOpen={this.state.collapse}>
              <CollapseGalleries/>
            </Collapse>
          </FormGroup>
          <Button onClick={this.onSubmit} color="primary">Simpan</Button>
        </Form>
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
  chooseImageReducer, createArticleAction, resetChooseImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormArtikelTambah);