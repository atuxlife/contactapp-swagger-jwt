export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "RV Contacts API",
            version: "1.0.0",
            description: "RV Contacts simple API (Tecnical Test)",
        },
        servers: [
            {
                url: "http://localhost:8000",
            },
        ]
    },
    apis: ["./src/routes/*.js"],
};