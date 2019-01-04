import React, { Component } from 'react';
import {
  InlineShareButtons
} from 'sharethis-reactjs';

class InlineShareButton extends Component {
  componentDidMount () {
    console.log('INLINE SHARE BUTTON LOG ==> ', this.props.dataShare);
  }
  render() {
    const { judul, isi, img } = this.props.dataShare;
    return (
      <div>
        {/* <h1>INLINE SHARE BUTTON</h1> */}
        <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'linkedin',
              'messenger',
              'facebook',
              'twitter'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,
            size: 40,             // the size of each button (INTEGER)
 
            // OPTIONAL PARAMETERS
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: img,  // (defaults to og:image or twitter:image)
            description: isi.replace(/(<([^>]+)>)/ig,"").substring(0, 200),       // (defaults to og:description or twitter:description)
            title: judul,            // (defaults to og:title or twitter:title)
            message: isi.replace(/(<([^>]+)>)/ig,""),     // (only for email sharing)
            subject: judul,  // (only for email sharing)
            username: '@congoranes' // (only for twitter sharing)
          }}
        />
      </div>
    );
  }
}

export default InlineShareButton;