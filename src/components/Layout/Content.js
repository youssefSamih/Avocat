import React from 'react';
import { Container } from 'semantic-ui-react';

const Content = ({ tag: Tag, className, ...restProps }) => {
  return (
    <Tag className={className} {...restProps} />
  )
}

Content.defaultProps = {
  tag: Container
}

export default Content
