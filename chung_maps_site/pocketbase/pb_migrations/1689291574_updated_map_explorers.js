migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_tz0q3dJ` ON `map_explorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  collection.indexes = []

  return dao.saveCollection(collection)
})
