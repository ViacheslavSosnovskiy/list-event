import PropTypes from 'prop-types'

import {FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from 'react-icons/fa'
import { formatEventDuration, formatEventStart } from '../../utils'
import {iconSize} from '../../constants'
import s from './Event.module.css'

export const Event = ({name, location, speaker, type, start, end}) => {
    const formatedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)

    return (
        <div className={s.event}>
            <h2 className={s.title}>{name}</h2>
            <p className={s.info}>
                <FaMapMarkerAlt className={s.icon} size={iconSize.sm}/>
                {location}
            </p>
            <p className={s.info}>
                <FaUserAlt className={s.icon} size={iconSize.sm} />
                {speaker}
            </p>
            <p className={s.info}>
                <FaCalendarAlt className={s.icon} size={iconSize.sm} />
                {formatedStart}
            </p>
            <p className={s.info}>
                <FaClock className={s.icon} size={iconSize.sm} />
                {duration}
            </p>
            <span className={`${s.chip} ${s[type]}`}>{type}</span>
        </div>
    )
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,

}