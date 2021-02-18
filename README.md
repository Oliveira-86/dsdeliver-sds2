# dsdeliver-sds2






This project was developed with the intention of practicing CRUD of  orders, implementing a location map with Mapbox and cloud hosting at the product level. 
I participated in this project to develop skills as a Full Stack programmer with the best tools on the market were used, ReactJS and Spring-boot.

![HOME DELIVERY_small](https://user-images.githubusercontent.com/64974421/107078808-a2125880-67cd-11eb-8188-166143eb99b8.png) 
![SELECIONAR PRODUTOS_small](https://user-images.githubusercontent.com/64974421/107078819-a76fa300-67cd-11eb-88d0-6d3c32f5ca96.png)




# Site
https://egberto-oliveira-sds.netlify.app/

# Technologies
- ReactJS
- Java
- Spring-boot
- Heroku
- Netlify
- PostegresSQL

# Mapbox

Mapbox GL JS is a JavaScript library for interactive, customizable vector maps on the web is part of the cross-platform Mapbox GL ecosystem, which also includes compatible native SDKs for applications on Android, iOS, macOS, Qt, and React Native. Mapbox provides building blocks to add location features like maps, search, and navigation into any experience you create.

``` function OrderLocation( { onChangeLocation }: Props) {

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    })

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            }
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
          latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label!
        });
      };

    return (
        <div className="order-location-container" >
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido de ser entregue:
                </h3>
            
            <div className="filter-container">
                <AsyncSelect 
                    placeholder="Digite um endereço para entregar o pedido"
                    className="filter"
                    loadOptions={loadOptions}
                    onChange={value => handleChangeSelect(value as Place)}
                />
            </div>
            <MapContainer 
                center={address.position} 
                zoom={13} 
                key={address.position.lat} 
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={address.position}>
                    <Popup>
                        {address.label}
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
    )
} ```


