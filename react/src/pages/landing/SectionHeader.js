import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const SectionHeader = ({ title, subtitle, ...rest }) => {
  return (
    <Row className="justify-content-center text-center" {...rest}>
      <Col lg={8} xl={7} xxl={6} className="col-xxl-6">
        <h1 className="fs-2 fs-sm-4 fs-md-5 text-primary fw-bold" style={{letterSpacing: "0.3rem"}}>{title}</h1>
        <p className="lead">{subtitle}</p>
      </Col>
    </Row>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default SectionHeader;
