import React, { Component } from "react";
import validate from "../validate";
import { Field, reduxForm } from "redux-form";
import TextareaRender from "./TextareaRender";
import { HomestayDummySelector } from "./AgamaDummySelector";
import { Button, Row, Col, Form } from "reactstrap";
// import RadioGroup from './BooleanSelector'
// import { lainRenderer } from './lainRenderer'

class ThirdForm extends Component {
  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <Form onSubmit={handleSubmit} className="wizardForm">
        <Row>
          <Col>
            <center>
              <h1>Kriteria Perjalanan Medis</h1>
            </center>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <Field name="homestay" component={HomestayDummySelector} label="Pilih Tempat Menginap" />
            <br />
            <div style={{marginLeft:"30px"}}>
              <label htmlFor="fasilitas">Fasilitas :</label>
              <Row>
                <Field
                  name="kamarMandiDalam"
                  id="kamarMandiDalam"
                  component="input"
                  type="checkbox"
                />
                <label
                  htmlFor="kamarMandiDalam"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  Kamar Mandi Dalam{" "}
                </label>
              </Row>
              <Row>
                <Field name="Tv" id="Tv" component="input" type="checkbox" />
                <label
                  htmlFor="Tv"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  Tv Pribadi{" "}
                </label>
              </Row>
              <Row>
                <Field
                  name="wifi"
                  id="wifi"
                  component="input"
                  type="checkbox"
                />
                <label
                  htmlFor="wifi"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  Wifi{" "}
                </label>
              </Row>
              <Row>
                <Field
                  name="perawat"
                  id="perawat"
                  component="input"
                  type="checkbox"
                />
                <label
                  htmlFor="perawat"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  Perawat 24 Jam{" "}
                </label>
              </Row>
              <Row>
                <Field
                  name="alkes"
                  id="alkes"
                  component="input"
                  type="checkbox"
                />
                <label
                  htmlFor="alkes"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  Alat Kesehatan{" "}
                </label>
              </Row>
              <Row>
                <Field
                  name="edukasi"
                  id="edukasi"
                  component="input"
                  type="checkbox"
                />
                <label
                  htmlFor="edukasi"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                >
                  Edukasi Kanker{" "}
                </label>
              </Row>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div style={{marginLeft:"30px"}}>
            <Row>
              <Field
                name="kunjungan"
                id="kunjungan"
                component="input"
                type="checkbox"
              />
              <label
                htmlFor="kunjungan"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Kunjungan Keluarga
              </label>
            </Row>
            <Row>
              <Field
                name="konseling"
                id="konseling"
                component="input"
                type="checkbox"
              />
              <label
                htmlFor="konseling"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                konseling
              </label>
            </Row>
            </div>
            <br />
            <Row>
              <div>
                <label>Kebutuhan Anda Yang Lain</label>
                <br />
                <Field
                  name="lainLain"
                  component={TextareaRender}
                  type="textarea"
                />
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <center>
              <Button
                type="button"
                color="secondary"
                className="previous spasiButton"
                onClick={previousPage}
              >
                KEMBALI
              </Button>
              <Button
                type="submit"
                color="primary"
                className="next spasiButton"
              >
                SELANJUTNYA
              </Button>
            </center>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdForm);
