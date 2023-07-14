migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mugufgwk",
    "name": "last_scanned_by",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "mvbs3vc6tw1puam",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mugufgwk",
    "name": "last_scanned_by",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "mvbs3vc6tw1puam",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
