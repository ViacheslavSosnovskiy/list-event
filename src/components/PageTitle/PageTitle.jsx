import PropTypes from 'prop-types'
import s from './PageTitle.module.css'

export const PageTitle = ({text}) => {
    return <h1 className={s.title}>{text}</h1>
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}