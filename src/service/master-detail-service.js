import axios from "axios";

const MasterDetailAPI = axios.create({
    baseURL: 'https://api.publicapis.org',
});

const getMasterDetail = async () => {
    const response = await MasterDetailAPI.get('/entries');
    return response.data;
};

const MasterDetailService = {
    getMasterDetail
};

export default MasterDetailService;




