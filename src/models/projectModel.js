import mongoose from "mongoose";
import slugify from "slugify";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    desc: { type: String, required: true }, // renamed from 'description' to 'desc'
    techStack: [{ type: String }],
    githubLink: { type: String },
    preview: { type: String }, // renamed from 'liveLink' to 'preview'
    logo: { type: String },    // renamed from 'image' to 'logo'
    videoLink: { type: String },
    files: [{ type: String }]
  },
  { timestamps: true }
);

// Pre-save hook to generate slug from title if not provided
projectSchema.pre("save", async function (next) {
  if (!this.slug && this.title) {
    let generatedSlug = slugify(this.title, { lower: true, strict: true });
    let slugExists = await mongoose.models.Project.findOne({ slug: generatedSlug });

    // Ensure uniqueness
    let suffix = 1;
    while (slugExists) {
      const newSlug = `${generatedSlug}-${suffix}`;
      slugExists = await mongoose.models.Project.findOne({ slug: newSlug });
      if (!slugExists) {
        generatedSlug = newSlug;
        break;
      }
      suffix++;
    }

    this.slug = generatedSlug;
  }
  next();
});

export const Project = mongoose.model("Project", projectSchema);
