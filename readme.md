# CrafttweakerSearchWrapper
CrafttweakerSearchWrapper is Wrapper for https://docs.blamejared.com/search

# How to use it?
```js
const CrafttweakerSearchApi = require('CrafttweakerSearchApi');

async function testApi() {
  const api = new CrafttweakerSearchApi('1.12');
  let res = await api.search('compactor');
  console.log(res);
}
testApi()
```