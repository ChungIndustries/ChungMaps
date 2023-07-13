migrate((db) => {
  const collection = new Collection({
    "id": "mvbs3vc6tw1puam",
    "created": "2023-07-13 00:03:07.002Z",
    "updated": "2023-07-13 00:03:07.002Z",
    "name": "MapExplorers",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "ejrfpdbq",
        "name": "x",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "cp6tmkx2",
        "name": "y",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "dehmlvpd",
        "name": "z",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "dfu81o3k",
        "name": "trusted",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "2dimyuzv",
        "name": "scanned_blocks",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "j74cc0p6xqf0lo4",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_Cy1nM2g` ON `MapExplorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam");

  return dao.deleteCollection(collection);
})
