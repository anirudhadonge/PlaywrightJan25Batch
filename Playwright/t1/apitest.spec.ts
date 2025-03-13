import{test,expect} from '@playwright/test'


test('This an API test',async({request})=>{
    const response = await request.get("https://bookcart.azurewebsites.net/api/Book",{
        headers:{
            accept:"application/json"
        },
        data:{

        }

       
    })

    console.log(await response.body());
    console.log(await response.json())
    expect(response.ok()).toBeTruthy();
    console.log(response.status());
    
})

test.only('Login through api',async({request})=>{
    const response = await request.post("https://bookcart.azurewebsites.net/api/Login",{
       headers:{
        "content-type":"application/json",
        "accept":"*/*"
       },
       data:{
        "username": "Demo25@Demo25.com",
        "password": "PlayWright@25"
      }
    })

    expect(response.ok()).toBeTruthy();
    expect(response.status()==200).toBeTruthy();
    const token = await response.json()
    console.log(await response.json());
})


