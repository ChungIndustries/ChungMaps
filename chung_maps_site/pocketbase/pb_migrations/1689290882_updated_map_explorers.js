migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Cy1nM2g` ON `map_explorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)",
    "CREATE UNIQUE INDEX `idx_Hb1bhfY` ON `map_explorers` (`user`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  collection.indexes = [
    "CREATE INDEX `idx_Cy1nM2g` ON `map_explorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
  ]

  return dao.saveCollection(collection)
})
