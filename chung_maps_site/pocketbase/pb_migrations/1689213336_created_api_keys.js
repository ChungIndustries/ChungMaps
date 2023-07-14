migrate((db) => {
  const collection = new Collection({
    "id": "itv1c7wy9lk4amx",
    "created": "2023-07-13 01:55:36.711Z",
    "updated": "2023-07-13 01:55:36.711Z",
    "name": "api_keys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ryyr4xk",
        "name": "key",
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
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("itv1c7wy9lk4amx");

  return dao.deleteCollection(collection);
})
