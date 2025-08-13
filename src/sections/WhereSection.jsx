import React from "react";
import Kosciol from "../assets/k.jpeg";
import Sala from "../assets/hdz3.jpg";
import InfoSection from "../components/InfoSection";

const WhereSection = () => {

    return (
        <div className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-wedding text-center my-8">
                Kiedy i Gdzie?
            </h1>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-wedding text-center my-8">
                Godzina 14:00
            </h1>

            <InfoSection image={Kosciol}
                headline="CEREMONIA ŚLUBU"
                title="Kościół pw. Świętego Stanisława Biskupa i Męczennika"
                address="Przylesie 37, 49-351 Przylesie, Polska"
                mapLink="https://www.google.com/maps/search/?api=1&query=Kościół pw. św. Stanisława Biskupa, SPO Przylesie, 37,49-351, 49-200 Przylesie, Polska" />

            <InfoSection image={Sala}
                headline="ZABAWA WESELNA"
                title="Hacjenda Dolina Żab"
                address="Dębniki 38, 57-100 Dębniki, Polska"
                mapLink="https://www.google.com/maps/search/?api=1&query=Hacjenda Dolina Żab, Dębniki 38,57-100 Dębniki, Polska" />
        </div>
    );
};

export default WhereSection;
