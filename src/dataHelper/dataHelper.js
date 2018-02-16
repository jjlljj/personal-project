export const apiFetch = async (text) => {
  const url = '/analyze'

  const response = await fetch( url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({text: text})
  })
  
  return await response.json()
}

export const mockFetch = async (text) => {
  console.log(text)
  const url = '/mockAnalyze'

  const response = await fetch( url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({text: text})
  })
  
  return await response.json()
}