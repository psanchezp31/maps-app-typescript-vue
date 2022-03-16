import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: 'simplified',
    steps: false,
    access_token:
      "pk.eyJ1IjoicGF1c2FuY2hleiIsImEiOiJjbDBsZjRoNWYwNDhjM2NwMjB5ZTludXRlIn0.GZReYP4vQNEtTwBLoEeP-w",
  },
});

export default directionsApi