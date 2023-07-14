migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.listRule = "dimension = @request.query.dimension && \nx = @request.query.x &&\ny = @request.query.y &&\nz = @request.query.z"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.listRule = null

  return dao.saveCollection(collection)
})
