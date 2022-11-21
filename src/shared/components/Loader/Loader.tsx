import React from 'react';

interface LoadingProps {
    loading: boolean,
}
const Loader = ({ loading }: LoadingProps) => {
  return (
    <div>
      {loading && <img src="https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif" alt="loader" />}
    </div>
  );
};

export default Loader;
