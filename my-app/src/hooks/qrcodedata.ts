// import { useQuery } from "@tanstack/react-query";
// import axios, { AxiosPromise } from "axios"

// const API_URL = "https://localhost:8080";

// const fetchData = async (): Promise<any> => {
//     const response = axios.get(API_URL + '/qrcode');

//     console.log(response)

//     return response; 
// }

// export function useQRCodeData() {
//     const query = useQuery({
//         queryFn: fetchData,
//         queryKey: ['qrcode-data'],
//         retry: 2
//     })

//     return {
//         ...query,
//         data: query.data?.data
//     }
// }

export {}