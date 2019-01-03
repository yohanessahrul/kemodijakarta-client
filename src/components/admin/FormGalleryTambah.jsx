import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createGalleryAction } from '../../actions/action.gallery';

class FormGalleryTambah extends Component {
  constructor (props) {
    super (props)
    this.state = {
      desc: null,
      uploadImage: null
    }
    this.onChange = this.onChange.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount () {
    
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFiles (e) {
    this.setState({ uploadImage: e.target.files[0] })
  }

  onSubmit (e) {
    e.preventDefault();
    let { desc, uploadImage } = this.state;

    let formData = new FormData();
    formData.append('desc', desc)
    formData.append('img', uploadImage)

    this.props.createGalleryAction(formData);
  }

  render() {
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Gallery Tambah</h1>
        <Form encType="application/x-www-form-urlencoded">
          <FormGroup>
            <Label>Keterangan Gambar</Label>
            <Input stype="text" name="desc" onChange={this.onChange}/>
          </FormGroup>
          <FormGroup>
            <Input type="file" name="image" onChange={this.handleFiles}/>
          </FormGroup>
          <Button onClick={this.onSubmit}>Simpan</Button>
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
  createGalleryAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormGalleryTambah);