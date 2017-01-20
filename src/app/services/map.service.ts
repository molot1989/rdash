import {Injectable} from "@angular/core";
import {Location} from "../models/location";
import {Map} from "leaflet";
import { OnInit,OnDestroy } from "@angular/core";


@Injectable()
export class MapService {
    public map: Map;
    public baseMaps: any;

    constructor() {
    }

    disableMouseEvent(elementId: string) {
        let element = <HTMLElement>document.getElementById(elementId);

        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    };
}
