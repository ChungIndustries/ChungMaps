migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "znl326bx",
    "name": "api_key",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "itv1c7wy9lk4amx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "znl326bx",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "itv1c7wy9lk4amx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
