import React, { Component } from "react";
import validate from "../validate";
import { Field, reduxForm, Fields } from "redux-form";
import RenderField from "./RenderField";
import { AgamaDummySelector } from "./AgamaDummySelector";
import { Button, Col, Row, Form } from "reactstrap";
import AlamatRender from "./AlamatRenderfield";
import RadioGroup from "./BooleanSelector";

class FirstForm extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <center>
              <h1>Biodata Klien</h1>
            </center>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <h5>
              <strong style={{ color: "#0061D7" }}>
                {" "}
                <center>IDENTITAS</center>{" "}
              </strong>
            </h5>
            <Field
              name="namaDepan"
              type="text"
              component={RenderField}
              label="Nama Depan"
              placeholder="Nama Depan"
            />
            <Field
              name="namaBelakang"
              type="text"
              component={RenderField}
              label="Nama Belakang"
              placeholder="Nama Belakang"
            />
            <Row>
              <Col md={4}>
                <Field
                  className="inpType"
                  name="agama"
                  component={AgamaDummySelector}
                  label="Agama"
                />
              </Col>
              <Col md={8}>
                <Field
                  name="aliran"
                  type="text"
                  component={RenderField}
                  label="Aliran"
                  placeholder="Aliran"
                />
              </Col>
            </Row>
            <Field
              name="tglLahir"
              type="date"
              component={RenderField}
              label="Tanggal Lahir"
            />
            <Field
              className="inpType"
              component={RadioGroup}
              name="sex"
              required={true}
              options={[
                { title: "Pria", value: "Pria" },
                { title: "Wanita", value: "Wanita" }
              ]}
              label="Jenis Kelamin"
            />
          </Col>
          <Col md={4} xs={12}>
            <h5>
              <strong style={{ color: "#0061D7" }}>
                {" "}
                <center>KONTAK</center>{" "}
              </strong>
            </h5>
            <Field
              name="email"
              type="text"
              component={RenderField}
              label="Email"
              placeholder="Email"
            />
            <Fields
              className="inpType"
              names={["alamat", "alamat2"]}
              component={AlamatRender}
            />
            <Field
              className="inpType"
              name="noTelp"
              type="text"
              component={RenderField}
              label="Nomor"
              placeholder="Nomor Telpon/Hp Anda"
            />
            <Field
              className="inpType"
              name="Asuransi"
              type="text"
              component={RenderField}
              label="Asuransi"
              placeholder="Asuransi Yang dimiliki"
            />
          </Col>
          <Col md={4} xs={12}>
            <h5>
              <strong style={{ color: "#0061D7" }}>
                {" "}
                <center>KONTAK DARURAT</center>{" "}
              </strong>
            </h5>
            <Field
              className="inpType"
              name="namaContactDarurat"
              type="text"
              component={RenderField}
              label="Nama"
              placeholder="Nama Kontak Darurat"
            />
            <Field
              className="inpType"
              name="hubungan"
              type="text"
              component={RenderField}
              label="Kerabat"
              placeholder="Hubungan Kekerabatan"
            />
            <Field
              className="inpType"
              name="noTelpDarurat"
              type="text"
              component={RenderField}
              label="Nomor"
              placeholder="Nomor Telepon/Hp Darurat"
            />
          </Col>
        </Row>
        <Row style={{marginTop:"-60px"}}>
          <Col>
            <center>
              <Button
                color="primary"
                type="submit"
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
})(FirstForm);
