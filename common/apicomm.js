import axios from 'axios';
import store from '../redux/store';
import { API_URL, Portal } from '../constants/env';
import moment from 'moment';

export const APIPost = async (url, param, success, fail) => {
    const clientInfo = store.getState().clientInfo
    const params = { ...param, clientInfo: clientInfo }
    try {
        const response = await axios.post(`${API_URL}/${Portal.toLowerCase()}/${url}`, params);
        success(response)
        return response; // Trả về dữ liệu từ response chứ không phải promise
    } catch (error) {
        if (error.response) {
            // Lỗi từ phía server, có response từ server
            fail(error.response.data)
            return error.response.data; // Trả về dữ liệu lỗi từ response của server
        } else if (error.request) {
            // Yêu cầu đã được gửi nhưng không nhận được phản hồi hoặc có lỗi khi gửi yêu cầu
            return { message: 'No response received or request failed.' }; // Trả về thông báo lỗi tự định nghĩa
        } else {
            // Lỗi khác
            return { message: 'Error occurred while processing the request.' }; // Trả về thông báo lỗi tự định nghĩa
        }
    }
};

export const formatDate = (date) => {
    return moment(date).format(
        "DD/MM/YYYY hh:mm A"
    )
}