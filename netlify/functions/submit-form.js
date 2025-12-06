// netlify/functions/submit-form.cjs (Use the .cjs extension!)

// Store your webhook URL securely in Netlify's Environment Variables!
// Note: Netlify typically exposes these directly on process.env in this environment
// eslint-disable-next-line no-undef
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// 2. Use the 'exports.handler' signature (CommonJS)
// eslint-disable-next-line no-undef
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // Context (the second argument) is often ignored in this simple usage.
    // We only need the 'event' object.

    try {
        // Netlify Lambda's 'event.body' is usually a JSON string if the frontend sends Content-Type: application/json
        const data = JSON.parse(event.body);
        const { name, email, message } = data;

        // Check for the webhook URL
        if (!DISCORD_WEBHOOK_URL) {
            console.error("Webhook URL missing!");
            return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error." }) };
        }

        // 1. Construct the Discord Embed Payload
        const payload = {
            embeds: [{
                title: "📧 New Portfolio Inquiry",
                color: 0xFFC0CB, // Pink-Blush
                fields: [
                    { name: "👤 Sender Name", value: name || "N/A", inline: true },
                    { name: "✉️ Email Address", value: email || "N/A", inline: true },
                    { name: "💬 Message", value: message || "No message provided.", inline: false }
                ],
                timestamp: new Date().toISOString()
            }]
        };

        // 2. Send the request to Discord
        const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!discordResponse.ok) {
            // Log the error response from Discord for debugging
            const discordError = await discordResponse.text();
            console.error(`Discord Webhook failed: ${discordResponse.status} - ${discordError}`);
            return { statusCode: 502, body: JSON.stringify({ error: 'Failed to deliver message to Discord.' }) };
        }

        // 3. Success response
        return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Form submitted and Discord notified!' }) };

    } catch (error) {
        console.error("Function execution error:", error.message);
        return { statusCode: 500, body: JSON.stringify({ error: error.message || 'Internal Server Error' }) };
    }
};