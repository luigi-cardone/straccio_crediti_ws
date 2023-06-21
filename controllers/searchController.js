import Search from './classes/search.js'
import { search_config } from './dataController.js'
const search = new Search(search_config, 0, 10, 12)
try{
    await search.doSearch()
}
catch (err){
    console.log("Timeout error accurred")
}
await search.doClusterDataCollection("export_1")