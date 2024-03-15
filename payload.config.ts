import path from 'path'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './src/collections/Users'
import StoreAttributes from './src/collections/Store'
import Upload from './src/collections/Media'
import ContentMedia from './src/collections/ContentMedia'
import ProductGroupAttributes from './src/collections/Products/ProductGroup'
import ProductCategoryAttributes from './src/collections/Products/ProductCategory'
import ProductAttributes from './src/collections/Products/Product'
import InventoryAttributes from './src/collections/Products/ProductInventory'

export default buildConfig({
  serverURL:process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  cors:process.env.WHITELIST_ORIGINS?process.env.WHITELIST_ORIGINS.split(','):[],
  csrf:process.env.WHITELIST_ORIGINS?process.env.WHITELIST_ORIGINS.split(','):[],
  collections: [
    Users,
    StoreAttributes,
    Upload,
    ContentMedia,
    ProductGroupAttributes,
    ProductCategoryAttributes,
    ProductAttributes,
    InventoryAttributes
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
