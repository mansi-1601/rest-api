exports.handler = async (event, context) => {
  try {
      if (event.httpMethod === "POST") {
          const data = JSON.parse(event.body);
          // Your processing logic here
          return {
              statusCode: 200,
              body: JSON.stringify({
                  is_success: true,
                  user_id: "john_doe_17091999",
                  email: "john@xyz.com",
                  roll_number: "ABCD123",
                  numbers: data.data.filter(item => !isNaN(item)),
                  alphabets: data.data.filter(item => isNaN(item)),
                  highest_alphabet: data.data.filter(item => isNaN(item)).sort().slice(-1)
              }),
          };
      } else if (event.httpMethod === "GET") {
          return {
              statusCode: 200,
              body: JSON.stringify({ operation_code: 1 }),
          };
      } else {
          return {
              statusCode: 405,
              body: JSON.stringify({ error: "Method Not Allowed" }),
          };
      }
  } catch (error) {
      return {
          statusCode: 500,
          body: JSON.stringify({ error: "Internal Server Error" }),
      };
  }
};
