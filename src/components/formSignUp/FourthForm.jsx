import React, { Component } from "react";
import validate from "../validate";
import { Field, reduxForm } from "redux-form";
import { RumahSakitDummySelector, Brosur } from "./AgamaDummySelector";
import renderField from "./RenderField";
import {DaftarForm} from '../../actions/DaftarForm'
import { Button, Col, Row, Form } from "reactstrap";
import BudgetRender from "./BudgetRender";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class FortForm extends Component {

  submit = values => {
    // console.log(values)
   this.props.DaftarForm(values)
  };
  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.submit)} className="wizardForm">
        <Row>
          <Col>
            <center>
              <h1>Kriteria Perjalanan Medis</h1>
            </center>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <Field
              name="jadwalTreatment"
              component={renderField}
              type="number"
              label="Durasi Terapi"
              placeholder="Durasi Terapi Dalam Hari"
            />
            <Field
              name="tanggalMulai"
              type="date"
              component={renderField}
              label="Mulai Terapi"
            />
            <Field
              name="tanggalSelesai"
              type="date"
              component={renderField}
              label="Selesai Terapi"
            />
            <Field
              name="asalKota"
              type="text"
              component={renderField}
              label="Kota Asal"
              placeholder="Kota Asal Anda "
            />
            <Field
              name="datangDengan"
              type="text"
              component={renderField}
              placeholder="Metoda Kedatangan,contoh:Pesawat,Kereta,dll"
              label="Kendaraan"
            />
          </Col>
          <Col md={6} xs={12}>
              <Field
                className="inpType"
                name="rumahSakit"
                component={RumahSakitDummySelector}
                label="Pilih Rumah Sakit"
              />
              <Field name="brosur" component={Brosur} label="Mendapatkan Informasi Kemodijakarta Dari:" />
            <Field
              name="kodeBrosur"
              component={renderField}
              label="Kode"
              type="text"
              placeholder="Kode Brosur Digital/Fisik"
            />
            <br />
            <Field
              className="inpType"
              name="budget"
              component={BudgetRender}
              type="number"
              label="Budget Anda"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <center>
              <Button
                style={{ paddingRight: "10px" }}
                type="button"
                color="secondary"
                className="previous spasiButton"
                onClick={previousPage}
              >
                KEMBALI
              </Button>
              <Button
                style={{ paddingLeft: "10px" }}
                type="submit"
                className="spasiButton"
                color="success"
                disabled={pristine || submitting}
              >
                SELESAI
              </Button>
            </center>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    daftar: state.DaftarForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    DaftarForm
  }, dispatch)
}

FortForm = connect(mapStateToProps,mapDispatchToProps)(FortForm)

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FortForm)
