import Prompt from "@models/prompt"; // Import the Prompt model
import { connectToDB } from "@utils/database"; // Import the database connection utility

export const GET = async (request) => {
  try {
    await connectToDB(); // Connect to the database

    // Fetch all prompts and populate the creator field
    const prompts = await Prompt.find({}).populate("creator");

    // Return the fetched prompts as a JSON response
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching prompts:", error); // Optional: Log the error for debugging
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
