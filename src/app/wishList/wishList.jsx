import React from 'react';
import PropTypes from 'prop-types';
import WishItem from '../wishItem/wishItem';

const WishList = ({wishes, onWishesChange}) => (
    <ul className="wish-list">
        {wishes.map(({text, done}, i) => (
            <WishItem text={text} done={done} id={`wish${i}`} key={text} onDoneChange={(value) => {
                const updatedWishes = [...wishes];
                updatedWishes[i].done = value;
                onWishesChange(updatedWishes);
            }} />

            // <li key={text} className={`wish-list__item ${done ? 'wish-list__item--done' : ''} `}>
            //     <label htmlFor={`wish${i}`}>
            //         <input id={`wish${i}`} type="checkbox" checked={done}/>
            //         {text}
            //     </label>
            // </li>
        ))}
    </ul>
);

WishList.PropTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
    onWishesChange: PropTypes.func,
}

WishList.defaultProps = {
    wishes: [],
    onWishesChange: () => {}
}

export default WishList;