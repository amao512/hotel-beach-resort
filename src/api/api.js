import Client from '../Contentful';

export const getAPI = async () => {
    try {
        return await Client.getEntries({
            content_type: 'beachResort',
            order: 'fields.price'
        })
    } catch (error) {
        console.log(error)
    }
}