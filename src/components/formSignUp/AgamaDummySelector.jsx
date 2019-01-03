import React from 'react';
import {Col,Label} from 'reactstrap'
const agama = [
    'Islam',
    'Kristen',
    'Katolik',
    'Protestan',
    'Hindu',
    'Budha',
    'Konghuchu'
]

const Homstay =[
    'Hotel',
    'Rumah Tapak',
    'Apartemen'
]

const RumahSakit=[
    'RS Kanker Dharmais',
    'RS MRCCC',
    'RS Cipto Mangunkusumo'
]

const jenisBrosur =[
    'Brosur Fisik',
    'Brosur Digital'
]

export const AgamaDummySelector = ({ label,input, meta: { touched, error } }) => (
    <div>
        <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
        <select {...input}>
            <option value="">Agama...</option>
            {agama.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
    </div>
);

export const HomestayDummySelector = ({ label,input, meta: { touched, error } }) => (
    <div>
        <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
        <select {...input}>
            <option value="">Tempat Menginap...</option>
            {Homstay.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
    </div>
);

export const RumahSakitDummySelector = ({ label,input, meta: { touched, error } }) => (
    <div>
        <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
        <select {...input}>
            <option value="">Pilih Rumah Sakit...</option>
            {RumahSakit.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
    </div>
);

export const Brosur = ({ label,input, meta: { touched, error } }) => (
    <div>
        <Label sm={2} md={12}>{label}</Label>
        <Col sm={10} md={12}>
        <select {...input}>
            <option value=''>Jenis Brosur</option>
            {jenisBrosur.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
    </div>
);


