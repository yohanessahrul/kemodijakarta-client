import React, { Component } from 'react';
import {
  InlineShareButtons
} from 'sharethis-reactjs';

class InlineShareButton extends Component {
  componentDidMount () {
    console.log('URL Saat ini ===> ', window.location.href)
    console.log('payload => ', this.props.dataShare)
  }
  render() {
    const { judul, isi } = this.props.dataShare;
    return (
      <div>
        <InlineShareButtons
          config={{
            alignment: 'left',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'facebook',
              'twitter',
              'whatsapp',
              'messenger',
              'email',
            ],
            padding: 10,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            // show_total: true,
            size: 30,             // the size of each button (INTEGER)
 
            // OPTIONAL PARAMETERS
            // url: '',               // (defaults to current url)
            // image: '',             // (defaults to og:image or twitter:image)
            // description: '',       // (defaults to og:description or twitter:description)
            // title: '',             // (defaults to og:title or twitter:title)
            // message: '',           // (only for email sharing)
            subject: `[Kemodijakarta.com] - ${judul}`,           // (only for email sharing)
            // username: ''           // (only for twitter sharing)
          }}
        />
        <br/>
      </div>
    );
  }
}

export default InlineShareButton;