/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
    // This is your redis URL.
    redisURL: process.env.REDIS_URL || 'rediss://:6a1d9b6656ab4c918bf72ac532de37eb@global-accurate-dodo-31869.upstash.io:31869',
    // This is what we use to identify who you are when you are initialising the website for the first time.
    // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
    // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
    // your email being exposed in public.
    userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'zolo@onezol.com',

    // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
    // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
    // If iconType is 'image', icon is a image url. If iconType is 'svg', icon is a svg.
    iconType: "svg",
    icon: "<svg height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='m16.0444 1.02222-4.1777 6.2c-.2889.42222.2666.93334.6666.57778l4.1111-3.57778c.1112-.08889.2667-.02222.2667.13334v11.17774c0 .1556-.2.2223-.2889.1111l-12.44442-14.888844c-.4-.488889-.97778-.755556-1.62222-.755556h-.44445c-1.155554 0-2.11111.955556-2.11111 2.13333v15.73337c0 1.1777.955556 2.1333 2.13333 2.1333.73334 0 1.42223-.3778 1.82223-1.0222l4.17777-6.2c.28889-.4222-.26666-.9334-.66666-.5778l-4.11111 3.5556c-.11112.0888-.26667.0222-.26667-.1334v-11.15553c0-.15556.2-.22223.28889-.11111l12.44442 14.88884c.4.4889 1 .7556 1.6222.7556h.4445c1.1778 0 2.1333-.9556 2.1333-2.1333v-15.73337c-.0222-1.177774-.9778-2.13333-2.1555-2.13333-.7334 0-1.4223.377778-1.8223 1.02222z'></path></svg>",

    // The name of your website. Present alongside your icon.
    title: "Zolo's Store",

    // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
    baseDirectory: '/Store',

    // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
    // Do note that this is limited up to 200 items by the upstream OneDrive API.
    maxItems: 100,

    // [OPTIONAL] We use Google Fonts natively for font customisations.
    // You can check and generate the required links and names at https://fonts.google.com.
    // googleFontSans - the sans serif font used in onedrive-vercel-index.
    googleFontSans: 'Inter',
    // googleFontMono - the monospace font used in onedrive-vercel-index.
    googleFontMono: 'Fira Mono',
    // googleFontLinks -  an array of links for referencing the google font assets.
    googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

    // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
    // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
    footer:
        'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>.',

    // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
    // the directories in which you have .password set. Check the documentation for details.
    protectedRoutes: ['/🔒 Private', '/👻 Zolo'],

    // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
    email: 'mailto:zolo@onezol.com',

    // [OPTIONAL] This is an array of names and links for setting your social information and links.
    // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
    // you provide. See the documentation for details.
    links: [
        {
            name: 'GitHub',
            link: 'https://github.com/realzolo',
        },
        {
            name: 'Telegram',
            link: 'https://t.me/realzolo',
        },
    ],

    // This is a day.js-style datetime format string to format datetimes in the app. Ref to
    // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
    // without timezone and replacing T with space.
    datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
