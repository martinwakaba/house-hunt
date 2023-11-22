import React from 'react';

const CompanyInfo = ({ email }) => {
  return (
    <div>
      <h2>Company Description</h2>
      <p>House hunt is a premier house selling company in Kenya that is dedicated to provide services to locate a suitable home .</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default CompanyInfo;
