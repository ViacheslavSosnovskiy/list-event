import PropTypes from 'prop-types'

import {FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock} from 'react-icons/fa'
import { formatEventDuration, formatEventStart } from '../../utils'
import {iconSize} from '../../constants'
import {Card, EventName, Info, Chip} from './Event.styled'
import s from './Event.module.css'

export const Event = ({name, location, speaker, type, start, end}) => {
    const formatedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)

    return (
        <Card>
            <EventName>{name}</EventName>
            <Info>
                <FaMapMarkerAlt className={s.icon} size={iconSize.sm}/>
                {location}
            </Info>
            <Info>
                <FaUserAlt className={s.icon} size={iconSize.sm} />
                {speaker}
            </Info>
            <Info>
                <FaCalendarAlt className={s.icon} size={iconSize.sm} />
                {formatedStart}
            </Info>
            <Info>
                <FaClock className={s.icon} size={iconSize.sm} />
                {duration}
            </Info>
            {/* className={`${s.chip} ${s[type]}`} */}
            <Chip>{type}</Chip>
        </Card>
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