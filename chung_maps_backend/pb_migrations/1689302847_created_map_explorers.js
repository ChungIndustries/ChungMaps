migrate((db) => {
  const collection = new Collection({
    "id": "wnflwie1drgwajn",
    "created": "2023-07-14 02:47:27.724Z",
    "updated": "2023-07-14 02:47:27.724Z",
    "name": "map_explorers",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dfrjej0r",
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
        "id": "d7hkvl1e",
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
        "id": "ogbbucow",
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
      },
      {
        "system": false,
        "id": "feklfyqc",
        "name": "metadata",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_nDMt9Xq` ON `map_explorers` (\n  `x`,\n  `y`,\n  `z`,\n  `dimension`\n)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": false,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wnflwie1drgwajn");

  return dao.deleteCollection(collection);
})
