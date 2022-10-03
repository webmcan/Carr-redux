import { message } from "antd";

const sendError = (errorMessage: string) => {
    message.error(errorMessage);
};

export default sendError;