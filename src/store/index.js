import React, { createContext, useReducer } from 'react';

/**
 * ①初期値の設定(initialState)
 */
const initialState = {
	popular: [],
	related: [],
	selected: {},
	term: '',
	searched: [],
};

/**
 * ②reducer関数を用意する
 */

// reducer関数は２つの値をとり、１つの値を返す
const reducer = (state, action) => {
	// actionに含まれるtypeで処理をわける。
	switch (action.type) {
		case 'SET_POPULAR':
			return { ...state, popular: action.payload.popular };
		case 'SET_RELATED':
			return { ...state, related: action.payload.related };
		case 'SET_SELECTED':
			return { ...state, selected: action.payload.selected };
		case 'SET_SEARCHED':
			return { ...state, searched: action.payload.searched };
		case 'SET_TERM':
			return { ...state, term: action.payload.term };

		default:
			return state;
	}
};

export const Store = createContext({
	globalState: initialState,
	setGlobalState: () => null,
});

const StoreProvider = ({ children }) => {
	// useReducerは現在のステート値とdispatch関数の２つを返す。
	// reducerはステートを更新するための関数

	const [globalState, setGlobalState] = useReducer(reducer, initialState);

	return (
		<Store.Provider value={{ globalState, setGlobalState }}>
			{children}
		</Store.Provider>
	);
};

export default StoreProvider;
