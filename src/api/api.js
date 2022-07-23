import axios from "axios";

const dashboardInstance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
});
dashboardInstance.interceptors.response.use((response) => response.data);

export const dashboardApi = {
    getUsers: () => {
        return dashboardInstance.get(`users`);
    },
    getUserByID: (id) => {
        return dashboardInstance.get(`users/${id}`);
    },
};
