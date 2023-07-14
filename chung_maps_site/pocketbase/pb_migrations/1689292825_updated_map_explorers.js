migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  // remove
  collection.schema.removeField("x6ocz1bp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x6ocz1bp",
    "name": "scanned_blocks",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "j74cc0p6xqf0lo4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "name",
        "dimension",
        "x",
        "y",
        "z"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
