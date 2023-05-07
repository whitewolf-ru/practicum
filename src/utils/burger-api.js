
const API = "https://norma.nomoreparties.space/api";

function status(response) {  
  return response.ok ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));
}

function json(response) {  
  return response.json()  
}

const ingredientsLoad = async() => {
//   console.log("ingredientsLoad()");

   const result = await fetch(`${API}/ingredients`)  
      .then(status)  
      .then(json)  
      .then(function(data) {  
//         console.log('Request succeeded with JSON response', data);  
         return data.data
      }).catch(function(error) {  
         console.log('Request failed', error);  
      });

//   console.log("ingredientsLoad() result",result);
   return result;
}

export default ingredientsLoad;
