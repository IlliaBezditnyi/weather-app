import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GEO_URL = 'http://api.openweathermap.org/geo/1.0';
const WEATHER_URL = 'https://api.openweathermap.org/data/3.0';
const KEY = 'efcb53f6fa6a25bdb1ee6ef57cf2eff4';

interface LocationData {
  name: string;
  lat: number | any;
  lon: number | any;
}

// Getting lat and lot of city.
export const getCityLocation = createAsyncThunk<
  LocationData,
  string,
  { rejectValue: string }
>('search/location', async (city, { rejectWithValue }) => {
  try {
    const request = await axios.get(
      `${GEO_URL}/direct?q=${city}&limit=1&appid=${KEY}`,
    );

    return request.data[0];
  } catch (error: any) {
    return rejectWithValue(error.request.data);
  }
});

// Getting weather forecast by lat and lon.
export const getCityWeather = createAsyncThunk<
  any,
  any[],
  { rejectValue: string }
>('get/weather', async ([lat, lon], { rejectWithValue }) => {
  try {
    const request = await axios.get(
      `${WEATHER_URL}/onecall?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`,
    );

    return request.data;
  } catch (error: any) {
    return rejectWithValue(error.request.data);
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: [] as any,
    location: {
      name: '',
      lat: null,
      lon: null,
    },
    weather: {},
    loading: false,
    error: '',
  },
  reducers: {
    // Pure function to remove City from cities list on button click.
    removeFromCities(state, action) {
      state.cities = state.cities.filter((city: any) => {
        return city.name !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCityLocation.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getCityLocation.fulfilled, (state, action) => {
        state.location = action.payload;
        state.cities.push(action.payload);
        state.loading = false;
      })
      .addCase(getCityLocation.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = 'Error has occured!';
        }
      });

    builder
      .addCase(getCityWeather.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getCityWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        for (let i = 0; i < state.cities.length; i++) {
          if (
            state.cities[i]['lat'] == state.location.lat &&
            state.cities[i]['lon'] == state.location.lon
          ) {
            state.cities[i] = { ...state.cities[i], ...action.payload };
          }
        }
        state.loading = false;
      })
      .addCase(getCityWeather.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = 'Error has occured!';
        }
      });
  },
});

export default weatherSlice.reducer;

export const { removeFromCities } = weatherSlice.actions;
