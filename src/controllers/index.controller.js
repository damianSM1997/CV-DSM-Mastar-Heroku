const indexCtrl = {};
// aqui se renderisaran las cosas
// despues se mandan a llamar donde se requiera

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
}

indexCtrl.renderI = (req, res) => {
    res.render('index');
}



indexCtrl.renderAbout = (req, res) => {
    res.render('about');
}


indexCtrl.renderDibujos = (req, res) => {
    res.render('dibujos');
}

indexCtrl.renderCursos = (req, res) => {
    res.render('cursos');
}

indexCtrl.renderRealidadA = (req, res) => {
    res.render('realidadA');
}


indexCtrl.renderNewNote = (req, res) => {
    res.render('new-note');
}

module.exports = indexCtrl;