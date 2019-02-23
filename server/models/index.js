const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/trip_planner_2',{ 
	logging: false
});

// phone - format
const Place = db.define('place', {
	address: Sequelize.STRING,
	city: Sequelize.STRING,
	state: {
		type: Sequelize.STRING
	},
	phone: {
		type: Sequelize.STRING,

	},
	location: Sequelize.ARRAY(Sequelize.FLOAT)
});

// num_stars - limit 1 - 5 
const Hotel = db.define('hotel', {
	name: Sequelize.STRING,
	num_stars: {
		// type: Sequelize.RANGE(Sequelize.FLOAT),
		type: Sequelize.FLOAT
		
	},
	amenities: Sequelize.STRING
});

const Activity = db.define('activity', {
	name: Sequelize.STRING,
	age_range: {
		type: Sequelize.STRING,
	}
});
// price - limit 1 - 5 
const Restaurant = db.define('restaurant', {
	name: Sequelize.STRING,
	cuisine: Sequelize.STRING,
	price: {
		type: Sequelize.INTEGER,
		
	}
});

// associations
Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
	db,
	Place,
	Hotel,
	Activity,
	Restaurant
}
