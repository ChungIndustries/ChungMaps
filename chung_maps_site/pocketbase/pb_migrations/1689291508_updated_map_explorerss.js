migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  collection.name = "map_explorers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  collection.name = "map_explorerss"

  return dao.saveCollection(collection)
})
