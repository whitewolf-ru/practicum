
const API = "https://norma.nomoreparties.space/api";

function checkResponse(response) {  
  return response.ok ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));
}

function json(response) {  
  return response.json()  
}

const ingredientsLoad = async() => {
   const result = await fetch(`${API}/ingredients`)  
      .then(checkResponse)  
      .then(json)  
      .then(function(data) {  
         return data.data
      })
   return result;
}

export const orderUpload = async(data,setOrderId) => {
   const result = await fetch(`${API}/orders`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "ingredients": data })
      }    
   )
   .then(checkResponse)  
   .then(json)  
   .then(data => setOrderId(data.order.number))

   return result;
}

export default ingredientsLoad;
