addEventListener('fetch', (event) => {
  event.respondWith(handleMethod(event.request))
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleOptions(request) {
  // Make sure the necessary headers are present
  // for this to be a valid pre-flight request
  let headers = request.headers
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    return new Response(null, {
      headers: corsHeaders,
    })
  } else {
    // Handle standard OPTIONS request.
    // If you want to allow other HTTP Methods, you can do that here.
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS',
      },
    })
  }
}

/**
 * Respond with the user geo info
 * @param {Request} request
 */
async function handleRequest(request) {
  // modify values
  const info = {
    ip: request.headers.get('CF-Connecting-IP'),
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
    headers: { 'content-type': 'application/json', ...corsHeaders },
  })
}

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleMethod(request) {
  if (request.method === 'OPTIONS') {
    return await handleOptions(request)
  }
  return await handleRequest(request)
}
