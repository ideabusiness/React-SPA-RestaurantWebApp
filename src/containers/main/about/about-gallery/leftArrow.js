import React from 'react';

//css
import '../../../../css/containers/main/about/gallery.css';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.previousSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;
