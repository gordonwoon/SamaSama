import React from 'react';

export const Page7 = props => {
  setTimeout(() => {
    props.history.push('/page8');
  }, 5000)
  return null;
}
