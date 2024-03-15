import { CollectionConfig } from "payload/types";

const ContentMedia: CollectionConfig = {
  slug: "contentmedia",
  access: {
    read: () => true, // Allow read access to all users
  },
    upload: true, // Allow uploading files to this collection
  labels: {
    singular: "ContentMedia",
    plural: "ContentMedias",
  },
  admin: {
    useAsTitle: "tags",
  },
  fields: [
    {
      name: "metafield",
      type: "text",
      required: false, // Make it required if needed
    },
    {
      name: "tags",
      type: "text",
      required: false, // Make it required if needed
    },
  ],
};

export default ContentMedia;
