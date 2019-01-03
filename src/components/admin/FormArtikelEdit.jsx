import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticleByIdAction, changeArticleByIdAction } from '../../actions/action.artikel';

class FormArtikelEdit extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      id: null,
      judul: null,
      editorState: EditorState.createEmpty(),
      img: null
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount () {
    let id = window.location.pathname.split('/')[4];
    this.props.getArticleByIdAction(id, localStorage.getItem('token'))
  }

  componentWillReceiveProps (nextProps) {
    const { _id, judul, isi, img } = nextProps.state.reducerArticle.readArticle;
    const blockFromHtml = htmlToDraft(isi);
    const { contentBlocks, entityMap } = blockFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorStates = EditorState.createWithContent(contentState);

    this.setState({
      isLoading: true,
      id: _id,
      judul: judul,
      editorState: editorStates,
      img: img
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
    let { id, judul, editorState } = this.state;
    let isiConvert = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.props.changeArticleByIdAction(id, localStorage.getItem('token'), judul, isiConvert);
  }

  render() {
    const { isLoading, judul, editorState, img } = this.state;
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Edit Artikel</h1>
        <Form>
          <FormGroup>
            <Label>Judul</Label>
            <Input name="judul" onChange={this.onChange} value={ (isLoading) ? judul : 'Loading...'}/>
          </FormGroup>
          <FormGroup>
            <Label>Isi</Label>
            <Editor
              style={{ width: '100%', background: 'red' }}
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Gambar</Label>
            {
              (!img) ? '' :
                <Alert color="secondary" style={{ marginTop: '10px', fontSize: '12px' }}>
                  <b>Gambar terpilih</b> - {img}
                </Alert>
            }
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
  getArticleByIdAction, changeArticleByIdAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormArtikelEdit);