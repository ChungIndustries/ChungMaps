migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mvbs3vc6tw1puam");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "mvbs3vc6tw1puam",
    "created": "2023-07-13 00:03:07.002Z",
    "updated": "2023-07-13 23:28:02.250Z",
    "name": "map_explorers",
    "type": "base",
    "system": false,
    "schema": [
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
      },
      {
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_Cy1nM2g` ON `map_explorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)",
      "CREATE UNIQUE INDEX `idx_Hb1bhfY` ON `map_explorers` (`user`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
