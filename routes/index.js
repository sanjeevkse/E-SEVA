import express from 'express';
import userRoute from './userRoute.js';
import roleRoute from './roleRoute.js';
import branchRoute from './branchRoute.js';
import documentRoute from './documentRoute.js';
import vendorRoute from './vendorRoute.js';
import activityRoute from './activityRoute.js';
import districtRoute from './disrictRoute.js';
import divisionRoute from './divisionRoute.js';
import stateRoute from './stateRoute.js';
import talukRoute from './talukRoute.js';
import documentTypeRoute from './documentTypeRoute.js';
import designationRoute from './designationRoute.js';
const router = express.Router();

router.use('/user', userRoute);
router.use('/role', roleRoute);
router.use('/branch', branchRoute);
router.use('/document', documentRoute);
router.use('/vendor', vendorRoute);
router.use('/activity', activityRoute);
router.use('/district', districtRoute);
router.use('/division', divisionRoute);
router.use('/state', stateRoute);
router.use('/taluk', talukRoute);
router.use('/documentType', documentTypeRoute);
router.use('/designation', designationRoute);

export default router;