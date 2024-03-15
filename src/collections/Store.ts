import { CollectionConfig } from "payload/types";

const StoreAttributes: CollectionConfig = {
  slug: "storeresponse",
  admin: {
    useAsTitle: "Name",
  },
  access: {
    read: () => true,
  },
  fields: [
      // Name, Image, store admin, store user
    {
      name: "Name",
      type: "text",
      required: true,
    },
    {
      name: "store_images",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
        name: "store_admin",
        type: "text",
        required: true,
      },
      {
        name: "store_user",
        type: "text",
        required: true,
      },
    {
      name: "product_inventory",
      type: "relationship",
      relationTo: "inventoryresponse",
      hasMany: true,
    },
  ],
};

export default StoreAttributes;
