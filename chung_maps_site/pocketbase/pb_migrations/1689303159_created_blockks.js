migrate((db) => {
  const collection = new Collection({
    "id": "zcouzcd90zen3c8",
    "created": "2023-07-14 02:52:39.716Z",
    "updated": "2023-07-14 02:52:39.716Z",
    "name": "blockks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "51oq79tf",
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
        "id": "dakkeo4h",
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
        "id": "zlewebdf",
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
        "id": "oglutthi",
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
        "id": "sabfpktu",
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
      },
      {
        "system": false,
        "id": "5yhj7fc4",
        "name": "metadata",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "9mlwar4c",
        "name": "last_scanned_by",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "wnflwie1drgwajn",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_AHHlcYn` ON `blockks` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
    ],
    "listRule": "(@request.query.dimension:isset = false &&\n @request.query.x:isset = false &&\n @request.query.y:isset = false &&\n @request.query.z:isset = false) ||\n(dimension = @request.query.dimension &&\n @request.query.x:isset = false &&\n @request.query.y:isset = false &&\n @request.query.z:isset = false) ||\n(dimension = @request.query.dimension &&\n x = @request.query.x &&\n y = @request.query.y &&\n z = @request.query.z)",
    "viewRule": "",
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\"",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zcouzcd90zen3c8");

  return dao.deleteCollection(collection);
})
