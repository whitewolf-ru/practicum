
const API = "https://norma.nomoreparties.space/api";

function status(response) {  
  return response.ok ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));
}

function json(response) {  
  return response.json()  
}

const ingredientsLoad = async() => {
   const result = await fetch(`${API}/ingredients`)  
      .then(status)  
      .then(json)  
      .then(function(data) {  
         return data.data
      }).catch(function(error) {  
         console.log('Request failed', error);  
      });
   return result;
}

export const orderUpload = async(data,setOrderId) => {
//   console.log("orderUpload()",data);
    const result = await fetch(`${API}/orders`,
       {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ "ingredients": data })
       }    
    )
      .then(status)  
      .then(json)  
      .then(data => setOrderId(data.order.number))
      .catch(function(error) {  
         console.log('Request failed', error);  
      });

//   console.log("orderUpload() result",result);
   return result;
}

export default ingredientsLoad;
