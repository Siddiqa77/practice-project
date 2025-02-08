import { createClient } from '@sanity/client';


// Sanity client configuration
export const sanityClient = createClient({
  projectId: "8tqp59xr",
  dataset: "production", 
  useCdn: false, // Disable CDN
  apiVersion: "2025-01-01", // API version
  token:"skl01njMInSr9HysTXasxvSXGUW3g0D1DqHsuFDiUG2qyMhX2KuW1VORK3eIxxDy8rHsQ9qgmiRxerHGsUaNxIi75qo2uknE4yLwtXtnmLUHapzY2BqvfmKJljHicTXsHIr7OeA18TLhxsI1deg6OdV8vGOcwmwh3FHt0e4cK0Lsl0p59kSk"
});