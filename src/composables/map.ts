function useMap() {
  let map: any = null
  const initialize = () => {
    // @ts-ignore
    map = new Mapp({
      element: '#mapCanvas',
      presets: {
        latlng: {
          lat: 35.73249,
          lng: 51.42268,
        },
        zoom: 15,
      },
      apiKey:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4YzM5OGNmYTE0MmQ5Nzk0ZWY0MmRiMmIyYTgwOWNkMDE0ODgwMGQyNTFiMWU2MjM3YjE4ZTU4NGI1NjI5NzVmNWM1YWVlNjg3ZTUwNjEwIn0.eyJhdWQiOiIxMTU5OCIsImp0aSI6ImU4YzM5OGNmYTE0MmQ5Nzk0ZWY0MmRiMmIyYTgwOWNkMDE0ODgwMGQyNTFiMWU2MjM3YjE4ZTU4NGI1NjI5NzVmNWM1YWVlNjg3ZTUwNjEwIiwiaWF0IjoxNjA2MTM1MDkzLCJuYmYiOjE2MDYxMzUwOTMsImV4cCI6MTYwODY0MDY5Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.CprySt0-x9LnauDbZtU3WS1JsqNlebkZq0S7h7jhX3LqCPg-JoKn4J84sOI0H2X-PVN60T0qW3sIM142iUJHvX6U7F6pNZUwTaNxYe2YRJbdXRxlLsRKMve-9MIMx6I22ONHigheDTAmzFA_4_voYAIhfOh8HdX05-8MsqEG0naaxf3Q3h6eeNCC65lb4BqWyH0O5mAZ8OOypLuiw_M40feZP8YrHlc6Y3yopEjrWFeLWdUVUmp5B5fago6TcMmTTPWqmtUF7LawwKw4dOI2WRoA6S73XVO_Y90Y4idge9FxlWclU0zs7I9Xh8mPnKt8A73pl5-ZuMqB_LRoKkcf1g',
    })
    map.addLayers()
  }

  const setMarker = (options: {
    lat: number
    lng: number
    title: string
    id: any
  }, onClick: (id: string) => void) => {
    map.addMarker({
      name: options.title,
      latlng: {
        lat: options.lat,
        lng: options.lng,
      },
      popup: {
        title: {
          html: options.title,
        },
      },
      on: {
        click() {
          onClick(options.id)
        },
      },
    })
  }

  return {
    initialize,
    setMarker,
  }
}

export {
  useMap,
}
