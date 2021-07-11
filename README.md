# my-ip

Get your IP info.

This is run on a **`cloudflare worker`** and just returns the parsed values from **`request.CF`**

## Host Your Own

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ootiq/my-ip)

## Response

```json
{
  "ip": "172.107.20.86",
  "geo": {
    "latitude": "38.92580",
    "longitude": "-77.39390"
  },
  "asn": 40676,
  "country": "US",
  "city": "Ashburn",
  "continent": "NA",
  "postalCode": "20171",
  "metroCode": "511",
  "region": "Virginia",
  "regionCode": "VA",
  "timezone": "America/New_York"
}
```

##

#### &copy; 2021 | [Unlicense](./LICENSE)
