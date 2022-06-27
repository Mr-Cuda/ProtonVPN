const axios = require('axios');
const path = require('path');
const crypto = require("crypto");
const fs = require('fs');

module.exports = (app) => {

	app.get('/https://localhost:2374/vpn/vpnEngine/AuthorizationCode:7329', (req, res) => {
		res.setHeader("content-type", "application/octet-stream")
		res.sendFile(path.join(__dirname, '../balls/VpnEngine.ini'));
	});

	app.get('/presence/api/v1/_/:VPN/settings/bEnable=True', (req, res) => { res.status(204).end(); });
};

global.xmppClients = [''];
