import { Marker, Popup } from "react-leaflet";

import { Link } from "react-router-dom";



function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="flex gap-20">
                    <img src={item.img} alt="" className="w-64 h-48 object-cover rounded-lg" />
                    <div className="textContainer flex flex-col justify-between">
                        <Link to={`/${item.id}`} className="text-blue-500 font-bold">{item.title}</Link>
                        <span className="text-gray-700">{item.bedroom} bedroom</span>
                        <b className="text-gray-900">$ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;
