import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
	public map: any;

	private initMap(): void {
		this.map = L.map('map', {
			center: [39.8282, -98.5795],
			zoom: 3
		});
	}

	constructor() { }

	ngAfterViewInit(): void {
		this.initMap();
	}


}
