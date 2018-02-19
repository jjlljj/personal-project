export const toneFetch = async (text) => {
  try {
    const url = '/analyze'

    const response = await fetch( url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({text: text})
    })

    if (response.status <= 200){
      return await response.json()
    } else {
      throw new Error("Unable to get text's tone")
    }
  } 
  catch(err) {
    throw(err)
  }  
}

export const mockFetch = async (text) => {
  try {
    console.log(text)
    const url = '/mockAnalyze'

    const response = await fetch( url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({text: text})
    })
    

    if (response.status <= 200){  
      return await response.json()
      } else {
        throw new Error("Unable to fetch mock data")
    }
  } 
  catch(err) {
    throw(err)
  }  
}