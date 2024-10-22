import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';



const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      {loading && <Spinner animation="border" role="status" />}
      {!loading && <h1>Welcome to our Ecommerce Store!</h1>}
    </Container>
  );
};

export default Loading;

