import React, { useState } from 'react';
import './App.css';
import WishInput from './wishInput';
import WishList from './wishList/wishList';

const initialWishes = [
    {text: 'Learn to play the violin', done: false},
    {text: 'Bicycling', done: true},
    {text: 'Go to the theater', done: false},
]

const App = () => {
    const [wishes, setWishes] = useState(initialWishes);
    return (
        <div className="app">
            <h1>My wishlist App</h1>
            <WishInput onNewWish={wish => setWishes([wish, ...wishes])}/>
            <WishList wishes={wishes} onWishesChange={setWishes}/>
            <button className="wish-clear" type="button" onClick={() => setWishes(wishes.filter(wish => !wish.done))}>Archive done</button>
        </div>
    )
}

export default App;