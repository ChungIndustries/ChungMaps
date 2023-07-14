migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.updateRule = "@request.headers.api_key != \"\" && @collection.api_keys.key ?= @request.headers.api_key && @request.headers.api_key = last_scanned_by.api_key"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
