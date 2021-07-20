import axios from 'axios';

export async function post(input){
    try {
    const response = await axios({
        url:'http://localhost:3001/activity',
        method: 'POST',
        data: input,
    })
    return response
    } catch(error){
    
    }
}