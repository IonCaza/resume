/* eslint-disable */

import React from 'react';
import ReactToPrint from 'react-to-print';
import Content from './Content';

class PrintDocument extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Content ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PrintDocument;
