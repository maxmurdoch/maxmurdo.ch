import {
    a,
    hh,
} from 'react-hyperscript-helpers'
import styles from './link.css'

const Link = (props) => a({
    className: styles.link,
    ...props,
}, props.children)

export default hh(Link)
