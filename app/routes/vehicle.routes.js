module.exports = app => {
    const mahasiswa = require("../controller/vehicle.controller")
    const r = require("express").Router();

    r.get("/", mahasiswa.findAll);
    r.get("/:id", mahasiswa.show);
    r.post("/", mahasiswa.create);
    r.put("/:id", mahasiswa.update);
    r.delete("/:id", mahasiswa.delete);

    app.use("/vehicle", r)
}