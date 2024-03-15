import { CollectionConfig } from "payload/types";

const ProductAttributes: CollectionConfig = {
  slug: "productresponse",
  admin: {
    useAsTitle: "Name",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Name, description, images, seo text
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
      name: "product_images",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "seo_text",
      type: "text",
      required: true,
    },
    {
      name: "product_category",
      type: "relationship",
      relationTo: "productcategoryresponse",
      hasMany: true, // Adjust the relationTo value based on your data model
    },
    {
      name: "product_group",
      type: "relationship",
      relationTo: "productgroupresponse",
      hasMany: true, // Adjust the relationTo value based on your data model
    },
  ],
};

export default ProductAttributes;
