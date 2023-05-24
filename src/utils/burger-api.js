
const API = "https://norma.nomoreparties.space/api";

function checkResponse(response) {  
   return response.ok ? response.json() : Promise.reject(new Error(response.statusText));
}

const load = async() => {
   const result = await fetch(`${API}/ingredients`)  
      .then(checkResponse)  
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
      .then(function(data) {
         setOrderId(data.order.number);
         return data;
      })

   return result;
}

export default load;
export { checkResponse };