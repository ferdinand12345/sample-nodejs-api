/*
|--------------------------------------------------------------------------
| APP Setup
|--------------------------------------------------------------------------
*/
	// Node Modules
	const BodyParser = require( 'body-parser' );
	const Express = require( 'express' );
	// Primary Variable
	const App = Express();

/*
|--------------------------------------------------------------------------
| APP Init
|--------------------------------------------------------------------------
*/
	// Parse request of content-type - application/x-www-form-urlencoded
	App.use( BodyParser.urlencoded( { extended: false } ) );

	// Parse request of content-type - application/json
	App.use( BodyParser.json() );

	// Server Running Message
	App.listen( 3001, () => {
		console.log( 'Server run on port 3001' );
	} );

/*
|--------------------------------------------------------------------------
| Routing
|--------------------------------------------------------------------------
*/
	// Index
	App.get( '/', ( req, res ) => {
		return res.json( { 
			"message": "Hii, this is the result of funny app."
		} )
	} );