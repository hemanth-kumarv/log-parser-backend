# Log Parser Backend

Backend Server in NodeJS (Typescript) to Parse Log Files input as Plain Text or Log files. Takes Multipart-FormData input (Log file) and returns a parsed list of logs in a specific format.

## Features

- Parse Logs from file
- Regex for parsing with specific format
- API versioning and standard folder structure

## Demo

Here is a working live demo : https://github.com/hemanth-kumarv/log-parser-backend

### Request log file to upload

```sh
2021-08-09T02:12:51.264Z - warn - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service finished with error","code":404, "err":"Cannot find user orders list"}
2021-08-09T02:12:51.265Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"Service is successfully finished"}
```

[Download log file](assets/logs.log)

### Expected Response

```sh
{
	"statusCode": 200,
	"message": "Successfully parsed log files",
	"data": [
		{
			"timestamp": 1628475171264,
			"loglevel": "warn",
			"transactionId": "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
			"err": "Cannot find user orders list"
		},
		{
			"timestamp": 1628475171265,
			"loglevel": "info",
			"transactionId": "9abc55b2-807b-4361-9dbe-aa88b1b2e821"
		}
	]
}
```

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.
Once the dependencies are installed, you need to run `npm run build` to create a dist folder to start the server. You might want to look into `index.ts` to change the port.

## Usage

Once the dependencies are installed and dist is created, you need to run `npm run start` to start the server.
You will then be able to access it at `localhost:3000`

## APIs

- `POST /api/v1/log/parse` - parse log file to required format

[Download Insomnia JSON](assets/Beanstalkedu.json)

## To-do

- API input validation
- Better error handling
- Unit testing
- More functionalities/features
