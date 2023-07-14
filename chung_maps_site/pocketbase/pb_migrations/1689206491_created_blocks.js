migrate((db) => {
  const collection = new Collection({
    "id": "j74cc0p6xqf0lo4",
    "created": "2023-07-13 00:01:30.983Z",
    "updated": "2023-07-13 00:01:30.983Z",
    "name": "blocks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t1sl5vum",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ytxhz0sz",
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
        "id": "bholdt77",
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
        "id": "c3cvs4jr",
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
        "id": "yv2wmak5",
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
        "id": "h2u0t6r6",
        "name": "metadata",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_bINOdnh` ON `blocks` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
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
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4");

  return dao.deleteCollection(collection);
})
