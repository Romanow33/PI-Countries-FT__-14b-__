import axios from 'axios';

export async function post(input){
    try {
    const response = await axios({
        url:'http://localhost:3001/activity',
        method: 'POST',
        data: input,
    })
    console.log(response)
    return response
    } catch(error){
    console.log(error)
    }
}