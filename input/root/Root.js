import {
  DOM,
  createElement,
} from 'react';
import About from '../about/About';
import styles from './root.css';

const Root = () => {
  return DOM.div({ className: styles.root }, createElement(About, null));
};

export default Root;
