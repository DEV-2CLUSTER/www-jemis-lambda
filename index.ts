import * as AWS from "aws-sdk";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from "aws-lambda";
import * as mysql from "mysql";
import * as _ from "lodash";

AWS.config.update({ region: "eu-west-3" });

const host = "dftudbstrevdtgf.cps2q1ntjqzp.eu-west-3.rds.amazonaws.com";
const user = "admin";
const password = "jnP03N1NTgpr";
const database = "jemis";

const connect = mysql.createConnection({
  ssl: { rejectUnauthorized: false },
  host,
  user,
  password,
  database,
});

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("error"),
  };
  connect.query("SELECT 1", function (error, results, fields) {
    if (error) throw error;
    response.body = results;
  });

  return response;
};
