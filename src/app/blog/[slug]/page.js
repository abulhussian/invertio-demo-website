export async function generateStaticParams() {
      return [{ slug: 'placeholder' }];
}

export default async function BlogSlugPage({ params }) {
      const { slug } = await params;
      return <div>Slug: {slug}</div>;
}