import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useRef, useEffect } from 'react'

// Fix marker icon
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})
L.Marker.prototype.options.icon = DefaultIcon

function MapComponent() {
  const mapRef = useRef()

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    const container = map.getContainer()

    // Prevent map from stealing scroll or focus
    container.setAttribute('tabindex', '-1')
    container.style.outline = 'none'
    container.addEventListener('mousedown', (e) => e.preventDefault(), { passive: false })
    container.addEventListener('wheel', (e) => e.preventDefault(), { passive: false })
  }, [])

  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance
      }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6139, 77.2090]}>
        <Popup>This is Delhi 🚩</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
