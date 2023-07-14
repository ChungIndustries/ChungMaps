migrate((db) => {
  const collection = new Collection({
    "id": "53mlbufmamizz0s",
    "created": "2023-07-13 23:37:17.279Z",
    "updated": "2023-07-13 23:37:17.279Z",
    "name": "map_explorerss",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6pqpdnkd",
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
        "id": "zfmdnlql",
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
        "id": "ieyh85ue",
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
        "id": "f4rw5zmo",
        "name": "dimension",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("53mlbufmamizz0s");

  return dao.deleteCollection(collection);
})
