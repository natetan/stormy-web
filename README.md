# Stormy
This is a simple weather application written in React with React Hooks. This application gets the user's current weather and it also lets users search for places. APIs utilized in this project are [Dark Sky](https://darksky.net/dev/) and [Google Geocding](https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916118159-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding+API-KWID_43700039136946657-kwd-335278985932-userloc_9033329&utm_term=KW_%2Bgeocoder%20%2Bapi-ST_%2Bgeocoder+%2Bapi&gclid=CjwKCAiAjrXxBRAPEiwAiM3DQh6hWVrFgH-nDSokfX2X6kY2ByLEoTpnxOd_fAQVa1EjjxPFnccK3RoCO64QAvD_BwE).

## Run the app
The application is deployed on [Heroku](https://stormy-web-app.herokuapp.com/), but there is current a known websocket issue: https://stackoverflow.com/questions/59359280/react-app-error-failed-to-construct-websocket-an-insecure-websocket-connecti.  

To run this locally, create an `auth.json` file in the `src` directory and add this:
```json
{
  "dark_sky_api_key": "your api key",
  "google_api_key": "your api key"
}
```

## Improvements
There is a lot to be improved upon in this application, and would require extra time. They include:  

- Finishing up unit tests (requires mocking of services)
- Add loading indicators so user knows when data is being fetched
- Disable search during a load
