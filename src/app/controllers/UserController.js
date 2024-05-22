import Queue from "../lib/Queue";

export default {
  async store(req, res) {
    const { name, email, senha } = req.body;

    const user = {
      name,
      email,
      senha,
    };

    //await Queue.add("RegistrationMail", { user });

    //await Queue.add("UserReport", { user });

    const taskEmFila = await Queue.add("RequestRifa");

    return res.json(taskEmFila);
  },
};
