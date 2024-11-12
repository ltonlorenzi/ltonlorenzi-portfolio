import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <FadeLoader color="#4B8F8C" loading={true} />
    </div>
  );
};

export default Spinner;
