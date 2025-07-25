const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const isAuth = require("../middlewares/auth");
const csrf = require("../middlewares/csrf");
const multer = require("multer");
const path = require("path");
const upload = multer({
    dest: path.join("../public/img")
}); 

router.get("/admin/item/detail/delete/:id", csrf, isAuth, adminController.itemDetailDeleteGet);
router.post("/admin/item/detail/:id", csrf, isAuth, upload.fields([
    { name: "frontImage", maxCount: 1 },
    { name: "Images", maxCount: 25 }
  ]), adminController.itemDetailPost);
router.get("/admin/item/detail/:id", csrf, isAuth, adminController.itemDetailGet);
router.post("/admin/item/create", csrf, upload.fields([
        { name: "frontImage", maxCount: 1 },
        { name: "Images", maxCount: 25 } 
    ]), isAuth, adminController.itemCreatePost);
router.get("/admin/item/create", csrf, isAuth, adminController.itemCreateGet);
router.get("/admin/item", csrf, isAuth, adminController.itemGet);

router.get("/admin/user/:id/delete", csrf, isAuth, adminController.userDetailDeleteGet);
router.post("/admin/user/:id", csrf, isAuth, adminController.userDetailPost);
router.get("/admin/user/:id", csrf, isAuth, adminController.userDetailGet);
router.post("/admin/user", csrf, isAuth, adminController.userPost);
router.get("/admin/user", csrf, isAuth, adminController.userGet);

router.get("/admin/appoinment/:id/delete", csrf, isAuth, adminController.appoinmentDetailDeleteGet);
router.get("/admin/appoinment/:id", csrf, isAuth, adminController.appoinmentDetailGet);
router.get("/admin/appoinment", csrf, isAuth, adminController.appoinmentGet);

router.post("/admin/settings",csrf, upload.fields([
    { name: "favicon", maxCount: 1 }
  ]), isAuth, adminController.settingsPut);
router.get("/admin/settings", csrf, isAuth, adminController.settingsGet);

router.get("/admin/content/carousel", isAuth, adminController.contentCarouselGet);
router.get("/admin/content/about", isAuth, adminController.contentAboutGet);
router.get("/admin/content/appoinment", isAuth, adminController.contentAppoinmentGet);
router.get("/admin/content/contact", isAuth, adminController.contentContactGet);
router.get("/admin/content/newsletter", isAuth, adminController.contentNewsletterGet);

router.post("/admin/content", csrf, isAuth, upload.fields([
    { name: "carouselImage", maxCount: 1 },
    { name: "aboutImage", maxCount: 1 },
    { name: "appoinmentImage", maxCount: 1 }
  ]), adminController.contentPut);
router.get("/admin/content", csrf, isAuth, adminController.contentGet);

router.get("/admin/401", adminController.Get401);
router.get("/admin/404", isAuth, adminController.Get404);
router.get("/admin/500", isAuth, adminController.Get500);
router.get("/admin/login", csrf, adminController.loginGet);
router.post("/admin/login", adminController.loginPost);
router.get("/admin/password", isAuth, adminController.passwordGet);
router.get("/admin/logout",  isAuth, adminController.logout);
router.get("/admin", isAuth, adminController.adminIndexGet);

module.exports = router;