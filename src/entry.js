import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from './components/Root';

// Client render (optional):
if (typeof document !== 'undefined') {
  // Client render code goes here...
}

/*
 * This is the render function used by the static site generator plugin.
 */
module.exports = function render(locals, callback) {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Root assets={locals.assets} />
  );
  callback(null, `<!DOCTYPE html>${html}`);
};