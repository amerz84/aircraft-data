export interface Airport {
    code: string,
    id: number,
    name: string,
    coords: {
        lat: number,
        lng: number
    }
}