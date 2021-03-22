import React, {useState, useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import Elon from './images/Elon.jpg';
import Jeff from './images/Jeff.jpg';
import axios from "./axios"

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
        
    }, []);
    console.log(people)
    const swiped = (direction, nameToDelete) => {
        console.log('removing' + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name+'left the screen');
    }
        return (
            <div className="tinderCards">
                <div className="tinderCards__cardContainer">
                    {people.map(person =>(
                        <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']} onSwipe={(dir)=>swiped(dir, person.name)}>
                            <div className="card" href={`${person.imgUrl}`}>
                                <img src="http://www.gettyimages.in/detail/464172224" alt=""/>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>
            </div>
        
    );
}

export default TinderCards;