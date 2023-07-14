migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  // remove
  collection.schema.removeField("69ybycmd")

  // remove
  collection.schema.removeField("dfu81o3k")

  // remove
  collection.schema.removeField("znl326bx")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "69ybycmd",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dfu81o3k",
    "name": "trusted",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
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

  // remove
  collection.schema.removeField("swjwymyu")

  return dao.saveCollection(collection)
})
