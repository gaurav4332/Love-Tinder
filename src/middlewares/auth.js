const adminAuth = (req, res, next) => {
    console.log("Admin auth is Getting checked !!!")
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorised  Request")
    }
    else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("userAuth auth is Getting checked !!!")
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorised  Request")
    }
    else {
        next();
    }
}
module.exports = { adminAuth, userAuth }