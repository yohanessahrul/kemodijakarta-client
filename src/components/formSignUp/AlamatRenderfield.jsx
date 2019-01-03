import React from 'react';
import { FormGroup, Input, Label, Col } from "reactstrap";

const alamatRender = (fields) => {
    return (
        <FormGroup row>
            <Label sm={2} md={12}>Alamat</Label>
            <Col sm={10} md={12}>
                    <Input {...fields.alamat.input} type="text" placeholder="Nama jalan Dan Nomor" />
                    {fields.alamat.meta.touched && fields.alamat.meta.error &&
                        <span className="errorStyle">{fields.alamat.meta.error}</span>}
                    <Input {...fields.alamat2.input} type="text" placeholder="Kota Dan Provinsi"/>
                    {fields.alamat2.meta.touched && fields.alamat2.meta.error &&
                        <span className="errorStyle">{fields.alamat2.meta.error}</span>}
            </Col>
        </FormGroup>
    )
}

export default alamatRender;