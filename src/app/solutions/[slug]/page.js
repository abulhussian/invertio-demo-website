export default async function Page({ params }) {
  const { slug } = await params;

  return <div className="text-2xl font-semibold"> {slug}</div>;
}
