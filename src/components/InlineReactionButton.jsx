import React, { Component } from 'react';
import {
  InlineReactionButtons
} from 'sharethis-reactjs';

class InlineReactionButton extends Component {
  render() {
    return (
      <div style={{ background: 'white' }}>
        <InlineReactionButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            enabled: true,        // show/hide buttons (true, false)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            padding: 12,          // padding within buttons (INTEGER)
            reactions: [          // which reactions to include (see REACTIONS)
              'slight_smile',
              'heart_eyes',
              'laughing',
              'astonished',
              'sob',
              'rage'
            ],
            size: 48,             // the size of each button (INTEGER)
            spacing: 8,           // the spacing between buttons (INTEGER)
 
            // OPTIONAL PARAMETERS
            url: window.location.href // (defaults to current url)
          }}
        />
      </div>
    );
  }
}

export default InlineReactionButton;