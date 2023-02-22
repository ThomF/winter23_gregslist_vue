import { AppState } from "../AppState"
import { house } from "../models/Houses";
import { api } from "./AxiosService.js";


class HousesService {

    async getHouses() {
        const res = await api.get('auth/api/houses')
        console.log('Getting the houses', res.data)
        AppState.houses = res.data.map(h => new house(h))
        console.log(AppState.houses)
    }

    async createHouse(houseData) {
        const res = await api.post('auth/api/houses', houseData)
        console.log('adding new house', res.data)
        AppState.houses.push(res.data)
        return res.data
    }

}

export const housesService = new HousesService()