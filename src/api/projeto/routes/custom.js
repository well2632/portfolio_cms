module.exports = {
  routes: [
    {
      method: "GET",
      path: "/projetos/:slug",
      handler: "projeto.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
