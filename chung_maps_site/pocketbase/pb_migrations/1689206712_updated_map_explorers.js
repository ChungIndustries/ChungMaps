migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fqom0iml",
    "name": "dimension",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fqom0iml",
    "name": "dimension",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
