import React from 'react';

import Map from 'components/Map';
import Form from 'components/Form';

const contact = props => {
    return (
      <>
        <Form scroll={props.scroll} />
        <Map breakpoint={props.breakpoint} />
      </>
    );
}

export default contact;