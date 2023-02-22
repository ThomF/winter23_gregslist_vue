

class HousesService {

    async getHouses() {
        const res = await api.get('auth/api/houses')
    }

}

export const housesService = new HousesService()