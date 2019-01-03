import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllGaleriesAction, chooseImageReducer } from '../../actions/action.gallery';

class ModalBodyComponent extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      allGalleries: null,
      id: null,
      imageTerpilih: null,
    }
    this.chooseImage = this.chooseImage.bind(this);
  }

  componentDidMount () {
    let id = this.props.id
    this.setState({ id: id })
    this.props.getAllGaleriesAction();
  }

  componentWillReceiveProps (nextProps) {
    const dataGallery = nextProps.state.reducerGalleries.allGalleries;
    this.setState({
      isLoading: true,
      allGalleries: dataGallery
    })
  }

  chooseImage (urlImage) {
    this.setState({
      imageTerpilih: urlImage
    })
    this.props.chooseImageReducer(urlImage);
  }

  render() {
      const listImageGallery = () => {
        if (this.state.isLoading) {
          // eslint-disable-next-line
          const loopGallery = this.state.allGalleries.map((data) => {
            let deepThis = this;
            if (this.state.imageTerpilih === null || data.img !== this.state.imageTerpilih) {
              return (
                <li key={data._id} onClick={() => deepThis.chooseImage(data.img)}>
                  <img src={data.img} alt={data.img}/>
                </li>
              )
            } else {
              if (data.img === this.state.imageTerpilih) {
                return (
                  <li key={data._id} onClick={() => deepThis.chooseImage(data.img)} style={{ border: '2px solid #66d4cf' }}>
                    <img src={data.img} alt={data.img}/>
                  </li>
                )
              }
            }
          })
          return loopGallery;
        }
    }
    return (
      <div>
        <ModalBody>
          <div className="modalGalleryList">
            <ul>
              {listImageGallery()}
              <div className="clear"></div>
            </ul>
          </div>
        </ModalBody>
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
  getAllGaleriesAction, chooseImageReducer
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalBodyComponent);