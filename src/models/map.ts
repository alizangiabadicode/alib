// ~/models/map.ts

export interface LatLng {
  lat: number
  lng: number
}

export interface Popup {
  title: {
    html: string
  }
}

export interface MarkerOptions {
  name: number
  latlng: LatLng
  popup: Popup
  toolbar: Record<string, unknown>
  on: {
    click: () => void
  }
  featureId?: number
}

export interface Marker {
  options: MarkerOptions
  openPopup: () => void
}

// Make MappType constructable by adding a constructor signature
export interface Mapp {
  addLayers: () => void
  addMarker: (options: MarkerOptions) => Marker

}

export interface MappOptions {
  element: string
  presets: {
    latlng: LatLng
    zoom: number
  }
  apiKey: string
}
