import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
	private map: any;

	ngAfterViewInit(): void {
		this.initMap();
	}

	private initMap(): void {
		this.map = L.map('mapbox', {
			center: [-0.803689, 11.609444],
			zoom: 8
		});

		const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			minZoom: 3,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		});

		tiles.addTo(this.map);
	}
}
