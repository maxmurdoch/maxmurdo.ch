import {
  DOM,
  createElement,
} from 'react';
import Image from '../image/Image';
import styles from './about.css';
import photo from '../images/max.jpg';

const About = () => {
  const first = DOM.p({className: styles.text}, `Hello, I’m Max.`);
  const education = DOM.a({className: styles.link, href: 'https://www.cam.ac.uk/'}, 'education');
  const government = DOM.a({className: styles.link, href: 'https://unido.org'}, 'government');
  const finance = DOM.a({className: styles.link, href: 'https://www.gocardless.com'}, 'finance');
  const second = DOM.p({className: styles.text}, `I’ve worked as a designer and a programmer in `,
                       education,
                       `, `,
                       government,
                       ` and `,
                       finance,
                      `.`);
  const third = DOM.p({className: styles.text}, `As an independent I help clients make their digital products simple, clear and useful.`);
  const fourth = DOM.p({className: styles.text},
                       `If you’d like to talk about working together, please `,
                       DOM.a({className: styles.link, href: 'mailto:max@maxmurdo.ch?subject=Work enquiry&body=Hi Max! 👋'}, `get in touch`),
                       `.`
                      );
  const image = createElement(Image, {
    position: 'right',
    src: photo,
  });

  return DOM.section(
    null,
    image,
    first,
    second,
    third,
    fourth,
  );
};

export default About;
