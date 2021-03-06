import React from 'react';
import './SwipeButtons.css';
import { IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
