import { CollectionConfig } from "payload/types";

const ProductCategoryAttributes: CollectionConfig = {
  slug: "productcategoryresponse",
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
      name: "product_category_images",
      type: "upload",
      required: true,
      relationTo: "media",
    }
  ],
};

export default ProductCategoryAttributes;
