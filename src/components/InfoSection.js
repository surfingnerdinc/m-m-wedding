import GreenButton from "./GreenButton";

const SectionBelow = (props) => {
  return (
    <div className="w-full bg-white pb-14 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <img
            src={props.image}
            alt="/"
            className="w-[500px] mx-auto my-4 rounded-2xl"
          />
        </div>
        <div className="flex gap-1">
          <div className="flex items-center justify-center">
            <div className="p-2">
              {/* <p className="text-[#00df9a] font-bold"> */}
              <p className="text-[#bbaf87] font-bold">{props.headline}</p>
              <h1 className="md:text-3xl sm:text-2xl text-xl py-2">
                {props.title}
              </h1>
              <p>{props.address}</p>
              <a
                href={props.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GreenButton content="Otwórz w Google Maps" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBelow;
