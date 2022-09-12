
const Card = ({data: {title, link, img, price, details: {year, cutie, cylinders, fuel}}}) => {

    return (
        <div className="flex border border-black mb-[20px] w-[30vw] px-[25px] py-[15px]">
            <img src={img}
                 alt={title}
                 className="w-[150px]"
            />
            <div className="flex flex-col justify-around ml-[15px]">
                <a href={link}
                   className="text-[20px] font-bold"
                >
                    {title}
                </a>
                <p className="text-red-700 font-bold">{price}</p>
                <div>{year} | {cylinders} | {cutie} | {fuel}</div>
            </div>
        </div>
    );
};

export default Card;
