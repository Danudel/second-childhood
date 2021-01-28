import React from 'react';


class SearchByLocationPage extends React.Component {
    constructor(props){
        super(props);
    }
//     this.initMap= this.initMap.bind(this);

//      // Initialize and add the map
//        initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }



    render() {
        return (
            <div>
                  <h1>חיפוש פריטים על-פי מיקום </h1>
                  <div id="map"></div>
            </div>
        )
    }
}
export default SearchByLocationPage;