import { toast } from "react-toastify";

export const notify = (props) => {
    if (props.err) {
        return toast.error(props.msg, {
            position: toast.POSITION.TOP_LEFT,
        });
    }
    return toast.success(props.msg, {
        position: toast.POSITION.TOP_LEFT,
    });
};
