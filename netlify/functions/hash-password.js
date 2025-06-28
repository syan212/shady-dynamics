const bcrypt = require('bcrypt');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }
    let password;
    try {
        const body = JSON.parse(event.body || '{}');
        password = body.password;
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid JSON' }),
        };
    }

    if (!password) {
        return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing password' }),
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return {
        statusCode: 200,
        body: JSON.stringify({'new': hashedPassword }),
    };
};
