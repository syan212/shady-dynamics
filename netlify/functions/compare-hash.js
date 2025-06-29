const bcrypt = require('bcryptjs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const storedHash = '$2b$10$zDsb9ZaO4PScY3xLJnfzMeiWGCAZkT0rYpi4eikj1ceqI7yqKqixu';
    const { password } = JSON.parse(event.body || '{}');

    const match = await bcrypt.compare(password, storedHash);

    return {
      statusCode: 200,
      body: JSON.stringify({ match }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
