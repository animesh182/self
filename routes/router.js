const express = require('express')
const router = express.Router()
const {
    getTasks,
    postTask,
    getTask,
    patchTask,
    deleteTask,
} = require('../controllers/controller')

router.route('/').get(getTasks).post(postTask)
router.route('/:id').get(getTask).patch(patchTask).delete(deleteTask)
module.exports = router