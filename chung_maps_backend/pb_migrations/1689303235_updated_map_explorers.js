migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnflwie1drgwajn")

  // remove
  collection.schema.removeField("8aerywbz")

  // remove
  collection.schema.removeField("feklfyqc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsptartx",
    "name": "dimension",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "overworld",
        "nether"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnflwie1drgwajn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8aerywbz",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "feklfyqc",
    "name": "metadata",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("rsptartx")

  return dao.saveCollection(collection)
})
