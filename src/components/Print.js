/* eslint-disable */

import React from 'react';
import ReactToPrint from 'react-to-print';
import Experience from './Experience';

class PrintDocument extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Experience ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PrintDocument;
