function getData(dataName, setData) {
  const headers = {
    Accept: 'application/json',
    Authorization: 'Bearer kK-VvqswsvBCQO7ueyM4',
  }
  const fetchData = async () => {
    const rawData = await fetch(`https://the-one-api.dev/v2/${dataName}`, {
      headers: headers,
    })
    const data = await rawData.json()
    setData(data.docs)
  }

  fetchData()
}

export default getData
