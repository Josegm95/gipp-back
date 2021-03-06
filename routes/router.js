const express = require('express');
const UserController = require('../controllers/user-controller');
const ReportController = require('../controllers/report-controller');
const CommentController = require('../controllers/comment-controller');
const InvestigationController = require('../controllers/investigation-controller');

const router = express.Router();

router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getUser);
router.post('/singup', UserController.singup);
router.post('/login', UserController.login);
router.get('/roles', UserController.getRoles);

router.get('/reports', ReportController.getAll);
router.get('/userReports/:userId', ReportController.userReports);
router.post('/addReport', ReportController.addReport);
router.get('/responsibleReports/:userId', ReportController.responsibleReports);
router.get(
  '/investigatorReports/:userId',
  ReportController.investigatorReports
);
router.put('/editReport', ReportController.update);

router.get('/reportComments/:reportid', CommentController.reportComments);
router.post('/addComment', CommentController.addComment);

router.get(
  '/reportInvestigations/:reportid',
  InvestigationController.reportInvestigations
);
router.post(
  '/addInvestigation',
  InvestigationController.addInvestigation
);

router.get('*', (req, res) => {
  res.json({
    message: 'Ruta no encontrada'
  });
});

module.exports = router;
