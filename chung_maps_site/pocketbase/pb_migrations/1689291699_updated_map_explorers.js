migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f4rw5zmo",
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
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f4rw5zmo",
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
