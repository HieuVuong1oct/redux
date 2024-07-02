const initialState = {
  input: "",
  lat: "",
  lon: "",
  data: [],
  index: null,
  date: [],
  icon: "",
  city: "",

};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_LAT":
      return { ...state, lat: action.payload };
    case "SET_LON":
      return { ...state, lon: action.payload };
    case "SET_ICON":
      return { ...state, icon: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_INDEX":
      return { ...state, index: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
export default counterReducer;
