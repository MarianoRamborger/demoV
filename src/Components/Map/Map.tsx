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
    },
    locationfound: (location) => {
      console.log('location found:', location)
    },
  })
  return context.userSelected ? <Marker position={context.selectedPosition}> </Marker> : null
}

const Map = () => {

  return (
    <div className="map-container-div">

  <MapContainer center={{lat: 49.255866, lng: -123.236380}} zoom={13} >
  
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   <MapEvents />|
  </MapContainer>

    <style>
      {`
      .leaflet-container{
        width: 350px;
        height: 350px;
        z-index: 1;
        border-radius: 10px;
      } 
      
      `}
    </style>

    </div>
  )

}

export default Map