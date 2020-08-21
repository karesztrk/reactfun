import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  const style = {
    width: `${progress}%`,
  };
  useEffect(() => {
    if (url) {
      setFile(undefined);
    }
  }, [url, setFile]);
  return (
    <div className="progress-bar" style={style} />
  );
};

export default ProgressBar;

