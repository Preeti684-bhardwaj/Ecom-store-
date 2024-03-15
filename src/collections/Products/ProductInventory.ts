import { CollectionConfig } from "payload/types";

const InventoryAttributes: CollectionConfig = {
  slug: "inventoryresponse",
  admin: {
    useAsTitle: "Total_quantity",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Total quantity, Price, Discounted price
    {
      name: "Total_quantity",
      type: "number",
      required: true,
    },
    {
      name: "Price",
      type: "number",
      required: true,
    },
    {
      name: "Discounted_price",
      type: "number",
      required: true,
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "productresponse"
    },
  ],
};

export default InventoryAttributes;
