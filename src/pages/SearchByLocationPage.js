
import React from "react";
// import {
//     withGoogleMap,
//     withScriptjs,
//     GoogleMap,
//     Marker,
//     InfoWindow
// } from "react-google-maps";

// // my API key      AIzaSyAG0qO95ddQGvIOVoeJClsmAHWBJjjmOpY



// function Map() {
    
//     return (
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{ lat: 32.085300, lng: 34.781769 }}
//         >


//         </GoogleMap>
//     );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));


class SearchByLocationPage extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    


    render() {
        return (
            <div>
                  <h1>חיפוש פריטים על-פי מיקום </h1>
                  <div id="map">
                    {/* <MapWrapped

                        googleMapURL={`{https://maps.googleapis.com/maps/api/staticmap?parametersAIzaSyAG0qO95ddQGvIOVoeJClsmAHWBJjjmOpY}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    /> */}
                  </div>
            </div>
        )
    }
}



export default SearchByLocationPage;