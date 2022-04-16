import * as AWS from "aws-sdk";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from "aws-lambda";
const mysql = require("mysql");
import * as _ from "lodash";

AWS.config.update({ region: "eu-west-3" });

const host = "dftudbstrevdtgf.cps2q1ntjqzp.eu-west-3.rds.amazonaws.com";
const user = "admin";
const password = "jnP03N1NTgpr";
const database = "jemis";

const con = mysql.createConnection({
  ssl: { rejectUnauthorized: false },
  host,
  user,
  password,
  database,
});

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  let response = {
    statusCode: 200,
    body: JSON.stringify("error"),
  };
  con.connect((err) => {
    if (err) {
      console.log("Error connecting to Db");
      return;
    }
    con.query("SELECT * FROM vals", (err, rows) => {
      if (err) throw err;

      console.log("Data received from Db:");
      console.log(rows);
    });
  });

  return response;
};
