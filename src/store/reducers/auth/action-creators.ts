import axios from 'axios';
import { AppDispatch } from '../..';
import { IUser } from '../../../models/IUser';
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";


export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
	setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: payload}),
	setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
	login: (username: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true));
			const response = await axios.get<IUser[]>('./users.json')
			const mockUser = response.data.find(user => user.username === username && user.password === password)
		} catch (e) {

		}
	},
	logout: () => async (dispatch: AppDispatch) => {
		try {

		} catch (e) {

		}
	}

}