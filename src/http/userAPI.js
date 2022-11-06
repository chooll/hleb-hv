import {$host} from "./index";

export const getAllComent = async () => {
    const response = await $host.get('/test')
    return response.data;
}