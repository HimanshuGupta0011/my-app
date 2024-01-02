import TempComp from "@/app/components/TempComp";

export default function Page({ params }: { params: { id: string } }) {
  return(
    <TempComp content={`${params.id}'s profile page` } />
  )
}
