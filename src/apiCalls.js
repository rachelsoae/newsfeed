const getData = () => {
  return fetch('https://newsapi.org/v2/top-headlines?country=us', {
    method: 'GET',
    withCredentials: true,
    headers: {
      'x-api-key': 'c3d72dc1e20444e5a1cd73e794e0a7b9'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Oops! Something went wrong.')
    }
  })
}

export default getData;