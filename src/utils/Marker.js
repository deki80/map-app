import { Icon, latLng } from 'leaflet'

/* Suported colors:
  blue, red, green, orange, yellow, violet, grey, black
*/
const makeIcon = color => new Icon({
  iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

let id = 0

export default class Marker {
  constructor (lokacija, naslov, opis, color = 'green') {
    this.id = id++
    this.position = latLng(lokacija.lat, lokacija.lon)
    this.popup = `
      <h6>${naslov}</h6>
      <p>${opis}</p>
    `
    this.tooltip = naslov
    this.icon = makeIcon(color)
  }
}