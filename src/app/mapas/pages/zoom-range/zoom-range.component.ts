import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        height: 100%;
        width: 100%;
      }

      .row {
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;

  constructor() {
    // console.log('Construtor', this.divMapa);
  }

  ngAfterViewInit(): void {
    // console.log('fullScreenComponent');
    // console.log('ngAfterViewInit', this.divMapa);

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-79.19864771812922, -3.9870315009066095],
      zoom: 17,
    });
  }

  zoomOut() {
    // console.log('zoomOut');
    // console.log('zoomOut', this.divMapa);
    this.mapa.zoomOut();
  }

  zoomIn() {
    // console.log('zoomIn');
    this.mapa.zoomIn();
  }
}
