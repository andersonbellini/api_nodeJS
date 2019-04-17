const env = process.env.NODE_ENV || "dev";
const config = () => {

  switch (env) {
    case "dev":
      return {
        bd_string:
          "mongodb+srv://usuario_admin:14L7b2CbxbLDxlJ8@clusterapi-XXXXX.mongodb.net/test?retryWrites=true",
        jwt_pass: "cafe2019",
        jwt_expires_in: "7d"
      };

    case "hml":
      return {
        bd_string:
          "mongodb+srv://usuario_admin:55kdjSKGMOda3@cluster0-XXXXX.mongodb.net/test?retryWrites=true",
        jwt_pass: "hmlcafe2019",
        jwt_expires_in: "5d"
      };

    case "prod":
      return {
        bd_string:
          "mongodb+srv://usuario_admin:55kdjSKGMOda3@cluster0-XXXXX.mongodb.net/test?retryWrites=true",
        jwt_pass: "sdafslkdfjcmasdçcfoiurtnweiruty",
        jwt_expires_in: "1d"
      };
  }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();
