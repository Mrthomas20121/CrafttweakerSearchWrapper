const CrafttweakerSearchApi = require('../index');

async function testApi() {
  const api = new CrafttweakerSearchApi('1.12');
  let res = await api.search('compactor');
  console.log(res);
}
testApi()