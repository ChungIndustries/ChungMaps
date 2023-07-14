migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.listRule = "(@request.query.dimension = \"\") ||\n(dimension = @request.query.dimension && \n @request.query.x = \"\" &&\n @request.query.y = \"\" &&\n @request.query.z = \"\") ||\n(dimension = @request.query.dimension &&\n x = @request.query.x &&\n y = @request.query.y &&\n z = @request.query.z)"
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j74cc0p6xqf0lo4")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
