export interface Hotels {
  hotels: Hotel[]
}

export interface Hotel {
  id: number
  name: string
  description: string
  location: Location
  stars: number
}

export interface HotelSearchParams {
  q: string
}

export interface Location {
  long: number
  lat: number
}
