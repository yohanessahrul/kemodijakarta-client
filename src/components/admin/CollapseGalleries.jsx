import React, { Component } from 'react';
// import alertify from 'alertifyjs';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getAllGaleriesAction, chooseImageReducer } from '../../actions/action.gallery';

class CollapseGalleries extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      allGalleries: null
    }
    this.chooseImage = this.chooseImage.bind(this)
  }

  chooseImage (imageUrl) {
    this.props.chooseImageReducer(imageUrl)
  }

  componentDidMount () {
    this.props.getAllGaleriesAction();
  }

  componentWillReceiveProps (nextProps) {
    const dataGalleries = nextProps.state.reducerGalleries.allGalleries;
    this.setState({
      isLoading: true,
      allGalleries: dataGalleries
    })
  }

  render() {
    const listGalleries = () => {
      const loopGalleries = this.state.allGalleries.map((data, i) => {
        return (
          <li key={data._id} onClick={() => this.chooseImage(data.img)}>
            <img src={data.img} alt={data.img}/>
          </li>
        )
      })
      return loopGalleries
    }
    return (
      <div className="galleriesCollapseForm">
        {
          (!this.state.isLoading) ? 'Loading ... ' : 
          <ul>
            {listGalleries()}
            <li>
              <p>Tambah Gambar / Upload</p>
            </li>
            <div className="clear"></div>
          </ul>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(CollapseGalleries);