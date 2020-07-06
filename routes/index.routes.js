const { Router } = require('express');

const router = Router();
const { renderAbout, renderIndex, renderNewNote, renderI, renderDibujos, renderCursos, renderRealidadA, renderFormulario } = require('../controllers/index.controller')

router.get('/', renderIndex);
router.get('/index', renderI);

router.get('/about', renderAbout);
router.get('/dibujos', renderDibujos);
router.get('/cursos', renderCursos);
router.get('/realidadA', renderRealidadA);
router.get('/new-note', renderNewNote);
router.get('/formulario2', renderFormulario);



module.exports = router;