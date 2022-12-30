import * as yup from "yup";

let schema = yup.object().shape({
    newToDo: yup.string().required(""),
});

export { schema };
