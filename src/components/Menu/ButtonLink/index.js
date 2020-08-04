import React from 'react';
import { Button } from './styles';

const ButtonLink = ({ className, href, children }) => {
  return (
    <Button href={href} className={className} >
      {children}
    </Button>
  );
}

export default ButtonLink;
