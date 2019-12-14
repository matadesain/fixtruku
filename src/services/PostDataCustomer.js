export function PostDataCustomer(type,userData){
	let BaseUrl='https://eurekalogistics.co.id/mp/api/customer/';
	return new Promise((resolve,reject)=>{


		// fetch(BaseUrl+type,{

		// 	method:'POST',
		// 	body:JSON.stringify(userData)
		// })
		// .then((response)=>response.json())
		// .then((responseJson)=>{
		// 	resolve(responseJson);
		// })
		// .catch((error)=>{
		// 	reject(error);
		// });

		const myHeaders = new Headers();
	    myHeaders.append('Content-Type', 'application/json');

	    const options = {
	      method: 'POST',
	      body: JSON.stringify(userData),
	      myHeaders
	    };


		 fetch(BaseUrl+type, options)
	      .then(response => response.json())
	      .then((responseJson)=>{
				resolve(responseJson);
			})
			


	});


}