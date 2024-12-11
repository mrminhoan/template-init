export const fetchJson = (urlRemote = '/assets/config.json', init?: RequestInit) =>
  fetch(urlRemote, init).then(async (res) => {
    if (res?.ok) {
      return res.json()
    }
    const error = await res.json()
    return Promise.reject(error)
  })
