import React from 'react';
import Card from './Card';

// const Cardlist = ({ robots }) => {

//     const cardsArray = robots.map((user, i) => {
//         //keys are a unique constant identifier for each card
//         return (
//             <Card 
//                 key={i}
//                 name={robots[i].name} 
//                 email={robots[i].email} 
//                 id={robots[i].id}
//                 />
//         )
//     })
//     return (
//         <div>
//             {cardsArray}
//         </div>
//     )
// }

const Cardlist = ({ robots }) => {

    return (
        <div>
            {
                robots.map((user, i) => {
                    //keys are a unique constant identifier for each card
                    return (
                        <Card 
                            key={i}
                            name={robots[i].name} 
                            email={robots[i].email} 
                            id={robots[i].id}
                            />
                    )
                })
            }
        </div>
    )
}

export default Cardlist;