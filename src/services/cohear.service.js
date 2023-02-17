const EXAMPLES = [{"text": "Hola", "label": "intro"}, {"text": "Como estas?", "label": "intro"}, {"text": "Quien sos?", "label": "intro"}, {"text": "Tengo un trabajo para vos", "label": "contacto"}, {"text": "Por donde te puedo contactar?", "label": "contacto"}, {"text": "Estas buscando trabajo?", "label": "contacto"}, {"text": "Donde trabajas?", "label": "intro"}, {"text": "Con que tecnologias tenes experienca?", "label": "intro"}, {"text": "Estas escuchando propuestas?", "label": "contacto"}, {"text": "Sabes ingles?", "label": "intro"}, {"text": "Cuantos años de experiencia tenes?", "label": "intro"}, {"text": "Te interesa cambiar de trabajo?", "label": "contacto"}, {"text": "Como es tu linkedin?", "label": "contacto"}, {"text": "Como es tu github?", "label": "contacto"}, {"text": "Que edad tiene tu perro?", "label": "unknow"}, {"text": "Arreglas impresoras?", "label": "unknow"}, {"text": "Quien es segundo?", "label": "unknow"}, {"text": "Contame un chiste", "label": "unknow"}, {"text": "Cual es tu expectativa salarial?", "label": "contacto"}, {"text": "Que tecnologias usas?", "label": "tecnologies"}, {"text": "Cual es tu stack tecnologico", "label": "tecnologies"}, {"text": "Como esta hecho este chat", "label": "project"}, {"text": "Con que hiciste este chat", "label": "project"}]
const APIKEY = process.env.REACT_APP_API_KEY_COHERE;



export const getValidation = async (question) => {
  question.trim();

  const { classifications } = await fetch("https://api.cohere.ai/classify", {
    method: "POST",
    headers: {
      Authorization: `BEARER ${APIKEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "large",
      inputs: [question],
      examples: EXAMPLES,
    }),
  })
    .then((res) => res.json())
    .catch((error) => error);

  return classifications;
};
