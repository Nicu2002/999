import { v4 as uuid } from 'uuid';
import Card from "../components/Card";

const parseData = (data) => {
    return data.map(item =>
        <Card data={item} key={uuid()}/>
    )
}

export default parseData;
