migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  collection.name = "map_explorers"
  collection.indexes = [
    "CREATE INDEX `idx_Cy1nM2g` ON `map_explorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  collection.name = "MapExplorers"
  collection.indexes = [
    "CREATE INDEX `idx_Cy1nM2g` ON `MapExplorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
  ]

  return dao.saveCollection(collection)
})
