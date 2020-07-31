import React from 'react';
import { Link } from 'react-router-dom';

function ErrorComponent() {

    return (<div>Error Ocurred. <Link to="/login">Go back!</Link></div>)
}

export default ErrorComponent