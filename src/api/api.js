import axios from "axios";

const API_URL = "https://soccer.highlightly.net/";
const API_KEY = "16bd0b09-6f58-4f65-b51d-b5a901d5f01b";

export const getStandings = async () => {
    try {
        const response = await axios.get(`${API_URL}/standings`, {
            params: {
                leagueId: 33973,
                season: 2024
            },
            headers: {
                "x-rapidapi-key": API_KEY
            }
        })
     
            return response.data;
        } catch (error) {
            return null;
    }
} 

export const getMatch = async (date) => {
    try {
        const response = await axios.get(`${API_URL}/matches`, {
            params: {
                leagueId: 33973,
                date: date,
                timezone: 'Asia/Jakarta',
                limit: 10,
                offset: 0
            },
            headers: {
                "x-rapidapi-key": API_KEY
            }
        });
 
 
        return response.data;
    } catch (error) {
        return null;
    }
} 