import Yup from "yup";

const mainSchema = Yup.object().shape({
  name: Yup.string().required("*"),
  phone: Yup.string().required("*"),
  adress: Yup.string().required("*"),
  date: Yup.string().required("*"),
  tariff: Yup.string().required("*"),
});

export default mainSchema;
