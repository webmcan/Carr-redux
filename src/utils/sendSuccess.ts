import { message } from "antd";

const sendSuccess = (successMessage: string) => {
    message.success(successMessage);
};

export default sendSuccess;