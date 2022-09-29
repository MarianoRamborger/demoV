import { LatLngBounds } from 'leaflet'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { useCtxValue } from "../../Context/context"

const MapEvents = () => {
  const [context, dispatch] : any = useCtxValue()
   useMapEvents({
    click: (e) => {
      dispatch({
        type: "setSelectedPosition",
        lng: e.latlng.lng,
        lat: e.latlng.lat
      })
      }
    })
  return context.userSelected 
    ? <Marker position={context.selectedPosition}> </Marker> 
    : null
}

const Map = () => {

  return (
    <div className="map-container-div">

    <MapContainer 
      center={{lat: 49.255866, lng: -123}} 
       zoom={10} minZoom={1} 
       maxBoundsViscosity={1} 
       maxBounds={  
        new LatLngBounds([[-90,-180],[90,180]])
      } 
      >
  
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />|
      </MapContainer>

      <style>
          {`
          .leaflet-container{
            height: 200px;
            z-index: 1;
            border-radius: 5px;
          }    
        `}
      </style>
    </div>
  )

}

export default Map