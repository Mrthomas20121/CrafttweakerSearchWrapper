const fetch = require('node-fetch');

class CrafttweakerSearchApi {
  /**
   * Crafttweaker Search api
   * @param {String} version 
   * @param {String} language  
   */
  constructor(version, language='en') {
    this.version = version;
    this.lang = language;
    this.defaultPath = `https://docs.blamejared.com/${version}/${language}/`;
  }
  /**
   * Search on crafttweaker doc
   * @param {String} q query string 
   */
  async search(q) {
    let json  = await fetch(`https://docs.blamejared.com/search?v=${this.version}&lang=${this.lang}&q=${q}`).then(res => res.json()).then(data => data);
    // let obj = {
    //   count:json.count,
    //   totalcount:json.totalcount
    // }
    // for (const res of json.results) {
    //   let path = this.defaultPath + res.location
    //   obj[path] = {
    //     text:res.text,
    //     title:res.title
    //   }
    // }
    // return obj;
    return json;
  }
}

module.exports = CrafttweakerSearchApi;