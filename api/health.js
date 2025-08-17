const { app } = require('@azure/functions');

app.http('health', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        return { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: "ok",
                timestamp: new Date().toISOString(),
            })
        };
    }
});
