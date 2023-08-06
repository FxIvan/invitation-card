import LandingPrincipal from "@/components/LandingPrincipal";

export default async function UserAssitence({
  params,
}: {
  params: { slug: string };
}) {
  return <LandingPrincipal id={params.slug} />;
}
