import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  options: {
    limiter: { max: 600, duration: 1000 },
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Test <queue@test.com.br>",
      to: `${user.username} <${user.email}>`,
      subject: "Cadastro de Usuário",
      html: `Olá ${user.username}, bem vindo(a) ao sistema de filas!`,
    });
  },
};
