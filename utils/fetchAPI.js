import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchAPI =  async (url) => {
    const {data}  = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '38b6cc003emsha61ad4bc25a1964p1d8570jsnf9361767bc07'
          }
    });

    return data;

}