import React from 'react';
import { propTypeCompositionHandler } from 'react-docgen/dist/handlers';
function HelloWorld({ messages }) {
  return <div>Hello World {messages}</div>;
}

HelloWorld.propTypes = {
  messages: PropTypes.string,
};

export default HelloWorld;
