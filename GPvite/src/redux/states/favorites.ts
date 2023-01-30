import { localStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage(localStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(localStorageTypes.FAVORITES, state)
            return action.payload;
        }
    }
})

export const { addFavorite } = favoritesSlice.actions;