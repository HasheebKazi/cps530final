const path = require('path');

exports.getHomePage = (req, res, next) => {
    res.sendFile(path.join(__dirname + '/../public/html' + '/home.html'));
};

exports.getInstall = (req, res, next) => {
    res.sendFile(path.join(__dirname + '/../public/html' + '/install.html'));
};

exports.getPage3 = (req, res, next) => {
    res.render('home.html', {
        pageTitle: 'Home Page',
        path: '/home.html',

        // these are for the future if we need to add error pages
        // hasError: false,
        // errorMessage: null
    });
};

exports.getPage4 = (req, res, next) => {
    res.render('home.html', {
        pageTitle: 'Home Page',
        path: '/home.html',

        // these are for the future if we need to add error pages
        // hasError: false,
        // errorMessage: null
    });
};

exports.getPage5 = (req, res, next) => {
    res.render('home.html', {
        pageTitle: 'Home Page',
        path: '/home.html',

        // these are for the future if we need to add error pages
        // hasError: false,
        // errorMessage: null
    });
};

exports.getPage6 = (req, res, next) => {
    res.render('home.html', {
        pageTitle: 'Home Page',
        path: '/home.html',

        // these are for the future if we need to add error pages
        // hasError: false,
        // errorMessage: null
    });
};

