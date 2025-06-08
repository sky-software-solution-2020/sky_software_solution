import axios from "axios";

export async function GET(req, res) {
    const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
    const api_key = process.env.CLOUDINARY_API_KEY;
    const api_secret = process.env.CLOUDINARY_API_SECRET;

    const folder = "event_photos";

    const url = `https://api.cloudinary.com/v1_1/${cloud_name}/resources/search`; const auth = {
        username: api_key,
        password: api_secret,
    };

    try {
        const response = await axios.get(url, {
            auth,
            params: {
                type: "upload",
                prefix: folder,
                max_results: 100,
            },
        });

        const images = response.data.resources.filter(img => folder === (img.asset_folder)).map(img => {

            return img.secure_url

        })

        return Response.json(images);
    } catch (error) {
        console.error("Cloudinary API error:", error.response?.data || error.message);
        return new Response(
            JSON.stringify({ error: "Failed to fetch images." }),
            { status: 500 }
        );
    }
}
