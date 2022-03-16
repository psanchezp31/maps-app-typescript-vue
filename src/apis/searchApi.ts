import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoicGF1c2FuY2hleiIsImEiOiJjbDBsZjRoNWYwNDhjM2NwMjB5ZTludXRlIn0.GZReYP4vQNEtTwBLoEeP-w",
  },
});

export default searchApi