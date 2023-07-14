migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("itv1c7wy9lk4amx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smrfmty5",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "mvbs3vc6tw1puam",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("itv1c7wy9lk4amx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smrfmty5",
    "name": "field",
    "type": "relation",
    "required": false,
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
