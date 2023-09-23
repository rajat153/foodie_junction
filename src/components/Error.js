import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
    const err = useRouteError();

  return (
    <div>
        <h1>opps Something went wrong</h1>
        <h2>{err.status + ": " + err.statusText}</h2>
    </div>
  )
}

export default Error