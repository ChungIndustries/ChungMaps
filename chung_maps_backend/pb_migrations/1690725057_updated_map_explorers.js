migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnflwie1drgwajn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0nk57id7",
    "name": "rotation",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "North",
        "West",
        "South",
        "East"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmm93coe",
    "name": "inventory",
    "type": "json",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kczl8y0j",
    "name": "selected_slot",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 16
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnflwie1drgwajn")

  // remove
  collection.schema.removeField("0nk57id7")

  // remove
  collection.schema.removeField("fmm93coe")

  // remove
  collection.schema.removeField("kczl8y0j")

  return dao.saveCollection(collection)
})
