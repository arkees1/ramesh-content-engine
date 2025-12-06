export type Plan = "FREE" | "MEDIUM" | "PREMIUM";

export const FEATURES = [
  // FREE
  { id: "linkedin", title: "LinkedIn Content Generator", minPlan: "FREE" as Plan },
  { id: "social", title: "Facebook / Instagram Post Generator", minPlan: "FREE" as Plan },
  { id: "writer", title: "General AI Writer", minPlan: "FREE" as Plan },

  // MEDIUM
  { id: "business", title: "Business / Restaurant Content Tool", minPlan: "MEDIUM" as Plan },
  { id: "pdf", title: "PDF Creator", minPlan: "MEDIUM" as Plan },

  // PREMIUM
  { id: "ppt", title: "PowerPoint Generator", minPlan: "PREMIUM" as Plan },
  { id: "image", title: "Image Generator", minPlan: "PREMIUM" as Plan },
  { id: "video", title: "Video Generator", minPlan: "PREMIUM" as Plan },
  { id: "automation", title: "Automation Builder", minPlan: "PREMIUM" as Plan },
  { id: "dashboard", title: "Dashboard Builder", minPlan: "PREMIUM" as Plan },
  { id: "app", title: "Automatic App Builder", minPlan: "PREMIUM" as Plan },
];
