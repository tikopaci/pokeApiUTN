import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
    return (
        <Spinner animation="border" variant="danger" role="status" className="align-items-center">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}