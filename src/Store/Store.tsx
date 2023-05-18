import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../Data/Data";

interface Cocktail {
	idDrink: string;
	strDrink: string;
	strGlass: string;
	strCategory: string;
	strDrinkThumb: string;
	strAlcoholic: string;
}

interface AppState {
	cocktails: Cocktail[];
	filteredCocktails: Cocktail[];
}

const initialState: AppState = {
	cocktails: [],
	filteredCocktails: [],
};

const cocktailSlice = createSlice({
	name: "cocktails",
	initialState,
	reducers: {
		setCocktails: (state, action: PayloadAction<Cocktail[]>) => {
			state.cocktails = Data;
			state.filteredCocktails =Data;
			console.log(state.cocktails);
		},
		filterCocktails: (state, action: PayloadAction<string>) => {
			const searchTerm = action.payload.toLowerCase();
			state.filteredCocktails = state.cocktails.filter((cocktail) =>
				cocktail.strDrink.toLowerCase().includes(searchTerm),
				);
				console.log(state.filteredCocktails)
			},
	},
});

export const { setCocktails, filterCocktails } = cocktailSlice.actions;

const store = configureStore({
	reducer: cocktailSlice.reducer,
});
console.log(store.getState().cocktails)
export default store;
