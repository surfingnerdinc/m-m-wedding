import React from 'react';
import OneCard from '../components/OneCard';
import OneCardNoAuth from '../components/OneCardNoAuth';


import Bus from '../assets/icons8-bus-100.png';
import Hotel from '../assets/icons8-sleeping-in-bed-100.png';
import Garinutur from '../assets/icons8-suit-100.png';
import Sniadanie from '../assets/icons8-breakfast-100.png'; 


const CardSection = (props) => {
return (
        <div className="w-full py-8 md:py-16 px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <OneCardNoAuth 
                    image={Bus}
                    alt="Transport"
                    title="Transport"
                    button="Po więcej info kliknij tutaj"
                />
                <OneCard 
                    image={Hotel}
                    alt="Zakwaterowanie"
                    title="Zakwaterowanie"
                    button="Sprawdź gdzie śpisz"
                />
                <OneCardNoAuth 
                    image={Sniadanie}
                    alt="Śniadanie"
                    title="Śniadanie"
                    button="Sprawdź szczegóły"
                />
                <OneCardNoAuth 
                    image={Garinutur}
                    alt="Dresscode"
                    title="Dresscode"
                    button="Sprawdź dresscode"
                />

            </div>
        </div>
    );
};

export default CardSection;
