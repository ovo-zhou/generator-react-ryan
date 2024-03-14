class Request {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async get(endpoint, options) {
    // 处理url和参数
    const url = this.baseURL + endpoint
    const response = await fetch(url, {
      ...options,
      method: 'GET'
    })
    if (!response.ok) {
      console.error(response)
    }
    return response.json()
  }
  async post(endpoint, body, options) {
    const response = await fetch(this.baseURL + endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body)
    })
    if (!response.ok) {
      console.error(response)
    }
    return response.json()
  }
}
export default new Request('https://www.test.com')