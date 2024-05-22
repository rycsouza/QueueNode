import Queue from "../lib/Queue";

export default {
  async store(req, res) {
    const { username, email, senha } = req.body;

    const user = {
      username,
      email,
      senha,
    };

    await Queue.add("RegistrationMail", { user });

    await Queue.add("UserReport", { user });

    return res.json(user);
  },
};
