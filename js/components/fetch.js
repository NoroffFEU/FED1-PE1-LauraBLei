export const doFetch = async (method, body) => {
    const noroffapi = "https://v2.api.noroff.dev/blog/posts/Laura"
  
    try {
      const response = await fetch(noroffapi, {
        method: method,
        headers: {
          headers: {
            "content-Type":"application/json",
            "Authorization": "Insert Access key"
        },
        },
        body: JSON.stringify(body)
      });
  
      const data = await response.json()
      return data.data
    } catch (err) {
      console.log(err);
    }
  }
  