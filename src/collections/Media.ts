import { CollectionConfig } from 'payload/types'

const Upload: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload:true,
  labels:{
    singular:'media',
    plural:'medias'
  },
 fields:[],
 
}
export default Upload