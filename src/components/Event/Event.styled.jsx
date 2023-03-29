import styled from '@emotion/styled'

export const Card = styled.div`
    position: relative;
    border: 2px dashed black;
    padding: 8px;
    border-radius: 4px;
`
export const EventName = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`
export const Info = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 8px;
    color: rgb(179, 173, 171);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;
`
export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    // background-color: black;
    color: white;

    background-color: ${props => {
        switch(props.type) {
            case 'free':
                return 'rgb(98, 180, 98)';
            case 'paid':
                return 'rgb(123, 123, 236)';
            case 'vip':
                return 'rgb(230, 102, 102)';
            default:
                return '#000'

        }
    }}
`
// background-image: ${props => `url(props.img)`};