import { FC } from 'react';
import styles from './ScrollAnchor.module.scss';

interface Props {};

const ScrollAnchor: FC<Props> = () => {
  return (
    <div className={styles.anchor} />
  )
}

export default ScrollAnchor;