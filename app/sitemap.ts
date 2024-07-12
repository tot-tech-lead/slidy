import { MetadataRoute } from 'next';
import Tour from "@/app/lib/models/tour";
import dbConnect from "@/app/lib/mongodb";
import { BASE_URL } from "@/app/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    await dbConnect();

    let tours = await Tour.find({});
    let urls: MetadataRoute.Sitemap = [];

    if (Array.isArray(tours)) {
        urls = tours.map(item => {
            return {
                url: `${BASE_URL}/view/${item._id}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.5,
            };
        });
    }

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/tours/all/all`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/authorization/login`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/authorization/registration`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        ...urls
    ];
}
