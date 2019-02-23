const express = require('express');
const volleyball = require('volleyball');
const path = require('path');
const { Place, Hotel, Activity, Restaurant } = require('./models')

const app = express();

app.use(volleyball);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api', (req, res, next) => {
	return Promise.all([
		Hotel.findAll( { include: [Place] } ),
		Activity.findAll( { include: [Place] } ),
		Restaurant.findAll( { include: [Place] } )
	])
		.then(([hotel, activity, restaurant]) => res.json({ hotel, activity, restaurant}))
});

app.use((req, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next(err);
});

app.use((req, res, next) => {
	res.status(err.status || 500);
	console.error(err);
	res.send(
		'Something went wrong: ' + err.message
	);
	next();
});

const port = process.env.PORT || 3000; 

const init = async () => {

	app.listen(port, console.log(`server is listening on ${port}`));
};

init();