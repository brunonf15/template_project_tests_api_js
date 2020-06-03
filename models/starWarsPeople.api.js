import Api from './api';
import setting from '../config/settings';

class starWarsPeople extends Api {
	async getAll() {
		let response = null;
		try {
			response = await super.request
				.get(`${setting.URL_BASE}/people/?`)
				.set('Content-Type', 'application/json')

		} catch (err) {
			return err;
		}
		return response;
	};

	async getPeople(peopleId) {
		let response = null;
		try {
			response = await super.request
				.get(`${setting.URL_BASE}/people/${peopleId}/?format=json`)
				.set('Content-Type', 'application/json')
		} catch (err) {
			return err;
		}
		return response;
	};
};

export default new starWarsPeople();