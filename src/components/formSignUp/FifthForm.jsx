import React, { Component } from 'react'
import history from '../../history'
import { Container, Table, Col, Row, Button } from 'reactstrap'
import {reduxForm,reset} from 'redux-form'

class FifthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            biodata: {
                namaDepan: '',
                namaBelakang: '',
                tglLahir: '',
                email: '',
                agama: '',
                aliran: '',
                sex: '',
                alamat: '',
                alamat2: '',
                noTelp: '',
                Asuransi: '',
                namaContactDarurat: '',
                hubungan: '',
                noTelpDarurat: ''
            },
            kesehatan: {
                jenisKanker: '',
                stadium: ''
            },
            fasilitas: {
                homestay: '',
                kamarMandiDalam: undefined,
                Tv: undefined,
                wifi: undefined,
                perawat: undefined,
                alkes: undefined,
                edukasi: undefined,
                kunjungan: undefined,
                konseling: undefined,
                lainLain: ''
            },
            budget: {
                jadwalTreatment: '',
                tanggalMulai: '',
                tanggalSelesai: '',
                asalKota: '',
                datangDengan: '',
                rumahSakit: '',
                brosur:'',
                kodeBrosur:'',
                budget: ''
            },
        }
    }
    componentDidMount() {
        if (!localStorage.getItem('formUser')) {
            history.push('/')
        }
        const dataUser = JSON.parse(localStorage.getItem('formUser'))
        // console.log(dataUser)
        const bio = {
            namaDepan: dataUser.namaDepan,
            namaBelakang: dataUser.namaBelakang,
            tglLahir: dataUser.tglLahir,
            email: dataUser.email,
            agama: dataUser.agama,
            aliran: dataUser.aliran,
            sex: dataUser.sex,
            alamat: dataUser.alamat,
            alamat2: dataUser.alamat2,
            noTelp: dataUser.noTelp,
            Asuransi: dataUser.Asuransi,
            namaContactDarurat: dataUser.namaContactDarurat,
            hubungan: dataUser.hubungan,
            noTelpDarurat: dataUser.noTelpDarurat
        }
        const kes = {
            jenisKanker: dataUser.jenisKanker,
            stadium: dataUser.stadium
        }
        const fas = {
            homestay: dataUser.homestay,
            kamarMandiDalam: dataUser.kamarMandiDalam,
            Tv: dataUser.Tv,
            wifi: dataUser.wifi,
            perawat: dataUser.perawat,
            alkes: dataUser.alkes,
            edukasi: dataUser.edukasi,
            kunjungan: dataUser.kunjungan,
            konseling: dataUser.konseling,
            hiburan: dataUser.hiburan,
            lainLain: dataUser.lainLain
        }
        const bud = {
            jadwalTreatment: dataUser.jadwalTreatment,
            tanggalMulai: dataUser.tanggalMulai,
            tanggalSelesai: dataUser.tanggalSelesai,
            asalKota: dataUser.asalKota,
            datangDengan: dataUser.datangDengan,
            rumahSakit: dataUser.rumahSakit,
            brosur:dataUser.brosur,
            kodeBrosur:dataUser.kodeBrosur,
            budget: dataUser.budget
        }
        this.setState({
            biodata: bio,
            kesehatan: kes,
            fasilitas: fas,
            budget: bud,
        })
    }

    BackToHome() {
        localStorage.clear()
        history.push('/')
    }

    render() {
        const apagitu = (kamarMandiDalam,Tv,wifi,perawat,alkes,edukasi,kunjungan,konseling) =>{
            let fasilitasStr=[]
            if(kamarMandiDalam === true){
                fasilitasStr.push('Kamar Mandi Dalam')
            }
            if(Tv === true){
                fasilitasStr.push('Tv')
            }
            if(wifi === true){
                fasilitasStr.push('wifi')
            }
            if(perawat === true){
                fasilitasStr.push('perawat 24 Jam')
            }
            if(alkes === true){
                fasilitasStr.push('Alat Kesehatan')
            }
            if(edukasi === true){
                fasilitasStr.push('Edukasi Kanker')
            }
            if(kunjungan === true){
                fasilitasStr.push('Kunjungan Keluarga')
            }
            if(konseling === true){
                fasilitasStr.push('Konseling/Siraman Rohani')
            }
            return fasilitasStr.join(', ')
        }
        const { biodata, kesehatan, fasilitas, budget } = this.state
        const {kamarMandiDalam,Tv,wifi,perawat,alkes,edukasi,kunjungan,konseling} = fasilitas
        return (
            <Container>
                <center><strong>
                    <h5 style={{ fontFamily: "time" }}>Terima kasih untuk melengkapi informasi rencana perjalanan medis anda.<br /> Tim Kemodijakarta akan memproses dan menghubungi anda untuk langkah selanjut-nya</h5>
                </strong></center>
                <div>
                    <Row>
                        <Col>
                            <div>
                                <Table size="sm" bordered>
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><center>Biodata Klien</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Nama Depan</td>
                                            <td>{biodata.namaDepan}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Nama Belakang</td>
                                            <td>{biodata.namaBelakang}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Tanggal Lahir</td>
                                            <td>{biodata.tglLahir}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Email</td>
                                            <td>{biodata.email}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Agama</td>
                                            <td>{biodata.agama}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Aliran</td>
                                            <td>{biodata.aliran}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Jenis Kelamin</td>
                                            <td>{biodata.sex}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Alamat</td>
                                            <td>{biodata.alamat}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Alamat2</td>
                                            <td>{biodata.alamat2}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Nomor Kontak/Hp</td>
                                            <td>{biodata.noTelp}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Asuransi</td>
                                            <td>{biodata.Asuransi}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Nama Dari Kontak Darurat</td>
                                            <td>{biodata.namaContactDarurat}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Hubungan Kekerabatan dengan {biodata.namaContactDarurat}</td>
                                            <td>{biodata.hubungan}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Nomor Kontak Darurat ({biodata.namaContactDarurat})</td>
                                            <td>{biodata.noTelpDarurat}</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Table size="sm" bordered style={{ width: "90%" }}>
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><center>Kondisi Kesehatan Klien</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jenis Kanker</td>
                                            <td>{kesehatan.jenisKanker}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Stadium</td>
                                            <td>{kesehatan.stadium}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table size="sm" bordered style={{ width: "90%" }}>
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><center>Fasilitas Perjalanan</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jenis Penginapan</td>
                                            <td>{fasilitas.homestay}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Fasilitas</td>
                                            <td>
                                                {
                                                    apagitu(kamarMandiDalam,Tv,wifi,perawat,alkes,edukasi,kunjungan,konseling)
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        {
                                            (fasilitas.lainLain === '') ?
                                                <tr>


                                                </tr>
                                                : <tr>
                                                    <td>Kebutuhan Lain</td>
                                                    <td>{fasilitas.lainLain}</td>
                                                </tr>
                                        }
                                    </tbody>
                                </Table>
                                <Table size="sm" bordered style={{ width: "90%" }}>
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><center>Budget Perjalanan Medis</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lama Terapi Dalam Hari</td>
                                            <td>{budget.jadwalTreatment}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Tanggal Mulai Terapi</td>
                                            <td>{budget.tanggalMulai}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Tanggal Selesai Terapi </td>
                                            <td>{budget.tanggalSelesai}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Kota Asal</td>
                                            <td>{budget.asalKota}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Metode Kedatangan Ke Jakarta</td>
                                            <td>{budget.datangDengan}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Rumah Sakit Tempat Terapi</td>
                                            <td>{budget.rumahSakit}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Jenis Brosur</td>
                                            <td>{budget.brosur}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Kode Brosur</td>
                                            <td>{budget.kodeBrosur}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>Budget (Dalam Juta)</td>
                                            <td>Rp.{budget.budget}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <center>
                                <Button onClick={this.BackToHome} color="success">KEMBALI KE HALAMAN UTAMA</Button>
                            </center>
                        </Col>

                    </Row>
                </div >
            </Container >
        )
    }
}

const afterSubmit = (result,dispatch) => dispatch(reset('wizard'))
export default reduxForm({
    form:'wizard',
    onSubmitSuccess:afterSubmit
})(FifthForm)