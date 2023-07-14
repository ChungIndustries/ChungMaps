migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "swjwymyu",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
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
    "id": "swjwymyu",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
