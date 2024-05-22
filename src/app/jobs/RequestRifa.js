import axios from "axios";

export default {
  key: "RequestRifa",
  options: {
    limiter: { max: 2, duration: 5000 },
    delay: 0,
  },
  async handle({ data }) {
    const response = await axios.get(
      "https://teste.playservicos.com.br:3000/produtos/genericos?tagProcesso=surpresinha-checkout-generico&etapa_id=2819&praca_id=1"
    );

    console.log(response);
  },
};
