import sanityClient from '@sanity/client'

export const Client = sanityClient(
    {
        projectId:'sbu7ysou',
        dataset:'production',
        apiVersion:'2023-01-21',
        useCdn: true,
    }
) 