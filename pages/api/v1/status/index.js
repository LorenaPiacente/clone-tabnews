function status(request, response) {
  // response.status(200).send("Status 200");
  response.status(200).json({ chave: "Testando o UTF-8 charset com ç e `^^`" });
}

export default status;
