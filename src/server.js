const app = require('./app')
const { importarClima } = require('./controllers/weatherRegister.controller');
const cron = require('node-cron');

const port = 3000;


app.listen(port, async () => {
  console.log("Servidor rodando na porta: " + port);

  await importarClima();

  // cron.schedule('0 0,8,16 * * *', async () => {
  //   try {
  //     console.log("⏰ Executando importarClima às", new Date().toLocaleString());
  //     await importarClima();
  //     console.log("✅ Importação concluída");
  //   } catch (err) {
  //     console.error("❌ Erro na importação:", err);
  //   }
  // });
})