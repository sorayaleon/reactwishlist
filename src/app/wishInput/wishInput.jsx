import React, { useState } from 'react';
import WishList from '../wishList/wishList';
import propTypes from 'prop-types';

const WishInput = ({onNewWish}) => {
    const [newWishText, setNewWishText] = useState('');
    return(
    <fieldset className="wish-input">
        <legend className="wish-input__label">New wish</legend>
        <input
            className="wish-input__field"
            placeholder="Enter your wish here"
            value={newWishText}
            onChange={e => setNewWishText(e.target.value)}
            onKeyUp={(e) => {
                if(e.key === 'Enter' && newWishText.length) {
                    onNewWish({done: false, text: newWishText});
                    setNewWishText('');
                }
            }}/>
    </fieldset>
);
}
WishInput.propTypes = {
    onNewWish: propTypes.func,
}

WishInput.defaultProp = {
    onNewWish: () => {},
}

export default WishInput;