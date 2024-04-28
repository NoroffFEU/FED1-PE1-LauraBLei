export const doFetch = async (method, path = "", body) => {
    const noroffapi = "https://v2.api.noroff.dev/blog/posts/Laura"+path

    console.log("Doing fetch call towards: ", noroffapi);
  
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
  