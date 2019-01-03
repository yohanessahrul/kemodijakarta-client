import React, { Component } from 'react';
import { 
  Form,
  FormGroup,
  Input,
  Button,
  Label,
 } from 'reactstrap';
 
import { connect } from 'react-redux';
import { testAction } from '../actions/action.bukutamu';
import { bindActionCreators } from 'redux';

class FormBukuTamu extends Component {
  constructor(props){
    super(props)
    this.state = {
      nama: '',
      email: '',
      pesan: '',
      namaValid: '',
      emailValid: '',
      pesanValid: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultEmail = regexEmail.test(this.state.email)

    if (this.state.nama !== '') {
      this.setState({ namaValid: '' })
    } else {
      this.setState({ namaValid: 'Harap isikan nama anda.' })
    }

    if (this.state.email !== '') {
      if (resultEmail) {
        this.setState({ emailValid: '' })
      } else {
        this.setState({ emailValid: 'Format email anda salah. Contoh: john@gmail.com' })
      }
    } else {
      this.setState({ emailValid: 'Harap isikan email anda.' })
    }

    if (this.state.pesan !== '') {
      this.setState({ pesanValid: '' })
    } else {
      this.setState({ pesanValid: 'Harap isikan pesan anda.' })
    }

    if (this.state.namaValid === '' && this.state.pesanValid === '' && resultEmail) {
      console.log('semua valid')
      let respawn = {
        nama: this.state.nama,
        email: this.state.email,
        pesan: this.state.pesan,
      }
      console.log('Submit Data => ', respawn)

      this.props.testAction(respawn) // dispatch

      // set state to null again
      this.setState({
        nama: '',
        email: '',
        pesan: ''
      })
    } else {
      console.log('Tidak simpan')
      console.log(`email(${this.state.emailValid}), nama(${this.state.namaValid}), pesan(${this.state.pesanValid}))`)
    }

  }
  render() {
    const { email, nama, pesan, kirim } = this.props.lang.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} noValidate>
          <FormGroup>
            <Label>{nama}</Label>
            <Input className="inputType" type="text" name="nama" placeholder={nama} value={this.state.nama} onChange={this.handleChange} required/>
            <p style={styles.warningValidate}>{this.state.namaValid}</p>
          </FormGroup>
          <FormGroup>
            <Label>{email}</Label>
            <Input className="inputType" type="email" name="email" placeholder={email} value={this.state.email} onChange={this.handleChange} required/>
            <p style={styles.warningValidate}>{this.state.emailValid}</p>
          </FormGroup>
          <FormGroup>
            <Label>{pesan}</Label>
            <Input className="inputType" type="textarea" name="pesan" placeholder={pesan} value={this.state.pesan} onChange={this.handleChange} required/>
            <p style={styles.warningValidate}>{this.state.pesanValid}</p>
          </FormGroup>
          <Button color="primary">{kirim}</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.bukutamu
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  testAction
}, dispatch)

const styles = {
  warningValidate: {
    fontSize: '13px',
    color: 'red'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBukuTamu);