import React from 'react';
import Fade from 'react-reveal/Fade'

const FadeTitle = ({children, animation}) => {
  return (
    <Fade top>
      {children}
    </Fade>
  )
}

export default FadeTitle