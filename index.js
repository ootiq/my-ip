addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  // modify values
  const info = {
    geo: {
      latitude: request.cf.latitude,
      longitude: request.cf.longitude,
    },
    asn: request.cf.asn,
    country: request.cf.country,
    city: request.cf.city,
    continent: request.cf.continent,
    postalCode: request.cf.postalCode,
    metroCode: request.cf.metroCode,
    region: request.cf.region,
    regionCode: request.cf.regionCode,
    timezone: request.cf.timezone,
  }

  return new Response(JSON.stringify(info), {
    headers: { 'content-type': 'application/json' },
  })
}
