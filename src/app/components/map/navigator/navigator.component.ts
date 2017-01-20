import { Component, OnInit } from "@angular/core";
import { GeocodingService } from "../../../services/geocoding.service";
import { MapService } from "../../../services/map.service";
import { Location } from "../../../models/location";
import { Map } from "leaflet";

@Component({
  selector: "navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.scss"]
})
export class NavigatorComponent implements OnInit {
  address: string;

  private map: Map;

  constructor(private geocoder: GeocodingService, private mapService: MapService) {
    this.address = "";
  }

  ngOnInit() {
    this.mapService.disableMouseEvent("goto");
    this.mapService.disableMouseEvent("place-input");
    this.map = this.mapService.map;
  }

  goto() {
    if (!this.address) { return; }

    this.geocoder.geocode(this.address)
      .subscribe(location => {
        this.map.fitBounds(location.viewBounds, {});
        this.address = location.address;
      }, error => console.error(error));
  }
}
