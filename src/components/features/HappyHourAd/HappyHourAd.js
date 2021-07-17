import React from 'react';
import PropTypes from 'prop-types';

import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
    constructor() {
        super();
        setInterval(() => this.forceUpdate(), 1000);
    }
    getCountdownTime() {
        const currentTime = new Date();
        const nextNoon = new Date(
            Date.UTC(
                currentTime.getUTCFullYear(),
                currentTime.getUTCMonth(),
                currentTime.getUTCDate(),
                12,
                0,
                0,
                0
            )
        );
        if (currentTime.getUTCHours() >= 12) {
            nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
        }
        return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
    }

    render() {
        return (
            <div className={styles.component}>
                <h3 className={styles.title}>{this.props.description}</h3>
                <div className={styles.promoDescription}>
                    <div className="promoTime">{this.getCountdownTime()}</div>
                </div>
            </div>
        );
    }
}
HappyHourAd.propTypes = {
    description: PropTypes.string,
};
export default HappyHourAd;