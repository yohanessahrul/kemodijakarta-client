import React, { Component } from "react";
import validate from "../validate";
import { Field, reduxForm } from "redux-form";
import RenderField from "./RenderField";
import { Button, Row, Col, Form } from "reactstrap";
import RadioGroup from "./BooleanSelector";

class SecondForm extends Component {
  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <Form onSubmit={handleSubmit} className="wizardForm">
        <Row>
          <Col>
            <center>
              <h1>Kondisi Kesehatan</h1>
            </center>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <Field
              name="jenisKanker"
              type="text"
              component={RenderField}
              label="Kanker"
              placeholder="Jenis Kanker"
            />
          </Col>
          <Col md={6} xs={12}>
            <Field
              className="inpType"
              component={RadioGroup}
              name="stadium"
              required={true}
              options={[
                { title: "1", value: "1" },
                { title: "2", value: "2" },
                { title: "3", value: "3" },
                { title: "4", value: "4" }
              ]}
              label="Stadium"
            />
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
})(SecondForm);
