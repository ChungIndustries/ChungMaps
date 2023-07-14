migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
