export type PlanType = "FREE" | "MEDIUM" | "PREMIUM";

export const PLANS = {
  FREE: {
    label: "Free",
    credits: 50,
    features: ["LinkedIn", "Social", "General Writer"]
  },
  MEDIUM: {
    label: "Medium",
    credits: 200,
    features: ["LinkedIn", "Social", "General", "Business", "PDF"]
  },
  PREMIUM: {
    label: "Premium",
    credits: 500,
    features: ["All Content", "PDF", "PPT", "Image", "Video", "Automation"]
  }
};
