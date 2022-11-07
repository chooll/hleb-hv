import {$host} from "./index";

export const getAllComent = async () => {
    const response = await $host.get('/test')
    return response.data;
}

export const getAllVacancy = async () => {
    const responce = await $host.get('/vacancy');
    return responce.data;
}

export const sendComment = async (name, comment) => {
    const responce = await $host.post('/sendcoment', {
        name: name,
        comment: comment
    })
    return true;
}