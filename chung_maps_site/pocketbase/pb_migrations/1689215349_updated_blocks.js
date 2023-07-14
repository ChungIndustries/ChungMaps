migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.createRule = "@request.headers.api_key != \"\" && @collection.api_keys.key ?= @request.headers.api_key "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.createRule = null

  return dao.saveCollection(collection)
})
