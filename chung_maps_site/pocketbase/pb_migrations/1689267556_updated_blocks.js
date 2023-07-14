migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.listRule = "dimension = @request.data.dimension && \nx = @request.data.x &&\ny = @request.data.y &&\nz = @request.data.z"
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
