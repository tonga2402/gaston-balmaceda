import * as yup from "yup"


const cardForm = yup
  .object({
    cod: yup.number().min(16).max(16).required(),
    expiration_date: yup.string().trim().required(),
    first_last_name: yup.string().trim().required(),
    number_id: yup.number().min(3).max(3).required(),
  })
  .required();

  export default cardForm;