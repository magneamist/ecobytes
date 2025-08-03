# EcoByte - Modern Blog Platform

A modern, responsive The project follows a clean and organized structure:

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable React components
│   ├── slices/          # Prismic slice components
│   └── prismicio.ts     # Prismic configuration
├── customtypes/         # Prismic custom type definitions
└── public/             # Static assets
```

### Key Components

- **Hero**: Full-width hero sections with image and text overlay
- **ImageGallery**: Responsive grid layout for showcasing multiple images
- **RichText**: Customizable rich text content with styled elements
- **Video**: YouTube video embedding support
- **NextArticle**: Navigation component for content discovery

## Content Managementrm built with Next.js 15 and Prismic CMS, featuring dynamic content management and a rich set of components for engaging content presentation.

## Features

- **Modern Stack**: Built with Next.js 15 and TypeScript for robust performance and type safety
- **Content Management**: Powered by Prismic CMS for flexible content creation and management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Components**:
  - Hero sections with image and text
  - Image Gallery with grid layouts
  - Rich Text content with custom styling
  - Video embeds support
  - Next Article navigation
- **Performance Optimized**: Utilizes Next.js Image optimization and dynamic imports
- **Developer Experience**: Full TypeScript support and ESLint configuration

![Project Screenshot](https://user-images.githubusercontent.com/31219208/228821412-fdde92b2-c13c-4287-b799-611fa96a5fd6.png)

&nbsp;

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn package manager
- A Prismic CMS account

### Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/ecobyte.git
cd ecobyte
```

2. Install dependencies:

```sh
npm install
```

3. Set up your Prismic CMS:
   - Create a new repository at [Prismic Dashboard](https://prismic.io/dashboard)
   - Configure your content models based on the existing slices
   - Set up your environment variables

4. Start the development server:

```sh
npm run dev
```

## Project Structure

To edit the content of this project, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and start editing.

### Create a page

To create a page, click on the green pencil icon, then select **Page**.

Pages are made of Slices. You can add and rearrange Slices to your pages.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

### Managing Articles

To create and manage articles in EcoByte:

1. **Create a New Article**:
   - In your Prismic dashboard, click the green pencil icon
   - Select "Article" from the document types
   - Fill in the article fields:
     - Title
     - Publication date
     - Featured image
     - Article content using the available Slices
   - Save and publish your article

2. **Article Organization**:
   - Articles are automatically listed in the article-list page
   - Featured articles can be highlighted in the Hero section
   - Use the NextArticle slice to create article recommendations

### Preview documents

Content management is handled through Prismic CMS:

1. **Creating Content**:
   - Log in to your Prismic dashboard
   - Create new pages using available templates
   - Use the slice zone to build your page layout
   - Preview changes before publishing

2. **Available Slice Types**:
   - Hero sections for impactful page introductions
   - Image galleries for visual content
   - Rich text blocks for detailed content
   - Video embeds for multimedia content
   - Next article suggestions for content discovery

3. **Preview Mode**:
   - Built-in preview support for content drafts
   - Real-time preview of changes
   - Seamless integration with Next.js

## Development

### Development Commands

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Format code
npm run format

# Start Slice Machine UI
npm run slicemachine
```

### Technology Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS 4
- **CMS**: Prismic
- **Language**: TypeScript 5
- **Linting**: ESLint 9
- **Development Tools**:
  - Slice Machine for visual slice development
  - Prismic MCP for AI-assisted development
  - Concurrently for running multiple scripts

## Deployment

The project can be deployed to various platforms that support Next.js applications:

1. **Vercel** (Recommended):

   ```sh
   vercel
   ```

2. **Manual Deployment**:
   ```sh
   npm run build
   npm run start
   ```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## Documentation

For more detailed documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prismic Documentation](https://prismic.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contact

Project Link: [https://github.com/yourusername/ecobyte](https://github.com/yourusername/ecobyte)

For the official Prismic documentation, see [Prismic's guide for Next.js][prismic-docs] or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

## License

```
Copyright 2013-2022 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[live-demo]: https://nextjs-starter-prismic-minimal.vercel.app/
