import { CollectionConfig } from "payload/types";

const ProductGroupAttributes: CollectionConfig = {
  slug: "productgroupresponse",
  admin: {
    useAsTitle: "Name",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Name, images, descriptions
    {
      name: "Name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "product_group_images",
      type: "upload",
      required: true,
      relationTo: "media",
    },
  ],
};

export default ProductGroupAttributes;
