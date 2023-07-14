migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcouzcd90zen3c8")

  collection.name = "blocks"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_AHHlcYn` ON `blocks` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcouzcd90zen3c8")

  collection.name = "blockks"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_AHHlcYn` ON `blockks` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
  ]

  return dao.saveCollection(collection)
})
