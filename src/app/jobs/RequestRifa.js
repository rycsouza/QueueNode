import axios from "axios";

export default {
  key: "RequestRifa",
  options: {
    limiter: { max: 2, duration: 5000 },
    delay: 0,
  },
  async handle({ data }) {
    const response = await axios.get(process.env.URL_Rifa);

    console.log(response);
  },
};
