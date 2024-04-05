import avatar from '../assets/img_avatar1.png'
import styles from './Card.module.css'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <div className={styles.card}>
        <img className={styles.card_image} src={props.image} alt={props.title + "'s Profile picture"} />
        <h2 className={styles.card_Title}>{props.title}</h2>
        <p className={styles.card_description}>{props.description}</p>
    </div>
  )
}
Card.prototype = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

Card.defaultProps = {
  image: avatar,
  title: "John Doe",
  description: "Lorem ipsum avlo desminumt aprots mismucan."
}

export default Card
