import {ILatLng} from "./latLng";
import {LatLngBounds} from "leaflet";

export class Location implements ILatLng {
    latitude: number;
    longitude: number;
    address: string;
    viewBounds: LatLngBounds;
}
