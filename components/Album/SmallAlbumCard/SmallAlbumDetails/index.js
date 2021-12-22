import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import { useAppStateValue } from '../../../../context/AppProvider';

const SmallAlbumDetails = ({ title, name }) => {
  const [{ windowSize }, dispatch] = useAppStateValue();
  const [aName, setAName] = useState(19);
  const [aTitle, setATitle] = useState(19);

  // set album string length based on window size
  useEffect(() => {
    if (windowSize <= 430) {
      setATitle(10);
      setAName(13);
    } else {
      setAName(19);
      setATitle(19);
    }
    return;
  }, [windowSize]);

  return (
    <div className={styles.albumInfo}>
      <p className={styles.albumName}>
        {`${title.substring(0, aTitle)}${title.length > aTitle ? '...' : ''}`}
      </p>
      <p className={styles.albumArtist}>
        {`${name.substring(0, aName)}${name.length > aName ? '...' : ''}`}
      </p>
    </div>
  );
};

export default SmallAlbumDetails;
